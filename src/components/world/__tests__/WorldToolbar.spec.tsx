import { describe, it, expect, beforeEach, afterEach } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { WorldToolbar } from "../WorldToolbar";
import { WorldModel } from "../../../models/WorldModel";
import { KarolModel, Direction } from "../../../models/KarolModel";
import { WorldEditor } from "../../../models/WorldEditor";
import { Color, Coord3d } from "../../../models/CommonTypes";

describe("The WorldToolbar", () => {
  let world: WorldModel;
  let karol: KarolModel;
  let editor: WorldEditor;
  let loaded: boolean;
  let saved: boolean;
  let settingsOpened: boolean;

  beforeEach(() => {
    world = new WorldModel(10, 10, 10);
    karol = new KarolModel(world);
    editor = new WorldEditor(world, karol);
    loaded = saved = settingsOpened = false;
    render(
      <WorldToolbar
        karol={karol}
        worldEditor={editor}
        onLoad={() => (loaded = true)}
        onSave={() => (saved = true)}
        onOpenSettings={() => (settingsOpened = true)}
      />
    );
  });

  afterEach(cleanup);

  it("steers Karol with the move and turn buttons", () => {
    fireEvent.click(screen.getByLabelText("Vorwärts"));
    expect(karol.position).toEqual(new Coord3d(0, 0, 1));
    fireEvent.click(screen.getByLabelText("Links drehen"));
    expect(karol.direction).toBe(Direction.East);
    fireEvent.click(screen.getByLabelText("Rechts drehen"));
    expect(karol.direction).toBe(Direction.South);
  });

  it("toggles a marker on Karol's position", () => {
    fireEvent.click(screen.getByLabelText("Marker setzen/entfernen"));
    expect(world.getMarker(karol.position)).toBe(Color.yellow);
  });

  it("delegates load, save and settings to the container", () => {
    fireEvent.click(screen.getByLabelText("Welt laden"));
    fireEvent.click(screen.getByLabelText("Welt speichern"));
    fireEvent.click(screen.getByLabelText("Einstellungen Welt"));
    expect(loaded).toBe(true);
    expect(saved).toBe(true);
    expect(settingsOpened).toBe(true);
  });

  it("resets the world", () => {
    fireEvent.click(screen.getByLabelText("Vorwärts"));
    fireEvent.click(screen.getByLabelText("Welt zurücksetzen"));
    expect(karol.position).toEqual(new Coord3d(0, 0, 0));
  });
});
