import { WorldModel } from "../WorldModel";
import { beforeEach } from "vitest";
import { Direction, KarolModel } from "../KarolModel";
import { Color, FieldType } from "../CommonTypes";

describe("Karol can interact with the world", () => {
  let world: WorldModel;
  let karol: KarolModel;
  beforeEach(() => {
    world = new WorldModel(3, 3, 3);
    karol = new KarolModel(world);
  });
  describe("It can move around", () => {
    it("is placed in left upper corner and facing south", () => {
      expect(world.getField(0, 0, 0)).toEqual(FieldType.karol);
      expect(karol).toMatchObject({ position: { x: 0, y: 0, z: 0 }, direction: Direction.South });
    });

    it("moves in the given direction", () => {
      let newPosition = { x: 0, y: 0, z: 1 };
      expect(karol.move()).toEqual(newPosition);
      expect(karol).toMatchObject({ position: newPosition, direction: Direction.South });
      expect(world.getField(newPosition.x, newPosition.y, newPosition.z)).toEqual(FieldType.karol);
    });

    it("can turn right", () => {
      expect(karol.turnRight()).toEqual(Direction.West);
      expect(karol.turnRight()).toEqual(Direction.North);
      expect(karol.turnRight()).toEqual(Direction.East);
      expect(karol.turnRight()).toEqual(Direction.South);
    });

    it("can turn left", () => {
      expect(karol.turnLeft()).toEqual(Direction.East);
      expect(karol.turnLeft()).toEqual(Direction.North);
      expect(karol.turnLeft()).toEqual(Direction.West);
      expect(karol.turnLeft()).toEqual(Direction.South);
    });

    it("after turning it moves into the new direction", () => {
      expect(karol.turnLeft()).toEqual(Direction.East);
      expect(karol.move()).toEqual({ x: 1, y: 0, z: 0 });
    });

    it("can jump on and off a stack of bricks if the height difference is less or equal his jumpheight", () => {
      world.setField(0, 0, 1, FieldType.brick_first);
      karol.move();
      expect(karol.position).toEqual({ x: 0, y: 1, z: 1 });
      karol.move();
      expect(karol.position).toEqual({ x: 0, y: 0, z: 2 });
    });

    it("cannot jump on a stack of bricks if the height difference is higher than his jumpheight", () => {
      world.setField(0, 0, 1, FieldType.brick_first);
      world.setField(0, 1, 1, FieldType.brick_first);
      expect(() => karol.move()).toThrow();
    });
  });
  describe("It can change the world", () => {
    it("can lay a brick", () => {
      karol.layBrick();
      expect(world.getField(0, 0, 1)).toEqual(FieldType.brick_first);
      expect(world.getField(0, 1, 1)).toEqual(FieldType.empty);
    });

    it("lays a brick always on the ground", () => {
      karol.position = { x: 0, y: 1, z: 0 };
      karol.layBrick();
      expect(world.getField(0, 0, 1)).toEqual(FieldType.brick_first);
    });

    it("stack a brick on another", () => {
      karol.layBrick();
      karol.layBrick();
      expect(world.getField(0, 0, 1)).toEqual(FieldType.brick_first);
      expect(world.getField(0, 1, 1)).toEqual(FieldType.brick_first);
    });

    it("can pick up a brick", () => {
      world.setField(0, 0, 1, FieldType.brick_first);
      karol.pickupBrick();
      expect(world.getField(0, 0, 1)).toEqual(FieldType.empty);
    });

    it("can pick up a brick from a tile", () => {
      world.setField(0, 0, 1, FieldType.brick_first);
      world.setField(0, 1, 1, FieldType.brick_first);
      karol.pickupBrick();
      expect(world.getField(0, 0, 1)).toEqual(FieldType.brick_first);
      expect(world.getField(0, 1, 1)).toEqual(FieldType.empty);
    });

    it("can set a marker at Karols position", () => {
      karol.setMarker(Color.yellow);
      expect(world.getMarker({ x: 0, z: 0 })).toEqual(Color.yellow);
    });
    it("can get a marker at Karols position", () => {
      world.setMarker({ x: 0, z: 0 }, Color.yellow);
      expect(karol.getMarker()).toEqual(Color.yellow);
      karol.move();
      expect(karol.getMarker()).toEqual(undefined);
    });
    it("can delete a marker", () => {
      world.setMarker({ x: 0, z: 0 }, Color.yellow);
      karol.deleteMarker();
      expect(world.getMarker({ x: 0, z: 0 })).toEqual(undefined);
    });
  });
});
