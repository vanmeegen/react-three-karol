import { WorldModel } from "../models/WorldModel";
import { ParserRuleContext } from "antlr4";
import { parseKarol } from "../parser/KarolParserFacade";
import { ChangeEvent, RefObject, useRef, useState } from "react";
import { executeSteps, StepResult } from "../interpreter/KarolInterpreterGenerator";
import { KarolModel } from "../models/KarolModel";

function handleError(f: () => void): () => void {
  return () => {
    try {
      f();
    } catch (e) {
      alert("Error" + e);
    }
  };
}

/**
 * find index of column of line in text
 * @param text
 * @param line line
 * @param column column
 * @return index of column of line in text
 */
function getColOfLineIndex(text: string, line: number, column: number): number {
  let position = 0;
  while (line > 1) {
    position = text.indexOf("\n", position) + 1;
    line--;
  }
  position += column;
  return position;
}

export function ProgramControlPanel(props: { model: KarolModel; world: WorldModel; defaultValue: string }) {
  const [program, setProgram] = useState(props.defaultValue);
  const textAreaRef: RefObject<HTMLTextAreaElement> = useRef(null);

  function onTextChanged(evt: ChangeEvent<HTMLTextAreaElement>) {
    setProgram(evt.target.value);
  }

  function reset() {
    props.world.reset();
    props.model.reset();
  }

  function run(waitTime?: number) {
    const tree: ParserRuleContext | undefined = parseKarol(program);
    if (tree) {
      const steps = executeSteps(tree, props.model);
      const doStep = () => {
        let result: IteratorResult<StepResult> = steps.next();
        if (!result.done) {
          const sourceRange = result.value.source;
          if (textAreaRef.current && sourceRange?.startLine) {
            // set selection for statement executed in step
            textAreaRef.current.focus();
            textAreaRef.current.selectionStart = getColOfLineIndex(
              program,
              sourceRange.startLine,
              sourceRange.startCol
            );
            textAreaRef.current.selectionEnd = getColOfLineIndex(program, sourceRange.endLine, sourceRange.endCol);
          }
        }
        waitTime !== undefined ? setTimeout(doStep, waitTime) : doStep();
      };
      doStep();
    } else {
      alert("Program contains Syntax Errors");
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button onClick={handleError(() => run(0))}>Run</button>
        <button onClick={handleError(() => run(200))}>Step</button>
        <button onClick={handleError(() => run())}>Fast</button>
        <button onClick={handleError(reset)}>Reset</button>
      </div>

      <textarea
        ref={textAreaRef}
        style={{ border: "solid black 1px", minWidth: "40em", flexGrow: 1 }}
        value={program}
        onChange={onTextChanged}
      />
    </div>
  );
}
