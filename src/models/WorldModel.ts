import { computed, makeAutoObservable, observable, toJS } from "mobx";

export class Coord3D {
  @observable x: number = 0;
  @observable y: number = 0;
  @observable z: number = 0;
}

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

export type MarkerInfo = { position: Coord3D; color: Color };

export class WorldModel {
  /**
   * world array addressed by fields[x][y][z]
   */
  @observable public fields: FieldType[][][] = [];
  /**
   * @private world size in each direction as coordinates
   */
  @observable private dimensions: Coord3D = { x: 10, y: 10, z: 10 };
  /**
   *  @private has a color entry for the key (field coordinates concatenated to string) if this field has a marker
   */
  @observable private marker: Map<string, Color> = new Map();

  constructor(x: number = 10, y: number = 10, z: number = 10) {
    makeAutoObservable(this, { markers: computed });
    this.init(x, y, z);
  }

  init(x: number = 10, y: number = 10, z: number = 10) {
    this.dimensions = { x, y, z };
    this.fields = initEmpty3DArray(x, y, z);
  }

  public reset() {
    this.init(this.dimensions.x, this.dimensions.y, this.dimensions.z);
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

  get markers(): MarkerInfo[] {
    return Array.from(this.marker.keys()).map((key) => ({
      position: keyToCoord(key),
      color: this.marker.get(key)!,
    }));
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

  setMarker(position: Coord3D, color: Color): void {
    if (this.isValid(position)) {
      this.marker.set(coordToKey(position), color);
    } else {
      throw Error("Die Marker Position ist ungültig");
    }
  }

  getMarker(position: Coord3D): Color | undefined {
    return this.marker.get(coordToKey(position));
  }

  deleteMarker(position: Coord3D): void {
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
