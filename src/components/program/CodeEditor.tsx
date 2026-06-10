import { ChangeEvent, MouseEvent, RefObject, useState } from "react";
import { observer } from "mobx-react";
import { ProgramModel } from "../../models/ProgramModel";
import { CodeInsertMenu, MenuPosition } from "./CodeInsertMenu";

/**
 * text editor for Karol source code with a context menu to insert language constructs
 */
export const CodeEditor = observer(
  (props: { program: ProgramModel; textAreaRef: RefObject<HTMLTextAreaElement | null>; onDirty: () => void }) => {
    const [menuPosition, setMenuPosition] = useState<MenuPosition | undefined>(undefined);

    function onTextChanged(evt: ChangeEvent<HTMLTextAreaElement>) {
      props.program.setSourceCode(evt.target.value);
      props.onDirty();
    }

    function openInsertMenu(evt: MouseEvent): void {
      evt.preventDefault();
      setMenuPosition({ top: evt.clientY, left: evt.clientX });
    }

    function insertAtCursor(text: string): void {
      const textArea = props.textAreaRef.current;
      const source = props.program.sourceCode;
      const startPos = textArea?.selectionStart ?? source.length;
      const endPos = textArea?.selectionEnd ?? startPos;
      props.program.setSourceCode(source.substring(0, startPos) + text + " " + source.substring(endPos));
      props.onDirty();
      setMenuPosition(undefined);
    }

    return (
      <div style={{ flexGrow: 1 }}>
        <textarea
          ref={props.textAreaRef}
          value={props.program.sourceCode}
          onChange={onTextChanged}
          onContextMenu={openInsertMenu}
          style={{ flexGrow: 1, width: "100%", height: "100%", padding: "0px", resize: "none" }}
        />
        <CodeInsertMenu position={menuPosition} onClose={() => setMenuPosition(undefined)} onInsert={insertAtCursor} />
      </div>
    );
  }
);
