// do not change number because calculations are based on these
import { action, makeObservable, observable, toJS } from "mobx";
import { WorldModel } from "./WorldModel";
import { Color, Coord3d, FieldType, getBrickFieldType } from "./CommonTypes";

export interface SerializedKarol {
  position: Coord3d;
  direction: Direction;
}

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
export type KarolSettings = {
  figureIndex: number;
  jumpHeight: number;
  maxBrickCount: number;
  initialBrickCount: number;
};

/**
 * class KarolModel implements all actions which Karol can do to the world.
 * It updates its position in the world by setting the field on Karols position to type Karol.
 * Actions which are world-specific and not carol-specific, e.g. setting markers, are delegated to the world.
 */
export class KarolModel {
  @observable position: Coord3d = { x: 0, y: 0, z: 0 };
  @observable direction: Direction = Direction.South;
  /** Infinity means unlimited bricks */
  @observable brickCount = Infinity;
  @observable initialBrickCount = Infinity;
  @observable maxBrickCount = Infinity;
  /**
   * how high/low Karol can jump in a move
   */
  @observable jumpHeight: number;
  @observable figureIndex: number;

  constructor(private world: WorldModel) {
    makeObservable(this);
    this.jumpHeight = 1;
    this.figureIndex = 0;
    this.reset();
  }

  @action reset(): void {
    if (this.world.isValid(this.position)) {
      this.world.setFieldByCoord(this.position, FieldType.empty);
    }
    this.position = { x: 0, y: 0, z: 0 };
    this.direction = Direction.South;
    this.brickCount = this.initialBrickCount;
    this.world.setFieldByCoord(this.position, FieldType.karol);
  }

  @action updateSettings(newValues: KarolSettings) {
    this.jumpHeight = newValues.jumpHeight;
    this.figureIndex = newValues.figureIndex;
    this.maxBrickCount = newValues.maxBrickCount;
    this.initialBrickCount = newValues.initialBrickCount;
    this.reset();
  }

  @action move(count: number = 1): Coord3d {
    let nextPosition = this.nextPosition;
    for (let i = 0; i < count; i++) {
      nextPosition = this.nextPosition;
      // this will check if jump is possible too
      this.validateNextPosition(nextPosition, true);
      // jump if needed
      nextPosition.y = this.world.getFirstFreeY(nextPosition.x, nextPosition.z);
      this.world.setFieldByCoord(this.position, FieldType.empty);
      this.position = nextPosition;
      this.world.setFieldByCoord(nextPosition, FieldType.karol);
    }
    return nextPosition;
  }

  @action turnLeft(): Direction {
    this.direction = (4 + this.direction - 1) % 4;
    return this.direction;
  }

  @action turnRight(): Direction {
    this.direction = (this.direction + 1) % 4;
    return this.direction;
  }

  @action layBrick(count: number = 1, color: Color = Color.red) {
    for (let i = 0; i < count; i++) {
      let nextPosition = this.nextPosition;
      nextPosition.y = 0;
      if (this.brickCount >= 1) {
        if (this.world.isValid(nextPosition)) {
          // move up if bricks are stacked
          while (this.world.getFieldByCoord(nextPosition) >= FieldType.brick_first) {
            nextPosition.y++;
          }
          const fieldType = this.world.getFieldByCoord(nextPosition);
          if (fieldType === FieldType.empty) {
            this.world.setFieldByCoord(nextPosition, getBrickFieldType(color));
            this.brickCount = this.brickCount - 1;
          } else if (fieldType === FieldType.wall) {
            if (nextPosition.y >= this.world.dimensions.y) {
              throw Error("Karol kann nicht hinlegen, die maximale Stapelh??he ist erreicht.");
            } else {
              throw Error("Karol kann nicht hinlegen, er steht vor einem Quader.");
            }
          } else if (fieldType >= FieldType.brick_first) {
            throw Error("Karol kann nicht hinlegen, die maximale Stapelh??he ist erreicht.");
          } else {
            throw Error("Huch? Da ist was im Weg was ich nicht kenne.");
          }
        } else {
          throw Error("Karol kann nicht hinlegen, er steht vor der Wand.");
        }
      } else {
        throw Error("Karol kann nicht " + count + " hinlegen, er hat nicht mehr genug Ziegel.");
      }
    }
  }

  @action pickupBrick(count: number = 1) {
    for (let i = 0; i < count; i++) {
      let nextPosition = this.nextPosition;
      // move up if bricks are stacked
      let lastBrickPosition = undefined;
      while (this.world.getFieldByCoord(nextPosition) >= FieldType.brick_first) {
        lastBrickPosition = { ...nextPosition };
        nextPosition.y++;
      }
      if (lastBrickPosition) {
        if (this.maxBrickCount === Infinity || this.brickCount < this.maxBrickCount) {
          this.world.setFieldByCoord(lastBrickPosition, FieldType.empty);
          this.brickCount += 1;
        } else {
          throw Error("Karol kann nicht mehr als " + this.maxBrickCount + " Ziegel tragen.");
        }
      } else {
        throw Error("Da ist kein Ziegel");
      }
    }
  }

  /**
   * @return brick pile height of next position, 0 if no brick
   */
  getBrickHeight(): number {
    return this.world.getBrickHeight(this.nextPosition.x, this.nextPosition.z);
  }

  /**
   *
   * @param color
   * @return true if next field pile contains at least one brick with the given color
   */
  hasBrick(color: Color): boolean {
    return this.world.hasBrick(color, this.nextPosition.x, this.nextPosition.z);
  }

  /**
   * set marker on Karols current x,z position
   * @param color color
   */
  @action setMarker(color: Color): void {
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
  @action deleteMarker(): void {
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
        result = "Karol ist am Quader angesto??en.";
      } else if (nextField >= FieldType.brick_first || position.y > 0) {
        // check if Karol can jump
        const y = this.world.getFirstFreeY(position.x, position.z);
        if (!this.world.isValid(new Coord3d(position.x, y, position.z))) {
          result = "Karol kann nicht springen, da keine freie Position mehr.";
        } else {
          if (Math.abs(position.y - y) <= this.jumpHeight) {
            result = undefined;
          } else {
            result = "Karol kann nicht so hoch/tief springen.";
          }
        }
      }
    } else {
      result = "Karol ist an der Wand angesto??en.";
    }
    if (throwOnFailure && result !== undefined) {
      throw Error(result);
    }
    return result;
  }

  /**
   * @return true if karol has picked up exactly count bricks; always returns true if no brick limit is set
   * @param count
   */
  hasBricksExactly(count: number): boolean {
    return this.brickCount === count;
  }

  /**
   * deserializes world properties from the given json into this instance
   * @param serializedKarol
   */
  @action deserialize(serializedKarol: SerializedKarol): void {
    this.position = new Coord3d(serializedKarol.position.x, serializedKarol.position.y, serializedKarol.position.z);
    this.direction = serializedKarol.direction;
  }

  serialize(): SerializedKarol {
    const position = toJS(this.position);
    const direction = toJS(this.direction);
    return { position, direction };
  }
}
