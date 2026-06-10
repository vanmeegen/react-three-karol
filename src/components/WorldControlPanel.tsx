import { Coord3d } from "../models/CommonTypes";
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
import { handleError } from "../util/handleError";
import { loadWorld, saveWorld } from "../models/WorldPersistence";
import { useStores } from "../StoreContext";

export function WorldControlPanel() {
  const { world, karol, worldEditor } = useStores();
  const [isOpen, setOpen] = useState(false);
  const [fileName, setFileName] = useState("Untitled.kworld");

  function handleClose(newDimensions: Coord3d) {
    worldEditor.resize(newDimensions);
    setOpen(false);
  }

  async function load() {
    setFileName(await loadWorld(world, karol));
  }

  async function save() {
    setFileName(await saveWorld(world, karol, fileName));
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <WorldSettingsDialog
        onClose={handleClose}
        dimensions={world.dimensions}
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
          <IconButton onClick={handleError(() => karol.turnLeft())}>
            <TurnLeft />
          </IconButton>
        </Tooltip>
        <Tooltip title="Vorwärts">
          <IconButton onClick={handleError(() => karol.move())}>
            <ArrowUpward />
          </IconButton>
        </Tooltip>
        <Tooltip title="Rechts drehen">
          <IconButton onClick={handleError(() => karol.turnRight())}>
            <TurnRight />
          </IconButton>
        </Tooltip>
        <Tooltip title="Hinlegen">
          <IconButton onClick={handleError(() => karol.layBrick())}>H</IconButton>
        </Tooltip>
        <Tooltip title="Aufnehmen">
          <IconButton onClick={handleError(() => karol.pickupBrick())}>A</IconButton>
        </Tooltip>
        <Tooltip title="Marker setzen/entfernen">
          <IconButton onClick={handleError(worldEditor.toggleMarker)}>
            <Bookmark />
          </IconButton>
        </Tooltip>
        <Tooltip title="Quader setzen">
          <IconButton onClick={handleError(worldEditor.setQuader)}>
            <Rectangle />
          </IconButton>
        </Tooltip>
        <Tooltip title="Quader entfernen">
          <IconButton onClick={handleError(worldEditor.deleteQuader)}>
            <IndeterminateCheckBox />
          </IconButton>
        </Tooltip>
        <Tooltip title="Einstellungen Welt">
          <IconButton onClick={() => setOpen(true)}>
            <Settings />
          </IconButton>
        </Tooltip>
        <Tooltip title="Welt zurücksetzen">
          <IconButton onClick={handleError(worldEditor.reset)}>
            <RestartAlt />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
}
