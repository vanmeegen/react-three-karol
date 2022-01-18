import {parseKarol} from "../KarolParser";
import fs from "fs";

describe("The Karol Parser", () => {
    it("recognizes example with syntax error", () => {
        // misssing BEGINNING-OF-EXECUTION End pair
        const input = "BEGINNING-OF-PROGRAM END-OF-PROGRAM";
        // invalid program should return undefined
        expect(parseKarol(input)).toBeUndefined();
    });
    it("correctly parses the example without syntax errors", () => {
        const input = "BEGINNING-OF-PROGRAM BEGINNING-OF-EXECUTION END-OF-EXECUTION END-OF-PROGRAM";
        // invalid program should return undefined
        expect(parseKarol(input)).toBeDefined();
    });
    it("correctly parses the example file", () => {
        const input = fs.readFileSync("src/parser/__tests__/KarolProgramm.txt", "utf8");
        // invalid program should return undefined
        expect(parseKarol(input)).toBeDefined();
    });

})
