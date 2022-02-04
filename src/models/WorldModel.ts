import { action, computed, makeObservable, observable, toJS } from "mobx";
import { Color, Coord2d, coord2dToKey, Coord3d, FieldType, keyToCoord2d } from "./CommonTypes";

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

export type FieldInfo = { content: FieldType; x: number; y: number; z: number };

export type MarkerInfo = { position: Coord3d; color: Color };

export class WorldModel {
  /**
   * world array addressed by fields[x][y][z]
   */
  @observable public fields: FieldType[][][] = [];
  /**
   * @private world size in each direction as coordinates
   */
  @observable public dimensions: Coord3d = new Coord3d(10, 10, 10);
  /**
   *  @private has a color entry for the key (field coordinates concatenated to string) if this field has a marker
   */
  @observable private marker: Map<string, Color> = new Map();

  constructor(x: number = 10, y: number = 10, z: number = 10) {
    makeObservable(this);
    this.init(x, y, z);
  }

  @action init(x: number = 10, y: number = 10, z: number = 10) {
    this.dimensions = new Coord3d(x, y, z);
    this.fields = initEmpty3DArray(x, y, z);
  }

  @action reset() {
    this.init(this.dimensions.x, this.dimensions.y, this.dimensions.z);
  }

  /*
   * @return content of the field with the given coordinates or FieldType.wall if coordinates are invalid
   */
  getFieldByCoord(position: Coord3d): FieldType {
    const { x, y, z } = position;
    return this.getField(x, y, z);
  }

  /**
   *
   * @param x
   * @param y
   * @param z
   * @return content of the field with the given coordinates or FieldType.wall if coordinates are invalid
   */
  getField(x: number, y: number, z: number): FieldType {
    if (this.isValid({ x, y, z })) {
      return this.fields[x][y][z];
    } else {
      // invalid position is wall
      return FieldType.wall;
    }
  }

  @action setFieldByCoord(position: Coord3d, type: FieldType): void {
    const { x, y, z } = position;
    this.setField(x, y, z, type);
  }

  @action setField(x: number, y: number, z: number, type: FieldType): void {
    if (!this.isValid({ x, y, z })) {
      throw Error(`The position x: $x y: $y z: $z is not valid`);
    }
    this.fields[x][y][z] = type;
  }

  asArray(): FieldType[][][] {
    return toJS(this.fields);
  }

  @computed.struct get markers(): MarkerInfo[] {
    // since marker have no y coordinate we have to calculate it here
    return Array.from(this.marker.keys()).map((key) => {
      const { x, z } = keyToCoord2d(key);
      const y = this.getFirstFreeY(x, z);
      return {
        position: { x, y, z },
        color: this.marker.get(key)!,
      };
    });
  }

  getFirstFreeY(x: number, z: number): number {
    let y = 0;
    while (
      this.isValid({ x, y, z }) &&
      this.getField(x, y, z) !== FieldType.empty &&
      this.getField(x, y, z) !== FieldType.karol
    ) {
      y++;
    }
    return y;
  }

  /**
   * @return number of bricks on the given field; 0 if no bricks found
   * @param x
   * @param z
   */
  getBrickHeight(x: number, z: number): number {
    let y = 0;
    while (this.isValid({ x, y, z }) && this.getField(x, y, z) === FieldType.brick) {
      y++;
    }
    return y;
  }

  /**
   * @return true if the position is part of the world, false if not
   * @param position coordinates of position
   */
  isValid(position: Coord3d): boolean {
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
   * set a marker on Karol's current position. On any x,z coordinate there can only be one marker,
   * it will always be drawn on the topmost filled y coordinate, i.e. if a marker is placed, then a brick is layn on the same x,z coordinate,
   * the marker will automatically be drawn on top of the brick.
   * @param color color of marker
   * @param position position of marker in 2D
   */
  @action setMarker(position: Coord2d, color: Color): void {
    if (this.isValid({ ...position, y: 0 })) {
      this.marker.set(coord2dToKey(position), color);
    } else {
      throw Error("Die Marker Position ist ungültig");
    }
  }

  /**
   *  @param position
   *  @return color of marker or undefined if none
   */
  getMarker(position: Coord2d): Color | undefined {
    return this.marker.get(coord2dToKey(position));
  }

  @action deleteMarker(position: Coord2d): void {
    if (this.isValid({ ...position, y: 0 })) {
      const existed = this.marker.delete(coord2dToKey(position));
      if (!existed) {
        throw Error("Da ist keine Marke zum Entfernen");
      }
    } else {
      throw Error("Die Marker Position ist ungültig");
    }
  }
}
