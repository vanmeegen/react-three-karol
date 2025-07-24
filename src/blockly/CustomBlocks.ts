// noinspection JSUnusedLocalSymbols

import blocks from "./data/KarolBlocks.json";
import * as Blockly from "blockly";

// Export the generator so it can be used elsewhere
export let karolGenerator: any;

const blockToCode: [string, (x: Blockly.Block) => string | [string, number]][] = [
  ["step", (block: Blockly.Block) => "Schritt(" + block.getFieldValue("COUNT") + ")"],
  ["turnleft", (block: Blockly.Block) => "LinksDrehen"],
  ["turnright", (block: Blockly.Block) => "RechtsDrehen"],
  ["laydown", (block: Blockly.Block) => "Hinlegen(" + block.getFieldValue("COUNT") + ")"],
  ["laydown_color", (block: Blockly.Block) => "Hinlegen(" + block.getFieldValue("COLOR") + ")"],
  ["pickup", (block: Blockly.Block) => "Aufheben(" + block.getFieldValue("COUNT") + ")"],
  ["setmarker_color", (block: Blockly.Block) => "MarkeSetzen(" + block.getFieldValue("COLOR") + ")"],
  ["deletemarker", (block: Blockly.Block) => "MarkeLöschen"],
  ["wait", (block: Blockly.Block) => "Warten(" + block.getFieldValue("COUNT") + ")"],
  ["beep", (block: Blockly.Block) => "Ton"],
  ["stop", (block: Blockly.Block) => "Beenden"],
  [
    "repeat_times",
    (block: Blockly.Block) =>
      "wiederhole " +
      block.getFieldValue("COUNT") +
      " mal\n" +
      karolGenerator.statementToCode(block, "STATEMENTS") +
      "\nendewiederhole",
  ],
  [
    "while_do",
    (block: Blockly.Block) =>
      "wiederhole solange " +
      karolGenerator.valueToCode(block, "CONDITION", 0) +
      "\n" +
      karolGenerator.statementToCode(block, "STATEMENTS") +
      "\nendewiederhole",
  ],
  [
    "repeat_until",
    (block: Blockly.Block) =>
      "wiederhole \n" +
      karolGenerator.statementToCode(block, "STATEMENTS") +
      "\nendewiederhole" +
      "\nbis " +
      karolGenerator.valueToCode(block, "CONDITION", 0),
  ],
  [
    "repeat_while",
    (block: Blockly.Block) =>
      "wiederhole \n" +
      karolGenerator.statementToCode(block, "STATEMENTS") +
      "\nendewiederhole" +
      "\nsolange " +
      karolGenerator.valueToCode(block, "CONDITION", 0),
  ],
  [
    "repeat_forever",
    (block: Blockly.Block) => "wiederhole immer\n" + karolGenerator.statementToCode(block, "STATEMENTS") + "\nendewiederhole",
  ],
  [
    "if_then",
    (block: Blockly.Block) =>
      "wenn " +
      karolGenerator.valueToCode(block, "CONDITION", 0) +
      " dann\n" +
      karolGenerator.statementToCode(block, "STATEMENTS") +
      "\nendewenn",
  ],
  [
    "if_then_else",
    (block: Blockly.Block) =>
      "wenn  " +
      karolGenerator.valueToCode(block, "CONDITION", 0) +
      " dann\n" +
      karolGenerator.statementToCode(block, "STATEMENTS") +
      "\nsonst" +
      karolGenerator.statementToCode(block, "STATEMENTS_2") +
      "\nendewenn",
  ],
  ["is_wall", (block: Blockly.Block) => ["IstWand", 0]],
  ["isn't_wall", (block: Blockly.Block) => ["NichtIstWand", 0]],
  ["is_brick", (block: Blockly.Block) => ["IstZiegel", 0]],
  ["is_brick_count", (block: Blockly.Block) => ["IstZiegel(" + block.getFieldValue("COUNT") + ")", 0]],
  ["is_brick_color", (block: Blockly.Block) => ["IstZiegel(" + block.getFieldValue("COLOR") + ")", 0]],
  ["isn't_brick", (block: Blockly.Block) => ["NichtIstZiegel", 0]],
  ["isn't_brick_count", (block: Blockly.Block) => ["NichtIstZiegel(" + block.getFieldValue("COUNT") + ")", 0]],
  ["isn't_brick_color", (block: Blockly.Block) => ["NichtIstZiegel(" + block.getFieldValue("COLOR") + ")", 0]],
  ["is_marker", (block: Blockly.Block) => ["IstMarke", 0]],
  ["is_marker_color", (block: Blockly.Block) => ["IstMarke(" + block.getFieldValue("COLOR") + ")", 0]],
  ["isn't_marker", (block: Blockly.Block) => ["NichtIstMarke", 0]],
  ["isn't_marker_color", (block: Blockly.Block) => ["NichtIstMarke(" + block.getFieldValue("COLOR") + ")", 0]],
  ["is_south", (block: Blockly.Block) => ["IstSüden", 0]],
  ["is_north", (block: Blockly.Block) => ["IstNorden", 0]],
  ["is_west", (block: Blockly.Block) => ["IstWesten", 0]],
  ["is_east", (block: Blockly.Block) => ["IstOsten", 0]],
  ["is_full", (block: Blockly.Block) => ["IstVoll", 0]],
  ["isn't_full", (block: Blockly.Block) => ["NichtIstVoll", 0]],
  ["is_empty", (block: Blockly.Block) => ["IstLeer", 0]],
  ["isn't_empty", (block: Blockly.Block) => ["NichtIstLeer", 0]],
  ["has_bricks", (block: Blockly.Block) => ["HatZiegel", 0]],
  ["has_bricks_count", (block: Blockly.Block) => ["HatZiegel(" + block.getFieldValue("COUNT") + ")", 0]],
];

export function initCustomBlocks() {
  blocks.forEach((block) => {
    Blockly.Blocks[block.type] = {
      init: function () {
        this.jsonInit(block);
      },
    };
  });
  
  // Initialize the generator
  karolGenerator = new Blockly.Generator("karol");
  karolGenerator.PRECEDENCE = 0;
  
  // Register all block code generators
  blockToCode.forEach(([blockName, codeGenFct]) => {
    karolGenerator.forBlock[blockName] = codeGenFct;
  });
  
  // Debug: Log registered blocks
  console.log("Registered blocks in karolGenerator:", Object.keys(karolGenerator.forBlock));
  
  karolGenerator.scrub_ = function (block: Blockly.Block, code: string) {
    const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    let nextCode = "";
    if (nextBlock) {
      nextCode = "\n" + karolGenerator.blockToCode(nextBlock);
    }
    return code + nextCode;
  };
}
