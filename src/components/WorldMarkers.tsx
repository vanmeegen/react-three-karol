import { observer } from "mobx-react";
import { WorldModel } from "../models/WorldModel";
import { Brick } from "./Brick";
import { Color, coordToKey } from "../models/CommonTypes";
import React from "react";

// map color enum values to their keys, keys are the color names accepted by Three.js
const ColorMap: Map<string, string> = new Map();
Object.entries(Color).forEach(([key, value]) => ColorMap.set(value, key));

export const WorldMarkers = observer((props: { model: WorldModel }) => {
  const list = props.model.markers;
  // console.log("rendering " + list.length + " markers");
  return (
    <>
      {list.map((markerInfo) => (
        <Brick
          key={coordToKey(markerInfo.position)}
          position={[markerInfo.position.x, markerInfo.position.y / 2.0, markerInfo.position.z]}
          heightUnits={0.1}
          color={ColorMap.get(markerInfo.color)}
        />
      ))}
    </>
  );
});
