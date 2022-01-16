import React, {ReactElement, useRef} from 'react'
import {FieldType, WorldModel} from "../models/WorldModel";
import {observer} from "mobx-react";
import {Canvas, useFrame} from "@react-three/fiber";
import {GizmoHelper, GizmoViewcube, Line, OrthographicCamera, PerspectiveCamera, Plane, Sky} from "@react-three/drei";
import {Brick} from "./Brick";
import {TextureLoader} from "three";
import dirt from "../assets/dirt.jpg";
import grass from "../assets/grass.jpg";
import karol from "../assets/karol.jpg";
import * as THREE from "three";

const DirtTexture = new TextureLoader().load(dirt);
const GrassTexture = new TextureLoader().load(grass);
const KarolTexture = new TextureLoader().load(karol);
const PI = 3.1415926;
function mapField(content: FieldType, position: [number, number, number]) {
    let result;
    const key = `${position[0]}_${position[1]}_${position[2]}`;
    switch (content) {
        case FieldType.grassBlock:
            result = <Brick key={key} position={position} texture={GrassTexture} height={0.5}/>;
            break;
        case FieldType.dirtBlock:
            result = <Brick key={key} position={position} texture={DirtTexture} height={0.5}/>;
            break;
        case FieldType.karol:
            result = <Brick key={key} position={position} texture={KarolTexture}/>;
            break;
        case FieldType.wall:
            result = <Brick key={key} position={position} color="gray"/>;
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
    lineWidth={3}                   // In pixels (default)
    dashed={true}
    dashSize={1}
    dashScale={10}
    dashOffset={1}
/>

function World3DInternal(props: { model: WorldModel }): ReactElement<typeof props> {
    return <Canvas shadows={true} gl={{alpha: true}} camera={{position:[5,5,5], zoom:45}} orthographic>
        {/*<OrthographicCamera makeDefault zoom={20} position={[0,10,0]} rotation={[0,0,0]}/>*/}
        <group position={[-5,-5,-5]}>
            <Sky sunPosition={[100, 20, 100]}/>
            <ambientLight intensity={0.3}/>
            <pointLight castShadow intensity={0.8} position={[100, 100, 100]}/>
            <DashedLine from={[0, 0, 0]} to={[10, 0, 0]} color="green"/>
            <DashedLine from={[0, 0, 0]} to={[0, 10, 0]} color="blue"/>
            <DashedLine from={[0, 0, 0]} to={[0, 0, 10]} color="red"/>
            <Plane args={[10, 10]} position={[-10, -5, -5]} rotation={[0, PI/2, 0]}>
               <meshPhongMaterial attach="material" color="#f3f3f3" wireframe/>
            </Plane>
            <Plane args={[10, 10]} position={[0, -5, 0]} rotation={[PI/2, 0, 0]}>
                <meshPhongMaterial attach="material" color="#f3f3f3" wireframe/>
            </Plane>
            {
                props.model.asFields().map(fieldInfo => mapField(fieldInfo.content, [fieldInfo.x, fieldInfo.y, fieldInfo.z]))
            }
            <GizmoHelper alignment="bottom-right" margin={[50, 50]} >
                <GizmoViewcube/>
            </GizmoHelper>
        </group>
    </Canvas>;
}

/**
 * export the mobx reactified component
 */
export const World3D = observer(World3DInternal);
