import blocks from "./KarolBlocks.json";
import Blockly from "blockly";

export function initCustomBlocks() {
  blocks.forEach((block) => {
    Blockly.Blocks["karol_" + block.type] = {
      init: function () {
        this.jsonInit(block);
      },
    };
  });
}
