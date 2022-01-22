import { ParseTreeVisitor } from "antlr4/tree/Tree";
import { ParserRuleContext } from "antlr4";
export default class karelVisitor extends ParseTreeVisitor {
  constructor() {
    super();
  }

  // Visit a parse tree produced by KarolParser#karol.
  visitKarol(ctx: ParserRuleContext) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by KarolParser#definition.
  visitDefinition(ctx: ParserRuleContext) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by KarolParser#methoddefinition.
  visitMethoddefinition(ctx: ParserRuleContext) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by KarolParser#conditiondefinition.
  visitConditiondefinition(ctx: ParserRuleContext) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by KarolParser#statement.
  visitStatement(ctx: ParserRuleContext) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by KarolParser#iteration.
  visitIteration(ctx: ParserRuleContext) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by KarolParser#loop.
  visitLoop(ctx: ParserRuleContext) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by KarolParser#conditional.
  visitConditional(ctx: ParserRuleContext) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by KarolParser#instruction.
  visitInstruction(ctx: ParserRuleContext) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by KarolParser#conditionexpression.
  visitConditionexpression(ctx: ParserRuleContext) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by KarolParser#condition.
  visitCondition(ctx: ParserRuleContext) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by KarolParser#color.
  visitColor(ctx: ParserRuleContext) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by KarolParser#number.
  visitNumber(ctx: ParserRuleContext) {
    return this.visitChildren(ctx);
  }
}
