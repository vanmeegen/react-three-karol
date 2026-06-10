import { useRef, useState } from "react";
import { observer } from "mobx-react";
import { Tab, Tabs } from "@mui/material";
import { KarolSettings } from "../../models/KarolModel";
import { KarolSettingsDialog } from "../KarolSettingsDialog";
import { initCustomBlocks } from "../../blockly/CustomBlocks";
import { useStores } from "../../StoreContext";
import { ProgramToolbar } from "./ProgramToolbar";
import { CodeEditor } from "./CodeEditor";
import { BlocklyEditor } from "./BlocklyEditor";

initCustomBlocks();

/**
 * container combining program toolbar, code/Blockly editor tabs and the Karol settings dialog
 */
export const ProgramControlPanel = observer(() => {
  const { karol, program } = useStores();
  const [isOpen, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [isDirty, setDirty] = useState(false);
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

  function handleClose(newValues: KarolSettings) {
    setOpen(false);
    karol.updateSettings(newValues);
  }

  function selectCurrentStatement(selectionStart: number, selectionEnd: number): void {
    if (textAreaRef.current) {
      // set selection for statement executed in step
      textAreaRef.current.focus();
      textAreaRef.current.selectionStart = selectionStart;
      textAreaRef.current.selectionEnd = selectionEnd;
    }
  }

  function run(waitTime: number | undefined, singleStep: boolean = false): void {
    program.run(waitTime, karol, selectCurrentStatement, singleStep);
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
      <ProgramToolbar program={program} onRun={run} onOpenSettings={() => setOpen(true)} />
      <KarolSettingsDialog onClose={handleClose} open={isOpen} karol={karol} onCancel={() => setOpen(false)} />
      <Tabs value={activeTab} onChange={(e, index) => switchTab(index)}>
        <Tab label="Code" />
        <Tab label="Blöcke" />
      </Tabs>
      {activeTab === 0 ? (
        <CodeEditor key="code" program={program} textAreaRef={textAreaRef} onDirty={() => setDirty(true)} />
      ) : null}
      {activeTab === 1 ? <BlocklyEditor program={program} /> : null}
    </div>
  );
});
