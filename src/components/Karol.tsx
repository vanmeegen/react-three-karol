import React, { FunctionComponent, Suspense } from "react";
import { observer } from "mobx-react";
import { KarolModel } from "../models/KarolModel";
import Robot3D, { DIRECTION_PARAMS as P0 } from "./modelwrapper/Robot3D";
import Troll3D, { DIRECTION_PARAMS as P1 } from "./modelwrapper/Troll3D";
import Puppet3D, { DIRECTION_PARAMS as P2 } from "./modelwrapper/Puppet3D";
import { ModelOffset } from "./modelwrapper/ModelOffset";
import { Object3DNode } from "@react-three/fiber";

const MODELS: [FunctionComponent<Object3DNode<any, any>>, ModelOffset[]][] = [
  [Robot3D, P0],
  [Troll3D, P1],
  [Puppet3D, P2],
];

export const Karol = observer(
  (props: { position: [number, number, number]; karol: KarolModel; color?: string; opacity?: number }) => {
    const [Model, PARAMS] = MODELS[props.karol.figureIndex];
    const d = PARAMS[props.karol.direction];
    return (
      <Suspense fallback={null}>
        <Model
          key="karol"
          position={[props.position[0] + d.dx, props.position[1] + d.dy, props.position[2] + d.dz]}
          rotation={[0, d.rotation, 0]}
        />
      </Suspense>
    );
  }
);
