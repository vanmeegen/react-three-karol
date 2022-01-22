import { Color, FieldType, WorldModel } from "../models/WorldModel";
import { action } from "mobx";

function handleError(f: () => void): () => void {
  return () => {
    try {
      f();
    } catch (e) {
      alert("Error" + e);
    }
  };
}

export function ControlPanel(props: { world: WorldModel }) {
  function toggleMarker() {
    const position = props.world.getKarol().position;
    if (props.world.getMarker(position)) {
      props.world.deleteMarker(position);
    } else {
      props.world.setMarker(position, Color.yellow);
    }
  }

  function setQuader() {
    const position = props.world.getKarol().nextPosition;
    if (props.world.isValid(position) && props.world.getFieldByCoord(position) === FieldType.empty) {
      props.world.setFieldByCoord(position, FieldType.wall);
    }
  }

  function deleteQuader() {
    const position = props.world.getKarol().nextPosition;
    if (props.world.isValid(position) && props.world.getFieldByCoord(position) === FieldType.wall) {
      props.world.setFieldByCoord(position, FieldType.empty);
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button onClick={handleError(() => props.world.turnKarolLeft())}>&larr;</button>
        <button onClick={handleError(() => props.world.moveKarol())}>&uarr;</button>
        <button onClick={handleError(() => props.world.turnKarolRight())}>&rarr;</button>
        <button onClick={handleError(() => props.world.layBrick())}>H</button>
        <button onClick={handleError(() => props.world.pickupBrick())}>A</button>
        <button onClick={handleError(action(toggleMarker))}>M</button>
        <button onClick={handleError(action(setQuader))}>Q</button>
        <button onClick={handleError(action(deleteQuader))}>E</button>
      </div>
    </div>
  );
}
