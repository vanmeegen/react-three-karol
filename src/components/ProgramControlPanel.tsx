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
import { IconButton, Tab, Tabs, Tooltip, Typography } from "@mui/material";
import {
  Delete,
  DirectionsBike,
  DirectionsRun,
  DirectionsWalk,
  Elderly,
  Pause,
  Save,
  Settings,
  Stop,
  Upload
} from "@mui/icons-material";
import { initCustomBlocks } from "../blockly/CustomBlocks";
import "../assets/blockly.css";

import { fileOpen, fileSave, FileSystemHandle } from "browser-fs-access";
// @ts-ignore
import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";
import { Workspace } from "workspace";
import { KAROL_TOOLBOX } from "../blockly/Toolbox";

initCustomBlocks();

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

let programStepper: Generator<StepResult> | undefined = undefined;
let interruptExecution: boolean = false;

export function ProgramControlPanel(props: { model: KarolModel; world: WorldModel; defaultValue: string }) {
  const [isOpen, setOpen] = useState(false);
  const [program, setProgram] = useState(props.defaultValue);
  const [fileName, setFileName] = useState("Untitled.karol");
  const [activeTab, setActiveTab] = useState(0);
  const [programState, setProgramState] = useState("-");
  const textAreaRef: RefObject<HTMLTextAreaElement> = useRef(null);
  /* will point to blockly workspace after first toXml, since BlocklyWorkspace component does not support refs */
  let blocklyWorkspace: BlocklyWorkspace = undefined;
  const [xml, setXml] = useState("");

  function handleSettings() {
    setOpen(true);
  }

  function handleClose(newValues: KarolSettings) {
    setOpen(false);
    props.model.updateSettings(newValues);
  }

  function disposeBlocklyWorkspace() {
    blocklyWorkspace = undefined;
  }

  function onTextChanged(evt: ChangeEvent<HTMLTextAreaElement>) {
    setProgram(evt.target.value);
  }

  function setBlocklyXml(workspace: Workspace): void {
    blocklyWorkspace = workspace;
    console.log("workspace: ", workspace);
    const generated = (Blockly as any)["karol"].workspaceToCode(workspace);
    console.log("Generated: ", generated);
    setProgram(generated);
  }

  function setInterrupted(interrupted: boolean): void {
    interruptExecution = interrupted;
    setProgramState(interrupted ? "halt" : programStepper !== undefined ? "läuft" : "-");
  }

  /** prepare program start, keep execution state globally */
  function startProgram(): boolean {
    const tree: ParserRuleContext | undefined = parseKarol(program);
    if (tree) {
      programStepper = executeSteps(tree, props.model);
      console.log("Programm wurde gestartet");
      setInterrupted(false);
    } else {
      alert("Das Programm enthält Syntaxfehler");
    }
    return tree !== undefined;
  }

  /** interrupt program execution, can be continued by one of the run buttons */
  function interruptProgram(): void {
    if (programStepper !== undefined) {
      setInterrupted(true);
    } else {
      alert("Programm läuft nicht, daher ist Unterbrechen nicht möglich");
    }
  }

  /** remove program execution context, interrupt running program */
  function stopProgram(): void {
    if (programStepper !== undefined) {
      console.log("Das Programm wurde gestoppt");
      programStepper = undefined;
      setInterrupted(false);
    } else {
      alert("Programm läuft nicht, daher ist Stoppen nicht möglich");
    }
  }

  function run(waitTime?: number, singleStep: boolean = false) {
    setInterrupted(false);
    if (programStepper === undefined) {
      const started = startProgram();
      if (!started) {
        return;
      }
    }
    // must be defined here
    const doStep = () => {
      if (!interruptExecution && programStepper !== undefined) {
        const stepper = programStepper!;
        let result: IteratorResult<StepResult> = stepper.next();
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
          if (!singleStep) {
            waitTime !== undefined ? setTimeout(doStep, waitTime) : doStep();
          } else {
            setInterrupted(true);
          }
        } else {
          console.log("Programm wurde beendet");
          programStepper = undefined;
          setInterrupted(false);
        }
      }
    };
    doStep();
  }

  function handleClick(evt: any, data: any) {
    const textArea = textAreaRef.current;
    if (textArea) {
      if (textArea.selectionStart || textArea.selectionStart == 0) {
        const startPos = textArea.selectionStart;
        const endPos = textArea.selectionEnd;
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

  async function load() {
    const blob = await fileOpen({
      mimeTypes: ["application/json"],
      extensions: [".karol", ".json"],
      description: "Karol Code",
    });
    setFileName(blob.name);
    const result = JSON.parse(await blob.text());
    setProgram(result.text);
    if (blocklyWorkspace !== undefined && result.blockly !== undefined) {
      blocklyWorkspace.clear();
      (Blockly as any).Xml.domToWorkspace((Blockly as any).Xml.textToDom(result.blockly), blocklyWorkspace);
    }
  }

  async function save() {
    const jsonObject: { blockly?: string; text: string } = { text: program };
    if (blocklyWorkspace) {
      jsonObject.blockly = (Blockly as any).Xml.domToText((Blockly as any).Xml.workspaceToDom(blocklyWorkspace));
    }
    const blob = new Blob([JSON.stringify(jsonObject)], { type: "application/json" });
    const handle: FileSystemHandle | null = await fileSave(blob, {
      fileName: fileName,
      extensions: [".karol"],
    });
    if (handle !== null) {
      setFileName(handle.name);
    }
  }

  function clear(): void {
    setProgram("");
    if (blocklyWorkspace !== undefined) {
      blocklyWorkspace.clear();
    }
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", flexGrow: 1, border: "solid black 1px", minWidth: "320px" }}
    >
      <div style={{ display: "flex", flexDirection: "row", columns: 2, flexWrap: "wrap" }}>
        <Tooltip title="Programm laden">
          <IconButton onClick={load}>
            <Upload />
          </IconButton>
        </Tooltip>
        <Tooltip title="Programm speichern">
          <IconButton onClick={save}>
            <Save />
          </IconButton>
        </Tooltip>
        <Tooltip title="Einzelschritt">
          <IconButton onClick={handleError(() => run(0, true))}>
            <Elderly />
          </IconButton>
        </Tooltip>
        <Tooltip title="Programmstart langsam">
          <IconButton onClick={handleError(() => run(200))}>
            <DirectionsWalk />
          </IconButton>
        </Tooltip>
        <Tooltip title="Programmstart schnell">
          <IconButton onClick={handleError(() => run(10))}>
            <DirectionsRun />
          </IconButton>
        </Tooltip>
        <Tooltip title="Programm Maximalgeschwindigkeit">
          <IconButton onClick={handleError(() => run())}>
            <DirectionsBike />
          </IconButton>
        </Tooltip>
        <Tooltip title="Programm unterbrechen">
          <IconButton onClick={handleError(() => interruptProgram())}>
            <Pause />
          </IconButton>
        </Tooltip>
        <Tooltip title="Programm stoppen">
          <IconButton onClick={handleError(() => stopProgram())}>
            <Stop />
          </IconButton>
        </Tooltip>
        <Tooltip title="Einstellungen Karol">
          <IconButton onClick={handleSettings}>
            <Settings />
          </IconButton>
        </Tooltip>
        <Tooltip title="Programm löschen">
          <IconButton onClick={clear}>
            <Delete />
          </IconButton>
        </Tooltip>
        <Typography variant="subtitle1">{programState}</Typography>
        <Typography variant="caption" style={{ margin: "auto" }}>
          {fileName}
        </Typography>
      </div>
      <KarolSettingsDialog onClose={handleClose} open={isOpen} karol={props.model} onCancel={() => setOpen(false)} />
      <Tabs value={activeTab} onChange={(e, index) => setActiveTab(index)}>
        <Tab label="Code" />
        <Tab label="Blöcke" />
      </Tabs>
      {activeTab === 0 ? (
        <div key="code" style={{ flexGrow: 1 }}>
          <ContextMenuTrigger id="menu_statements">
            <textarea
              ref={textAreaRef}
              value={program}
              onChange={onTextChanged}
              style={{ flexGrow: 1, width: "100%", height: "100%", padding: "0px", resize: "none" }}
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
      ) : null}
      {activeTab === 1 ? (
        <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <BlocklyWorkspace
            className="blockly-editor"
            toolboxConfiguration={KAROL_TOOLBOX}
            workspaceConfiguration={{
              grid: {
                spacing: 20,
                length: 3,
                colour: "#ccc",
                snap: true,
              },
            }}
            initialXml={xml}
            onXmlChange={setXml}
            onWorkspaceChange={setBlocklyXml}
            onDispose={disposeBlocklyWorkspace}
          />
        </div>
      ) : null}
    </div>
  );
}
