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
    ruleStatement.ruleIndex === TypedKarolParser.RULE_statement ||
      ruleStatement.ruleIndex === TypedKarolParser.RULE_definition,
    "Internal Error: parse did not return a program"
  );
  execute(ruleStatement.ruleIndex === TypedKarolParser.RULE_statement ? ruleStatement : tree, karol);
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

    it("'Hinlegen(grün)' sets a green brick", () => {
      executeProgram("Hinlegen(grün)", karol);
      expect(world.getFieldByCoord(karol.nextPosition)).toEqual(FieldType.brick_green);
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
    it("'Warten(2000)' waits for 2 sec", () => {
      const t = Date.now();
      executeProgram("Warten(2000)", karol);
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
      world.setFieldByCoord(karol.nextPosition, FieldType.brick_first);
      expect(executeCondition("IstZiegel", karol)).toBeTruthy();
    });
    it("'NichtIstZiegel' is false if the next field is a brick", () => {
      expect(executeCondition("NichtIstZiegel", karol)).toBeTruthy();
      world.setFieldByCoord(karol.nextPosition, FieldType.brick_first);
      expect(executeCondition("NichtIstZiegel", karol)).toBeFalsy();
    });
    it("'IstMarke' is true if the current field has a marker", () => {
      expect(executeCondition("IstMarke", karol)).toBeFalsy();
      karol.setMarker(Color.yellow);
      expect(executeCondition("IstMarke", karol)).toBeTruthy();
    });
    it("'NichtIstMarke' is true if the current field has no marker", () => {
      expect(executeCondition("NichtIstMarke", karol)).toBeTruthy();
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
    it("'wahr' is always true", () => {
      expect(executeCondition("wahr", karol)).toBeTruthy();
    });
    it("'falsch' is always false", () => {
      expect(executeCondition("falsch", karol)).toBeFalsy();
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

    it("'IstMarke(grün)' is true if the current field has a green marker", () => {
      expect(executeCondition("IstMarke(grün)", karol)).toBeFalsy();
      karol.setMarker(Color.green);
      expect(executeCondition("IstMarke(grün)", karol)).toBeTruthy();
    });
    it("'NichtIstMarke(grün)' is true if the current field has no marker", () => {
      expect(executeCondition("NichtIstMarke(grün)", karol)).toBeTruthy();
    });
    it("'NichtIstMarke(grün)' is true if the current field has a yellow marker", () => {
      expect(executeCondition("NichtIstMarke(grün)", karol)).toBeTruthy();
      karol.setMarker(Color.yellow);
      expect(executeCondition("NichtIstMarke(grün)", karol)).toBeTruthy();
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

  describe("it can have limited capacity for carrying stuff", () => {
    beforeEach(() => {
      karol.maxBrickCount = 3;
      karol.initialBrickCount = 1;
      karol.reset();
    });
    it("'IstVoll' is true if Karol cannot pickup any more bricks", () => {
      expect(executeCondition("IstVoll", karol)).toBeFalsy();
      karol.brickCount = 3;
      expect(executeCondition("IstVoll", karol)).toBeTruthy();
    });
    it("'NichtIstVoll' is false if Karol cannot pickup any more bricks", () => {
      expect(executeCondition("NichtIstVoll", karol)).toBeTruthy();
      karol.brickCount = 3;
      expect(executeCondition("NichtIstVoll", karol)).toBeFalsy();
    });
    it("'IstLeer' is true if Karol has no bricks", () => {
      expect(executeCondition("IstLeer", karol)).toBeFalsy();
      karol.brickCount = 0;
      expect(executeCondition("IstLeer", karol)).toBeTruthy();
    });
    it("'NichtIstLeer' is false if Karol has no bricks", () => {
      expect(executeCondition("NichtIstLeer", karol)).toBeTruthy();
      karol.brickCount = 0;
      expect(executeCondition("NichtIstLeer", karol)).toBeFalsy();
    });
    it("'HatZiegel' is true if Karol has at least one brick", () => {
      expect(executeCondition("HatZiegel", karol)).toBeTruthy();
      karol.brickCount = 2;
      expect(executeCondition("HatZiegel", karol)).toBeTruthy();
      karol.brickCount = 0;
      expect(executeCondition("HatZiegel", karol)).toBeFalsy();
    });
    it("'HatZiegel(1)' is true if Karol has exactly one brick", () => {
      expect(executeCondition("HatZiegel(1)", karol)).toBeTruthy();
      karol.brickCount = 2;
      expect(executeCondition("HatZiegel(1)", karol)).toBeFalsy();
      karol.brickCount = 0;
      expect(executeCondition("HatZiegel(1)", karol)).toBeFalsy();
    });
  });

  describe("It can define custom procedures and conditions", () => {
    it("can define a custom procedure and call it 2 times", () => {
      const program = "Anweisung Gehe2Schritte Schritt Schritt endeAnweisung Gehe2Schritte Gehe2Schritte";
      executeProgram(program, karol);
      expect(karol.position).toEqual({ x: 4, y: 0, z: 0 });
      expect(karol.direction).toEqual(Direction.East);
    });
    it("can define a custom condition and call it and skip then part of condition if custom is false", () => {
      const program = "Bedingung Ist2Ziegel IstZiegel(2) endeBedingung wenn Ist2Ziegel dann RechtsDrehen endewenn";
      executeProgram(program, karol);
      expect(karol.direction).toEqual(Direction.East);
    });
    it("can define a custom condition and call it and execute then part of condition if custom is true", () => {
      const program = "Bedingung Ist2Ziegel IstZiegel(2) endeBedingung wenn Ist2Ziegel dann RechtsDrehen endewenn";
      karol.layBrick(2);
      executeProgram(program, karol);
      expect(karol.direction).toEqual(Direction.South);
    });
  });
});

// Bedingung bla wenn IstZiegel dann Schritt endewenn endeBedingung
// Anweisung blub Schritt Schritt endeAnweisung
// blub
// blub
// wenn bla dann Schritt endeWenn
