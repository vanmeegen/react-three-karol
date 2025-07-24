import { action, makeObservable, observable } from "mobx";
import { WorkspaceSvg } from "react-blockly";
import * as Blockly from "blockly";
import { ParserRuleContext } from "antlr4";
import { parseKarol } from "../parser/KarolParserFacade";
import { executeSteps, StepResult } from "../interpreter/KarolInterpreterGenerator";
import { fileOpen, fileSave } from "browser-fs-access";
import { KarolModel } from "./KarolModel";
import { karolGenerator } from "../blockly/CustomBlocks";
import { INITIAL_BLOCKLY_XML } from "../data/BurgExample";

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

export class ProgramModel {
  @observable sourceCode: string;
  @observable fileName: string;
  @observable executionState: string;
  @observable blocklyXml: string; // XML format for workspace serialization
  @observable blocklyWorkspace: WorkspaceSvg | undefined = undefined;
  @observable stepper: Generator<StepResult> | undefined = undefined;
  @observable interruptExecution: boolean = false;

  constructor(startSourceCode: string) {
    this.sourceCode = startSourceCode;
    this.fileName = "Untitled.karol";
    this.executionState = "-";
    this.blocklyXml = INITIAL_BLOCKLY_XML;
    makeObservable(this);
  }

  @action setBlocklyXml(workspace: WorkspaceSvg): void {
    this.blocklyWorkspace = workspace;
    console.log("workspace: ", workspace);
    const generated = karolGenerator.workspaceToCode(workspace);
    console.log("Generated: ", generated);
    this.sourceCode = generated;
  }

  @action setInterrupted(interrupted: boolean): void {
    this.interruptExecution = interrupted;
    this.executionState = interrupted ? "halt" : this.stepper !== undefined ? "läuft" : "-";
  }

  /** prepare program start, keep execution state globally */
  @action start(karol: KarolModel): boolean {
    try {
      const treeOrError: ParserRuleContext | string = parseKarol(this.sourceCode);
      if (typeof treeOrError !== "string") {
        this.stepper = executeSteps(treeOrError, karol);
        console.log("Programm wurde gestartet");
        this.setInterrupted(false);
      } else {
        alert("Das Programm enthält Syntaxfehler:\n" + treeOrError);
      }
      return typeof treeOrError !== "string";
    } catch (e) {
      alert(e);
      this.stepper = undefined;
      this.setInterrupted(false);
      return false;
    }
  }

  /** interrupt program execution, can be continued by one of the run buttons */
  @action pause(): void {
    if (this.stepper !== undefined) {
      this.setInterrupted(true);
    } else {
      alert("Programm läuft nicht, daher ist Unterbrechen nicht möglich");
    }
  }

  /** remove program execution context, interrupt running program */
  @action stop(): void {
    if (this.stepper !== undefined) {
      console.log("Das Programm wurde gestoppt");
      this.stepper = undefined;
      this.setInterrupted(false);
    } else {
      alert("Programm läuft nicht, daher ist Stoppen nicht möglich");
    }
  }

  @action run(
    waitTime: number | undefined,
    karol: KarolModel,
    selectCurrentStatement: (selectionStart: number, selectionEnd: number) => void,
    singleStep: boolean = false
  ) {
    this.setInterrupted(false);
    if (this.stepper === undefined) {
      const started = this.start(karol);
      if (!started) {
        return;
      }
    }
    // must be defined here
    const doStep = () => {
      if (!this.interruptExecution && this.stepper !== undefined) {
        const stepper = this.stepper!;
        try {
          let result: IteratorResult<StepResult> = stepper.next();
          if (!result.done && result.value?.source !== undefined) {
            const sourceRange = result.value.source;
            const selectionStart = getColOfLineIndex(this.sourceCode, sourceRange.startLine, sourceRange.startCol);
            const selectionEnd = getColOfLineIndex(this.sourceCode, sourceRange.endLine, sourceRange.endCol);
            selectCurrentStatement(selectionStart, selectionEnd);
            if (!singleStep) {
              waitTime !== undefined ? setTimeout(doStep, waitTime) : doStep();
            } else {
              this.setInterrupted(true);
            }
          } else {
            console.log("Programm wurde beendet");
            this.stepper = undefined;
            this.setInterrupted(false);
          }
        } catch (e) {
          alert(e);
          this.stepper = undefined;
          this.setInterrupted(false);
          return false;
        }
      }
    };
    doStep();
  }

  @action
  async load() {
    const blob = await fileOpen({
      mimeTypes: ["application/json"],
      extensions: [".karol", ".json"],
      description: "Karol Code",
    });
    // Use actions to avoid MobX strict mode violations
    this.fileName = blob.name;
    const result = JSON.parse(await blob.text());
    this.sourceCode = result.text;
    if (this.blocklyWorkspace !== undefined && result.blockly !== undefined) {
      this.blocklyWorkspace.clear();
      // XML format
      console.log("Loading from XML format:", result.blockly);
      this.blocklyXml = result.blockly;
      const dom = Blockly.utils.xml.textToDom(result.blockly);
      Blockly.Xml.domToWorkspace(dom, this.blocklyWorkspace as any);
    }
  }

  @action
  async save() {
    const jsonObject: { blockly?: string; text: string } = { text: this.sourceCode };
    if (this.blocklyWorkspace) {
      jsonObject.blockly = (Blockly as any).Xml.domToText((Blockly as any).Xml.workspaceToDom(this.blocklyWorkspace));
    }
    const blob = new Blob([JSON.stringify(jsonObject)], { type: "application/json" });
    const handle: FileSystemHandle | null = await fileSave(blob, {
      fileName: this.fileName,
      extensions: [".karol"],
    });
    if (handle !== null) {
      // Use action to avoid MobX strict mode violations
      this.fileName = handle.name;
    }
  }

  @action clear(): void {
    this.sourceCode = "";
    if (this.blocklyWorkspace !== undefined) {
      this.blocklyWorkspace.clear();
    }
  }

  @action disposeBlocklyWorkspace() {
    this.blocklyWorkspace = undefined;
  }

  @action setSourceCode(sourceCode: string): void {
    this.sourceCode = sourceCode;
    console.log("New Source: ", this.sourceCode);
  }

  @action initializeBlocklyWorkspace(): void {
    if (!this.blocklyXml || this.blocklyXml.trim() === "") {
      // Initialize with example XML
      this.blocklyXml = INITIAL_BLOCKLY_XML;
    }
  }

  @action setBlocklyXmlFromReact(xml: string): void {
    this.blocklyXml = xml;
  }
}
