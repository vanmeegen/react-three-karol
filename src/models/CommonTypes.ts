import { makeObservable, observable } from "mobx";

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
  brick = 2,
  marker = 3,
  wall = 4,
  grassBlock = 5,
}

export enum Color {
  yellow = "gelb",
  red = "rot",
  blue = "blau",
  green = "grün",
  black = "schwarz",
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
