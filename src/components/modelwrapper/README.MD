#How to add new Figures to the Program
For more details see this article: https://blog.logrocket.com/configure-3d-models-react-three-fiber/
1. create a 3D Model in a suitable 3D Modeling Software, e.g. Blender. Paint3D might work in simple cases too.
2. export the Model in .glb format (called "binary GL transmission format").
3. put the .glb file into the public folder and name it <FigureType>3D.glb, e.g. Smurf3D.glb
4. in package.json replace file name by your file name in generate:glb script
5. Generate a React File from it:
    ```
   yarn generate:glb
    ```
6. A file <myfilename>.tsx was created in components/modelwrapper
7. IMPORTANT: ensure that the file path of the .glb file in the generated .tsx is empty, there are 2 places to fix, 
   you have to remove the leading "/" 
8. add a block with correction parameters for the different directions the object can take
```javascript 
   // N, E, S, W
   export const DIRECTION_PARAMS = [
     { rotation: Math.PI, dx: 0.2, dy: 0, dz: 0.8 },
     { rotation: Math.PI / 2, dx: 0.1, dy: 0, dz: 0.2 },
     { rotation: 0, dx: 0.7, dy: 0, dz: 0.2 },
     { rotation: -Math.PI / 2, dx: 0.8, dy: 0, dz: 0.8 },
   ];
```
8. fix the scale in the generated component so it fits well into the world
9. In Karol.tsx import the new figure and the DIRECTION_PARAMS and add it to the FIGURES array like the other ones
10. create a new menu entry in the Karol Figure drop down in KarolSettingsDialog.tsx
```typescript jsx
    <MenuItem value={4}>MySpecialFigure</MenuItem>
```
11. Now your new figure is ready to ramble!
