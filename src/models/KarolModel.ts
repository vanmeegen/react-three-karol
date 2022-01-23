// do not change number because calculations are based on these
import { makeObservable, observable } from "mobx";
import { WorldModel } from "./WorldModel";
import { Color, Coord3d, FieldType } from "./CommonTypes";

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

/**
 * class KarolModel implements all actions which Karol can do to the world.
 * It updates its position in the world by setting the field on Karols position to type Karol.
 * Actions which are world-specific and not carol-specific, e.g. setting markers, are delegated to the world.
 */
export class KarolModel {
  public position: Coord3d = { x: 0, y: 0, z: 0 };
  public direction: Direction = Direction.South;
  /**
   * how high/low Karol can jump in a move
   */
  private jumpHeight: number = 1;

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

  move(): Coord3d {
    const nextPosition = this.nextPosition;
    // this will check if jump is possible too
    this.validateNextPosition(nextPosition, true);
    // jump if needed
    nextPosition.y = this.world.getFirstFreeY(nextPosition.x, nextPosition.z);
    this.world.setFieldByCoord(this.position, FieldType.empty);
    this.position = nextPosition;
    this.world.setFieldByCoord(nextPosition, FieldType.karol);
    return nextPosition;
  }

  turnLeft(): Direction {
    this.direction = (4 + this.direction - 1) % 4;
    return this.direction;
  }

  turnRight(): Direction {
    this.direction = (this.direction + 1) % 4;
    return this.direction;
  }

  layBrick() {
    const nextPosition = this.nextPosition;
    nextPosition.y = 0;
    if (this.world.isValid(nextPosition)) {
      // move up if bricks are stacked
      while (this.world.getFieldByCoord(nextPosition) === FieldType.brick) {
        nextPosition.y++;
      }
      const fieldType = this.world.getFieldByCoord(nextPosition);
      if (fieldType === FieldType.empty) {
        this.world.setFieldByCoord(nextPosition, FieldType.brick);
      } else if (fieldType === FieldType.wall) {
        throw Error("Karol kann nicht hinlegen, er steht vor einem Quader.");
      } else if (fieldType === FieldType.brick) {
        throw Error("Karol kann nicht hinlegen, die maximale Stapelhöhe ist erreicht.");
      } else {
        throw Error("Huch? Da ist was im Weg was ich nicht kenne.");
      }
    } else {
      throw Error("Karol kann nicht hinlegen, er steht vor der Wand.");
    }
  }

  pickupBrick() {
    const nextPosition = this.nextPosition;
    // move up if bricks are stacked
    let lastBrickPosition = undefined;
    while (this.world.getFieldByCoord(nextPosition) === FieldType.brick) {
      lastBrickPosition = { ...nextPosition };
      nextPosition.y++;
    }
    if (lastBrickPosition) {
      this.world.setFieldByCoord(lastBrickPosition, FieldType.empty);
    } else {
      throw Error("Da ist kein Ziegel");
    }
  }

  /**
   * set marker on Karols current x,z position
   * @param color color
   */
  setMarker(color: Color): void {
    this.world.setMarker(this.position, color);
  }

  /**
   * @return the marker color of the marker on Karols x,z position, undefined if none
   */
  getMarker(): Color | undefined {
    return this.world.getMarker(this.position);
  }

  /**
   * @return delete the marker on Karols x,z position
   */
  deleteMarker(): void {
    this.world.deleteMarker(this.position);
  }

  /**
   * @return the next position Karol would take when moving forward
   */
  public get nextPosition(): Coord3d {
    const { x, y, z } = this.position;
    const offset = OFFSETS[this.direction];
    return { x: x + offset.x, y, z: z + offset.z };
  }

  getNextFieldType(): FieldType {
    return this.world.getFieldByCoord(this.nextPosition);
  }

  /**
   * checkis if Karol can move to the given position, i.e. that it is a valid position in the world,
   * and the field is empty
   * @param position
   * @param throwOnFailure if true, in error case an error is thrown, otherwise a result is returned
   * @return undefined if next position is valid. If invalid an error string is returned or an Error thrown with the string
   */
  validateNextPosition(position: Coord3d, throwOnFailure: boolean): string | undefined {
    let result = undefined;
    if (this.world.isValid(position)) {
      const nextField = this.getNextFieldType();
      if (nextField === FieldType.wall) {
        result = "Karol ist am Quader angestoßen.";
      } else if (nextField === FieldType.brick || position.y > 0) {
        // check if Karol can jump
        const y = this.world.getFirstFreeY(position.x, position.z);
        if (Math.abs(position.y - y) <= this.jumpHeight) {
          result = undefined;
        } else {
          result = "Karol kann nicht so hoch/tief springen.";
        }
      }
    } else {
      result = "Karol ist an der Wand angestoßen.";
    }
    if (throwOnFailure && result !== undefined) {
      throw Error(result);
    }
    return result;
  }
}
