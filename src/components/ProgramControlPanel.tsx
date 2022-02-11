import { WorldModel } from "../models/WorldModel";
import { ParserRuleContext } from "antlr4";
import { parseKarol } from "../parser/KarolParserFacade";
import { ChangeEvent, RefObject, useRef, useState } from "react";
import { executeSteps, StepResult } from "../interpreter/KarolInterpreterGenerator";
import { KarolModel, KarolSettings } from "../models/KarolModel";
import { ContextMenu, ContextMenuTrigger, MenuItem, SubMenu } from "react-contextmenu";
import "./ProgramControlPanel.css";
import { CONDITIONS, CONTROLSTRUCTURES, KAROL_TOOLBOX, STATEMENTS } from "../data/ProgrammingConstructs";
import { KarolSettingsDialog } from "./KarolSettingsDialog";
import { IconButton, Tab, Tabs, Tooltip, Typography } from "@mui/material";
import { Delete, DirectionsBike, DirectionsRun, DirectionsWalk, Save, Settings, Upload } from "@mui/icons-material";
// @ts-ignore
import { BlocklyWorkspace } from "react-blockly";
import "./blockly.css";

import { fileOpen, fileSave, FileSystemHandle } from "browser-fs-access";
import { initCustomBlocks } from "./CustomBlocks";

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
  const [activeTab, setActiveTab] = useState(1);
  const textAreaRef: RefObject<HTMLTextAreaElement> = useRef(null);
  const [xml, setXml] = useState();

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
    const tree: ParserRuleContext | undefined = parseKarol(textAreaRef.current!.value);
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

  async function load() {
    const blob = await fileOpen({
      mimeTypes: ["text/plain"],
      extensions: [".karol", ".txt"],
      description: "Karol Code",
    });
    setFileName(blob.name);
    textAreaRef.current!.value = await blob.text();
  }

  async function save() {
    const text = textAreaRef.current!.value;
    const blob = new Blob([text], { type: "text/plain" });
    const handle: FileSystemHandle | null = await fileSave(blob, {
      fileName: fileName,
      extensions: [".karol"],
    });
    if (handle !== null) {
      setFileName(handle.name);
    }
  }

  function clear(): void {
    textAreaRef.current!.value = "";
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
          />
        </div>
      ) : null}
    </div>
  );
}
