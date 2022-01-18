import antlr4, {Parser, Recognizer, Token} from "antlr4";
// @ts-ignore  no typings for generated lexer, parser
import KarolLexer from "./generated/karel/karelLexer";
// @ts-ignore
import KarolParser from "./generated/karel/karelParser";
import {ParseTree} from "antlr4/tree/Tree";

// vM20220118 need workaround for non es compatible typescript typing of ErrorListener class
declare class ErrorListener {
    syntaxError(recognizer: Recognizer, offendingSymbol: Token, line: number, column: number, msg: string, e: any): void;
    reportAmbiguity(recognizer: Recognizer, dfa: any, startIndex: number, stopIndex: number, exact: any, ambigAlts: any, configs: any): void;
    reportAttemptingFullContext(recognizer: Recognizer, dfa: any, startIndex: number, stopIndex: number, conflictingAlts: any, configs: any): void;
    reportContextSensitivity(recognizer: Recognizer, dfa: any, startIndex: number, stopIndex: number, conflictingAlts: any, configs: any): void;
}
const TypedErrorListener: ErrorListener = (antlr4 as any).error.ErrorListener;
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
    reportAmbiguity(recognizer: Recognizer, dfa: any, startIndex: number, stopIndex: number, exact: any, ambigAlts: any, configs: any): void {
        this._errorCount = this._errorCount + 1;

    };
    // noinspection JSUnusedLocalSymbols
    reportAttemptingFullContext(recognizer: Recognizer, dfa: any, startIndex: number, stopIndex: number, conflictingAlts: any, configs: any): void{
        this._errorCount = this._errorCount + 1;

    };
    // noinspection JSUnusedLocalSymbols
    reportContextSensitivity(recognizer: Recognizer, dfa: any, startIndex: number, stopIndex: number, conflictingAlts: any, configs: any): void{
        this._errorCount = this._errorCount + 1;
    };

    get errorCount(): number {
        return this._errorCount;
    }

    get errors(): string[] {
        return this._errors;
    }
}

export function parseKarol(input: string): ParseTree | undefined {
    const chars = new antlr4.InputStream(input);
    const lexer = new KarolLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser: Parser & { karel: () => ParseTree; _syntaxErrors: number } = new KarolParser(tokens);
    const myErrorListener = new MyErrorListener();
    parser.addErrorListener(myErrorListener);
    const tree = parser.karel();
    return myErrorListener.errorCount === 0 ? tree : undefined;
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

