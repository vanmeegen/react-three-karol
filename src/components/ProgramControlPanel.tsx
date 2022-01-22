import { WorldModel } from "../models/WorldModel";
import { ParserRuleContext } from "antlr4";
import { parseKarol } from "../parser/KarolParserFacade";
import { ChangeEvent, useState } from "react";
import { executeSteps } from "../interpreter/KarolInterpreterGenerator";

function handleError(f: () => void): () => void {
  return () => {
    try {
      f();
    } catch (e) {
      alert("Error" + e);
    }
  };
}

export function ProgramControlPanel(props: { world: WorldModel; defaultValue: string }) {
  const [program, setProgram] = useState(props.defaultValue);

  function onTextChanged(evt: ChangeEvent<HTMLTextAreaElement>) {
    setProgram(evt.target.value);
  }

  function reset(){
    props.world.reset();
  }
  function run(waitTime?: number) {
    const tree: ParserRuleContext | undefined = parseKarol(program);
    if (tree) {
      const steps = executeSteps(tree, props.world);
      const doStep = () => {
        let result = steps.next();
        if (!result.done) {
          waitTime !== undefined ? setTimeout(doStep, waitTime): doStep();
        }
      };
      doStep();
    } else {
      alert("Program contains Syntax Errors");
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button onClick={handleError(() =>run(0))}>Run</button>
        <button onClick={handleError(()=>run(200))}>Step</button>
        <button onClick={handleError(()=>run())}>Fast</button>
        <button onClick={handleError(reset)}>Reset</button>
      </div>

      <textarea
        style={{ border: "solid black 1px", minWidth: "40em", flexGrow: 1 }}
        value={program}
        onChange={onTextChanged}
      />
    </div>
  );
}
