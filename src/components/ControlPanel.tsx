import { WorldModel } from "../models/WorldModel";
import { action } from "mobx";
import { KarolModel } from "../models/KarolModel";
import { Color, FieldType } from "../models/CommonTypes";
import { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Slider } from "@mui/material";

function handleError(f: () => void): () => void {
  return () => {
    try {
      f();
    } catch (e) {
      alert("Error" + e);
    }
  };
}

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

function WorldSettingsDialog(props: {
  onClose: () => void;
  open: boolean;
  X: number;
  onChangeX: (value: ((prevState: number) => number) | number) => void;
  valueY: number;
  onChangeY: (value: ((prevState: number) => number) | number) => void;
  valueZ: number;
  onChangeZ: (value: ((prevState: number) => number) | number) => void;
  onCancel: () => void;
}) {
  return (
    <Dialog onClose={props.onClose} open={props.open}>
      <DialogTitle>World Settings</DialogTitle>
      <DialogContent>
        <Grid container>
          <DimensionSlider key="x" label="Größe x:" value={props.X} onChange={props.onChangeX} />
          <DimensionSlider key="y" label="Größe y:" value={props.valueY} onChange={props.onChangeY} />
          <DimensionSlider key="z" label="Größe z:" value={props.valueZ} onChange={props.onChangeZ} />
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose}>Ok</Button>
        <Button onClick={props.onCancel}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}

export function ControlPanel(props: { world: WorldModel; karol: KarolModel }) {
  const [isOpen, setOpen] = useState(false);
  const [xmax, setXmax] = useState(props.world.dimensions.x);
  const [ymax, setYmax] = useState(props.world.dimensions.y);
  const [zmax, setZmax] = useState(props.world.dimensions.z);

  function toggleMarker() {
    const position = props.karol.position;
    if (props.world.getMarker(position)) {
      props.world.deleteMarker(position);
    } else {
      props.world.setMarker(position, Color.yellow);
    }
  }

  function handleWorldProperties() {
    setOpen(true);
  }

  function handleClose() {
    props.world.init(xmax, ymax, zmax);
    setOpen(false);
  }

  function setQuader() {
    const position = props.karol.nextPosition;
    if (props.world.getFieldByCoord(position) === FieldType.empty) {
      props.world.setFieldByCoord(position, FieldType.wall);
    }
  }

  function deleteQuader() {
    const position = props.karol.nextPosition;
    if (props.world.isValid(position) && props.world.getFieldByCoord(position) === FieldType.wall) {
      props.world.setFieldByCoord(position, FieldType.empty);
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <WorldSettingsDialog
        onClose={handleClose}
        open={isOpen}
        X={xmax}
        onChangeX={setXmax}
        valueY={ymax}
        onChangeY={setYmax}
        valueZ={zmax}
        onChangeZ={setZmax}
        onCancel={() => setOpen(false)}
      />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button onClick={handleError(() => props.karol.turnLeft())}>&larr;</button>
        <button onClick={handleError(() => props.karol.move())}>&uarr;</button>
        <button onClick={handleError(() => props.karol.turnRight())}>&rarr;</button>
        <button onClick={handleError(() => props.karol.layBrick())}>H</button>
        <button onClick={handleError(() => props.karol.pickupBrick())}>A</button>
        <button onClick={handleError(action(toggleMarker))}>M</button>
        <button onClick={handleError(action(setQuader))}>Q</button>
        <button onClick={handleError(action(deleteQuader))}>E</button>
        <button onClick={handleWorldProperties}>World Settings</button>
      </div>
    </div>
  );
}
