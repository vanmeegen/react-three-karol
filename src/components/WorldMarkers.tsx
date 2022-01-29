import { observer } from "mobx-react";
import { WorldModel } from "../models/WorldModel";
import { Brick } from "./Brick";
import { coordToKey } from "../models/CommonTypes";
import React from "react";

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
          color={markerInfo.color}
        />
      ))}
    </>
  );
});
