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
          type: "karol_schritt",
        },
      ],
    },
    {
      kind: "category",
      name: "Kontrollstrukturen",
      contents: [
        {
          kind: "block",
          type: "karol_wiederhole",
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
