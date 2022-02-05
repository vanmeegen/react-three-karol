import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Slider } from "@mui/material";
import { Coord3d } from "../models/CommonTypes";
import { useState } from "react";

function DimensionSlider(props: { label: string; value: number; onChange: (newValue: number) => void }) {
  return (
    <>
      <Grid xs={3} alignItems="center">
        {props.label}
      </Grid>
      <Grid xs={9}>
        <Slider
          style={{ width: 300, margin: 30 }}
          defaultValue={10}
          value={props.value}
          onChange={(evt, value) => props.onChange(value as number)}
          step={1}
          marks={[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50].map((x) => ({ value: x }))}
          size="medium"
          min={5}
          max={50}
          valueLabelDisplay="on"
        />
      </Grid>
    </>
  );
}

export function WorldSettingsDialog(props: {
  onClose: (newDimensions: Coord3d) => void;
  open: boolean;
  dimensions: Coord3d;
  onCancel: () => void;
}) {
  const [x, setX] = useState(props.dimensions.x);
  const [y, setY] = useState(props.dimensions.y);
  const [z, setZ] = useState(props.dimensions.z);
  return (
    <Dialog open={props.open}>
      <DialogTitle>Einstellungen für die Welt</DialogTitle>
      <DialogContent>
        <Grid container>
          <DimensionSlider key="x" label="Größe x:" value={x} onChange={setX} />
          <DimensionSlider key="y" label="Größe y:" value={y} onChange={setY} />
          <DimensionSlider key="z" label="Größe z:" value={z} onChange={setZ} />
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.onClose(new Coord3d(x, y, z))}>Ok</Button>
        <Button onClick={props.onCancel}>Abbruch</Button>
      </DialogActions>
    </Dialog>
  );
}
