import './App.css'
import {World3D} from "./components/World3D";
import {WorldModel} from "./models/WorldModel";

const model = new WorldModel();

function App() {
    const value = `BEGINNING-OF-PROGRAM
DEFINE turnright AS
 BEGIN
   turnleft
   turnleft
   turnleft
 END

 BEGINNING-OF-EXECUTION
   ITERATE 3 TIMES
     turnright

   turnoff
 END-OF-EXECUTION
END-OF-PROGRAM
`;
    return (
        <div className="App">
            <div className="App-header"><h1>Karol Online</h1>
                <div>by Marco van Meegen 2022</div>
            </div>
            <div style={{display: "flex", flexDirection: "row", columns:2}}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <button onClick={() =>alert("Not yet implemented! Come back in a week!")}>Run</button>
                    <textarea style={{border: "solid black 1px", minWidth: "40em", flexGrow: 1}} defaultValue={value}/>
                </div>
                <World3D model={model}/>
            </div>
        </div>
    )
}

export default App
