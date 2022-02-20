import blocks from "../data/KarolBlocks.json";
import Blockly from "blockly";

export function initCustomBlocks() {
  blocks.forEach((block) => {
    Blockly.Blocks[block.type] = {
      init: function () {
        this.jsonInit(block);
      },
    };
  });
}
