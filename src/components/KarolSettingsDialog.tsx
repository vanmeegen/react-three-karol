import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import { KarolModel, KarolSettings } from "../models/KarolModel";

function parseAndValidateNumber(numberToParse: string, text: string, emptyValue: number): [number, string?] {
  if (numberToParse === "" || numberToParse === "Infinity") {
    return [emptyValue, undefined];
  }
  let result = parseInt(numberToParse);
  let errorMessage = undefined;
  if (result <= 0) {
    errorMessage = text + " ist keine Zahl > 0.";
  }
  return [errorMessage ? emptyValue : result, errorMessage];
}

export function KarolSettingsDialog(props: {
  onClose: (result: KarolSettings) => void;
  open: boolean;
  karol: KarolModel;
  onCancel: () => void;
}) {
  function handleOk(): void {
    let allErrors = "";
    const [jumpHeightasNr, errorMessage1] = parseAndValidateNumber(jumpHeight, "Maximale Sprunghöhe", 1);
    if (errorMessage1) {
      allErrors += errorMessage1;
    }
    const [maxBrickCountAsNr, errorMessage2] = parseAndValidateNumber(maxBricks, "Maximale Anzahl Steine", Infinity);
    if (errorMessage2) {
      allErrors += "\n" + errorMessage2;
    }
    const [initialBrickCountAsNr, errorMessage3] = parseAndValidateNumber(
      initialBricks,
      "Anzahl Steine bei Start",
      Infinity
    );
    if (errorMessage3) {
      allErrors += "\n" + errorMessage3;
    }
    if (errorMessage1 || errorMessage2 || errorMessage3) {
      alert(allErrors);
    } else {
      props.onClose({
        jumpHeight: jumpHeightasNr,
        initialBrickCount: initialBrickCountAsNr,
        maxBrickCount: maxBrickCountAsNr,
        figureIndex: Number.parseInt(karolFigureIndex),
      });
    }
  }

  const [jumpHeight, setJumpHeight] = useState("" + props.karol.jumpHeight);
  const [maxBricks, setMaxBricks] = useState("" + props.karol.maxBrickCount);
  const [initialBricks, setInitialBricks] = useState("" + props.karol.initialBrickCount);
  const [karolFigureIndex, setKarolFigureIndex] = useState("" + props.karol.figureIndex);
  return (
    <Dialog open={props.open}>
      <DialogTitle>Einstellungen für Karol</DialogTitle>
      <DialogContent>
        <FormControl fullWidth sx={{ m: 1, minWidth: 120 }}>
          <TextField
            id="jumpHeight"
            type="number"
            label="Maximale Sprunghöhe"
            variant="outlined"
            value={jumpHeight}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => setJumpHeight(evt.target.value)}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1, minWidth: 120 }}>
          <TextField
            id="maxBricks"
            type="number"
            label="Maximale Anzahl Steine"
            variant="outlined"
            value={maxBricks}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => setMaxBricks(evt.target.value ?? Infinity)}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1, minWidth: 120 }}>
          <TextField
            id="initialBricks"
            type="number"
            label="Anzahl Steine bei Start"
            variant="outlined"
            value={initialBricks}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => setInitialBricks(evt.target.value ?? Infinity)}
          />
        </FormControl>
        <div>
          <FormControl fullWidth sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="karolFigureLabel">Karol Figure</InputLabel>
            <Select
              id="karolFigure"
              labelId="karolFigureLabel"
              value={karolFigureIndex}
              label="Karol Figur"
              onChange={(evt: SelectChangeEvent) => setKarolFigureIndex(evt.target.value)}
            >
              <MenuItem value={0}>Roboter</MenuItem>
              <MenuItem value={1}>Dracula</MenuItem>
              <MenuItem value={2}>Weltraumwesen</MenuItem>
              <MenuItem value={3}>Saxophonist</MenuItem>
              <MenuItem value={4}>Crash Test Dummy</MenuItem>
            </Select>
          </FormControl>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleOk}>Ok</Button>
        <Button onClick={props.onCancel}>Abbruch</Button>
      </DialogActions>
    </Dialog>
  );
}
