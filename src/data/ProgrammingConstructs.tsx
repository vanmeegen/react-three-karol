export const STATEMENTS = [
  "Schritt",
  "LinksDrehen",
  "RechtsDrehen",
  undefined,
  "Hinlegen",
  "Aufheben",
  undefined,
  "MarkeSetzen",
  "MarkeLöschen",
  undefined,
  "Ton",
];
export const CONDITIONS = [
  "IstWand",
  "NichtIstWand",
  undefined,
  "IstZiegel",
  "NichtIstZiegel",
  undefined,
  "IstMarke",
  "NichtIstMarke",
  undefined,
  "IstNorden",
  "IstOsten",
  "IstSüden",
  "IstWesten",
];
export const CONTROLSTRUCTURES = [
  "wiederhole n mal ANW endewiederhole",
  "wiederhole solange BED endewiederhole",
  "wiederhole ANW endewiederhole bis BED",
  "wiederhole ANW endewiederhole solange BED",
  undefined,
  "wenn BED dann ANW endewenn",
  "wenn BED dann ANW sonst ANW endewenn",
];

export const KAROL_TOOLBOX = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "Anweisungen",
      contents: [
        {
          kind: "block",
          type: "step",
        },
        {
          kind: "block",
          type: "turnleft",
        },
        {
          kind: "block",
          type: "turnright",
        },
        {
          kind: "block",
          type: "laydown",
        },
        {
          kind: "block",
          type: "laydown_color",
        },
        {
          kind: "block",
          type: "pickup",
        },
        {
          kind: "block",
          type: "setmarker_color",
        },
        {
          kind: "block",
          type: "deletemarker",
        },
        {
          kind: "block",
          type: "wait",
        },
        {
          kind: "block",
          type: "beep",
        },
        {
          kind: "block",
          type: "stop",
        },
      ],
    },
    {
      kind: "category",
      name: "Kontrollstrukturen",
      contents: [
        {
          kind: "block",
          type: "repeat_times",
        },
        {
          kind: "block",
          type: "while_do",
        },
        {
          kind: "block",
          type: "repeat_until",
        },
        {
          kind: "block",
          type: "repeat_while",
        },
        {
          kind: "block",
          type: "repeat_forever",
        },
        {
          kind: "block",
          type: "if_then",
        },
        {
          kind: "block",
          type: "if_then_else",
        },
      ],
    },
    {
      kind: "category",
      name: "Bedingungen",
      contents: [],
    },
  ],
};
