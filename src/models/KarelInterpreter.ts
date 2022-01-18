import {ParseTree} from "antlr4/tree/Tree";
import {WorldModel} from "./WorldModel";

/**
 * executes the given program on the world model
 * @param tree
 * @param model
 */
export function execute(tree:ParseTree, model: WorldModel): void {
    evaluate(tree, model);
}

function evaluate(tree: ParseTree, model: WorldModel){
    console.log(tree);
    // TODO
    model.moveKarol();
}
