import { describe, it, expect, beforeEach } from "bun:test";
import { WorldModel } from "../WorldModel";
import { KarolModel } from "../KarolModel";
import { WorldEditor } from "../WorldEditor";
import { Color, Coord3d, FieldType } from "../CommonTypes";

describe("The WorldEditor edits the world relative to Karol", () => {
  let world: WorldModel;
  let karol: KarolModel;
  let editor: WorldEditor;

  beforeEach(() => {
    world = new WorldModel(10, 10, 10);
    karol = new KarolModel(world);
    editor = new WorldEditor(world, karol);
  });

  it("toggles a marker on Karol's position", () => {
    expect(world.getMarker(karol.position)).toBeUndefined();
    editor.toggleMarker();
    expect(world.getMarker(karol.position)).toBe(Color.yellow);
    editor.toggleMarker();
    expect(world.getMarker(karol.position)).toBeUndefined();
  });

  it("sets a wall block on the field in front of Karol", () => {
    const inFront = karol.nextPosition;
    inFront.y = 0;
    expect(world.getFieldByCoord(inFront)).toBe(FieldType.empty);
    editor.setQuader();
    expect(world.getFieldByCoord(inFront)).toBe(FieldType.wall);
  });

  it("deletes a wall block in front of Karol but leaves other fields alone", () => {
    const inFront = karol.nextPosition;
    inFront.y = 0;
    editor.setQuader();
    editor.deleteQuader();
    expect(world.getFieldByCoord(inFront)).toBe(FieldType.empty);
    // deleting again must not throw nor change anything
    editor.deleteQuader();
    expect(world.getFieldByCoord(inFront)).toBe(FieldType.empty);
  });

  it("resets world and Karol", () => {
    karol.move();
    const inFront = karol.nextPosition;
    inFront.y = 0;
    editor.setQuader();
    editor.reset();
    expect(karol.position).toEqual(new Coord3d(0, 0, 0));
    expect(world.getFieldByCoord(inFront)).toBe(FieldType.empty);
  });

  it("resizes the world and resets Karol", () => {
    karol.move();
    editor.resize(new Coord3d(5, 6, 7));
    expect(world.dimensions).toEqual(new Coord3d(5, 6, 7));
    expect(karol.position).toEqual(new Coord3d(0, 0, 0));
  });
});
