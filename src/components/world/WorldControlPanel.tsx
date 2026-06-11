import { useState } from "react";
import { Coord3d } from "../../models/CommonTypes";
import { WorldSettingsDialog } from "../WorldSettingsDialog";
import { loadWorld, saveWorld } from "../../models/WorldPersistence";
import { useStores } from "../../StoreContext";
import { WorldToolbar } from "./WorldToolbar";

/**
 * container combining the world toolbar, the world settings dialog and world persistence
 */
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
      <WorldToolbar
        karol={karol}
        worldEditor={worldEditor}
        onLoad={load}
        onSave={save}
        onOpenSettings={() => setOpen(true)}
      />
    </div>
  );
}
