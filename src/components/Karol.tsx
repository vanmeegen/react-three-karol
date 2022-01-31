import React, { FunctionComponent, Suspense } from "react";
import { observer } from "mobx-react";
import { KarolModel } from "../models/KarolModel";
import Robot3D, { DIRECTION_PARAMS as P0 } from "./modelwrapper/Robot3D";
import Dracula3D, { DIRECTION_PARAMS as P1 } from "./modelwrapper/Dracula3D";
import Weltraumwesen3D, { DIRECTION_PARAMS as P2 } from "./modelwrapper/Weltraumwesen3D";
import Saxophonist3D, { DIRECTION_PARAMS as P3 } from "./modelwrapper/Saxophonist3D";
import Puppet3D, { DIRECTION_PARAMS as P4 } from "./modelwrapper/Puppet3D";
import { ModelOffset } from "./modelwrapper/ModelOffset";
import { Object3DNode } from "@react-three/fiber";

const FIGURES: [FunctionComponent<Object3DNode<any, any>>, ModelOffset[]][] = [
  [Robot3D, P0],
  [Dracula3D, P1],
  [Weltraumwesen3D, P2],
  [Saxophonist3D, P3],
  [Puppet3D, P4],
];

export const Karol = observer(
  (props: { position: [number, number, number]; karol: KarolModel; color?: string; opacity?: number }) => {
    // console.log("Rendering Karol");
    const [Model, PARAMS] = FIGURES[props.karol.figureIndex];
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
