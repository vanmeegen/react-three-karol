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
import { Delete, DirectionsBike, DirectionsRun, DirectionsWalk, Save, Settings, Upload } from "@mui/icons-material";
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

export function ProgramControlPanel(props: { model: KarolModel; world: WorldModel; defaultValue: string }) {
  const [isOpen, setOpen] = useState(false);
  const [program, setProgram] = useState(props.defaultValue);
  const [fileName, setFileName] = useState("Untitled.karol");
  const [activeTab, setActiveTab] = useState(0);
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
    <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
      <div style={{ display: "flex", flexDirection: "row", margin: "5px" }}>
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
        <Tooltip title="Programmstart">
          <IconButton onClick={handleError(() => run(0))}>
            <DirectionsRun />
          </IconButton>
        </Tooltip>
        <Tooltip title="Schnelldurchlauf">
          <IconButton onClick={handleError(() => run())}>
            <DirectionsBike />
          </IconButton>
        </Tooltip>
        <Tooltip title="Einzelschritt">
          <IconButton onClick={handleError(() => run(200))}>
            <DirectionsWalk />
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
        <div key="code" style={{ minWidth: "40em", flexGrow: 1 }}>
          <ContextMenuTrigger id="menu_statements">
            <textarea
              ref={textAreaRef}
              value={program}
              onChange={onTextChanged}
              style={{ flexGrow: 1, width: "100%", height: "100%" }}
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
