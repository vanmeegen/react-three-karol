import { StepResult, SourceLineRange } from "../interpreter/KarolInterpreterGenerator";

export interface ExecutorCallbacks {
  /** called for every executed step with the source range of the executed statement */
  onStep: (range: SourceLineRange) => void;
  /** called when execution pauses after a single step */
  onPause: () => void;
  /** called when the program ran to completion */
  onFinished: () => void;
  /** called when program execution threw an error */
  onError: (e: unknown) => void;
}

/**
 * drives a program stepper (generator) with a configurable delay between steps.
 * Owns no observable state; all outcomes are reported through the callbacks.
 */
export class ProgramExecutor {
  private interrupted: boolean = false;

  constructor(
    private stepper: Generator<StepResult, boolean | undefined>,
    private callbacks: ExecutorCallbacks
  ) {}

  /**
   * run the program until it finishes, fails or is paused.
   * @param waitTime delay between steps in ms, undefined runs at maximum speed
   * @param singleStep execute one step, then pause
   */
  run(waitTime: number | undefined, singleStep: boolean = false): void {
    this.interrupted = false;
    this.doStep(waitTime, singleStep);
  }

  /** interrupt execution; can be resumed with run() */
  pause(): void {
    this.interrupted = true;
  }

  private doStep(waitTime: number | undefined, singleStep: boolean): void {
    if (this.interrupted) {
      return;
    }
    try {
      const result: IteratorResult<StepResult> = this.stepper.next();
      if (!result.done && result.value?.source !== undefined) {
        this.callbacks.onStep(result.value.source);
        if (singleStep) {
          this.interrupted = true;
          this.callbacks.onPause();
        } else if (waitTime !== undefined) {
          setTimeout(() => this.doStep(waitTime, singleStep), waitTime);
        } else {
          this.doStep(waitTime, singleStep);
        }
      } else {
        this.callbacks.onFinished();
      }
    } catch (e) {
      this.callbacks.onError(e);
    }
  }
}
