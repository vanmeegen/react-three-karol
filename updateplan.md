# Package Update Plan for react-three-karol

## Overview
This document outlines the systematic update plan for all outdated packages in the project. Each update phase must be validated with successful `yarn build` and `yarn test` commands before proceeding to the next phase.

## Current Status
- ✅ **Phase 1**: Completed - prettier, gh-pages, browser-fs-access (antlr4 moved to Phase 7)
- ✅ **Phase 2**: Completed - @emotion packages, mobx packages (compatibility fix applied for mobx-react)
- ✅ **Phase 3**: Completed - TypeScript, Vite, @vitejs/plugin-react, vitest
- ✅ **Phase 4**: Completed - Material-UI packages (Grid API migration applied)
- ✅ **Phase 5**: Completed - React ecosystem (react-blockly moved to Phase 8)
- ✅ **Phase 6**: Completed - Three.js ecosystem  
- ❌ **Phase 7**: Complete - ANTLR4 investigation (update not recommended)
- ⏳ **Phase 8**: Pending - React component compatibility

## Current Package Versions vs Latest Available

### Phase 1: Low Risk Updates (Dev Dependencies & Utilities)
| Package | Current | Latest | Type | Risk Level |
|---------|---------|---------|------|------------|
| prettier | 2.6.1 | 3.6.2 | DevDep | Low |
| gh-pages | 3.2.3 | 6.3.0 | DevDep | Low |
| browser-fs-access | 0.25.3 | 0.38.0 | Dep | Low |
| antlr4 | 4.9.3 | 4.13.2 | Dep | Low |

### Phase 2: Styling & State Management
| Package | Current | Latest | Type | Risk Level |
|---------|---------|---------|------|------------|
| @emotion/react | 11.8.2 | 11.14.0 | Dep | Medium |
| @emotion/styled | 11.8.1 | 11.14.1 | Dep | Medium |
| mobx | 6.13.7 | 6.13.7 | Dep | Medium |
| mobx-react | 7.6.0 | 9.2.0 | Dep | Medium |

### Phase 3: Build Tools & TypeScript
| Package | Current | Latest | Type | Risk Level |
|---------|---------|---------|------|------------|
| vitest | 0.8.1 | 3.2.4 | DevDep | High |
| vite | 2.9.1 | 7.0.5 | DevDep | High |
| @vitejs/plugin-react | 1.3.0 | 4.7.0 | DevDep | High |
| typescript | 4.6.3 | 5.8.3 | DevDep | High |

### Phase 4: UI Framework (Material-UI)
| Package | Current | Latest | Type | Risk Level |
|---------|---------|---------|------|------------|
| @mui/icons-material | 5.5.1 | 7.2.0 | Dep | High |
| @mui/material | 5.5.3 | 7.2.0 | Dep | High |

### Phase 5: React Ecosystem
| Package | Current | Latest | Type | Risk Level |
|---------|---------|---------|------|------------|
| react | 18.3.1 | 19.1.0 | Dep | Critical |
| react-dom | 18.3.1 | 19.1.0 | Dep | Critical |
| @types/react | 17.0.43 | 19.1.8 | DevDep | Critical |
| @types/react-dom | 17.0.14 | 19.1.6 | DevDep | Critical |
| react-blockly | 7.0.0-alpha.2 | 9.0.0 | Dep | High |

### Phase 6: Three.js Ecosystem
| Package | Current | Latest | Type | Risk Level |
|---------|---------|---------|------|------------|
| three | 0.139.2 | 0.178.0 | Dep | Critical |
| @types/three | 0.139.0 | 0.178.1 | DevDep | Critical |
| @react-three/fiber | 7.0.27 | 9.2.0 | Dep | Critical |
| @react-three/drei | 8.20.2 | 10.5.1 | Dep | Critical |
| @react-three/cannon | 6.0.0 | 6.6.0 | Dep | Medium |

### Phase 7: Parser Library (Future Investigation)
| Package | Current | Latest | Type | Risk Level |
|---------|---------|---------|------|------------|
| antlr4 | 4.9.3 | 4.13.2 | Dep | Critical |

### Phase 8: React Component Compatibility (Future Investigation)
| Package | Current | Latest | Type | Risk Level |
|---------|---------|---------|------|------------|
| react-blockly | 7.0.0-alpha.2 | 9.0.0 | Dep | High |

## Update Procedure

### For Each Phase:

1. **Create a new branch**
   ```bash
   git checkout -b update-phase-X
   ```

2. **Update packages in the phase**
   ```bash
   yarn add [package@version] # for dependencies
   yarn add -D [package@version] # for devDependencies
   ```

3. **Run tests after each package update**
   ```bash
   yarn test
   yarn build
   ```

4. **If tests fail:**
   - Document the error
   - Research breaking changes
   - Update code as necessary
   - Re-run tests

5. **Commit successful updates**
   ```bash
   git add -A
   git commit -m "Update [packages] in Phase X"
   ```

## Detailed Update Steps

### Phase 1: Low Risk Updates

```bash
# ✅ COMPLETED: prettier 2.6.1 → 3.6.2
yarn add -D prettier@3.6.2
yarn test && yarn build

# ✅ COMPLETED: gh-pages 3.2.3 → 6.3.0
yarn add -D gh-pages@6.3.0
yarn test && yarn build

# ✅ COMPLETED: browser-fs-access 0.25.3 → 0.38.0
yarn add browser-fs-access@0.38.0
yarn test && yarn build

# ⚠️ SKIPPED: antlr4 - moved to Phase 7 due to browser compatibility issues
```

### Phase 2: Styling & State Management

```bash
# ✅ COMPLETED: Emotion packages
yarn add @emotion/react@11.14.0 @emotion/styled@11.14.1
yarn test && yarn build

# ✅ COMPLETED: MobX packages
# Note: mobx-react 9.2.0 had compatibility issues with React 18
# Successfully updated to mobx-react@7.6.0 instead
yarn add mobx@6.13.7 mobx-react@7.6.0
yarn test && yarn build
```

### Phase 3: Build Tools & TypeScript

```bash
# ✅ COMPLETED: TypeScript 4.6.3 → 5.8.3
yarn add -D typescript@5.8.3
yarn test && yarn build

# ✅ COMPLETED: Vite ecosystem
# Updated step by step as requested
yarn add -D vite@7.0.5 @vitejs/plugin-react@4.7.0 vitest@3.2.4
yarn test && yarn build
```

### Phase 4: UI Framework (Material-UI)

```bash
# ✅ COMPLETED: MUI packages v5 → v7
yarn add @mui/material@7.2.0 @mui/icons-material@7.2.0
yarn test && yarn build
# Fixed Grid component API: xs prop → size prop
```

**Note:** MUI v7 may have breaking changes from v5. Check [MUI migration guide](https://mui.com/material-ui/migration/migration-v5/).

### Phase 5: React Ecosystem

```bash
# ✅ COMPLETED: Update React types first
yarn add -D @types/react@^19.1.8 @types/react-dom@^19.1.6
yarn test && yarn build

# ✅ COMPLETED: Update React runtime
yarn add react@^19.1.0 react-dom@^19.1.0
yarn test && yarn build

# ⚠️ MOVED TO PHASE 8: react-blockly requires compatibility fixes
# yarn add react-blockly@^9.0.0
```

**Note:** React 19 is a major update. Review [React 19 upgrade guide](https://react.dev/blog).

### Phase 6: Three.js Ecosystem

```bash
# ✅ COMPLETED: Update Three.js and types together
yarn add three@^0.178.0
yarn add -D @types/three@^0.178.1
yarn test && yarn build

# ✅ COMPLETED: Update React Three Fiber ecosystem
yarn add @react-three/fiber@^9.2.0 @react-three/drei@^10.5.1
yarn test && yarn build

# ✅ COMPLETED: Fixed API breaking changes:
# - attachArray → attach prop syntax
# - useGLTF hook URL paths (added leading slash)
# - Object3DNode removal → React.JSX.IntrinsicElements["group"]
# - Line component alphaWrite prop removal
# - useRef<TYPE>(null) strict typing
# - GLTF type casting compatibility
```

**Note:** Three.js 0.139 → 0.178 is a significant jump. Check [Three.js migration guide](https://github.com/mrdoob/three.js/wiki/Migration-Guide).

### Phase 7: Parser Library (Investigation Complete)

```bash
# ❌ ANTLR4 4.13.2 UPDATE NOT RECOMMENDED
# Tested antlr4@4.13.2 - Critical compatibility issues identified:
#
# 1. Runtime Errors:
#    - TypeError: default.PredictionContextCache is not a constructor
#    - API breaking changes in generated parser code
#
# 2. TypeScript Compilation Errors:
#    - Property 'symbol' does not exist on type 'ParseTree'
#    - Property 'ruleIndex' does not exist on type 'ParserRuleContext'  
#    - Generic type 'Recognizer<TSymbol>' requires 1 type argument(s)
#    - Multiple type incompatibilities between ParseTree and ParserRuleContext
#
# 3. Browser Compatibility Issues:
#    - Requires Node.js-specific polyfills
#    - Module loading problems in browser environments
#
# RECOMMENDED ALTERNATIVES:
# 1. antlr4ng - TypeScript-first, browser-friendly, 9-35% faster
# 2. Stay with antlr4@4.9.3 (current working version)
# 3. Wait for future ANTLR4 versions to fix browser compatibility
#
# DECISION: Keep antlr4@4.9.3 for stability
# Consider antlr4ng migration in future major version update
```

## Potential Breaking Changes to Watch

1. **Prettier 3.x**: New formatting rules, may require code reformatting ✅
2. **TypeScript 5.x**: Stricter type checking, new syntax features
3. **Vite 7.x**: Build configuration changes
4. **MUI 7.x**: Component API changes, theme structure updates
5. **React 19.x**: New features, deprecated APIs removed
6. **Three.js 0.178**: Many API changes, deprecated features removed
7. **ANTLR4 4.13.x**: Browser compatibility issues, Node.js module dependencies

## Rollback Strategy

If any phase causes critical issues:

1. Revert to previous commit
2. Document the specific issues
3. Research solutions or consider partial updates
4. May need to update some packages incrementally rather than all at once

## Success Criteria

Each phase is considered successful when:
- All packages in the phase are updated
- `yarn test` passes without errors
- `yarn build` completes successfully
- Application runs without runtime errors
- No TypeScript errors (for TS-related updates)
