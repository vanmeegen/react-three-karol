import {WorldModel} from "../models/WorldModel";

function handleError(f: () => void): () => void {
    return () => {
        try {
            f();
        } catch (e){
            alert("Error" + e);
        }
    }

}
export function ControlPanel(props: { world: WorldModel, defaultValue: string }) {
    function move() {
        props.world.moveKarol();
    }

    function left() {
        props.world.turnKarolLeft();
    }

    function right() {
        props.world.turnKarolRight();
    }

    function run() {
        alert("Not yet implemented! Check back in 2 weeks");
    }

    return <div style={{display: "flex", flexDirection: "column"}}>
        <div style={{display: "flex", flexDirection: "row"}}>
            <button onClick={handleError(run)}>Run</button>
            <button onClick={handleError(move)}>move</button>
            <button onClick={handleError(left)}>turn left</button>
            <button onClick={handleError(right)}>turn right</button>
        </div>

        <textarea style={{border: "solid black 1px", minWidth: "40em", flexGrow: 1}} defaultValue={props.defaultValue}/>
    </div>;
}
