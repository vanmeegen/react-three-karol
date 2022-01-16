import * as THREE from "three";
import React, {useRef} from "react";
import {observer} from "mobx-react";

function BrickInternal<T>(props: any|{texture: any}) {
    const meshRef = useRef<THREE.Mesh>(null);

    return <mesh ref={meshRef} {...props}>
        {[...Array(6)].map((_, index) => (
            <meshStandardMaterial
                attachArray="material"
                map={props.texture}
                key={index}
                color={props.color ?? "white"}
                opacity={props.opacity ?? 1}
            />
        ))}
        <boxBufferGeometry attach="geometry"/>
    </mesh>;
}

export const Brick = observer(BrickInternal);
