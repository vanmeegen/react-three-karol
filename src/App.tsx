import "./App.css";
import { World3D } from "./components/World3D";
import { WorldModel } from "./models/WorldModel";
import { WorldControlPanel } from "./components/WorldControlPanel";
import { ProgramControlPanel } from "./components/ProgramControlPanel";
import { KarolModel } from "./models/KarolModel";
import { ProgramModel } from "./models/ProgramModel";
import { INITIAL_SOURCE_EXAMPLE } from "./data/BurgExample";
import { version } from "../package.json";

const world = new WorldModel(10, 10, 10);
const karol = new KarolModel(world);

const programModel = new ProgramModel(INITIAL_SOURCE_EXAMPLE);

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div/>
        <div className="App-headline">Karol Online V{version}</div>
        <div className="App-copyright">by Samuel and Marco van Meegen &copy;2022</div>
      </div>
      <div className="Main">
        <ProgramControlPanel model={karol} program={programModel} />
        <div>
          <WorldControlPanel karol={karol} world={world} />
          <World3D world={world} karol={karol} />
        </div>
      </div>
    </div>
  );
}

export default App;
