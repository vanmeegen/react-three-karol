import { SerializedWorld, WorldModel } from "../models/WorldModel";
import { action } from "mobx";
import { KarolModel, SerializedKarol } from "../models/KarolModel";
import { Color, Coord3d, FieldType } from "../models/CommonTypes";
import { useState } from "react";
import { WorldSettingsDialog } from "./WorldSettingsDialog";
import { IconButton, Tooltip } from "@mui/material";
import {
  ArrowUpward,
  Bookmark,
  IndeterminateCheckBox,
  Rectangle,
  RestartAlt,
  Save,
  Settings,
  TurnLeft,
  TurnRight,
  Upload
} from "@mui/icons-material";
import { fileOpen, fileSave } from "browser-fs-access";

function handleError(f: () => void): () => void {
  return () => {
    try {
      f();
    } catch (e) {
      alert("Error" + e);
    }
  };
}

interface SerializedWorldAndKarol {
  karol: SerializedKarol;
  world: SerializedWorld;
}

export function WorldControlPanel(props: { world: WorldModel; karol: KarolModel }) {
  const [isOpen, setOpen] = useState(false);
  const [fileName, setFileName] = useState("Untitled.kworld");

  function reset() {
    props.world.reset();
    props.karol.reset();
  }

  function toggleMarker() {
    const position = props.karol.position;
    if (props.world.getMarker(position)) {
      props.world.deleteMarker(position);
    } else {
      props.world.setMarker(position, Color.yellow);
    }
  }

  function handleWorldSettings() {
    setOpen(true);
  }

  function handleClose(newDimensions: Coord3d) {
    props.world.init(newDimensions.x, newDimensions.y, newDimensions.z);
    props.karol.reset();
    setOpen(false);
  }

  function setQuader() {
    const position = props.karol.nextPosition;
    position.y = 0;
    if (props.world.getFieldByCoord(position) === FieldType.empty) {
      props.world.setFieldByCoord(position, FieldType.wall);
    }
  }

  function deleteQuader() {
    const position = props.karol.nextPosition;
    position.y = 0;
    if (props.world.isValid(position) && props.world.getFieldByCoord(position) === FieldType.wall) {
      props.world.setFieldByCoord(position, FieldType.empty);
    }
  }

  async function load() {
    const blob = await fileOpen({
      mimeTypes: ["application/karol-world"],
      extensions: [".kworld"],
      description: "Karol World",
    });
    setFileName(blob.name);
    const value = await blob.text();
    const serializedWorldAndKarol: SerializedWorldAndKarol = JSON.parse(value) as SerializedWorldAndKarol;
    props.world.deserialize(serializedWorldAndKarol.world);
    props.karol.deserialize(serializedWorldAndKarol.karol);
  }

  async function save() {
    const world = props.world.serialize();
    const karol = props.karol.serialize();
    const serializedWorldAndKarol: SerializedWorldAndKarol = { world, karol };
    const json = JSON.stringify(serializedWorldAndKarol);
    const blob = new Blob([json], { type: "application/karol-world" });
    const handle: FileSystemHandle | null = await fileSave(blob, {
      fileName: fileName,
      extensions: [".kworld"],
    });
    if (handle !== null) {
      setFileName(handle.name);
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <WorldSettingsDialog
        onClose={handleClose}
        dimensions={props.world.dimensions}
        open={isOpen}
        onCancel={() => setOpen(false)}
      />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Tooltip title="Welt laden">
          <IconButton onClick={load}>
            <Upload />
          </IconButton>
        </Tooltip>
        <Tooltip title="Welt speichern">
          <IconButton onClick={save}>
            <Save />
          </IconButton>
        </Tooltip>
        <Tooltip title="Links drehen">
          <IconButton onClick={handleError(() => props.karol.turnLeft())}>
            <TurnLeft />
          </IconButton>
        </Tooltip>
        <Tooltip title="Vorwärts">
          <IconButton onClick={handleError(() => props.karol.move())}>
            <ArrowUpward />
          </IconButton>
        </Tooltip>
        <Tooltip title="Rechts drehen">
          <IconButton onClick={handleError(() => props.karol.turnRight())}>
            <TurnRight />
          </IconButton>
        </Tooltip>
        <Tooltip title="Hinlegen">
          <IconButton onClick={handleError(() => props.karol.layBrick())}>H</IconButton>
        </Tooltip>
        <Tooltip title="Aufnehmen">
          <IconButton onClick={handleError(() => props.karol.pickupBrick())}>A</IconButton>
        </Tooltip>
        <Tooltip title="Marker setzen/entfernen">
          <IconButton onClick={handleError(action(toggleMarker))}>
            <Bookmark />
          </IconButton>
        </Tooltip>
        <Tooltip title="Quader setzen">
          <IconButton onClick={handleError(action(setQuader))}>
            <Rectangle />
          </IconButton>
        </Tooltip>
        <Tooltip title="Quader entfernen">
          <IconButton onClick={handleError(action(deleteQuader))}>
            <IndeterminateCheckBox />
          </IconButton>
        </Tooltip>
        <Tooltip title="Einstellungen Welt">
          <IconButton onClick={handleWorldSettings}>
            <Settings />
          </IconButton>
        </Tooltip>
        <Tooltip title="Welt zurücksetzen">
          <IconButton onClick={handleError(reset)}>
            <RestartAlt />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
}
