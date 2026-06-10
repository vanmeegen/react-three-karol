import { ChangeEvent, MouseEvent, ReactElement, useRef, useState } from "react";
import { KarolSettings } from "../models/KarolModel";
import { CONDITIONS, CONTROLSTRUCTURES, STATEMENTS } from "../data/ProgrammingConstructs";
import { KarolSettingsDialog } from "./KarolSettingsDialog";
import { Divider, IconButton, ListSubheader, Menu, MenuItem, Tab, Tabs, Tooltip, Typography } from "@mui/material";
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
import { observer } from "mobx-react";
import { handleError } from "../util/handleError";
import { useStores } from "../StoreContext";

initCustomBlocks();

/** entries of one section of the code insert menu; undefined renders a divider */
function menuSection(
  title: string,
  entries: (string | undefined)[],
  onInsert: (text: string) => void
): ReactElement[] {
  return [
    <ListSubheader key={title}>{title}</ListSubheader>,
    ...entries.map((entry, index) =>
      entry ? (
        <MenuItem key={`${title}_${index}`} onClick={() => onInsert(entry)}>
          {entry}
        </MenuItem>
      ) : (
        <Divider key={`${title}_${index}`} />
      )
    ),
  ];
}

export const ProgramControlPanel = observer(() => {
  const { karol, program } = useStores();
  const [isOpen, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [isDirty, setDirty] = useState(false);
  const [menuPosition, setMenuPosition] = useState<{ top: number; left: number } | undefined>(undefined);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  function switchTab(index: number): void {
    let change: boolean = true;
    if (activeTab === 0 && index === 1 && textAreaRef.current && isDirty) {
      change = confirm("Der Wechsel zu Blockly löscht eingegebenen Code. Trotzdem wechseln ?");
      if (change) {
        setDirty(false);
      }
    }
    if (change) {
      setActiveTab(index);
      // Initialize Blockly workspace when switching to Blockly tab
      if (index === 1) {
        program.initializeBlocklyWorkspace();
      }
    }
  }

  function handleSettings() {
    setOpen(true);
  }

  function handleClose(newValues: KarolSettings) {
    setOpen(false);
    karol.updateSettings(newValues);
  }

  function onTextChanged(evt: ChangeEvent<HTMLTextAreaElement>) {
    program.setSourceCode(evt.target.value);
    setDirty(true);
  }

  function openInsertMenu(evt: MouseEvent): void {
    evt.preventDefault();
    setMenuPosition({ top: evt.clientY, left: evt.clientX });
  }

  function insertAtCursor(text: string): void {
    const textArea = textAreaRef.current;
    const source = program.sourceCode;
    const startPos = textArea?.selectionStart ?? source.length;
    const endPos = textArea?.selectionEnd ?? startPos;
    program.setSourceCode(source.substring(0, startPos) + text + " " + source.substring(endPos));
    setDirty(true);
    setMenuPosition(undefined);
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
      style={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        border: "solid black 1px",
        borderTop: "none",
        minWidth: "320px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", columns: 2, flexWrap: "wrap" }}>
        <Tooltip title="Programm laden">
          <IconButton onClick={() => program.load()}>
            <Upload />
          </IconButton>
        </Tooltip>
        <Tooltip title="Programm speichern">
          <IconButton onClick={() => program.save()}>
            <Save />
          </IconButton>
        </Tooltip>
        <Tooltip title="Einzelschritt">
          <IconButton onClick={handleError(() => program.run(0, karol, selectCurrentStatement, true))}>
            <Elderly />
          </IconButton>
        </Tooltip>
        <Tooltip title="Programmstart langsam">
          <IconButton onClick={handleError(() => program.run(200, karol, selectCurrentStatement))}>
            <DirectionsWalk />
          </IconButton>
        </Tooltip>
        <Tooltip title="Programmstart schnell">
          <IconButton onClick={handleError(() => program.run(10, karol, selectCurrentStatement))}>
            <DirectionsRun />
          </IconButton>
        </Tooltip>
        <Tooltip title="Programm Maximalgeschwindigkeit">
          <IconButton onClick={handleError(() => program.run(undefined, karol, selectCurrentStatement))}>
            <DirectionsBike />
          </IconButton>
        </Tooltip>
        <Tooltip title="Programm unterbrechen">
          <IconButton onClick={handleError(() => program.pause())}>
            <Pause />
          </IconButton>
        </Tooltip>
        <Tooltip title="Programm stoppen">
          <IconButton onClick={handleError(() => program.stop())}>
            <Stop />
          </IconButton>
        </Tooltip>
        <Tooltip title="Einstellungen Karol">
          <IconButton onClick={handleSettings}>
            <Settings />
          </IconButton>
        </Tooltip>
        <Tooltip title="Programm löschen">
          <IconButton onClick={() => program.clear()}>
            <Delete />
          </IconButton>
        </Tooltip>
        <Typography variant="subtitle1">{program.executionState}</Typography>
        <Typography variant="caption" style={{ margin: "auto" }}>
          {program.fileName}
        </Typography>
      </div>
      <KarolSettingsDialog onClose={handleClose} open={isOpen} karol={karol} onCancel={() => setOpen(false)} />
      <Tabs value={activeTab} onChange={(e, index) => switchTab(index)}>
        <Tab label="Code" />
        <Tab label="Blöcke" />
      </Tabs>
      {activeTab === 0 ? (
        <div key="code" style={{ flexGrow: 1 }}>
          <textarea
            ref={textAreaRef}
            value={program.sourceCode}
            onChange={onTextChanged}
            onContextMenu={openInsertMenu}
            style={{ flexGrow: 1, width: "100%", height: "100%", padding: "0px", resize: "none" }}
          />
          <Menu
            open={menuPosition !== undefined}
            onClose={() => setMenuPosition(undefined)}
            anchorReference="anchorPosition"
            anchorPosition={menuPosition}
            slotProps={{ list: { dense: true } }}
          >
            {menuSection("Anweisungen", STATEMENTS, insertAtCursor)}
            {menuSection("Kontrollstrukturen", CONTROLSTRUCTURES, insertAtCursor)}
            {menuSection("Bedingungen", CONDITIONS, insertAtCursor)}
          </Menu>
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
            initialXml={program.blocklyXml}
            onXmlChange={(xml) => program.setBlocklyXmlFromReact(xml)}
            onWorkspaceChange={(workspace: WorkspaceSvg) => program.setBlocklyXml(workspace)}
            onDispose={() => program.disposeBlocklyWorkspace()}
          />
        </div>
      ) : null}
    </div>
  );
});
