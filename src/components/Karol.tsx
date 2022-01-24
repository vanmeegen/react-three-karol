import React, { Suspense } from "react";
import { observer } from "mobx-react";
import { KarolModel } from "../models/KarolModel";
import Robot3D, { DIRECTION_PARAMS } from "./modelwrapper/Robot3D";

function KarolInternal<T>(props: {
  position: [number, number, number];
  karol: KarolModel;
  color?: string;
  opacity?: number;
}) {
  const d = DIRECTION_PARAMS[props.karol.direction];
  return (
    <Suspense fallback={null}>
      <Robot3D
        key="karol"
        position={[props.position[0] + d.dx, props.position[1] + d.dy, props.position[2] + d.dz]}
        rotation={[0, d.rotation, 0]}
      />
    </Suspense>
  );
}

export const Karol = observer(KarolInternal);
