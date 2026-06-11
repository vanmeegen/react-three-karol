import { describe, it, expect, beforeEach, afterEach } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { ProgramToolbar } from "../ProgramToolbar";
import { ProgramModel } from "../../../models/ProgramModel";

describe("The ProgramToolbar", () => {
  let program: ProgramModel;
  let runCalls: { waitTime: number | undefined; singleStep?: boolean }[];
  let settingsOpened: boolean;

  beforeEach(() => {
    program = new ProgramModel("Schritt");
    runCalls = [];
    settingsOpened = false;
    render(
      <ProgramToolbar
        program={program}
        onRun={(waitTime, singleStep) => runCalls.push({ waitTime, singleStep })}
        onOpenSettings={() => (settingsOpened = true)}
      />
    );
  });

  afterEach(cleanup);

  it("shows execution state and file name", () => {
    expect(screen.getByText("-")).toBeTruthy();
    expect(screen.getByText("Untitled.karol")).toBeTruthy();
  });

  it("triggers single step run with wait time 0", () => {
    fireEvent.click(screen.getByLabelText("Einzelschritt"));
    expect(runCalls).toEqual([{ waitTime: 0, singleStep: true }]);
  });

  it("triggers the three run speeds", () => {
    fireEvent.click(screen.getByLabelText("Programmstart langsam"));
    fireEvent.click(screen.getByLabelText("Programmstart schnell"));
    fireEvent.click(screen.getByLabelText("Programm Maximalgeschwindigkeit"));
    expect(runCalls.map((c) => c.waitTime)).toEqual([200, 10, undefined]);
  });

  it("opens the settings dialog", () => {
    fireEvent.click(screen.getByLabelText("Einstellungen Karol"));
    expect(settingsOpened).toBe(true);
  });

  it("clears the program source", () => {
    fireEvent.click(screen.getByLabelText("Programm löschen"));
    expect(program.sourceCode).toBe("");
  });
});
