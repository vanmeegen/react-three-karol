import "./App.css";
import { World3D } from "./components/World3D";
import { WorldModel } from "./models/WorldModel";
import { ControlPanel } from "./components/ControlPanel";
import { ProgramControlPanel } from "./components/ProgramControlPanel";
import { KarolModel } from "./models/KarolModel";

const world = new WorldModel();
const karol = new KarolModel(world);

function App() {
  const exampleProgram = `{Karol legt links neben sich eine Reihe Ziegel}
wiederhole 18 mal
    Schritt
    LinksDrehen
    Hinlegen
    RechtsDrehen
    wenn IstWand dann
        LinksDrehen
        LinksDrehen
    endewenn
endewiederhole
`;
  return (
    <div className="App">
      <div className="App-header">
        <h1 style={{ fontSize: "1.4em" }}>Karol Online</h1>
        <div>by Marco van Meegen 2022</div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", columns: 2 }}>
        <ProgramControlPanel model={karol} world={world} defaultValue={exampleProgram} />
        <div>
          <World3D model={world} karol={karol} />
          <ControlPanel karol={karol} world={world} />
        </div>
      </div>
    </div>
  );
}

export default App;
