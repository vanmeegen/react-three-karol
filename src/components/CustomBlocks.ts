import blocks from "../data/KarolBlocks.json";
import Blockly, { Block } from "blockly";


// TODO handle code generation for values
// TODO handle code generation for if statements
let karolGenerator: any;

const blockToCode: [string, (x: Block) => string][] = [
  ["step", (block: Block) => "Schritt(" + block.getFieldValue("COUNT") + ")"],
  ["turnleft", (block: Block) => "LinksDrehen"],
  ["turnright", (block: Block) => "RechtsDrehen"],
  ["laydown", (block: Block) => "Hinlegen(" + block.getFieldValue("COUNT") + ")"],
  ["laydown_color", (block: Block) => "Hinlegen(" + block.getFieldValue("COLOR") + ")"],
  ["pickup", (block: Block) => "Aufheben(" + block.getFieldValue("COUNT") + ")"],
  ["setmarker_color", (block: Block) => "MarkeSetzen(" + block.getFieldValue("COLOR") + ")"],
  ["deletemarker", (block: Block) => "MarkeLöschen"],
  ["wait", (block: Block) => "Warten(" + block.getFieldValue("COUNT") + ")"],
  ["beep", (block: Block) => "Ton"],
  ["stop", (block: Block) => "Beenden"],
  ["repeat_times", (block: Block) => "wiederhole " + block.getFieldValue("COUNT") + " mal\n"
    + karolGenerator.statementToCode(block, "STATEMENTS") + "\nendewiederhole"],
  ["while_do", (block: Block) => "wiederhole solange " + karolGenerator.valueToCode(block, "CONDITION") + "\n"
    + karolGenerator.statementToCode(block, "STATEMENTS") + "\nendewiederhole"],
  ["repeat_until", (block: Block) => "wiederhole \n" + karolGenerator.statementToCode(block, "STATEMENTS") +
    +"\nbis " + karolGenerator.valueToCode(block, "CONDITION") + "\nendewiederhole"],
  ["repeat_while", (block: Block) => "wiederhole \n" + karolGenerator.statementToCode(block, "STATEMENTS") +
    +"\nsolange " + karolGenerator.valueToCode(block, "CONDITION") + "\nendewiederhole"],
  ["repeat_forever", (block: Block) => "wiederhole immer\n" + karolGenerator.statementToCode(block, "STATEMENTS") + "\nendewiederhole"]
];

export function initCustomBlocks() {
  blocks.forEach((block) => {
    Blockly.Blocks[block.type] = {
      init: function() {
        this.jsonInit(block);
      }
    };
  });
  karolGenerator = new Blockly.Generator("karol");
  karolGenerator.PRECEDENCE = 0;
  blockToCode.forEach(([blockName, codeGenFct]) => {
    karolGenerator[blockName] = codeGenFct;
  });
  karolGenerator.scrub_ = function(block: Block, code: string) {
    const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    let nextCode = "";
    if (nextBlock) {
      nextCode =
        "\n" + karolGenerator.blockToCode(nextBlock);
    }
    return code + nextCode;
  };
  (Blockly as any)["karol"] = karolGenerator;
}
