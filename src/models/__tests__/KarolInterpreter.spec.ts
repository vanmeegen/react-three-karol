import {parseKarol, TypedKarolParser} from "../../parser/KarolParserFacade";
import {assertCondition, assertDefined} from "../../util/AssertCondition";
import {ParserRuleContext} from "antlr4";
import {Direction, FieldType, WorldModel} from "../WorldModel";
import {execute} from "../KarolInterpreter";
import {beforeEach} from "vitest";

function executeProgram(program: string, world: WorldModel): void {
    const tree: ParserRuleContext | undefined = parseKarol(program);
    assertDefined(tree, "There were syntax errors parsing the program '" + program + "'");
    const ruleStatement = tree.getChild(0);
    assertCondition(ruleStatement.ruleIndex === TypedKarolParser.RULE_statement, "Internal Error: parse did not return a program");
    execute(ruleStatement, world);
}

describe("The KarelInterpreter changes the World by programming", () => {
    let world: WorldModel;
    beforeEach(() => {
        world = new WorldModel();
    });
    describe("it understands instructions", () => {
        it("'Schritt' moves Karol in the current direction", () => {
            executeProgram("Schritt", world);
            expect(world.getKarol().position).toEqual({x: 1, y: 0, z: 0});
        });

        it("'LinksDrehen' turns Karols to the left", () => {
            executeProgram("LinksDrehen", world);
            expect(world.getKarol().position).toEqual({x: 0, y: 0, z: 0});
            expect(world.getKarol().direction).toEqual(Direction.North);
        });

        it("'RechtsDrehen' turns Karol to the right", () => {
            executeProgram("RechtsDrehen", world);
            expect(world.getKarol().position).toEqual({x: 0, y: 0, z: 0});
            expect(world.getKarol().direction).toEqual(Direction.South);
        });
        it("'Hinlegen' puts a brick in front of Karol", () => {
            executeProgram("Hinlegen", world);
            // Karol's position is unchanged
            expect(world.getKarol().position).toEqual({x: 0, y: 0, z: 0});
            // but a brick is in front of him
            const nextPosition = world.getKarol().nextPosition;
            expect(world.getFieldByCoord(nextPosition)).toEqual(FieldType.brick);
        });
        it("'Aufheben' picks up a brick in front of Karol", () => {
            world.setField(1, 0, 0, FieldType.brick);
            executeProgram("Aufheben", world);
            // Karol's position is unchanged
            expect(world.getKarol().position).toEqual({x: 0, y: 0, z: 0});
            // and the brick has vanished
            expect(world.getField(1, 0, 0)).toEqual(FieldType.empty);
        });
    });

    describe("it understands loops", () => {
        it("'wiederhole 2 mal Schritt endewiederhole' moves Karol 2 times in the current direction", () => {
            executeProgram("wiederhole 2 mal Schritt endewiederhole", world);
            expect(world.getKarol().position).toEqual({x: 2, y: 0, z: 0});
        });
    });

})
