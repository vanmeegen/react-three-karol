import {Direction, FieldType, initEmpty3DArray, WorldModel} from "../WorldModel";
import {beforeEach} from "vitest";

describe("The world model initializes a 3dimensional array correctly", () => {
    it("init3DArray initializes a nested 3d array 2x1x1 correctly", () => {
        const a = initEmpty3DArray(2, 1, 1);
        expect(a).toEqual([[[FieldType.empty]], [[FieldType.empty]]]);
    });

    it("initializes all nested arrays of a 2x2x2 world", () => {
        const world = new WorldModel(2, 2, 2);
        expect(world.asArray()).toEqual([[[FieldType.karol, FieldType.brick], [0, FieldType.grassBlock]], [[FieldType.grassBlock, FieldType.brick], [0, 0]]]);
    });

    it("can get fields", () => {
        const world = new WorldModel(2, 2, 2);
        expect(world.getField(1, 1, 0)).toEqual(FieldType.empty);
        expect(world.getField(0, 1, 0)).toEqual(FieldType.empty);
    });

    describe("Karol is handled by the world", () => {
        let world: WorldModel;
        beforeEach(() => {
            world = new WorldModel(3, 3, 3);
        });

        it("is placed in left upper corner and facing east", () => {
            expect(world.getField(0, 0, 0)).toEqual(FieldType.karol);
            expect(world.getKarol()).toEqual({position: {x: 0, y: 0, z: 0}, direction: Direction.East});
        });

        it("moves in the given direction", () => {
            let newPosition = {x: 1, y: 0, z: 0};
            expect(world.moveKarol()).toEqual(newPosition);
            expect(world.getKarol()).toEqual({position: newPosition, direction: Direction.East});
            expect(world.getField(newPosition.x, newPosition.y, newPosition.z)).toEqual(FieldType.karol);
        });

        it("can turn right", () => {
            expect(world.turnKarolRight()).toEqual(Direction.South);
            expect(world.turnKarolRight()).toEqual(Direction.West);
            expect(world.turnKarolRight()).toEqual(Direction.North);
            expect(world.turnKarolRight()).toEqual(Direction.East);
        });
        it("can turn left", () => {
            expect(world.turnKarolLeft()).toEqual(Direction.North);
            expect(world.turnKarolLeft()).toEqual(Direction.West);
            expect(world.turnKarolLeft()).toEqual(Direction.South);
            expect(world.turnKarolLeft()).toEqual(Direction.East);
        });
        it("after turning it moves into the new direction", () => {
            expect(world.turnKarolRight()).toEqual(Direction.South);
            expect(world.moveKarol()).toEqual({x: 0, y: 0, z: 1});
        });
    });
});
