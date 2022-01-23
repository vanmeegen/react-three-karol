# react-three-karol

by Marco van Meegen

Karol the Robot IDE running in Browser rendered in 3d with react-three-fiber, parser generated with antlr.

This is the german variant of Karel which is used in schools. The version used in school is written in Java, but I
thought it would be much more approachable if nothing has to be installed.

## Features

- 3D Board rendered with WebGL, configurable size
- full antlr generated parser, easily extendible
- most programming language constructs of the original are available

## TODO

- Syntax Highlighting in Editor
- Menu to insert all language constructs
- Parameters in Statements or Conditions

## pull requests welcome

- Karol parameters:
    - jump height (implemented, but need to expose in UI)
    - bricks Karol can pick up and lay down (currently unlimited)
- editable world size
- user defined functions
- user defined conditions
- Program always stops on errors

