import { parseKarol } from "../KarolParserFacade";
import fs from "fs";

describe("The Karol Parser", () => {
  it("recognizes example with syntax error", () => {
    // misssing BEGINNING-OF-EXECUTION End pair
    const input = "END-OF-PROGRAM";
    // invalid program should return undefined
    expect(parseKarol(input)).toBeUndefined();
  });
  it("correctly parses the example without syntax errors", () => {
    const input = "Programm Schritt *Programm";
    // invalid program should return undefined
    expect(parseKarol(input)).toBeDefined();
  });
  it("correctly parses the example file", () => {
    const input = fs.readFileSync("src/parser/__tests__/KarolProgramm.txt", "utf8");
    // invalid program should return undefined
    expect(parseKarol(input)).toBeDefined();
  });
  describe("it can parse object syntax for statements", () => {
    it("correctly parses non parameterized statements with object syntax", () => {
      const input = "Karol.Schritt()";
      expect(parseKarol(input)).toBeDefined();
    });
    it("correctly parses parameterized statements with object syntax", () => {
      const input = "Karol.Schritt(2)";
      expect(parseKarol(input)).toBeDefined();
    });
    it("correctly parses parameterized statements with color and with object syntax", () => {
      const input = "Karol.Hinlegen(rot)";
      expect(parseKarol(input)).toBeDefined();
    });
    it("correctly parses parameterized statements with number and with object syntax", () => {
      const input = "Karol.Hinlegen(2)";
      expect(parseKarol(input)).toBeDefined();
    });
    it("does not accept statement object syntax without brackets", () => {
      const input = "Karol.Hinlegen";
      expect(parseKarol(input)).toBeUndefined();
    });
  });
  describe("it can parse object syntax for conditions", () => {
    it("correctly parses non parameterized conditions with object syntax", () => {
      const input = "wenn Karol.IstWand() dann Schritt endewenn";
      expect(parseKarol(input)).toBeDefined();
    });
    it("correctly parses parameterized conditions with object syntax", () => {
      const input = "wenn Karol.IstMarke(rot) dann Schritt endewenn";
      expect(parseKarol(input)).toBeDefined();
    });
    it("correctly parses parameterized conditions with color and with object syntax", () => {
      const input = "wenn Karol.IstZiegel(rot) dann Schritt endewenn";
      expect(parseKarol(input)).toBeDefined();
    });
    it("correctly parses parameterized conditions with number and with object syntax", () => {
      const input = "wenn Karol.IstZiegel(2) dann Schritt endewenn";
      expect(parseKarol(input)).toBeDefined();
    });
    it("does not accept condition object syntax without brackets", () => {
      const input = "wenn Karol.IstZiegel dann Schritt endewenn";
      expect(parseKarol(input)).toBeUndefined();
    });
  });
});
