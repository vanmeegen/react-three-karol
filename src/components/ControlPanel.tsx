import {WorldModel} from "../models/WorldModel";
import {ParserRuleContext} from "antlr4";
import {parseKarol} from "../parser/KarolParserFacade";
import {ChangeEvent, useState} from "react";
import {execute} from "../models/KarolInterpreter";

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
    const [program, setProgram] = useState(props.defaultValue);
    function onTextChanged(evt: ChangeEvent<HTMLTextAreaElement>) {
        setProgram(evt.target.value);
    }

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
        const tree: ParserRuleContext | undefined = parseKarol(program);
        if (tree){
            execute(tree, props.world);
        } else {
            alert("Program contains Syntax Errors");
        }
    }

    return <div style={{display: "flex", flexDirection: "column"}}>
        <div style={{display: "flex", flexDirection: "row"}}>
            <button onClick={handleError(run)}>Run</button>
            <button onClick={handleError(move)}>move</button>
            <button onClick={handleError(left)}>turn left</button>
            <button onClick={handleError(right)}>turn right</button>
        </div>

        <textarea style={{border: "solid black 1px", minWidth: "40em", flexGrow: 1}} value={program} onChange={onTextChanged}/>
    </div>;
}
