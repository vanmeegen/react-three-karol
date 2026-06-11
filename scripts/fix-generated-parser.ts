/**
 * antlr-ng always emits a `Token` import and an `int` type alias, but this grammar
 * uses neither. Strip them after generation so the generated code passes the
 * noUnusedLocals/noUnusedParameters compiler options. Run via `bun run generate:parser`.
 */
const files = ["src/parser/generated/KarolLexer.ts", "src/parser/generated/KarolParser.ts"];

for (const file of files) {
  let text = await Bun.file(file).text();
  const withoutImport = text.replace('import { Token } from "antlr4ng";\n', "");
  // only drop the import if Token is not referenced anywhere else
  if (!/\bToken\b/.test(withoutImport)) {
    text = withoutImport;
  }
  if (!/\bint\b.*=|\bint[\],;)>]/.test(text.replace(/type int = number;/, ""))) {
    text = text.replace(
      /\/\/ for running tests with parameters.*\n\/\/ eslint-disable-next-line no-unused-vars\ntype int = number;\n/,
      ""
    );
  }
  await Bun.write(file, text);
  console.log("postprocessed", file);
}
