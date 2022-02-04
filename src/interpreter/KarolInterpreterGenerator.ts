import { ParserRuleContext } from "antlr4";
import { assertCondition } from "../util/AssertCondition";
import { TypedKarolParser } from "../parser/KarolParserFacade";
import { Direction, KarolModel } from "../models/KarolModel";
import { Color, FieldType } from "../models/CommonTypes";

export interface SourceLineRange {
  startLine: number;
  startCol: number;
  endLine: number;
  endCol: number;
}

export type StepResult = {
  result: boolean | undefined;
  source: SourceLineRange | undefined;
};

/**
 * determine source line and col range from child token indices
 * @param ctx
 * @param from
 * @param to
 */
function getSourceRange(ctx: ParserRuleContext, from: number, to: number): SourceLineRange {
  const startSymbol = ctx.getChild(from).symbol;
  const endSymbol = ctx.getChild(to).symbol;
  const length = ctx.getChild(to).getText().length;
  return {
    startLine: startSymbol.line,
    startCol: startSymbol.column,
    endLine: endSymbol.line,
    endCol: endSymbol.column + length,
  };
}

function waitSync(milliseconds: number) {
  var start = new Date().getTime();
  var end = 0;
  while (end - start < milliseconds) {
    end = new Date().getTime();
  }
}

/**
 * executes the given program on the world model
 * @param tree
 * @param model
 */
export function execute(tree: ParserRuleContext, model: KarolModel): boolean | undefined {
  const generator = executeSteps(tree, model);
  let result: IteratorResult<StepResult> = { done: false, value: { source: undefined, result: undefined } };
  do {
    result = generator.next();
    // console.log("Result: ", result);
    const source = result.value?.source;
    if (source) {
      console.log("STEP: " + tree.getText().substring(source.start, source.end));
    }
  } while (!result.done);
  return result.value;
}

export async function beep() {
  var snd = new Audio(
    "data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU="
  );
  return snd.play();
}

/**
 * parses a parameter token which might be a number or a color and returns either, the other will be undefined
 * @param paramToken
 */
function getNumberOrColor(paramToken: ParserRuleContext): {
  numberParam: number | undefined;
  colorParam: Color | undefined;
} {
  let numberParam: number | undefined = undefined;
  let colorParam: Color | undefined = undefined;
  if (paramToken.ruleIndex === TypedKarolParser.RULE_number) {
    numberParam = Number.parseInt(paramToken.getText());
  } else {
    // @ts-ignore parser must ensure that all valid colors are matched by string enum members, so we can cast here
    const match: Color = Object.entries(Color).find(([, value]) => value === paramToken.getText());
    if (match) {
      colorParam = match[1] as Color;
    }
  }
  return { numberParam, colorParam };
}

export function* executeSteps(tree: ParserRuleContext, karol: KarolModel): Generator<StepResult, boolean> {
  return yield* visit(tree);

  function* visit(ctx: ParserRuleContext | ParserRuleContext[]): Generator<StepResult, any> {
    if (Array.isArray(ctx)) {
      for (let i = 0; i < ctx.length; i++) {
        yield* visit(ctx[i]);
      }
    } else {
      // console.log("Visiting node: " + ctx.getText() + ", ruleIndex: " + ctx.ruleIndex);
      switch (ctx.ruleIndex) {
        case TypedKarolParser.RULE_iteration:
          yield* visitIteration(ctx);
          break;
        case TypedKarolParser.RULE_loop:
          yield* visitLoop(ctx);
          break;
        case TypedKarolParser.RULE_instruction:
          yield* visitInstruction(ctx);
          break;
        case TypedKarolParser.RULE_conditional:
          yield* visitConditional(ctx);
          break;
        case TypedKarolParser.RULE_conditionexpression:
          return visitConditionexpression(ctx);
        case TypedKarolParser.RULE_parameterizedinstruction:
          yield* visitParameterizedInstruction(ctx);
          break;
        case TypedKarolParser.RULE_parameterizedcondition:
          return visitParameterizedCondition(ctx);
        default:
          return yield* visitChildren(ctx);
      }
    }
  }

  function* visitChildren(ctx: ParserRuleContext, startIndex: number = 0, endIndex?: number) {
    if ((ctx as any).children) {
      const children = (ctx as any).children as ParserRuleContext[];
      for (let i = startIndex; i < (endIndex ?? children.length); i++) {
        yield* visit(children[i]);
      }
    } else {
      return null;
    }
  }

  // Visit a parse tree produced by karelParser#iteration.
  function* visitIteration(ctx: ParserRuleContext) {
    let result = undefined;
    const iterations = ctx.getChild(1).getText();
    const value = Number.parseInt(iterations);
    assertCondition(!isNaN(value), "Keine Zahl: " + value);
    for (let i = 0; i < value; i++) {
      yield { source: getSourceRange(ctx, 0, ctx.getChildCount() - 1), isFinished: false, result: undefined };
      result = yield* visitChildren(ctx);
    }
    return result;
  }

  // Visit a parse tree produced by karelParser#loop.
  function* visitLoop(ctx: ParserRuleContext) {
    // check which kind of loop
    let solangeIndex = undefined;
    let bisIndex = undefined;
    for (let i = 0; i < ctx.getChildCount(); i++) {
      const text = ctx.getChild(i).getText();
      if (text === "solange") {
        solangeIndex = i;
      } else if (text === "bis") {
        bisIndex = i;
      }
    }
    if (solangeIndex === 1) {
      // wiederhole solange conditionExpression statement*
      while (visitConditionexpression(ctx.getChild(2))) {
        yield* visitChildren(ctx);
      }
    } else if (solangeIndex !== undefined && solangeIndex > 1) {
      // wiederhole statement* endewiederhole solange condition
      do {
        yield* visitChildren(ctx);
      } while (visitConditionexpression(ctx.getChild(solangeIndex + 1)));
    } else if (bisIndex !== undefined) {
      // wiederhole statement* endewiederhole bis condition
      do {
        yield* visitChildren(ctx);
      } while (!visitConditionexpression(ctx.getChild(bisIndex + 1)));
    } else {
      throw Error("Interner Fehler: Dieses Schleifenkonstrukt sollte vom Parser nicht erlaubt sein");
    }
  }

  function* visitConditional(ctx: ParserRuleContext) {
    // wenn cond dann statement* (sonst statement*) endewenn
    let sonstIndex;
    for (let i = 0; i < ctx.getChildCount(); i++) {
      const text = ctx.getChild(i).getText();
      if (text === "sonst") {
        sonstIndex = i;
      }
    }
    const condition = visitConditionexpression(ctx.getChild(1));
    if (condition) {
      // console.log("executing then statements");
      // condition true: evaluate all statements before sonstIndex or all if no sonst
      for (let i = 3; i < (sonstIndex ?? ctx.getChildCount() - 1); i++) {
        yield* visit(ctx.getChild(i));
      }
    } else {
      // console.log("executing else statements");
      if (sonstIndex !== undefined) {
        // condition false: evaluate all statements before sonstIndex or all if no sonst
        for (let i = sonstIndex + 1; i < ctx.getChildCount() - 1; i++) {
          yield* visit(ctx.getChild(i));
        }
      }
    }
  }

  function visitConditionexpression(ctx: ParserRuleContext): boolean {
    if (ctx.getChild(0).getText().toLowerCase() === "nicht") {
      assertCondition(ctx.getChildCount() === 2, "Internal Error: Negated condition expression has not length 2");
      return !visitConditionexpression(ctx.getChild(1));
    } else {
      for (let i = 0; i < ctx.getChildCount(); i++) {
        const child = ctx.getChild(i);
        if (child.ruleIndex === TypedKarolParser.RULE_condition) {
          return visitCondition(child);
        } else if (child.ruleIndex === TypedKarolParser.RULE_parameterizedcondition) {
          return visitParameterizedCondition(child);
        }
      }
      throw Error("Internal Error: conditionexpression without condition or parameterized condition");
    }
  }

  function visitCondition(ctx: ParserRuleContext): boolean {
    const direction = karol.direction;
    const nextFieldType = karol.getNextFieldType();
    switch (ctx.getText().toLowerCase()) {
      case "istwand":
        return nextFieldType === FieldType.wall;
      case "nichtistwand":
        return nextFieldType !== FieldType.wall;
      case "istziegel":
        return nextFieldType === FieldType.brick;
      case "nichtistziegel":
        return nextFieldType !== FieldType.brick;
      case "istmarke":
        return karol.getMarker() !== undefined;
      case "nichtistmarke":
        return karol.getMarker() === undefined;
      case "istsüden":
        return direction === Direction.South;
      case "istnorden":
        return direction === Direction.North;
      case "istwesten":
        return direction === Direction.West;
      case "istosten":
        return direction === Direction.East;
      case "istvoll":
      case "nichtistvoll":
      case "istleer":
      case "nichtistleer":
      case "hatziegel":
      default:
        throw new Error(ctx.getText() + " nicht implementiert");
    }
  }

  function* visitInstruction(ctx: ParserRuleContext) {
    switch (ctx.getText().toLowerCase()) {
      case "schritt":
        karol.move();
        break;
      case "linksdrehen":
        karol.turnLeft();
        break;
      case "rechtsdrehen":
        karol.turnRight();
        break;
      case "hinlegen":
        karol.layBrick();
        break;
      case "aufheben":
        karol.pickupBrick();
        break;
      case "markesetzen":
        karol.setMarker(Color.yellow);
        break;
      case "markelöschen":
        karol.deleteMarker();
        break;
      case "ton":
        // attention: will not wait until beep finished, so new beeps will be ignored
        beep();
        break;
      case "warten":
        waitSync(1000);
        break;
      default:
        throw Error("Instruction " + ctx.getText() + " not implemented");
    }
    yield { isFinished: false, source: getSourceRange(ctx, 0, 0), result: undefined };
  }

  function visitParameterizedCondition(ctx: ParserRuleContext): boolean {
    const instruction = ctx.getChild(0);
    let { numberParam, colorParam } = getNumberOrColor(ctx.getChild(2));
    if (colorParam) {
      // TODO implement colors
      throw new Error("Farben sind noch nicht implementiert!");
    }
    switch (instruction.getText().toLowerCase()) {
      case "istziegel":
        return karol.getBrickHeight() === numberParam;
      case "nichtistziegel":
        return karol.getBrickHeight() !== numberParam;
      case "istmarke":
        throw new Error("Farben sind noch nicht implementiert!");
      case "nichtistmarke":
        throw new Error("Farben sind noch nicht implementiert!");
      case "hatziegel":
      default:
        throw new Error(ctx.getText() + " noch nicht implementiert");
    }
  }

  function* visitParameterizedInstruction(ctx: ParserRuleContext) {
    const instruction = ctx.getChild(0);
    let { numberParam, colorParam } = getNumberOrColor(ctx.getChild(2));
    switch (instruction.getText().toLowerCase()) {
      case "schritt":
        karol.move(numberParam);
        break;
      case "hinlegen":
        karol.layBrick(numberParam ?? 1, colorParam);
        break;
      case "aufheben":
        karol.pickupBrick(numberParam);
        break;
      case "markesetzen":
        karol.setMarker(colorParam ?? Color.yellow);
        break;
      case "warten":
        waitSync(1000 * (numberParam ?? 1));
        break;
      default:
        throw Error("Instruction " + ctx.getText() + " not implemented");
    }
    yield { isFinished: false, source: getSourceRange(ctx, 0, 0), result: undefined };
  }
}
