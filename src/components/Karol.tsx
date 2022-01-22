import * as THREE from "three";
import {TextureLoader} from "three";
import React, {useRef} from "react";
import {observer} from "mobx-react";
import karolFront from "../assets/karolFront.jpg";
import karolLeft from "../assets/karolLeft.jpg";
import karolRight from "../assets/karolRight.jpg";
import grass from "../assets/grass.jpg";
import {KarolModel} from "../models/WorldModel";

const tFront = new TextureLoader().load(karolFront);
const tLeft = new TextureLoader().load(karolLeft);
const tRight = new TextureLoader().load(karolRight);
const t = new TextureLoader().load(grass);

/**
 * sideFromDirection[direction] is the front side index of the robot if facing to the given direction
 * Textures: 0=right, 1=left, 2=top, 3=bottom, 4=front, 5=back
 */
const texturesForDirection = [
    [tRight, tLeft, t,t,t,tFront],
    [tFront, t, t,t,tRight,tLeft],
    [tLeft, tRight, t,t,tFront,t],
    [t, tFront, t,t,tLeft,tRight],
];

function KarolInternal<T>(props: { position: [number, number, number], karol: KarolModel, color?: string, opacity?: number }) {
    console.log("Rendering Karol");
    const meshRef = useRef<THREE.Mesh>(null);
    return <mesh ref={meshRef} {...props}
                 position={[props.position[0] + 0.5, props.position[1] + 1, props.position[2] + 0.5]}>
        {[...Array(6)].map((_, index) => (<meshStandardMaterial
                        attachArray="material"
                        map={texturesForDirection[props.karol.direction][index]}
                        key={index}
                        color={props.color ?? "white"}
                        opacity={props.opacity ?? 1}
                    />))
        }
        <boxBufferGeometry attach="geometry" args={[1, 2, 1]}/>
    </mesh>;
}

export const Karol = observer(KarolInternal);
