import { makeObservable, observable } from "mobx";
import { assertCondition } from "../util/AssertCondition";

export class Coord2d {
  constructor(x: number, z: number) {
    makeObservable(this);
    this.x = x;
    this.z = z;
  }

  @observable x: number = 0;
  @observable z: number = 0;
}

export class Coord3d {
  @observable x: number;
  @observable y: number;
  @observable z: number;

  constructor(x: number = 0, y: number = 0, z: number = 0) {
    makeObservable(this);
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

export enum FieldType {
  empty = 0,
  karol = 1,
  wall = 2,
  // ATTENTION:
  // DO NOT add enum values after this since all will be regarded as bricks, only add if colors are added
  // colorToBrickIndex must contain colors matching the number of the colored bricks - brick_first
  brick_first = 3,
  brick_red = brick_first,
  brick_yellow = brick_first + 1,
  brick_blue = brick_first + 2,
  brick_green = brick_first + 3,
  brick_black = brick_first + 4,
}

export enum Color {
  red = "rot",
  yellow = "gelb",
  blue = "blau",
  green = "grün",
  black = "schwarz",
}

const colorToBrickIndex: Color[] = [Color.red, Color.yellow, Color.blue, Color.green, Color.black];

export function getColor(fieldType: FieldType) {
  assertCondition(fieldType >= FieldType.brick_first, "Cannot get a color from a field type which is not a brick");
  return colorToBrickIndex[fieldType - FieldType.brick_first];
}

export function getBrickFieldType(color: Color): FieldType {
  const index = colorToBrickIndex.indexOf(color);
  assertCondition(index >= 0, "Internal Error: Color index not found in colorToBrickIndex");
  return (index + FieldType.brick_first) as FieldType;
}

/**
 *
 * @param position
 * @return string which can be used to map a position to a value
 */
export function coordToKey(position: Coord3d): string {
  return `${position.x}_${position.y}_${position.z}`;
}

export function coord2dToKey(position: Coord2d): string {
  return `${position.x}_y_${position.z}`;
}

export function keyToCoord2d(key2d: string): Coord2d {
  const coords = key2d.split("_");
  coords.splice(1, 1);
  const [x, z] = coords.map((n) => parseInt(n));
  return { x, z };
}

/**
 *
 * @param coordKey
 * @return position parsed from x,y,z value in coordKey
 */
export function keyToCoord(coordKey: string): Coord3d {
  const [x, y, z] = coordKey.split("_").map((n) => parseInt(n));
  return { x, y, z };
}
