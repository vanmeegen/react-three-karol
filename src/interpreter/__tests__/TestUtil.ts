import { KarolModel } from "../../models/KarolModel";
import { ParserRuleContext } from "antlr4";
import { parseKarol, TypedKarolParser } from "../../parser/KarolParserFacade";
import { assertCondition } from "../../util/AssertCondition";
import { execute } from "../KarolInterpreterGenerator";

export function executeProgram(program: string, karol: KarolModel): void {
  const treeOrError: ParserRuleContext | string = parseKarol(program);
  assertCondition(
    !(typeof treeOrError === "string"),
    "There were syntax errors parsing the program '" + program + "': " + (treeOrError as string)
  );
  const tree: ParserRuleContext = treeOrError as ParserRuleContext;
  const ruleStatement = tree.getChild(0);
  assertCondition(
    ruleStatement.ruleIndex === TypedKarolParser.RULE_statement ||
    ruleStatement.ruleIndex === TypedKarolParser.RULE_definition,
    "Internal Error: parse did not return a program"
  );
  execute(ruleStatement.ruleIndex === TypedKarolParser.RULE_statement ? ruleStatement : tree, karol);
}

export function executeCondition(condition: string, karol: KarolModel): boolean | undefined {
  const treeOrError: ParserRuleContext | string = parseKarol(condition, "conditionexpression");
  assertCondition(
    !(typeof treeOrError === "string"),
    "There were syntax errors parsing the condition '" + condition + "': " + (treeOrError as string)
  );
  const tree: ParserRuleContext = treeOrError as ParserRuleContext;
  assertCondition(
    tree.ruleIndex === TypedKarolParser.RULE_conditionexpression,
    "Internal Error: parse did not return a condition"
  );
  return execute(tree, karol);
}
