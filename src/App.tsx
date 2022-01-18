import './App.css'
import {World3D} from "./components/World3D";
import {WorldModel} from "./models/WorldModel";

const model = new WorldModel();

function App() {
    return (
        <div className="App">
            <p>Hello Karol the Robot!</p>
            <World3D model={model}/>
        </div>
    )
}

export default App
