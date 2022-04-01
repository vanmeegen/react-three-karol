import antlr4, { Lexer, Parser, ParserRuleContext, Recognizer, Token } from "antlr4";
// @ts-ignore  no typings for generated lexer, parser
import KarolLexer from "./generated/Karol/KarolLexer";
// @ts-ignore
import KarolParser from "./generated/Karol/KarolParser";

// vM20220118 need workaround for non es compatible typescript typing of ErrorListener class
declare class ErrorListener {
  syntaxError(recognizer: Recognizer, offendingSymbol: Token, line: number, column: number, msg: string, e: any): void;

  reportAmbiguity(
    recognizer: Recognizer,
    dfa: any,
    startIndex: number,
    stopIndex: number,
    exact: any,
    ambigAlts: any,
    configs: any
  ): void;

  reportAttemptingFullContext(
    recognizer: Recognizer,
    dfa: any,
    startIndex: number,
    stopIndex: number,
    conflictingAlts: any,
    configs: any
  ): void;

  reportContextSensitivity(
    recognizer: Recognizer,
    dfa: any,
    startIndex: number,
    stopIndex: number,
    conflictingAlts: any,
    configs: any
  ): void;
}

const TypedErrorListener: ErrorListener = (antlr4 as any).error.ErrorListener;
const Trees = (antlr4 as any).tree.Trees;

// noinspection JSUnusedLocalSymbols
/**
 * Custom Error Listener
 *
 * @returns {object}
 */

// @ts-ignore
class MyErrorListener extends TypedErrorListener {
  private _errors: string[] = [];
  private _errorCount: number = 0;

  /**
   * Checks syntax error
   *
   * @param {object} recognizer The parsing support code essentially. Most of it is error recovery stuff
   * @param {object} symbol Offending symbol
   * @param {int} line Line of offending symbol
   * @param {int} column Position in line of offending symbol
   * @param {string} message Error message
   * @param {string} payload Stack trace
   */
  syntaxError(recognizer: Recognizer, symbol: Token, line: number, column: number, message: string, payload: any) {
    this._errorCount = this._errorCount + 1;
    this._errors.push("Error " + message + "in line " + line + ":" + column);
  }

  // noinspection JSUnusedLocalSymbols
  reportAmbiguity(
    recognizer: Recognizer,
    dfa: any,
    startIndex: number,
    stopIndex: number,
    exact: any,
    ambigAlts: any,
    configs: any
  ): void {
    this._errorCount = this._errorCount + 1;
  }

  // noinspection JSUnusedLocalSymbols
  reportAttemptingFullContext(
    recognizer: Recognizer,
    dfa: any,
    startIndex: number,
    stopIndex: number,
    conflictingAlts: any,
    configs: any
  ): void {
    this._errorCount = this._errorCount + 1;
  }

  // noinspection JSUnusedLocalSymbols
  reportContextSensitivity(
    recognizer: Recognizer,
    dfa: any,
    startIndex: number,
    stopIndex: number,
    conflictingAlts: any,
    configs: any
  ): void {
    this._errorCount = this._errorCount + 1;
  }

  get errorCount(): number {
    return this._errorCount;
  }

  get errors(): string[] {
    return this._errors;
  }
}

export function parseKarol(
  input: string,
  startRule: "karol" | "conditionexpression" | "instruction" = "karol"
): ParserRuleContext | string {
  const chars = new antlr4.InputStream(input.toLowerCase());
  const lexer = new KarolLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser: IKarolParser = new KarolParser(tokens);
  const myErrorListener = new MyErrorListener();
  parser.addErrorListener(myErrorListener);
  const tree = (parser as any)[startRule]();
  // console.log("Parse Tree: " + printParseTree(parser, tree));
  return myErrorListener.errorCount === 0 && tree !== null ? tree : myErrorListener.errors.join("\n");
}

// usage:
// tree.accept(new Visitor());

// noinspection JSUnusedLocalSymbols
class Visitor {
  visitChildren(ctx: any) {
    if (!ctx) {
      return;
    }

    if (ctx.children) {
      return ctx.children.map((child: any) => {
        if (child.children && child.children.length != 0) {
          return child.accept(this);
        } else {
          return child.getText();
        }
      });
    }
  }
}

// reexport weakly typed version of parser
export type IKarolParser = Parser & {
  karol: () => ParserRuleContext;
  ruleNames: string[];
  RULE_karol: number;
  RULE_definition: number;
  RULE_methoddefinition: number;
  RULE_conditiondefinition: number;
  RULE_statement: number;
  RULE_customMethodCall: number;
  RULE_iteration: number;
  RULE_loop: number;
  RULE_conditional: number;
  RULE_instruction: number;
  RULE_parameterizedinstruction: number;
  RULE_conditionexpression: number;
  RULE_customConditionCall: number;
  RULE_condition: number;
  RULE_parameterizedcondition: number;
  RULE_color: number;
  RULE_number: number;
};

export type IKarolLexer = Lexer & {
  IDENTIFIER: number;
  LETTER: number;
  DIGIT: number;
  WS: number;
};

export const TypedKarolLexer: IKarolLexer = KarolLexer;

export const TypedKarolParser: IKarolParser = KarolParser;

export function printParseTree(parser: IKarolParser, root: any): string {
  return recursive(root, 0, parser.ruleNames);
}

function recursive(aRoot: any, offset: number, ruleNames: string[]) {
  let buf = "";
  for (let i = 0; i < offset; i++) {
    buf = buf + "  ";
  }
  buf = buf + Trees.getNodeText(aRoot, ruleNames) + "\n";
  if (aRoot instanceof ParserRuleContext) {
    const prc: ParserRuleContext = aRoot;
    for (let c = 0; c < prc.getChildCount(); c++) {
      buf += recursive(prc.getChild(c), offset + 1, ruleNames);
    }
  }
  return buf;
}
