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

## TODO (future)
- Syntax Highlighting in Editor
- Two Karol programs compete for a task by being executed and rendered simultaneously
