import React, {ReactElement} from 'react'
import {FieldType, WorldModel} from "../models/WorldModel";
import {observer} from "mobx-react";
import {Canvas} from "@react-three/fiber";
// @ts-ignore
import {GizmoHelper, GizmoViewcube, Line, Plane} from "@react-three/drei";
import {Brick} from "./Brick";
import {TextureLoader} from "three";
import dirt from "../assets/dirt.jpg";
import grass from "../assets/grass.jpg";
import karol from "../assets/karol.jpg";

const DirtTexture = new TextureLoader().load(dirt);
const GrassTexture = new TextureLoader().load(grass);
const KarolTexture = new TextureLoader().load(karol);
const PI = 3.1415926;
function mapField(content: FieldType, position: [number, number, number]) {
    let result;
    const key = `${position[0]}_${position[1]}_${position[2]}`;
    switch (content) {
        case FieldType.grassBlock:
            result = <Brick key={key} position={position} texture={GrassTexture} heightUnits={0.5}/>;
            break;
        case FieldType.dirtBlock:
            result = <Brick key={key} position={position} texture={DirtTexture} heightUnits={0.5}/>;
            break;
        case FieldType.karol:
            result = <Brick key={key} position={position} texture={KarolTexture} heightUnits={2}/>;
            break;
        case FieldType.wall:
            result = <Brick key={key} position={position} color="gray" heightUnits={10}/>;
            break;
        case FieldType.empty:
            result = null; // <Brick position={position} color="none" opacity={0}/>;
            break;
        default:
            result = null;
            break;
    }
    return result;
}

const DashedLine = (props: { from: [number, number, number], to: [number, number, number], color: string }) => <Line
    points={[props.from, props.to]}       // Array of points
    color={props.color}// Default
    lineWidth={1}                   // In pixels (default)
    dashed={true}
    dashSize={1}
    dashScale={10}
    dashOffset={1}
/>

declare function Plane(props: any): any;

function World3DInternal(props: { model: WorldModel }): ReactElement<typeof props> {
    const range = [];
    for(let i = 0; i < 11; i++){
        range.push(i);
    }
    return <div style={{width:800, height:800, border: "solid black 1px"}}><Canvas shadows={true} camera={{position:[5,5,5], zoom:48}} orthographic>
        {/*<OrthographicCamera makeDefault zoom={20} position={[0,10,0]} rotation={[0,0,0]}/>*/}
        <group position={[-5,-5,-5]}>
            <ambientLight key="l1" intensity={0.3}/>
            <pointLight key="l2" castShadow intensity={0.8} position={[100, 100, 100]}/>
            { range.map(z =><DashedLine key={"gridz" + z} from={[0, 0, z]} to={[10, 0, z]} color="green"/>)}
            { range.map(x =><DashedLine key={"gridx" + x} from={[x, 0, 0]} to={[x, 0, 10]} color="green"/>)}
            <DashedLine key="gridy" from={[0, 0, 0]} to={[0, 10, 0]} color="blue"/>
            <Plane key="p1" args={[10, 10]} position={[-10, -5, -5]} rotation={[0, PI/2, 0]}>
               <meshPhongMaterial attach="material" color="lightblue"/>
            </Plane>
            <Plane key="p2" args={[10, 10]} position={[5, 5, 0]} rotation={[0, 0, 0]}>
                <meshPhongMaterial attach="material" color="lightblue"/>
            </Plane>
            {
                props.model.asFields().map(fieldInfo => mapField(fieldInfo.content, [fieldInfo.x, fieldInfo.y/2.0, fieldInfo.z]))
            }
            <GizmoHelper alignment="bottom-right" margin={[50, 50]} >
                <GizmoViewcube/>
            </GizmoHelper>
        </group>
    </Canvas></div>;
}

/**
 * export the mobx reactified component
 */
export const World3D = observer(World3DInternal);