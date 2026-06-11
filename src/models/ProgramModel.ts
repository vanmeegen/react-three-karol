import { action, makeObservable, observable } from "mobx";
import { WorkspaceSvg } from "react-blockly";
import * as Blockly from "blockly";
import { ParserRuleContext } from "antlr4ng";
import { parseKarol } from "../parser/KarolParserFacade";
import { executeSteps, SourceLineRange } from "../interpreter/KarolInterpreterGenerator";
import { fileOpen, fileSave } from "browser-fs-access";
import { KarolModel } from "./KarolModel";
import { karolGenerator } from "../blockly/CustomBlocks";
import { INITIAL_BLOCKLY_XML } from "../data/BurgExample";
import { ProgramExecutor } from "./ProgramExecutor";

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
  @observable.ref executor: ProgramExecutor | undefined = undefined;
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
    this.sourceCode = karolGenerator.workspaceToCode(workspace);
  }

  @action setInterrupted(interrupted: boolean): void {
    this.interruptExecution = interrupted;
    this.executionState = interrupted ? "halt" : this.executor !== undefined ? "läuft" : "-";
  }

  /**
   * parse the program and create an executor for it
   * @param karol model the program operates on
   * @param selectCurrentStatement called with the source selection of every executed statement
   */
  @action start(karol: KarolModel, selectCurrentStatement: (selectionStart: number, selectionEnd: number) => void): boolean {
    try {
      const treeOrError: ParserRuleContext | string = parseKarol(this.sourceCode);
      if (typeof treeOrError === "string") {
        alert("Das Programm enthält Syntaxfehler:\n" + treeOrError);
        return false;
      }
      this.executor = new ProgramExecutor(executeSteps(treeOrError, karol), {
        onStep: (range: SourceLineRange) => {
          const selectionStart = getColOfLineIndex(this.sourceCode, range.startLine, range.startCol);
          const selectionEnd = getColOfLineIndex(this.sourceCode, range.endLine, range.endCol);
          selectCurrentStatement(selectionStart, selectionEnd);
        },
        onPause: action(() => this.setInterrupted(true)),
        onFinished: action(() => {
          this.executor = undefined;
          this.setInterrupted(false);
        }),
        onError: action((e: unknown) => {
          alert(e);
          this.executor = undefined;
          this.setInterrupted(false);
        }),
      });
      this.setInterrupted(false);
      return true;
    } catch (e) {
      alert(e);
      this.executor = undefined;
      this.setInterrupted(false);
      return false;
    }
  }

  /** interrupt program execution, can be continued by one of the run buttons */
  @action pause(): void {
    if (this.executor !== undefined) {
      this.executor.pause();
      this.setInterrupted(true);
    } else {
      alert("Programm läuft nicht, daher ist Unterbrechen nicht möglich");
    }
  }

  /** remove program execution context, interrupt running program */
  @action stop(): void {
    if (this.executor !== undefined) {
      this.executor.pause();
      this.executor = undefined;
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
    if (this.executor === undefined && !this.start(karol, selectCurrentStatement)) {
      return;
    }
    this.executor!.run(waitTime, singleStep);
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
