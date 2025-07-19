// noinspection RequiredAttributes
import React from "react";
import { observer } from "mobx-react";
import { RoundedBox } from "@react-three/drei";

function BrickInternal<T>(props: any | { texture: any; heightUnits: number }) {
  return (
    <RoundedBox
      position={[props.position[0] + 0.5, props.position[1] + 0.5 * props.heightUnits, props.position[2] + 0.5]}
      scale={[1, props.heightUnits, 1]}
      radius={0.15}
    >
      {[...Array(6)].map((_, index) => (
        <meshStandardMaterial
          attach={`material-${index}`}
          map={props.texture}
          key={index}
          color={props.color ?? "white"}
          opacity={props.opacity ?? 1}
          roughness={0.1}
          metalness={0.5}
        />
      ))}
    </RoundedBox>
  );
}

export const Brick = observer(BrickInternal);
