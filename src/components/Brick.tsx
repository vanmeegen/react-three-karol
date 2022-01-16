import * as THREE from "three";
import React, {useRef} from "react";
import {observer} from "mobx-react";

function BrickInternal<T>(props: any|{texture: any;heightUnits:number}) {
    const meshRef = useRef<THREE.Mesh>(null);
    return <mesh ref={meshRef} {...props} position={[props.position[0]+0.5, props.position[1]+0.5*props.heightUnits, props.position[2]+0.5]}>
        {[...Array(6)].map((_, index) => (
            <meshStandardMaterial
                attachArray="material"
                map={props.texture}
                key={index}
                color={props.color ?? "white"}
                opacity={props.opacity ?? 1}
            />
        ))}
        <boxBufferGeometry attach="geometry" args={[1,props.heightUnits ?? 1,1]}/>
    </mesh>;
}

export const Brick = observer(BrickInternal);
