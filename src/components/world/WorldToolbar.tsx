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
import { handleError } from "../../util/handleError";
import { KarolModel } from "../../models/KarolModel";
import { WorldEditor } from "../../models/WorldEditor";

/**
 * toolbar with world load/save, manual Karol steering and world editing buttons
 */
export function WorldToolbar(props: {
  karol: KarolModel;
  worldEditor: WorldEditor;
  onLoad: () => void;
  onSave: () => void;
  onOpenSettings: () => void;
}) {
  const { karol, worldEditor } = props;
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Tooltip title="Welt laden">
        <IconButton onClick={props.onLoad}>
          <Upload />
        </IconButton>
      </Tooltip>
      <Tooltip title="Welt speichern">
        <IconButton onClick={props.onSave}>
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
        <IconButton onClick={props.onOpenSettings}>
          <Settings />
        </IconButton>
      </Tooltip>
      <Tooltip title="Welt zurücksetzen">
        <IconButton onClick={handleError(worldEditor.reset)}>
          <RestartAlt />
        </IconButton>
      </Tooltip>
    </div>
  );
}
