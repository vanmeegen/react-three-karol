// do not change number because calculations are based on these
import { makeObservable, observable } from "mobx";
import { Color, Coord3D, FieldType, WorldModel } from "./WorldModel";

export enum Direction {
  North = 0,
  East = 1,
  South = 2,
  West = 3,
}

const OFFSETS = {
  [Direction.North]: { x: 0, z: -1 },
  [Direction.East]: { x: 1, z: 0 },
  [Direction.South]: { x: 0, z: 1 },
  [Direction.West]: { x: -1, z: 0 },
};

export class KarolModel {
  public position: Coord3D = { x: 0, y: 0, z: 0 };
  public direction: Direction = Direction.South;

  constructor(private world: WorldModel) {
    makeObservable(this, {
      position: observable,
      direction: observable,
    });
    this.reset();
  }

  public reset(): void {
    this.world.setFieldByCoord(this.position, FieldType.empty);
    this.position = { x: 0, y: 0, z: 0 };
    this.direction = Direction.South;
    this.world.setFieldByCoord(this.position, FieldType.karol);
  }

  moveKarol(): Coord3D {
    const nextPosition = this.nextPosition;
    this.world.validateNextPosition(nextPosition, true);
    this.world.setFieldByCoord(this.position, FieldType.empty);
    this.position = nextPosition;
    this.world.setFieldByCoord(nextPosition, FieldType.karol);
    // console.log("moved");
    return nextPosition;
  }

  /**
   * @return the next position Karol would take when moving forward
   */
  public get nextPosition(): Coord3D {
    const { x, y, z } = this.position;
    const offset = OFFSETS[this.direction];
    return { x: x + offset.x, y, z: z + offset.z };
  }

  turnKarolLeft(): Direction {
    this.direction = (4 + this.direction - 1) % 4;
    // console.log("turned left");
    return this.direction;
  }

  turnKarolRight(): Direction {
    this.direction = (this.direction + 1) % 4;
    // console.log("turned right");
    return this.direction;
  }

  layBrick() {
    const nextPosition = this.nextPosition;
    if (this.world.isValid(nextPosition)) {
      // move up if bricks are stacked
      while (this.world.getFieldByCoord(nextPosition) === FieldType.brick && this.world.isValid(nextPosition)) {
        nextPosition.y++;
      }
      if (this.world.isValid(nextPosition)) {
        const fieldType = this.world.getFieldByCoord(nextPosition);
        if (fieldType === FieldType.empty) {
          this.world.setFieldByCoord(nextPosition, FieldType.brick);
        } else if (fieldType === FieldType.wall) {
          throw Error("Karol kann nicht hinlegen, er steht vor einem Quader.");
        } else if (fieldType === FieldType.brick) {
          throw Error("Karol kann nicht hinlegen, die maximale Stapelhöhe ist erreicht.");
        } else {
          throw Error("Huch? Das dürfte da aber nicht sein");
        }
      }
    } else {
      throw Error("Karol kann nicht hinlegen, er steht vor der Wand.");
    }
  }

  pickupBrick() {
    const nextPosition = this.nextPosition;
    if (this.world.isValid(nextPosition)) {
      // move up if bricks are stacked
      let lastBrickPosition = undefined;
      while (this.world.getFieldByCoord(nextPosition) === FieldType.brick && this.world.isValid(nextPosition)) {
        lastBrickPosition = { ...nextPosition };
        nextPosition.y++;
      }
      if (lastBrickPosition) {
        this.world.setFieldByCoord(lastBrickPosition, FieldType.empty);
      } else {
        throw Error("Da ist kein Ziegel");
      }
    }
  }

  setMarker(position: Coord3D, color: Color): void {
    this.world.setMarker(position, color);
  }

  getMarker(position: Coord3D): Color | undefined {
    return this.world.getMarker(position);
  }

  deleteMarker(position: Coord3D): void {
    this.world.deleteMarker(position);
  }

  getNextFieldType(): FieldType {
    return this.world.isValid(this.nextPosition) ? this.world.getFieldByCoord(this.nextPosition) : FieldType.wall;
  }
}
