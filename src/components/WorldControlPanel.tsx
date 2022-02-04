import { WorldModel } from "../models/WorldModel";
import { action } from "mobx";
import { KarolModel } from "../models/KarolModel";
import { Color, Coord3d, FieldType } from "../models/CommonTypes";
import { useState } from "react";
import { WorldSettingsDialog } from "./WorldSettingsDialog";

function handleError(f: () => void): () => void {
  return () => {
    try {
      f();
    } catch (e) {
      alert("Error" + e);
    }
  };
}

export function WorldControlPanel(props: { world: WorldModel; karol: KarolModel }) {
  const [isOpen, setOpen] = useState(false);

  function reset() {
    props.world.reset();
    props.karol.reset();
  }

  function toggleMarker() {
    const position = props.karol.position;
    if (props.world.getMarker(position)) {
      props.world.deleteMarker(position);
    } else {
      props.world.setMarker(position, Color.yellow);
    }
  }

  function handleWorldSettings() {
    setOpen(true);
  }

  function handleClose(newDimensions: Coord3d) {
    props.world.init(newDimensions.x, newDimensions.y, newDimensions.z);
    props.karol.reset();
    setOpen(false);
  }

  function setQuader() {
    const position = props.karol.nextPosition;
    if (props.world.getFieldByCoord(position) === FieldType.empty) {
      props.world.setFieldByCoord(position, FieldType.wall);
    }
  }

  function deleteQuader() {
    const position = props.karol.nextPosition;
    if (props.world.isValid(position) && props.world.getFieldByCoord(position) === FieldType.wall) {
      props.world.setFieldByCoord(position, FieldType.empty);
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <WorldSettingsDialog
        onClose={handleClose}
        dimensions={props.world.dimensions}
        open={isOpen}
        onCancel={() => setOpen(false)}
      />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button onClick={handleError(() => props.karol.turnLeft())}>&larr;</button>
        <button onClick={handleError(() => props.karol.move())}>&uarr;</button>
        <button onClick={handleError(() => props.karol.turnRight())}>&rarr;</button>
        <button onClick={handleError(() => props.karol.layBrick())}>H</button>
        <button onClick={handleError(() => props.karol.pickupBrick())}>A</button>
        <button onClick={handleError(action(toggleMarker))}>M</button>
        <button onClick={handleError(action(setQuader))}>Q</button>
        <button onClick={handleError(action(deleteQuader))}>E</button>
        <button onClick={handleWorldSettings}>Einstellungen</button>
        <button onClick={handleError(reset)}>Zurücksetzen</button>
      </div>
    </div>
  );
}
