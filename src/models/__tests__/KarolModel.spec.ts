import { FieldType, WorldModel } from "../WorldModel";
import { beforeEach } from "vitest";
import { Direction, KarolModel } from "../KarolModel";

describe("Karol can interact with the world", () => {
  let world: WorldModel;
  let karol: KarolModel;
  beforeEach(() => {
    world = new WorldModel(3, 3, 3);
    karol = new KarolModel(world);
    karol.turnKarolLeft();
  });

  it("is placed in left upper corner and facing east", () => {
    expect(world.getField(0, 0, 0)).toEqual(FieldType.karol);
    expect(karol).toMatchObject({ position: { x: 0, y: 0, z: 0 }, direction: Direction.East });
  });

  it("moves in the given direction", () => {
    let newPosition = { x: 1, y: 0, z: 0 };
    expect(karol.moveKarol()).toEqual(newPosition);
    expect(karol).toMatchObject({ position: newPosition, direction: Direction.East });
    expect(world.getField(newPosition.x, newPosition.y, newPosition.z)).toEqual(FieldType.karol);
  });

  it("can turn right", () => {
    expect(karol.turnKarolRight()).toEqual(Direction.South);
    expect(karol.turnKarolRight()).toEqual(Direction.West);
    expect(karol.turnKarolRight()).toEqual(Direction.North);
    expect(karol.turnKarolRight()).toEqual(Direction.East);
  });
  it("can turn left", () => {
    expect(karol.turnKarolLeft()).toEqual(Direction.North);
    expect(karol.turnKarolLeft()).toEqual(Direction.West);
    expect(karol.turnKarolLeft()).toEqual(Direction.South);
    expect(karol.turnKarolLeft()).toEqual(Direction.East);
  });
  it("after turning it moves into the new direction", () => {
    expect(karol.turnKarolRight()).toEqual(Direction.South);
    expect(karol.moveKarol()).toEqual({ x: 0, y: 0, z: 1 });
  });
});
