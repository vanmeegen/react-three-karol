import { FieldType, initEmpty3DArray, WorldModel } from "../WorldModel";

describe("The world model initializes a 3dimensional array correctly", () => {
  it("init3DArray initializes a nested 3d array 2x1x1 correctly", () => {
    const a = initEmpty3DArray(2, 1, 1);
    expect(a).toEqual([[[FieldType.empty]], [[FieldType.empty]]]);
  });

  it("initializes all nested arrays of a 2x2x2 world", () => {
    const world = new WorldModel(2, 2, 2);
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
    const world = new WorldModel(2, 2, 2);
    expect(world.getField(1, 1, 0)).toEqual(FieldType.empty);
    expect(world.getField(0, 1, 0)).toEqual(FieldType.empty);
  });
});
