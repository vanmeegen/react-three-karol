import {
  ATNSimulator,
  BaseErrorListener,
  CharStream,
  CommonTokenStream,
  ParserRuleContext,
  RecognitionException,
  Recognizer,
  Token,
} from "antlr4ng";
import { KarolLexer } from "./generated/KarolLexer";
import { KarolParser } from "./generated/KarolParser";

/**
 * collects syntax errors with their source position instead of printing them to the console
 */
class MyErrorListener extends BaseErrorListener {
  private _errors: string[] = [];

  override syntaxError<S extends Token, T extends ATNSimulator>(
    recognizer: Recognizer<T>,
    offendingSymbol: S | null,
    line: number,
    column: number,
    msg: string,
    e: RecognitionException | null
  ): void {
    this._errors.push("Error " + msg + "in line " + line + ":" + column);
  }

  get errorCount(): number {
    return this._errors.length;
  }

  get errors(): string[] {
    return this._errors;
  }
}

export function parseKarol(
  input: string,
  startRule: "karol" | "conditionexpression" | "instruction" = "karol"
): ParserRuleContext | string {
  const chars = CharStream.fromString(input.toLowerCase());
  const lexer = new KarolLexer(chars);
  const tokens = new CommonTokenStream(lexer);
  const parser = new KarolParser(tokens);
  const myErrorListener = new MyErrorListener();
  lexer.removeErrorListeners();
  lexer.addErrorListener(myErrorListener);
  parser.removeErrorListeners();
  parser.addErrorListener(myErrorListener);
  const tree = parser[startRule]();
  return myErrorListener.errorCount === 0 && tree !== null ? tree : myErrorListener.errors.join("\n");
}

// reexport the generated parser under the name established in the interpreter
export { KarolParser as TypedKarolParser };
