import { WorldModel } from "../models/WorldModel";
import { ParserRuleContext } from "antlr4";
import { parseKarol } from "../parser/KarolParserFacade";
import { ChangeEvent, RefObject, useRef, useState } from "react";
import { executeSteps, StepResult } from "../interpreter/KarolInterpreterGenerator";
import { KarolModel, KarolSettings } from "../models/KarolModel";
import { ContextMenu, ContextMenuTrigger, MenuItem, SubMenu } from "react-contextmenu";
import "./ProgramControlPanel.css";
import { CONDITIONS, CONTROLSTRUCTURES, STATEMENTS } from "../data/ProgrammingConstructs";
import { KarolSettingsDialog } from "./KarolSettingsDialog";

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
  const [isOpen, setOpen] = useState(false);
  const [program, setProgram] = useState(props.defaultValue);
  const textAreaRef: RefObject<HTMLTextAreaElement> = useRef(null);

  function handleSettings() {
    setOpen(true);
  }

  function handleClose(newValues: KarolSettings) {
    setOpen(false);
    props.model.updateSettings(newValues);
  }

  function onTextChanged(evt: ChangeEvent<HTMLTextAreaElement>) {
    setProgram(evt.target.value);
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

  function handleClick(evt: any, data: any) {
    const textArea = textAreaRef.current;
    if (textArea) {
      if (textArea.selectionStart || textArea.selectionStart == 0) {
        var startPos = textArea.selectionStart;
        var endPos = textArea.selectionEnd;
        textArea.value =
          textArea.value.substring(0, startPos) +
          data.text +
          " " +
          textArea.value.substring(endPos, textArea.value.length);
      } else {
        textArea.value += data.text + " ";
      }
    }
  }

  function MenuEntry(props: { title?: string }) {
    return props.title ? (
      <MenuItem data={{ text: props.title }} onClick={handleClick}>
        {props.title}
      </MenuItem>
    ) : (
      <MenuItem divider />
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button onClick={handleError(() => run(0))}>Run</button>
        <button onClick={handleError(() => run(200))}>Step</button>
        <button onClick={handleError(() => run())}>Fast</button>
        <button onClick={handleSettings}>Settings</button>
      </div>
      <KarolSettingsDialog onClose={handleClose} open={isOpen} karol={props.model} onCancel={() => setOpen(false)} />
      <div style={{ border: "solid black 1px", minWidth: "40em", flexGrow: 1 }}>
        <ContextMenuTrigger id="menu_statements">
          <textarea
            ref={textAreaRef}
            value={program}
            onChange={onTextChanged}
            style={{ width: "100%", height: "100%" }}
          />
        </ContextMenuTrigger>
        <ContextMenu id="menu_statements">
          <SubMenu key="aw" title="Anweisungen">
            {STATEMENTS.map((s, index) => (
              <MenuEntry title={s} key={index} />
            ))}
          </SubMenu>
          <SubMenu key="ks" title="Kontrollstrukturen">
            {CONTROLSTRUCTURES.map((s, index) => (
              <MenuEntry title={s} key={index} />
            ))}
          </SubMenu>
          <SubMenu key="bd" title="Bedingungen">
            {CONDITIONS.map((s, index) => (
              <MenuEntry title={s} key={index} />
            ))}
          </SubMenu>
        </ContextMenu>
      </div>
    </div>
  );
}
