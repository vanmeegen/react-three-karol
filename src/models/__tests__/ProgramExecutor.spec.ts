import { describe, it, expect, beforeEach } from "bun:test";
import { ProgramExecutor, ExecutorCallbacks } from "../ProgramExecutor";
import { StepResult, SourceLineRange } from "../../interpreter/KarolInterpreterGenerator";

function range(line: number): SourceLineRange {
  return { startLine: line, startCol: 0, endLine: line, endCol: 5 };
}

function* steps(count: number): Generator<StepResult, boolean | undefined> {
  for (let i = 1; i <= count; i++) {
    yield { result: undefined, source: range(i) };
  }
  return true;
}

function* failingSteps(): Generator<StepResult, boolean | undefined> {
  yield { result: undefined, source: range(1) };
  throw new Error("kaputt");
}

describe("The ProgramExecutor drives a program stepper", () => {
  let stepped: SourceLineRange[];
  let paused: boolean;
  let finished: boolean;
  let error: unknown;
  let callbacks: ExecutorCallbacks;

  beforeEach(() => {
    stepped = [];
    paused = false;
    finished = false;
    error = undefined;
    callbacks = {
      onStep: (r) => stepped.push(r),
      onPause: () => (paused = true),
      onFinished: () => (finished = true),
      onError: (e) => (error = e),
    };
  });

  it("runs all steps synchronously at maximum speed (waitTime undefined)", () => {
    new ProgramExecutor(steps(3), callbacks).run(undefined);
    expect(stepped.map((r) => r.startLine)).toEqual([1, 2, 3]);
    expect(finished).toBe(true);
    expect(paused).toBe(false);
    expect(error).toBeUndefined();
  });

  it("executes exactly one step and pauses in single step mode", () => {
    const executor = new ProgramExecutor(steps(3), callbacks);
    executor.run(undefined, true);
    expect(stepped.length).toBe(1);
    expect(paused).toBe(true);
    expect(finished).toBe(false);
  });

  it("can resume after single step pause and finish the program", () => {
    const executor = new ProgramExecutor(steps(2), callbacks);
    executor.run(undefined, true);
    expect(stepped.length).toBe(1);
    executor.run(undefined);
    expect(stepped.length).toBe(2);
    expect(finished).toBe(true);
  });

  it("does not step after pause() until run is called again", () => {
    const executor = new ProgramExecutor(steps(5), callbacks);
    executor.run(undefined, true);
    executor.pause();
    expect(stepped.length).toBe(1);
    executor.run(undefined);
    expect(stepped.length).toBe(5);
    expect(finished).toBe(true);
  });

  it("reports errors thrown by the program through onError", () => {
    new ProgramExecutor(failingSteps(), callbacks).run(undefined);
    expect(stepped.length).toBe(1);
    expect(finished).toBe(false);
    expect(String(error)).toContain("kaputt");
  });

  it("schedules steps asynchronously when waitTime is given", async () => {
    const executor = new ProgramExecutor(steps(2), callbacks);
    executor.run(0);
    // first step is synchronous, the rest is scheduled via setTimeout
    expect(stepped.length).toBe(1);
    await new Promise((resolve) => setTimeout(resolve, 20));
    expect(stepped.length).toBe(2);
    expect(finished).toBe(true);
  });
});
