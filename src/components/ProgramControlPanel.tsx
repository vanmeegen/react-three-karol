import { ChangeEvent, RefObject, useRef, useState } from "react";
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
import { BlocklyWorkspace, WorkspaceSvg } from "react-blockly";
import { KAROL_TOOLBOX } from "../blockly/Toolbox";
import { ProgramModel } from "../models/ProgramModel";
import { observer } from "mobx-react";

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

export const ProgramControlPanel = observer((props: { model: KarolModel; program: ProgramModel }) => {
  const [isOpen, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [isDirty, setDirty] = useState(false);
  const textAreaRef: RefObject<HTMLTextAreaElement> = useRef(null);

  function switchTab(index: number): void {
    let change: boolean = true;
    if (activeTab === 0 && index === 1 && textAreaRef.current && isDirty){
      change = confirm("Der Wechsel zu Blockly löscht eingegebenen Code. Trotzdem wechseln ?");
      if (change){
        setDirty(false);
      }
    }
    if (change){
      setActiveTab(index);
    }

  }

  function handleSettings() {
    setOpen(true);
  }

  function handleClose(newValues: KarolSettings) {
    setOpen(false);
    props.model.updateSettings(newValues);
  }

  function onTextChanged(evt: ChangeEvent<HTMLTextAreaElement>) {
    props.program.setSourceCode(evt.target.value);
    setDirty(true);
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

  function selectCurrentStatement(selectionStart: number, selectionEnd: number): void {
    if (textAreaRef.current) {
      // set selection for statement executed in step
      textAreaRef.current.focus();
      textAreaRef.current.selectionStart = selectionStart;
      textAreaRef.current.selectionEnd = selectionEnd;
    }
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", flexGrow: 1, border: "solid black 1px", borderTop: "none",minWidth: "320px" }}
    >
      <div style={{ display: "flex", flexDirection: "row", columns: 2, flexWrap: "wrap" }}>
        <Tooltip title="Programm laden">
          <IconButton onClick={() => props.program.load()}>
            <Upload />
          </IconButton>
        </Tooltip>
        <Tooltip title="Programm speichern">
          <IconButton onClick={() => props.program.save()}>
            <Save />
          </IconButton>
        </Tooltip>
        <Tooltip title="Einzelschritt">
          <IconButton onClick={handleError(() => props.program.run(0, props.model, selectCurrentStatement, true))}>
            <Elderly />
          </IconButton>
        </Tooltip>
        <Tooltip title="Programmstart langsam">
          <IconButton onClick={handleError(() => props.program.run(200, props.model, selectCurrentStatement))}>
            <DirectionsWalk />
          </IconButton>
        </Tooltip>
        <Tooltip title="Programmstart schnell">
          <IconButton onClick={handleError(() => props.program.run(10, props.model, selectCurrentStatement))}>
            <DirectionsRun />
          </IconButton>
        </Tooltip>
        <Tooltip title="Programm Maximalgeschwindigkeit">
          <IconButton onClick={handleError(() => props.program.run(undefined, props.model, selectCurrentStatement))}>
            <DirectionsBike />
          </IconButton>
        </Tooltip>
        <Tooltip title="Programm unterbrechen">
          <IconButton onClick={handleError(() => props.program.pause())}>
            <Pause />
          </IconButton>
        </Tooltip>
        <Tooltip title="Programm stoppen">
          <IconButton onClick={handleError(() => props.program.stop())}>
            <Stop />
          </IconButton>
        </Tooltip>
        <Tooltip title="Einstellungen Karol">
          <IconButton onClick={handleSettings}>
            <Settings />
          </IconButton>
        </Tooltip>
        <Tooltip title="Programm löschen">
          <IconButton onClick={() => props.program.clear()}>
            <Delete />
          </IconButton>
        </Tooltip>
        <Typography variant="subtitle1">{props.program.executionState}</Typography>
        <Typography variant="caption" style={{ margin: "auto" }}>
          {props.program.fileName}
        </Typography>
      </div>
      <KarolSettingsDialog onClose={handleClose} open={isOpen} karol={props.model} onCancel={() => setOpen(false)} />
      <Tabs value={activeTab} onChange={(e, index) => switchTab(index)}>
        <Tab label="Code" />
        <Tab label="Blöcke" />
      </Tabs>
      {activeTab === 0 ? (
        <div key="code" style={{ flexGrow: 1 }}>
          <ContextMenuTrigger id="menu_statements">
            <textarea
              ref={textAreaRef}
              value={props.program.sourceCode}
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
            initialXml={props.program.blocklyXml}
            onXmlChange={(xml) => (props.program.blocklyXml = xml)}
            onWorkspaceChange={(workspace: WorkspaceSvg) => props.program.setBlocklyXml(workspace)}
            onDispose={() => props.program.disposeBlocklyWorkspace()}
          />
        </div>
      ) : null}
    </div>
  );
});
