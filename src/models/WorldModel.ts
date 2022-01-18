import {action, observable, toJS} from "mobx";

export type Coord2D = { x: number, z: number };
export type Coord3D = { x: number, y: number, z: number };

export enum FieldType {
    empty = 0,
    grassBlock = 1,
    dirtBlock = 2,
    karol = 3,
    marker = 4,
    wall = 5
}

export function initEmpty3DArray(xmax: number, ymax: number, zmax: number): FieldType[][][] {
    // must fill array, otherwise map does not work
    return observable(Array(xmax).fill(FieldType.empty).map(() => Array(ymax).fill(FieldType.empty).map(() => Array(zmax).fill(FieldType.empty))));
}

export type FieldInfo = { content: FieldType, x: number, y: number, z: number };

export enum Direction {
    North,
    East,
    South,
    West
}

const OFFSETS = {
    [Direction.North]: {x: 0, z: -1},
    [Direction.East]: {x: 1, z: 0},
    [Direction.South]: {x: 0, z: 1},
    [Direction.West]: {x: -1, z: 0}
};


export class WorldModel {
    /**
     * world array addressed by fields[x][y][z]
     */
    @observable private readonly fields: FieldType[][][] = [];
    @observable private karolPosition: Coord3D = {x: 0, y: 0, z: 0};
    @observable private karolDirection: Direction = Direction.East;
    /**
     * @private world size in each direction as coordinates
     */
    @observable private dimensions: Coord3D;

    constructor(x: number = 10, y: number = 10, z: number = 10) {
        this.dimensions = {x, y, z};
        this.fields = initEmpty3DArray(x, y, z);
        this.setField(x - 1, 0, 0, FieldType.dirtBlock);
        this.setField(0, 0, z - 1, FieldType.grassBlock);
        this.setField(0, 1, z - 1, FieldType.dirtBlock);
        this.setField(x - 1, 0, z - 1, FieldType.grassBlock);
        this.setField(this.karolPosition.x, this.karolPosition.y, this.karolPosition.z, FieldType.karol);
    }

    getKarol(): {position: Coord3D, direction: Direction}{
        return {position: this.karolPosition, direction: this.karolDirection};
    }
    getField(x: number, y: number, z: number): FieldType {
        if (!this.isValid({x, y, z})) {
            throw Error(`The position x: $x y: $y z: $z is not valid`);
        }
        return this.fields[x][y][z];
    }

    setField(x: number, y: number, z: number, type: FieldType): void {
        if (!this.isValid({x, y, z})) {
            throw Error(`The position x: $x y: $y z: $z is not valid`);
        }
        this.fields[x][y][z] = type;
    }

    asArray(): FieldType[][][] {
        return toJS(this.fields);
    }

    asFields(): FieldInfo[] {
        const result: FieldInfo[] = [];
        this.fields.forEach((row, x) => row.forEach((col, y) => col.forEach((content, z) => {
            result.push({x, y, z, content})
        })));
        return result;
    }

    /**
     * @return true if the position is part of the world, false if not
     * @param position coordinates of position
     */
    isValid(position: Coord3D): boolean {
        return position.x >= 0 && position.y >= 0 && position.z >= 0 && position.x < this.dimensions.x && position.y < this.dimensions.y && position.z < this.dimensions.z;
    }

    @action moveKarol(): Coord3D {
        const {x, y, z} = this.karolPosition;
        const offset = OFFSETS[this.karolDirection];
        const nextPosition = {x: x + offset.x, y, z: z + offset.z};
        if (this.isValid(nextPosition)) {
            const nextField = this.getField(nextPosition.x, nextPosition.y, nextPosition.z);
            if (nextField === FieldType.empty) {
                this.setField(x, y, z, FieldType.empty);
                this.karolPosition = nextPosition;
                this.setField(nextPosition.x, nextPosition.y, nextPosition.z, FieldType.karol);
                console.log("moved");
                return nextPosition;
            } else {
                throw Error("Ouch. Bumped into something");
            }
        } else {
            throw Error("Ouch. Falling off the world!");
        }
    }

    @action turnKarolLeft(): Direction {
        this.karolDirection = (4 + this.karolDirection  - 1) % 4;
        console.log("turned left");
        return this.karolDirection;
    }

    @action turnKarolRight(): Direction {
        this.karolDirection = (this.karolDirection + 1) % 4;
        console.log("turned right");
        return this.karolDirection;
    }
}

