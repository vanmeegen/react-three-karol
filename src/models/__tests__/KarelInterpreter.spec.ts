import {execute} from "../KarelInterpreter";
import {parseKarol} from "../../parser/KarolParser";

describe("The KarelInterpreter changes the World by programming", () => {
    it.todo("a move statement moves Carol in the current direction", () => {
        const tree = parseKarol("move");
        // TODO implement
        execute(tree!, undefined!);
    });
})
