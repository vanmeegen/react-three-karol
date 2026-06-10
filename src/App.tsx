import "./App.css";
import { useState } from "react";
import { World3D } from "./components/World3D";
import { WorldControlPanel } from "./components/WorldControlPanel";
import { ProgramControlPanel } from "./components/ProgramControlPanel";
import { RootStore } from "./models/RootStore";
import { StoreProvider } from "./StoreContext";
import { version } from "../package.json";

function App() {
  const [store] = useState(() => new RootStore());
  return (
    <StoreProvider store={store}>
      <div className="App">
        <div className="App-header">
          <div />
          <div className="App-headline">Karol Online V{version}</div>
          <div className="App-copyright">by Samuel and Marco van Meegen &copy;2022</div>
        </div>
        <div className="Main">
          <ProgramControlPanel />
          <div>
            <WorldControlPanel />
            <World3D world={store.world} karol={store.karol} />
          </div>
        </div>
      </div>
    </StoreProvider>
  );
}

export default App;
