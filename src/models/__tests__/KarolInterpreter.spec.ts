import {TypedKarolParser, parseKarol} from "../../parser/KarolParserFacade";
import {assertCondition, assertDefined} from "../../util/AssertCondition";
import {ParserRuleContext} from "antlr4";
import {Direction, WorldModel} from "../WorldModel";
import {execute} from "../KarolInterpreter";
import {beforeEach} from "vitest";

function parseStatement(statement: string): ParserRuleContext {
    const tree: ParserRuleContext | undefined = parseKarol(statement);
    assertDefined(tree, "There were syntax errors parsing the statement '" + statement + "'");
    const ruleStatement = tree.getChild(0);
    assertCondition(ruleStatement.ruleIndex === TypedKarolParser.RULE_statement, "Internal Error: parseStatement did not return a statement");
    return ruleStatement;
}

describe("The KarelInterpreter changes the World by programming", () => {
    let world: WorldModel;
    beforeEach(() => {
        world = new WorldModel();
    });

    it("a move statement moves Carol in the current direction", () => {
        const tree = parseStatement("Schritt");
        execute(tree, world);
        expect(world.getKarol().position).toEqual({x:1,y:0,z:0});
    });

    it("a turn left statement turns Carols direction", () => {
        const tree = parseStatement("LinksDrehen");
        execute(tree, world);
        expect(world.getKarol().position).toEqual({x:0,y:0,z:0});
        expect(world.getKarol().direction).toEqual(Direction.North);
    });

})
