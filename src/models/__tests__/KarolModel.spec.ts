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

    it("can stack colored bricks on top of another", () => {
      karol.position = { x: 0, y: 0, z: 0 };
      karol.layBrick(1, Color.green);
      karol.layBrick(2, Color.red);
      expect(world.getField(0, 0, 1)).toEqual(FieldType.brick_green);
      expect(world.getField(0, 1, 1)).toEqual(FieldType.brick_red);
      expect(world.getField(0, 2, 1)).toEqual(FieldType.brick_red);
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
  describe("it can be set to carry a limited number of bricks", () => {
    beforeEach(() => {
      karol.maxBrickCount = 10;
      karol.initialBrickCount = 3;
      karol.reset();
    });

    it("can lay down bricks until it has nothing left", () => {
      karol.layBrick(3);
      expect(karol.brickCount).toEqual(0);
      expect(() => karol.layBrick()).toThrow();
    });

    it("can pickup bricks", () => {
      // start is 3, pickup 3 = 6
      for (let i = 0; i < 3; i++) {
        world.setFieldByCoord({ x: 0, y: i, z: 1 }, FieldType.brick_green);
      }
      karol.pickupBrick(3);
      expect(karol.brickCount).toEqual(6);
    });

    it.only("can not carry more bricks than its maximum capacity", () => {
      karol.maxBrickCount = 4;
      karol.reset();
      for (let i = 0; i < 3; i++) {
        world.setFieldByCoord({ x: 0, y: i, z: 1 }, FieldType.brick_green);
      }
      // start is 3, pickup 1 = 4
      karol.pickupBrick(1);
      expect(karol.brickCount).toEqual(4);
      expect(() => karol.pickupBrick(1)).toThrow(
        "Karol kann nicht mehr als " + karol.maxBrickCount + " Ziegel tragen."
      );
      expect(karol.brickCount).toEqual(4);
    });
  });
});
