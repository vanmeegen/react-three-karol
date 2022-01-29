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
  TextField
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import { KarolModel } from "../models/KarolModel";

export function SettingsDialog(props: {
  onClose: (result: { figureIndex: number; jumpHeight: number }) => void;
  open: boolean;
  karol: KarolModel;
  onCancel: () => void;
}) {
  const [jumpHeight, setJumpHeight] = useState("" + props.karol.jumpHeight);
  const [karolFigureIndex, setKarolFigureIndex] = useState("" + props.karol.figureIndex);
  return (
    <Dialog onClose={props.onClose} open={props.open}>
      <DialogTitle>Karol Settings</DialogTitle>
      <DialogContent>
        <FormControl fullWidth sx={{ m: 1, minWidth: 120 }}>
          <TextField
            id="jumpHeight"
            type="number"
            label="Max Jump Height"
            variant="outlined"
            value={jumpHeight}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => setJumpHeight(evt.target.value)}
          />
        </FormControl>
        <div>
          <FormControl fullWidth sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="karolFigureLabel">Karol Figure</InputLabel>
            <Select
              id="karolFigure"
              labelId="karolFigureLabel"
              value={karolFigureIndex}
              label="Karol Figure"
              onChange={(evt: SelectChangeEvent<string>) => setKarolFigureIndex(evt.target.value)}
            >
              <MenuItem value={0}>Robot</MenuItem>
              <MenuItem value={1}>Troll</MenuItem>
              <MenuItem value={2}>Puppet</MenuItem>
            </Select>
          </FormControl>
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() =>
            props.onClose({
              jumpHeight: Number.parseInt(jumpHeight),
              figureIndex: Number.parseInt(karolFigureIndex),
            })
          }
        >
          Ok
        </Button>
        <Button onClick={props.onCancel}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}
