import { WorldModel } from "./WorldModel";
import { KarolModel } from "./KarolModel";
import { ProgramModel } from "./ProgramModel";
import { WorldEditor } from "./WorldEditor";
import { INITIAL_SOURCE_EXAMPLE } from "../data/BurgExample";

/**
 * aggregates all application models; create one per application (or per test)
 */
export class RootStore {
  readonly world: WorldModel;
  readonly karol: KarolModel;
  readonly program: ProgramModel;
  readonly worldEditor: WorldEditor;

  constructor(sourceCode: string = INITIAL_SOURCE_EXAMPLE) {
    this.world = new WorldModel(10, 10, 10);
    this.karol = new KarolModel(this.world);
    this.program = new ProgramModel(sourceCode);
    this.worldEditor = new WorldEditor(this.world, this.karol);
  }
}
