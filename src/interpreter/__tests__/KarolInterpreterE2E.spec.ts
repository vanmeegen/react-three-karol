import { KarolModel } from "../../models/KarolModel";
import { executeProgram } from "./TestUtil";
import { WorldModel } from "../../models/WorldModel";
import { beforeEach } from "vitest";
import { FieldType } from "../../models/CommonTypes";

describe("It can execute full Karol 3.0 programs", () => {
  let world: WorldModel;
  let karol: KarolModel;
  beforeEach(() => {
    world = new WorldModel();
    karol = new KarolModel(world);
  });
  it("can define a custom procedure and call it 2 times", () => {
    const program = "{ Karol steht vor einem Viereck aus Ziegel. Er soll alle Steine einsammeln }\n" +
      "Anweisung AufhebenReihe\n" +
      "  wiederhole solange IstZiegel\n" +
      "    Aufheben\n" +
      "    Schritt\n" +
      "  *wiederhole\n" +
      "*Anweisung\n" +
      "\n" +
      "Anweisung Wenden\n" +
      "  wenn IstSüden dann\n" +
      "    Schritt\n" +
      "    LinksDrehen\n" +
      "    Schritt\n" +
      "    LinksDrehen\n" +
      "  sonst\n" +
      "    Schritt\n" +
      "    RechtsDrehen\n" +
      "    Schritt\n" +
      "    RechtsDrehen\n" +
      "  *wenn\n" +
      "*Anweisung\n" +
      "\n" +
      "{ Hauptprogramm }\n" +
      "wiederhole solange IstZiegel\n" +
      "  AufhebenReihe\n" +
      "  Wenden\n" +
      "*wiederhole";
    world.setField(0, 0, 1, FieldType.brick_first);
    world.setField(0, 0, 2, FieldType.brick_first);
    world.setField(1, 0, 1, FieldType.brick_first);
    world.setField(1, 0, 2, FieldType.brick_first);
    executeProgram(program, karol);
    expect(world.getField(0,0,1)).toEqual(FieldType.empty);
    expect(world.getField(0,0,2)).toEqual(FieldType.empty);
    expect(world.getField(1,0,1)).toEqual(FieldType.empty);
    expect(world.getField(1,0,2)).toEqual(FieldType.empty);
  });
});
