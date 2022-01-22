import { parseKarol, TypedKarolParser } from "../../parser/KarolParserFacade";
import { assertCondition, assertDefined } from "../../util/AssertCondition";
import { ParserRuleContext } from "antlr4";
import { Color, Direction, FieldType, WorldModel } from "../../models/WorldModel";
import { execute } from "../KarolInterpreterGenerator";
import { beforeEach } from "vitest";

function executeProgram(program: string, world: WorldModel): void {
  const tree: ParserRuleContext | undefined = parseKarol(program);
  assertDefined(tree, "There were syntax errors parsing the program '" + program + "'");
  const ruleStatement = tree.getChild(0);
  assertCondition(
    ruleStatement.ruleIndex === TypedKarolParser.RULE_statement,
    "Internal Error: parse did not return a program"
  );
  execute(ruleStatement, world);
}

function executeCondition(condition: string, world: WorldModel): boolean | undefined {
  const tree: ParserRuleContext | undefined = parseKarol(condition, "conditionexpression");
  assertDefined(tree, "There were syntax errors parsing the condition '" + condition + "'");
  assertCondition(
    tree.ruleIndex === TypedKarolParser.RULE_conditionexpression,
    "Internal Error: parse did not return a condition"
  );
  return execute(tree, world);
}

describe("The KarelInterpreter changes the World by programming", () => {
  let world: WorldModel;
  beforeEach(() => {
    world = new WorldModel();
    world.turnKarolLeft();
  });
  describe("it understands instructions", () => {
    it("'Schritt' moves Karol in the current direction", () => {
      executeProgram("Schritt", world);
      expect(world.getKarol().position).toEqual({ x: 1, y: 0, z: 0 });
    });

    it("'LinksDrehen' turns Karols to the left", () => {
      executeProgram("LinksDrehen", world);
      expect(world.getKarol().position).toEqual({ x: 0, y: 0, z: 0 });
      expect(world.getKarol().direction).toEqual(Direction.North);
    });

    it("'RechtsDrehen' turns Karol to the right", () => {
      executeProgram("RechtsDrehen", world);
      expect(world.getKarol().position).toEqual({ x: 0, y: 0, z: 0 });
      expect(world.getKarol().direction).toEqual(Direction.South);
    });
    it("'Hinlegen' puts a brick in front of Karol", () => {
      executeProgram("Hinlegen", world);
      // Karol's position is unchanged
      expect(world.getKarol().position).toEqual({ x: 0, y: 0, z: 0 });
      // but a brick is in front of him
      const nextPosition = world.getKarol().nextPosition;
      expect(world.getFieldByCoord(nextPosition)).toEqual(FieldType.brick);
    });
    it("'Aufheben' picks up a brick in front of Karol", () => {
      world.setField(1, 0, 0, FieldType.brick);
      executeProgram("Aufheben", world);
      // Karol's position is unchanged
      expect(world.getKarol().position).toEqual({ x: 0, y: 0, z: 0 });
      // and the brick has vanished
      expect(world.getField(1, 0, 0)).toEqual(FieldType.empty);
    });
  });

  describe("it understands conditions", () => {
    it("'IstWand' is true if the next field is a wall", () => {
      expect(executeCondition("IstWand", world)).toBeFalsy();
      // should face a wall now
      world.turnKarolLeft();
      expect(executeCondition("IstWand", world)).toBeTruthy();
    });
    it("'NichtIstWand' is false if the next field is a wall", () => {
      expect(executeCondition("NichtIstWand", world)).toBeTruthy();
      // should face a wall now
      world.turnKarolLeft();
      expect(executeCondition("NichtIstWand", world)).toBeFalsy();
    });
    it("'IstZiegel' is true if the next field is a brick", () => {
      expect(executeCondition("IstZiegel", world)).toBeFalsy();
      // should face a wall now
      world.setFieldByCoord(world.getKarol().nextPosition, FieldType.brick);
      expect(executeCondition("IstZiegel", world)).toBeTruthy();
    });
    it("'NichtIstZiegel' is false if the next field is a brick", () => {
      expect(executeCondition("NichtIstZiegel", world)).toBeTruthy();
      // should face a wall now
      world.setFieldByCoord(world.getKarol().nextPosition, FieldType.brick);
      expect(executeCondition("NichtIstZiegel", world)).toBeFalsy();
    });
    it("'IstMarke' is true if the current field has a marker", () => {
      expect(executeCondition("IstMarke", world)).toBeFalsy();
      // should face a wall now
      world.setMarker(world.getKarol().position, Color.yellow);
      expect(executeCondition("IstMarke", world)).toBeTruthy();
    });
    it("'NichtIstMarke' is true if the current field has no marker", () => {
      expect(executeCondition("NichtIstMarke", world)).toBeTruthy();
      // should face a wall now
      world.setMarker(world.getKarol().position, Color.yellow);
      expect(executeCondition("NichtIstMarke", world)).toBeFalsy();
    });
    it("'IstSüden' is true if Karol is facing south", () => {
      expect(executeCondition("IstSüden", world)).toBeFalsy();
      world.turnKarolRight();
      expect(executeCondition("IstSüden", world)).toBeTruthy();
    });
    it("'IstNorden' is true if Karol is facing north", () => {
      expect(executeCondition("IstNorden", world)).toBeFalsy();
      world.turnKarolLeft();
      expect(executeCondition("IstNorden", world)).toBeTruthy();
    });
    it("'IstOsten' is true if Karol is facing east", () => {
      expect(executeCondition("IstOsten", world)).toBeTruthy();
      world.turnKarolLeft();
      expect(executeCondition("IstOsten", world)).toBeFalsy();
    });
    it("'IstWesten' is true if Karol is facing east", () => {
      expect(executeCondition("IstWesten", world)).toBeFalsy();
      world.turnKarolLeft();
      world.turnKarolLeft();
      expect(executeCondition("IstWesten", world)).toBeTruthy();
    });
    it("'nicht IstOsten' is false if Karol is facing east", () => {
      expect(executeCondition("nicht IstOsten", world)).toBeFalsy();
      world.turnKarolLeft();
      expect(executeCondition("nicht IstOsten", world)).toBeTruthy();
    });
  });

  describe("it understands loops", () => {
    it("'wiederhole 2 mal Schritt endewiederhole' moves Karol 2 times in the current direction", () => {
      executeProgram("wiederhole 2 mal Schritt endewiederhole", world);
      expect(world.getKarol().position).toEqual({ x: 2, y: 0, z: 0 });
    });
    it("'wiederhole solange nicht IstWand Schritt endewiederhole' moves Karol to the end of the field", () => {
      executeProgram("wiederhole solange nicht IstWand Schritt endewiederhole", world);
      expect(world.getKarol().position).toEqual({ x: 9, y: 0, z: 0 });
    });
    it("'wiederhole Schritt endewiederhole bis IstWand' moves Karol to the end of the field", () => {
      executeProgram("wiederhole Schritt endewiederhole bis IstWand", world);
      expect(world.getKarol().position).toEqual({ x: 9, y: 0, z: 0 });
    });
    it("'wiederhole Schritt endewiederhole solange nicht IstWand' moves Karol to the end of the field", () => {
      executeProgram("wiederhole Schritt endewiederhole solange nicht IstWand", world);
      expect(world.getKarol().position).toEqual({ x: 9, y: 0, z: 0 });
    });
    it("'wenn nicht IstWand dann Schritt sonst RechtsDrehen endewenn' moves Karol if free", () => {
      const program = "wenn nicht IstWand dann Schritt sonst RechtsDrehen endewenn";
      executeProgram(program, world);
      expect(world.getKarol().position).toEqual({ x: 1, y: 0, z: 0 });
      expect(world.getKarol().direction).toEqual(Direction.East);
    });
    it("'wenn nicht IstWand dann Schritt sonst RechtsDrehen endewenn' turns right if not free", () => {
      const program = "wenn nicht IstWand dann Schritt sonst RechtsDrehen endewenn";
      world.turnKarolLeft();
      executeProgram(program, world);
      expect(world.getKarol().position).toEqual({ x: 0, y: 0, z: 0 });
      expect(world.getKarol().direction).toEqual(Direction.East);
    });
  });
});
