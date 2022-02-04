import { ParserRuleContext } from "antlr4";
import KarolVisitor from "../parser/generated/Karol/KarolVisitor";
import { assertCondition } from "../util/AssertCondition";
import { Direction, KarolModel } from "../models/KarolModel";
import { Color, FieldType } from "../models/CommonTypes";

/**
 * executes the given program on the world model
 * @param tree
 * @param model
 */
export function execute(tree: ParserRuleContext, model: KarolModel): boolean {
  return new KarolInterpreter(model).visit(tree);
}

export async function beep() {
  var snd = new Audio(
    "data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8avaIf5SvL7pndPvPpndJR9Kuu8fePvuiuhorgWjp7Mf/PRjxcFCPDkW31srioCExivv9lcwKEaHsf/7ow2Fl1T/9RkXgEhYElAoCLFtMArxwivDJJ+bR1HTKJdlEoTELCIqgEwVGSQ+hIm0NbK8WXcTEI0UPoa2NbG4y2K00JEWbZavJXkYaqo9CRHS55FcZTjKEk3NKoCYUnSQ0rWxrZbFKbKIhOKPZe1cJKzZSaQrIyULHDZmV5K4xySsDRKWOruanGtjLJXFEmwaIbDLX0hIPBUQPVFVkQkDoUNfSoDgQGKPekoxeGzA4DUvnn4bxzcZrtJyipKfPNy5w+9lnXwgqsiyHNeSVpemw4bWb9psYeq//uQZBoABQt4yMVxYAIAAAkQoAAAHvYpL5m6AAgAACXDAAAAD59jblTirQe9upFsmZbpMudy7Lz1X1DYsxOOSWpfPqNX2WqktK0DMvuGwlbNj44TleLPQ+Gsfb+GOWOKJoIrWb3cIMeeON6lz2umTqMXV8Mj30yWPpjoSa9ujK8SyeJP5y5mOW1D6hvLepeveEAEDo0mgCRClOEgANv3B9a6fikgUSu/DmAMATrGx7nng5p5iimPNZsfQLYB2sDLIkzRKZOHGAaUyDcpFBSLG9MCQALgAIgQs2YunOszLSAyQYPVC2YdGGeHD2dTdJk1pAHGAWDjnkcLKFymS3RQZTInzySoBwMG0QueC3gMsCEYxUqlrcxK6k1LQQcsmyYeQPdC2YfuGPASCBkcVMQQqpVJshui1tkXQJQV0OXGAZMXSOEEBRirXbVRQW7ugq7IM7rPWSZyDlM3IuNEkxzCOJ0ny2ThNkyRai1b6ev//3dzNGzNb//4uAvHT5sURcZCFcuKLhOFs8mLAAEAt4UWAAIABAAAAAB4qbHo0tIjVkUU//uQZAwABfSFz3ZqQAAAAAngwAAAE1HjMp2qAAAAACZDgAAAD5UkTE1UgZEUExqYynN1qZvqIOREEFmBcJQkwdxiFtw0qEOkGYfRDifBui9MQg4QAHAqWtAWHoCxu1Yf4VfWLPIM2mHDFsbQEVGwyqQoQcwnfHeIkNt9YnkiaS1oizycqJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU="
  );
  return snd.play();
}

class KarolInterpreter extends KarolVisitor {
  constructor(private karol: KarolModel) {
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
      while (this.visit(ctx.getChild(2))) {
        this.visitChildren(ctx);
      }
    } else if (solangeIndex !== undefined && solangeIndex > 1) {
      // wiederhole statement* endewiederhole solange condition
      do {
        this.visitChildren(ctx);
      } while (this.visit(ctx.getChild(solangeIndex + 1)));
    } else if (bisIndex !== undefined) {
      // wiederhole statement* endewiederhole bis condition
      do {
        this.visitChildren(ctx);
      } while (!this.visit(ctx.getChild(bisIndex + 1)));
    } else {
      throw Error("Interner Fehler: Dieses Schleifenkonstrukt sollte vom Parser nicht erlaubt sein");
    }
  }

  visitConditional(ctx: ParserRuleContext) {
    // wenn cond dann statement* (sonst statement*) endewenn
    let sonstIndex;
    for (let i = 0; i < ctx.getChildCount(); i++) {
      const text = ctx.getChild(i).getText();
      if (text === "sonst") {
        sonstIndex = i;
      }
    }
    const condition = this.visit(ctx.getChild(1));
    if (condition === true) {
      // condition true: evaluate all statements before sonstIndex or all if no sonst
      for (let i = 0; i < (sonstIndex ?? ctx.getChildCount()); i++) {
        this.visit(ctx.getChild(i));
      }
    } else {
      if (sonstIndex !== undefined) {
        // condition false: evaluate all statements before sonstIndex or all if no sonst
        for (let i = sonstIndex + 1; i < ctx.getChildCount(); i++) {
          this.visit(ctx.getChild(i));
        }
      }
    }
  }

  visitConditionexpression(ctx: ParserRuleContext) {
    if (ctx.getChildCount() === 1) {
      return this.visit(ctx.getChild(0));
    } else {
      return !this.visit(ctx.getChild(1));
    }
  }

  visitCondition(ctx: ParserRuleContext): boolean {
    const direction = this.karol.direction;
    const nextFieldType = this.karol.getNextFieldType();
    switch (ctx.getText().toLowerCase()) {
      case "istwand":
        return nextFieldType === FieldType.wall;
      case "nichtistwand":
        return nextFieldType !== FieldType.wall;
      case "istziegel":
        return nextFieldType === FieldType.brick_red;
      case "nichtistziegel":
        return nextFieldType !== FieldType.brick_red;
      case "istmarke":
        return this.karol.getMarker() !== undefined;
      case "nichtistmarke":
        return this.karol.getMarker() === undefined;
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

  visitInstruction(ctx: ParserRuleContext) {
    switch (ctx.getText().toLowerCase()) {
      case "schritt":
        this.karol.move();
        break;
      case "linksdrehen":
        this.karol.turnLeft();
        break;
      case "rechtsdrehen":
        this.karol.turnRight();
        break;
      case "hinlegen":
        this.karol.layBrick();
        break;
      case "aufheben":
        this.karol.pickupBrick();
        break;
      case "markesetzen":
        this.karol.setMarker(Color.yellow);
        break;
      case "markelöschen":
        this.karol.deleteMarker();
        break;
      case "ton":
        // attention: this will not wait until beep finished, so new beeps will be ignored
        beep();
        break;
      default:
        throw Error("Instruction " + ctx.getText() + " not implemented");
    }
  }
}
