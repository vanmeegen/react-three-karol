import { describe, it, expect, beforeEach, afterEach } from "bun:test";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { createRef } from "react";
import { CodeEditor } from "../CodeEditor";
import { ProgramModel } from "../../../models/ProgramModel";

describe("The CodeEditor", () => {
  let program: ProgramModel;
  let dirty: boolean;
  let textAreaRef: React.RefObject<HTMLTextAreaElement | null>;

  beforeEach(() => {
    program = new ProgramModel("Schritt");
    dirty = false;
    textAreaRef = createRef<HTMLTextAreaElement>();
    render(<CodeEditor program={program} textAreaRef={textAreaRef} onDirty={() => (dirty = true)} />);
  });

  afterEach(cleanup);

  it("shows the program source code", () => {
    expect((textAreaRef.current as HTMLTextAreaElement).value).toBe("Schritt");
  });

  it("updates the model and marks dirty when typing", () => {
    fireEvent.change(textAreaRef.current as HTMLTextAreaElement, { target: { value: "LinksDrehen" } });
    expect(program.sourceCode).toBe("LinksDrehen");
    expect(dirty).toBe(true);
  });

  it("opens the insert menu on context menu and inserts the chosen construct", () => {
    const textArea = textAreaRef.current as HTMLTextAreaElement;
    textArea.selectionStart = textArea.value.length;
    textArea.selectionEnd = textArea.value.length;
    fireEvent.contextMenu(textArea);
    // menu sections are visible
    expect(screen.getByText("Anweisungen")).toBeTruthy();
    expect(screen.getByText("Kontrollstrukturen")).toBeTruthy();
    expect(screen.getByText("Bedingungen")).toBeTruthy();
    fireEvent.click(screen.getByText("LinksDrehen"));
    expect(program.sourceCode).toBe("SchrittLinksDrehen ");
    expect(dirty).toBe(true);
  });

  it("closes the insert menu after inserting", async () => {
    fireEvent.contextMenu(textAreaRef.current as HTMLTextAreaElement);
    fireEvent.click(screen.getByText("Aufheben"));
    // the menu closes asynchronously after the exit transition
    await waitFor(() => expect(screen.queryByText("Anweisungen") === null).toBe(true));
  });
});
