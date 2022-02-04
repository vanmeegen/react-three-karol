import { parseKarol, TypedKarolParser } from "../../parser/KarolParserFacade";
import { assertCondition, assertDefined } from "../../util/AssertCondition";
import { ParserRuleContext } from "antlr4";
import { WorldModel } from "../../models/WorldModel";
import { execute } from "../KarolInterpreterGenerator";
import { beforeEach } from "vitest";
import { Direction, KarolModel } from "../../models/KarolModel";
import { Color, Coord2d, FieldType } from "../../models/CommonTypes";

function executeProgram(program: string, karol: KarolModel): void {
  const tree: ParserRuleContext | undefined = parseKarol(program);
  assertDefined(tree, "There were syntax errors parsing the program '" + program + "'");
  const ruleStatement = tree.getChild(0);
  assertCondition(
    ruleStatement.ruleIndex === TypedKarolParser.RULE_statement,
    "Internal Error: parse did not return a program"
  );
  execute(ruleStatement, karol);
}

function executeCondition(condition: string, karol: KarolModel): boolean | undefined {
  const tree: ParserRuleContext | undefined = parseKarol(condition, "conditionexpression");
  assertDefined(tree, "There were syntax errors parsing the condition '" + condition + "'");
  assertCondition(
    tree.ruleIndex === TypedKarolParser.RULE_conditionexpression,
    "Internal Error: parse did not return a condition"
  );
  return execute(tree, karol);
}

describe("The KarelInterpreter changes the World by programming", () => {
  let world: WorldModel;
  let karol: KarolModel;
  beforeEach(() => {
    world = new WorldModel();
    karol = new KarolModel(world);
    karol.turnLeft();
  });
  describe("it understands instructions", () => {
    it("'Schritt' moves Karol in the current direction", () => {
      executeProgram("Schritt", karol);
      expect(karol.position).toEqual({ x: 1, y: 0, z: 0 });
    });

    it("'LinksDrehen' turns Karols to the left", () => {
      executeProgram("LinksDrehen", karol);
      expect(karol.position).toEqual({ x: 0, y: 0, z: 0 });
      expect(karol.direction).toEqual(Direction.North);
    });

    it("'RechtsDrehen' turns Karol to the right", () => {
      executeProgram("RechtsDrehen", karol);
      expect(karol.position).toEqual({ x: 0, y: 0, z: 0 });
      expect(karol.direction).toEqual(Direction.South);
    });
    it("'Hinlegen' puts a brick in front of Karol", () => {
      executeProgram("Hinlegen", karol);
      // Karol's position is unchanged
      expect(karol.position).toEqual({ x: 0, y: 0, z: 0 });
      // but a brick is in front of him
      const nextPosition = karol.nextPosition;
      expect(world.getFieldByCoord(nextPosition)).toEqual(FieldType.brick_first);
    });
    it("'Aufheben' picks up a brick in front of Karol", () => {
      world.setField(1, 0, 0, FieldType.brick_first);
      executeProgram("Aufheben", karol);
      // Karol's position is unchanged
      expect(karol.position).toEqual({ x: 0, y: 0, z: 0 });
      // and the brick has vanished
      expect(world.getField(1, 0, 0)).toEqual(FieldType.empty);
    });
  });

  describe("it understands parameterized instructions", () => {
    it("'Schritt(3)' moves Karol 3 steps in the current direction", () => {
      executeProgram("Schritt(3)", karol);
      expect(karol.position).toEqual({ x: 3, y: 0, z: 0 });
    });

    it("'Hinlegen(2)' puts two bricks in front of Karol", () => {
      executeProgram("Hinlegen(2)", karol);
      // Karol's position is unchanged
      expect(karol.position).toEqual({ x: 0, y: 0, z: 0 });
      // but a brick is in front of him
      const nextPosition = karol.nextPosition;
      expect(world.getFieldByCoord(nextPosition)).toEqual(FieldType.brick_first);
      expect(world.getFieldByCoord({ ...nextPosition, y: 1 })).toEqual(FieldType.brick_first);
    });

    it("'Aufheben(2)' picks up two bricks in front of Karol", () => {
      world.setField(1, 0, 0, FieldType.brick_first);
      world.setField(1, 1, 0, FieldType.brick_first);
      executeProgram("Aufheben(2)", karol);
      // Karol's position is unchanged
      expect(karol.position).toEqual({ x: 0, y: 0, z: 0 });
      // and the brick has vanished
      expect(world.getField(1, 0, 0)).toEqual(FieldType.empty);
      expect(world.getField(1, 1, 0)).toEqual(FieldType.empty);
    });
    it("'Warten(2)' waits for 2 sec", () => {
      const t = Date.now();
      executeProgram("Warten(2)", karol);
      // should have waited at least 2000 ms
      expect(Date.now() - t).toBeGreaterThanOrEqual(2000);
    });
    it("'MarkeSetzen(rot)' sets a red marker", () => {
      executeProgram("MarkeSetzen(rot)", karol);
      expect(world.getMarker(new Coord2d(0, 0))).toEqual(Color.red);
    });
    it("'MarkeSetzen' sets a yellow marker", () => {
      executeProgram("MarkeSetzen", karol);
      expect(world.getMarker(new Coord2d(0, 0))).toEqual(Color.yellow);
    });
  });

  describe("it understands conditions", () => {
    it("'IstWand' is true if the next field is a wall", () => {
      expect(executeCondition("IstWand", karol)).toBeFalsy();
      // should face a wall now
      karol.turnLeft();
      expect(executeCondition("IstWand", karol)).toBeTruthy();
    });
    it("'NichtIstWand' is false if the next field is a wall", () => {
      expect(executeCondition("NichtIstWand", karol)).toBeTruthy();
      // should face a wall now
      karol.turnLeft();
      expect(executeCondition("NichtIstWand", karol)).toBeFalsy();
    });
    it("'IstZiegel' is true if the next field is a brick", () => {
      expect(executeCondition("IstZiegel", karol)).toBeFalsy();
      // should face a wall now
      world.setFieldByCoord(karol.nextPosition, FieldType.brick_first);
      expect(executeCondition("IstZiegel", karol)).toBeTruthy();
    });
    it("'NichtIstZiegel' is false if the next field is a brick", () => {
      expect(executeCondition("NichtIstZiegel", karol)).toBeTruthy();
      // should face a wall now
      world.setFieldByCoord(karol.nextPosition, FieldType.brick_first);
      expect(executeCondition("NichtIstZiegel", karol)).toBeFalsy();
    });
    it("'IstMarke' is true if the current field has a marker", () => {
      expect(executeCondition("IstMarke", karol)).toBeFalsy();
      // should face a wall now
      karol.setMarker(Color.yellow);
      expect(executeCondition("IstMarke", karol)).toBeTruthy();
    });
    it("'NichtIstMarke' is true if the current field has no marker", () => {
      expect(executeCondition("NichtIstMarke", karol)).toBeTruthy();
      // should face a wall now
      karol.setMarker(Color.yellow);
      expect(executeCondition("NichtIstMarke", karol)).toBeFalsy();
    });
    it("'IstSüden' is true if Karol is facing south", () => {
      expect(executeCondition("IstSüden", karol)).toBeFalsy();
      karol.turnRight();
      expect(executeCondition("IstSüden", karol)).toBeTruthy();
    });
    it("'IstNorden' is true if Karol is facing north", () => {
      expect(executeCondition("IstNorden", karol)).toBeFalsy();
      karol.turnLeft();
      expect(executeCondition("IstNorden", karol)).toBeTruthy();
    });
    it("'IstOsten' is true if Karol is facing east", () => {
      expect(executeCondition("IstOsten", karol)).toBeTruthy();
      karol.turnLeft();
      expect(executeCondition("IstOsten", karol)).toBeFalsy();
    });
    it("'IstWesten' is true if Karol is facing east", () => {
      expect(executeCondition("IstWesten", karol)).toBeFalsy();
      karol.turnLeft();
      karol.turnLeft();
      expect(executeCondition("IstWesten", karol)).toBeTruthy();
    });
    it("'nicht IstOsten' is false if Karol is facing east", () => {
      expect(executeCondition("nicht IstOsten", karol)).toBeFalsy();
      karol.turnLeft();
      expect(executeCondition("nicht IstOsten", karol)).toBeTruthy();
    });
  });

  describe("it understands parameterized conditions", () => {
    it("'IstZiegel(2)' is true if the next field has exactly 2 bricks", () => {
      expect(executeCondition("IstZiegel(2)", karol)).toBeFalsy();
      world.setFieldByCoord({ x: 1, y: 0, z: 0 }, FieldType.brick_first);
      world.setFieldByCoord({ x: 1, y: 1, z: 0 }, FieldType.brick_first);
      expect(executeCondition("IstZiegel(2)", karol)).toBeTruthy();
    });
    it("'NichtIstZiegel(2)' is true  if the next field has no bricks", () => {
      expect(executeCondition("NichtIstZiegel(2)", karol)).toBeTruthy();
    });
    it("'NichtIstZiegel(2)' is true  if the next field has 1 brick", () => {
      expect(executeCondition("NichtIstZiegel(2)", karol)).toBeTruthy();
    });
    it("'NichtIstZiegel(2)' is false  if the next field has 2 brick", () => {
      world.setFieldByCoord({ x: 0, y: 0, z: 1 }, FieldType.brick_first);
      world.setFieldByCoord({ x: 0, y: 1, z: 1 }, FieldType.brick_first);
      expect(executeCondition("NichtIstZiegel(2)", karol)).toBeTruthy();
    });
  });

  describe("it understands loops", () => {
    it("'wiederhole 2 mal Schritt endewiederhole' moves Karol 2 times in the current direction", () => {
      executeProgram("wiederhole 2 mal Schritt endewiederhole", karol);
      expect(karol.position).toEqual({ x: 2, y: 0, z: 0 });
    });
    it("'wiederhole solange nicht IstWand Schritt endewiederhole' moves Karol to the end of the field", () => {
      executeProgram("wiederhole solange nicht IstWand Schritt endewiederhole", karol);
      expect(karol.position).toEqual({ x: 9, y: 0, z: 0 });
    });
    it("'wiederhole Schritt endewiederhole bis IstWand' moves Karol to the end of the field", () => {
      executeProgram("wiederhole Schritt endewiederhole bis IstWand", karol);
      expect(karol.position).toEqual({ x: 9, y: 0, z: 0 });
    });
    it("'wiederhole Schritt endewiederhole solange nicht IstWand' moves Karol to the end of the field", () => {
      executeProgram("wiederhole Schritt endewiederhole solange nicht IstWand", karol);
      expect(karol.position).toEqual({ x: 9, y: 0, z: 0 });
    });
    it("'wenn nicht IstWand dann Schritt sonst RechtsDrehen endewenn' moves Karol if free", () => {
      const program = "wenn nicht IstWand dann Schritt sonst RechtsDrehen endewenn";
      executeProgram(program, karol);
      expect(karol.position).toEqual({ x: 1, y: 0, z: 0 });
      expect(karol.direction).toEqual(Direction.East);
    });
    it("'wenn nicht IstWand dann Schritt sonst RechtsDrehen endewenn' turns right if not free", () => {
      const program = "wenn nicht IstWand dann Schritt sonst RechtsDrehen endewenn";
      karol.turnLeft();
      executeProgram(program, karol);
      expect(karol.position).toEqual({ x: 0, y: 0, z: 0 });
      expect(karol.direction).toEqual(Direction.East);
    });
  });
});
