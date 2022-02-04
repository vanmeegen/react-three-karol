import { initEmpty3DArray, WorldModel } from "../WorldModel";
import { Color, FieldType } from "../CommonTypes";
import { beforeEach } from "vitest";

describe("The world model initializes a 3dimensional array correctly", () => {
  let world: WorldModel;
  beforeEach(() => {
    world = new WorldModel(2, 2, 2);
  });

  it("init3DArray initializes a nested 3d array 2x1x1 correctly", () => {
    const a = initEmpty3DArray(2, 1, 1);
    expect(a).toEqual([[[FieldType.empty]], [[FieldType.empty]]]);
  });

  it("initializes all nested arrays of a 2x2x2 world", () => {
    expect(world.asArray()).toEqual([
      [
        [FieldType.empty, FieldType.empty],
        [FieldType.empty, FieldType.empty],
      ],
      [
        [FieldType.empty, FieldType.empty],
        [FieldType.empty, FieldType.empty],
      ],
    ]);
  });

  it("can get fields", () => {
    expect(world.getField(1, 1, 0)).toEqual(FieldType.empty);
    expect(world.getField(0, 1, 0)).toEqual(FieldType.empty);
  });

  it("can get markers on an otherwise empty field with y coordinate 0", () => {
    const world = new WorldModel(2, 2, 2);
    world.setMarker({ x: 0, z: 0 }, Color.yellow);
    const markers = world.markers;
    expect(markers).toHaveLength(1);
    expect(markers[0]).toMatchObject({ position: { x: 0, y: 0, z: 0 }, color: Color.yellow });
  });

  it("can get markers on a stack of bricks with y is topmost bricks y coordinate", () => {
    const world = new WorldModel(2, 2, 2);
    world.setMarker({ x: 0, z: 0 }, Color.yellow);
    world.setField(0, 0, 0, FieldType.brick_first);
    world.setField(0, 1, 0, FieldType.brick_first);
    const markers = world.markers;
    expect(markers).toHaveLength(1);
    expect(markers[0]).toMatchObject({ position: { x: 0, y: 2, z: 0 }, color: Color.yellow });
  });
});
