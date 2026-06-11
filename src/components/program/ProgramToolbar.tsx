import { observer } from "mobx-react";
import { IconButton, Tooltip, Typography } from "@mui/material";
import {
  Delete,
  DirectionsBike,
  DirectionsRun,
  DirectionsWalk,
  Elderly,
  Pause,
  Save,
  Settings,
  Stop,
  Upload
} from "@mui/icons-material";
import { ProgramModel } from "../../models/ProgramModel";
import { handleError } from "../../util/handleError";

/**
 * toolbar with program load/save, execution control and settings buttons
 */
export const ProgramToolbar = observer(
  (props: {
    program: ProgramModel;
    onRun: (waitTime: number | undefined, singleStep?: boolean) => void;
    onOpenSettings: () => void;
  }) => {
    const program = props.program;
    return (
      <div style={{ display: "flex", flexDirection: "row", columns: 2, flexWrap: "wrap" }}>
        <Tooltip title="Programm laden">
          <IconButton onClick={() => program.load()}>
            <Upload />
          </IconButton>
        </Tooltip>
        <Tooltip title="Programm speichern">
          <IconButton onClick={() => program.save()}>
            <Save />
          </IconButton>
        </Tooltip>
        <Tooltip title="Einzelschritt">
          <IconButton onClick={handleError(() => props.onRun(0, true))}>
            <Elderly />
          </IconButton>
        </Tooltip>
        <Tooltip title="Programmstart langsam">
          <IconButton onClick={handleError(() => props.onRun(200))}>
            <DirectionsWalk />
          </IconButton>
        </Tooltip>
        <Tooltip title="Programmstart schnell">
          <IconButton onClick={handleError(() => props.onRun(10))}>
            <DirectionsRun />
          </IconButton>
        </Tooltip>
        <Tooltip title="Programm Maximalgeschwindigkeit">
          <IconButton onClick={handleError(() => props.onRun(undefined))}>
            <DirectionsBike />
          </IconButton>
        </Tooltip>
        <Tooltip title="Programm unterbrechen">
          <IconButton onClick={handleError(() => program.pause())}>
            <Pause />
          </IconButton>
        </Tooltip>
        <Tooltip title="Programm stoppen">
          <IconButton onClick={handleError(() => program.stop())}>
            <Stop />
          </IconButton>
        </Tooltip>
        <Tooltip title="Einstellungen Karol">
          <IconButton onClick={props.onOpenSettings}>
            <Settings />
          </IconButton>
        </Tooltip>
        <Tooltip title="Programm löschen">
          <IconButton onClick={() => program.clear()}>
            <Delete />
          </IconButton>
        </Tooltip>
        <Typography variant="subtitle1">{program.executionState}</Typography>
        <Typography variant="caption" style={{ margin: "auto" }}>
          {program.fileName}
        </Typography>
      </div>
    );
  }
);
