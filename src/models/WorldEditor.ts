import { action } from "mobx";
import { WorldModel } from "./WorldModel";
import { KarolModel } from "./KarolModel";
import { Color, Coord3d, FieldType } from "./CommonTypes";

/**
 * editing operations on the world which are triggered from the world toolbar,
 * always operating relative to Karol's current position
 */
export class WorldEditor {
  constructor(
    private world: WorldModel,
    private karol: KarolModel
  ) {}

  /** toggle the marker on the field Karol stands on */
  toggleMarker = action(() => {
    const position = this.karol.position;
    if (this.world.getMarker(position)) {
      this.world.deleteMarker(position);
    } else {
      this.world.setMarker(position, Color.yellow);
    }
  });

  /** put a wall block on the field in front of Karol */
  setQuader = action(() => {
    const position = this.karol.nextPosition;
    position.y = 0;
    if (this.world.getFieldByCoord(position) === FieldType.empty) {
      this.world.setFieldByCoord(position, FieldType.wall);
    }
  });

  /** remove a wall block from the field in front of Karol */
  deleteQuader = action(() => {
    const position = this.karol.nextPosition;
    position.y = 0;
    if (this.world.isValid(position) && this.world.getFieldByCoord(position) === FieldType.wall) {
      this.world.setFieldByCoord(position, FieldType.empty);
    }
  });

  /** empty the world and put Karol back to the start position */
  reset = action(() => {
    this.world.reset();
    this.karol.reset();
  });

  /** resize the world to the given dimensions, resetting world content and Karol */
  resize = action((dimensions: Coord3d) => {
    this.world.init(dimensions.x, dimensions.y, dimensions.z);
    this.karol.reset();
  });
}
