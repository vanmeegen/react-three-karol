import { describe, it, expect, afterEach } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { KarolSettingsDialog } from "../KarolSettingsDialog";
import { WorldSettingsDialog } from "../WorldSettingsDialog";
import { WorldModel } from "../../models/WorldModel";
import { KarolModel, KarolSettings } from "../../models/KarolModel";
import { Coord3d } from "../../models/CommonTypes";

afterEach(cleanup);

describe("The KarolSettingsDialog", () => {
  it("returns the edited settings on Ok", () => {
    const karol = new KarolModel(new WorldModel(10, 10, 10));
    let result: KarolSettings | undefined;
    render(<KarolSettingsDialog open={true} karol={karol} onClose={(r) => (result = r)} onCancel={() => {}} />);
    fireEvent.change(document.getElementById("jumpHeight") as HTMLInputElement, { target: { value: "3" } });
    fireEvent.click(screen.getByText("Ok"));
    expect(result).toBeDefined();
    expect(result!.jumpHeight).toBe(3);
    expect(result!.figureIndex).toBe(karol.figureIndex);
  });

  it("calls onCancel on Abbruch without changing anything", () => {
    const karol = new KarolModel(new WorldModel(10, 10, 10));
    let cancelled = false;
    let closed = false;
    render(
      <KarolSettingsDialog open={true} karol={karol} onClose={() => (closed = true)} onCancel={() => (cancelled = true)} />
    );
    fireEvent.click(screen.getByText("Abbruch"));
    expect(cancelled).toBe(true);
    expect(closed).toBe(false);
  });
});

describe("The WorldSettingsDialog", () => {
  it("shows sliders for all three dimensions and returns them on Ok", () => {
    let result: Coord3d | undefined;
    render(
      <WorldSettingsDialog
        open={true}
        dimensions={new Coord3d(10, 11, 12)}
        onClose={(dims) => (result = dims)}
        onCancel={() => {}}
      />
    );
    expect(screen.getByText("Größe x:")).toBeTruthy();
    expect(screen.getByText("Größe y:")).toBeTruthy();
    expect(screen.getByText("Größe z:")).toBeTruthy();
    fireEvent.click(screen.getByText("Ok"));
    expect(result).toEqual(new Coord3d(10, 11, 12));
  });

  it("calls onCancel on Abbruch", () => {
    let cancelled = false;
    render(
      <WorldSettingsDialog
        open={true}
        dimensions={new Coord3d(10, 10, 10)}
        onClose={() => {}}
        onCancel={() => (cancelled = true)}
      />
    );
    fireEvent.click(screen.getByText("Abbruch"));
    expect(cancelled).toBe(true);
  });
});
