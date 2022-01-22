import { action, computed, observable, toJS } from "mobx";

export type Coord2D = { x: number; z: number };
export type Coord3D = { x: number; y: number; z: number };

export enum FieldType {
  empty = 0,
  karol = 1,
  brick = 2,
  marker = 3,
  wall = 4,
  grassBlock = 5,
}

export enum Color {
  yellow = "yellow",
  red = "red",
  blue = "blue",
  green = "green",
  black = "black",
}

export function initEmpty3DArray(xmax: number, ymax: number, zmax: number): FieldType[][][] {
  // must fill array, otherwise map does not work
  return observable(
    Array(xmax)
      .fill(FieldType.empty)
      .map(() =>
        Array(ymax)
          .fill(FieldType.empty)
          .map(() => Array(zmax).fill(FieldType.empty))
      )
  );
}

/**
 *
 * @param position
 * @return string which can be used to map a position to a value
 */
export function coordToKey(position: Coord3D): string {
  return `${position.x}_${position.y}_${position.z}`;
}

/**
 *
 * @param coordKey
 * @return position parsed from x,y,z value in coordKey
 */
export function keyToCoord(coordKey: string): Coord3D {
  const [x, y, z] = coordKey.split("_").map((n) => parseInt(n));
  return { x, y, z };
}

export type FieldInfo = { content: FieldType; x: number; y: number; z: number };

// do not change number because calculations are based on these
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
  @observable public position: Coord3D = { x: 0, y: 0, z: 0 };
  @observable public direction: Direction = Direction.South;

  /**
   * @return the next position Karol would take when moving forward
   */
  public get nextPosition(): Coord3D {
    const { x, y, z } = this.position;
    const offset = OFFSETS[this.direction];
    return { x: x + offset.x, y, z: z + offset.z };
  }
}

export class WorldModel {
  /**
   * world array addressed by fields[x][y][z]
   */
  @observable private readonly fields: FieldType[][][] = [];
  @observable private readonly karol: KarolModel = new KarolModel();
  /**
   * @private world size in each direction as coordinates
   */
  @observable private dimensions: Coord3D;
  /**
   *  @private has a color entry for the key (field coordinates concatenated to string) if this field has a marker
   */
  @observable private marker: Map<string, Color> = new Map();

  constructor(x: number = 10, y: number = 10, z: number = 10) {
    this.dimensions = { x, y, z };
    this.fields = initEmpty3DArray(x, y, z);
    // this.setField(x - 1, 0, 0, FieldType.grassBlock);
    // this.setField(0, 0, z - 1, FieldType.brick);
    // this.setField(0, 1, z - 1, FieldType.grassBlock);
    // this.setField(x - 1, 0, z - 1, FieldType.brick);
    // this.setMarker({x: x-1, y: 1, z: z-1}, Color.yellow);
    this.setFieldByCoord(this.karol.position, FieldType.karol);
  }

  getKarol(): KarolModel {
    return this.karol;
  }

  getFieldByCoord(position: Coord3D): FieldType {
    const { x, y, z } = position;
    return this.getField(x, y, z);
  }

  getField(x: number, y: number, z: number): FieldType {
    if (!this.isValid({ x, y, z })) {
      throw Error(`The position x: $x y: $y z: $z is not valid`);
    }
    return this.fields[x][y][z];
  }

  setFieldByCoord(position: Coord3D, type: FieldType): void {
    const { x, y, z } = position;
    this.setField(x, y, z, type);
  }

  setField(x: number, y: number, z: number, type: FieldType): void {
    if (!this.isValid({ x, y, z })) {
      throw Error(`The position x: $x y: $y z: $z is not valid`);
    }
    this.fields[x][y][z] = type;
  }

  asArray(): FieldType[][][] {
    return toJS(this.fields);
  }

  @computed markers(): { position: Coord3D; color: Color }[] {
    return Array.from(this.marker.keys()).map((key) => ({
      position: keyToCoord(key),
      color: this.marker.get(key)!,
    }));
  }

  @computed asFields(): FieldInfo[] {
    const result: FieldInfo[] = [];
    this.fields.forEach((row, x) =>
      row.forEach((col, y) =>
        col.forEach((content, z) => {
          result.push({ x, y, z, content });
        })
      )
    );
    return result;
  }

  /**
   * @return true if the position is part of the world, false if not
   * @param position coordinates of position
   */
  isValid(position: Coord3D): boolean {
    return (
      position.x >= 0 &&
      position.y >= 0 &&
      position.z >= 0 &&
      position.x < this.dimensions.x &&
      position.y < this.dimensions.y &&
      position.z < this.dimensions.z
    );
  }

  @action
  moveKarol(): Coord3D {
    const nextPosition = this.karol.nextPosition;
    this.validateNextPosition(nextPosition, true);
    this.setFieldByCoord(this.karol.position, FieldType.empty);
    this.karol.position = nextPosition;
    this.setFieldByCoord(nextPosition, FieldType.karol);
    // console.log("moved");
    return nextPosition;
  }

  /**
   * checkis if Karol can move to the given position, i.e. that it is a valid position in the world,
   * and the field is empty
   * @param position
   * @param throwOnFailure if true, in error case an error is thrown, otherwise a result is returned
   * @return undefined if next position is valid. If invalid an error string is returned or an Error thrown with the string
   */
  validateNextPosition(position: Coord3D, throwOnFailure: boolean): string | undefined {
    let result = undefined;
    if (this.isValid(position)) {
      const nextField = this.getFieldByCoord(position);
      if (nextField === FieldType.wall) {
        result = "Karol ist am Quader angestoßen.";
      } else if (nextField === FieldType.brick) {
        // TODO implement logic for jumping
        result = "Karol kann nicht so hoch/tief springen.";
      }
    } else {
      result = "Karol ist an der Wand angestoßen.";
    }
    if (throwOnFailure && result !== undefined) {
      throw Error(result);
    }
    return result;
  }

  @action turnKarolLeft(): Direction {
    this.karol.direction = (4 + this.karol.direction - 1) % 4;
    // console.log("turned left");
    return this.karol.direction;
  }

  @action turnKarolRight(): Direction {
    this.karol.direction = (this.karol.direction + 1) % 4;
    // console.log("turned right");
    return this.karol.direction;
  }

  @action layBrick() {
    const nextPosition = this.karol.nextPosition;
    if (this.isValid(nextPosition)) {
      // move up if bricks are stacked
      while (this.getFieldByCoord(nextPosition) === FieldType.brick && this.isValid(nextPosition)) {
        nextPosition.y++;
      }
      if (this.isValid(nextPosition)) {
        const fieldType = this.getFieldByCoord(nextPosition);
        if (fieldType === FieldType.empty) {
          this.setFieldByCoord(nextPosition, FieldType.brick);
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

  @action pickupBrick() {
    const nextPosition = this.karol.nextPosition;
    if (this.isValid(nextPosition)) {
      // move up if bricks are stacked
      let lastBrickPosition = undefined;
      while (this.getFieldByCoord(nextPosition) === FieldType.brick && this.isValid(nextPosition)) {
        lastBrickPosition = { ...nextPosition };
        nextPosition.y++;
      }
      if (lastBrickPosition) {
        this.setFieldByCoord(lastBrickPosition, FieldType.empty);
      } else {
        throw Error("Da ist kein Ziegel");
      }
    }
  }

  @action setMarker(position: Coord3D, color: Color): void {
    if (this.isValid(position)) {
      this.marker.set(coordToKey(position), color);
    } else {
      throw Error("Die Marker Position ist ungültig");
    }
  }

  getMarker(position: Coord3D): Color | undefined {
    return this.marker.get(coordToKey(position));
  }

  @action deleteMarker(position: Coord3D): void {
    const coordKey = coordToKey(position);
    if (this.isValid(position)) {
      const existed = this.marker.delete(coordKey);
      if (!existed) {
        throw Error("Da ist keine Marke zum Entfernen");
      }
    } else {
      throw Error("Die Marker Position ist ungültig");
    }
  }
}
