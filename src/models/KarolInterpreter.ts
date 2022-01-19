import {WorldModel} from "./WorldModel";
import {ParserRuleContext} from "antlr4";
import KarolVisitor from "../parser/generated/Karol/KarolVisitor";

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
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by karelParser#loop.
    visitLoop(ctx: ParserRuleContext) {
        return this.visitChildren(ctx);
    }

    visitInstruction(ctx: ParserRuleContext) {
        console.log("Context", ctx);
        switch (ctx.getText().toLowerCase()){
            case "schritt":
                this.world.moveKarol();
                break;
            case "linksdrehen":
                this.world.turnKarolLeft();
                break;
            case "rechtsdrehen":
                this.world.turnKarolLeft();
                break;
            default:
                throw Error("Instruction " + ctx.getText() + " not implemented");
        }
    }
}
