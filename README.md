# react-three-karol

by Marco van Meegen (c) 2022

Karol the Robot IDE running in Browser rendered in 3d with react-three-fiber, parser generated with antlr.

This is the german variant of Karel which is used in schools. The version used in school is written in Java, but I
thought it would be much more approachable if nothing has to be installed.

It works without a server in your browser, just html and javascript.

Try it: https://vanmeegen.github.io/react-three-karol/

## Features

- 3D Board rendered with WebGL, configurable size
- full antlr generated parser, easily extensible
- most programming language constructs of the original are available
- configurable world size up to 50x50x50
- choice of several Karol Figures
- Parameters in Statements
- Parameters in Conditions
- Object Syntax for Statements and Conditions (e.g. Karol.Schritt() instead of Schritt)
- color of bricks and markers
- configurable count of bricks Karol can pick up and lay down (currently unlimited)
- load and save programs
- load and save the world
- user defined functions
- user defined conditions
- Blockly based visual language
- Step by Step Execution and interrupt program

## Development

The toolchain uses [Bun](https://bun.sh) as package manager and test runner,
[Vite](https://vite.dev) for the dev server and production build, and
[tsgo](https://www.npmjs.com/package/@typescript/native-preview) (TypeScript native preview)
for fast type checking (`tsc` remains available as fallback).

```bash
bun install            # install dependencies
bun run dev            # start the dev server (http://localhost:5173/react-three-karol/)
bun test               # run all tests
bun run coverage       # run tests with coverage report
bun run typecheck      # type check with tsgo (fallback: bun run typecheck:tsc)
bun run build          # type check + production build into dist/
```

### Grammar / Parser

The Karol language grammar lives in `antlrgrammar/Karol.g4`. The lexer and parser in
`src/parser/generated/` are generated TypeScript (via [antlr-ng](https://www.npmjs.com/package/antlr-ng),
pure npm — no Java required) and are checked in, so a normal build never needs to regenerate them.
After changing the grammar, regenerate with:

```bash
bun run generate:parser
```

The interpreter (`src/interpreter/KarolInterpreterGenerator.ts`) is a hand-written generator-based
tree walker on top of the generated parse tree; it yields after every statement, which is what
makes single-step debugging and adjustable execution speed possible.

## TODO (future)
- Syntax Highlighting in Editor
- Two Karol programs compete for a task by being executed and rendered simultaneously
