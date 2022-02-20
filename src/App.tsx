import "./App.css";
import { World3D } from "./components/World3D";
import { WorldModel } from "./models/WorldModel";
import { WorldControlPanel } from "./components/WorldControlPanel";
import { ProgramControlPanel } from "./components/ProgramControlPanel";
import { KarolModel } from "./models/KarolModel";

const world = new WorldModel(10, 10, 10);
const karol = new KarolModel(world);

function App() {
  const exampleProgram = `{Karol baut 'ne Burg}
wiederhole 72 mal
    Schritt
    LinksDrehen
    Hinlegen
    RechtsDrehen
    wenn IstWand dann
        LinksDrehen
        Aufheben
    endewenn
endewiederhole
`;
  return (
    <div className="App">
      <div className="App-header">
        <h1 style={{ fontSize: "1.4em" }}>Karol Online</h1>
        <div>by Samuel and Marco van Meegen 2022</div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", columns: 2 }}>
        <ProgramControlPanel model={karol} world={world} defaultValue={exampleProgram} />
        <div>
          <World3D world={world} karol={karol} />
          <WorldControlPanel karol={karol} world={world} />
        </div>
      </div>
    </div>
  );
}

export default App;
