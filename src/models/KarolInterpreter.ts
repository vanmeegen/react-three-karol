import {WorldModel} from "./WorldModel";
import {ParserRuleContext} from "antlr4";
import KarolVisitor from "../parser/generated/Karol/KarolVisitor";
import {assertCondition} from "../util/AssertCondition";

/**
 * executes the given program on the world model
 * @param tree
 * @param model
 */
export function execute(tree: ParserRuleContext, model: WorldModel): void {
    new KarolInterpreter(model).visit(tree);
}


class KarolInterpreter extends KarolVisitor {
    constructor(private world: WorldModel) {
        super();
    }

    // Visit a parse tree produced by karelParser#iteration.
    visitIteration(ctx: ParserRuleContext) {
        let result = undefined;
        const iterations = ctx.getChild(1).getText();
        const value = Number.parseInt(iterations);
        assertCondition(!isNaN(value), "Keine Zahl: " + value);
        for (let i = 0; i < value; i++) {
            result = this.visitChildren(ctx);
        }
        return result;
    }


    // Visit a parse tree produced by karelParser#loop.
    visitLoop(ctx: ParserRuleContext) {
        return this.visitChildren(ctx);
    }

    visitCondition(ctx: ParserRuleContext): boolean {
        return super.visitCondition(ctx);
    }

    visitInstruction(ctx: ParserRuleContext) {
        switch (ctx.getText().toLowerCase()) {
            case "schritt":
                this.world.moveKarol();
                break;
            case "linksdrehen":
                this.world.turnKarolLeft();
                break;
            case "rechtsdrehen":
                this.world.turnKarolRight();
                break;
            case "hinlegen":
                this.world.layBrick();
                break;
            case "aufheben":
                this.world.pickupBrick();
                break;
            default:
                throw Error("Instruction " + ctx.getText() + " not implemented");
        }
    }
}
