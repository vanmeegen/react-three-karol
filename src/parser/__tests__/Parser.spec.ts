import {parseKarol} from "../KarolParserFacade";
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

})
