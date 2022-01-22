import "./App.css";
import { World3D } from "./components/World3D";
import { WorldModel } from "./models/WorldModel";
import { ControlPanel } from "./components/ControlPanel";

const world = new WorldModel();

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
        <h1>Karol Online</h1>
        <div>by Marco van Meegen 2022</div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", columns: 2 }}>
        <ControlPanel world={world} defaultValue={exampleProgram} />
        <World3D model={world} />
      </div>
    </div>
  );
}

export default App;
