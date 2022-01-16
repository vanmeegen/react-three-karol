import {observable, toJS} from "mobx";

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
    return Array(xmax).fill(FieldType.empty).map(() => Array(ymax).fill(FieldType.empty).map(() => Array(zmax).fill(FieldType.empty)));
}

export type FieldInfo = { content: FieldType, x: number, y: number, z: number };

export class WorldModel {
    @observable private fields: FieldType[][][] = [];

    constructor(x: number = 10, y: number = 10, z: number = 10) {
        this.fields = initEmpty3DArray(x, y, z);
        this.setField(x/2,y/2,0, FieldType.dirtBlock);
        this.setField(0,y/2,0, FieldType.grassBlock);
        this.setField(0,0,0, FieldType.karol);
    }


    getField(x: number, y: number, z: number): FieldType {
        return this.fields[x][y][z];
    }

    setField(x: number, y: number, z: number, type: FieldType): void {
        this.fields[x][y][z] = type;
    }

    asArray():FieldType[][][]{
        return toJS(this.fields);
    }

    asFields():FieldInfo[]{
        const result:FieldInfo[] = [];
        this.fields.forEach((row,x) =>row.forEach((col,y) => col.forEach((content,z) => {result.push({x,y,z,content})})));
        return result;
    }
}

