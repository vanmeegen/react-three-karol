import React, { RefObject, useEffect, useRef } from "react";
import { WorldModel } from "../models/WorldModel";
import { observer } from "mobx-react";
import { Canvas } from "@react-three/fiber";
// @ts-ignore
import {
  Box,
  Circle,
  GizmoHelper,
  GizmoViewcube,
  Line,
  OrbitControls,
  OrthographicCamera,
  Plane
} from "@react-three/drei";
import { Brick } from "./Brick";
import { TextureLoader } from "three";
import dirt from "../assets/dirt.jpg";
import grass from "../assets/grass.jpg";
import { Karol } from "./Karol";
import { KarolModel } from "../models/KarolModel";
import { coordToKey, FieldType } from "../models/CommonTypes";

const DirtTexture = new TextureLoader().load(dirt);
const GrassTexture = new TextureLoader().load(grass);
const PI = Math.PI;

const Field = observer((props: { content: FieldType; karol: KarolModel; position: [number, number, number] }) => {
  let result;
  const key = `${props.position[0]}_${props.position[1]}_${props.position[2]}`;
  // console.log("Rendering field " + key);
  switch (props.content) {
    case FieldType.brick:
      result = <Brick key={key} position={props.position} texture={DirtTexture} heightUnits={0.5} />;
      break;
    case FieldType.grassBlock:
      result = <Brick key={key} position={props.position} texture={GrassTexture} heightUnits={0.5} />;
      break;
    case FieldType.marker:
      result = <Brick key={key} position={props.position} heightUnits={0.1} color="yellow" />;
      break;
    case FieldType.karol:
      result = <Karol key={key} position={props.position} karol={props.karol} />;
      break;
    case FieldType.wall:
      result = <Brick key={key} position={props.position} color="gray" heightUnits={1} />;
      break;
    case FieldType.empty:
      result = null;
      break;
    default:
      result = null;
      break;
  }
  return result;
});

const DashedLine = observer(
  (props: { from: [number, number, number]; to: [number, number, number]; color: string }) => (
    <Line
      points={[props.from, props.to]} // Array of points
      color={props.color} // Default
      lineWidth={1} // In pixels (default)
      dashed={true}
      dashSize={1}
      dashScale={10}
      dashOffset={1}
    />
  )
);

// declare function Plane(props: any): any;

/**
 * separate last index into own component so only 10 fields are updated instead of 1000
 * @param props
 * @constructor
 */
const WorldFieldsX = observer((props: { fields: FieldType[]; y: number; x: number; karol: KarolModel }) => {
  const { fields, x, y, karol } = props;
  return (
    <>
      {fields.map((f, z) => (
        <Field key={z} content={f} karol={karol} position={[x, y / 2.0, z]} />
      ))}
    </>
  );
});

const WorldFields = observer((props: { fields: FieldType[][][]; karol: KarolModel }) => {
  return (
    <>
      {props.fields.map((fieldInfo, x) =>
        fieldInfo.map((fieldInfo, y) => <WorldFieldsX fields={fieldInfo} karol={props.karol} y={y} x={x} />)
      )}
    </>
  );
});

export const WorldMarkers = observer((props: { model: WorldModel }) => {
  const list = props.model.markers;
  // console.log("rendering " + list.length + " markers");
  return (
    <>
      {list.map((markerInfo) => (
        <Brick
          key={coordToKey(markerInfo.position)}
          position={[markerInfo.position.x, markerInfo.position.y / 2.0, markerInfo.position.z]}
          heightUnits={0.1}
          color={markerInfo.color}
        />
      ))}
    </>
  );
});

export const World3D = observer((props: { world: WorldModel; karol: KarolModel }) => {
  const cameraRef: RefObject<{ updateProjectionMatrix: () => void }> = useRef(null);
  const rangeX = [];
  const max = props.world.dimensions;
  for (let i = 0; i < max.x + 1; i++) {
    rangeX.push(i);
  }
  const rangeZ = [];
  for (let i = 0; i < max.z + 1; i++) {
    rangeZ.push(i);
  }
  // three.js needs explicit update to camera
  useEffect(() => {
    cameraRef.current?.updateProjectionMatrix();
  },[props.world.dimensions.x,props.world.dimensions.y,props.world.dimensions.z]);
  // noinspection RequiredAttributes
  return (
    <div style={{ width: 800, height: 800, border: "solid black 1px" }}>
      <Canvas shadows={true}>
        <OrthographicCamera zoom={480 / max.x} position={[max.x, max.y, max.z]} makeDefault={true} ref={cameraRef} />
        <group key="all" position={[-5, -5, -5]}>
          <ambientLight key="l1" intensity={0.3} />
          <pointLight key="l2" castShadow intensity={0.8} position={[100, 100, 100]} />
          {rangeZ.map((z) => (
            <DashedLine key={"gridz" + z} from={[0, 0, z]} to={[max.x, 0, z]} color="green" />
          ))}
          {rangeX.map((x) => (
            <DashedLine key={"gridx" + x} from={[x, 0, 0]} to={[x, 0, max.z]} color="green" />
          ))}
          <DashedLine key="gridy" from={[0, 0, 0]} to={[0, max.y, 0]} color="blue" />
          <Plane key="p1" args={[max.z, max.y]} position={[0, max.y / 2, max.z / 2]} rotation={[0, PI / 2, 0]}>
            <meshPhongMaterial attach="material" color="lightblue" />
          </Plane>
          <Plane key="p2" args={[max.x, max.y]} position={[max.x / 2, max.y / 2, 0]} rotation={[0, 0, 0]}>
            <meshPhongMaterial attach="material" color="lightblue" />
          </Plane>
          <WorldFields fields={props.world.fields} karol={props.karol} />
          <WorldMarkers model={props.world} />
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
          <GizmoHelper alignment="bottom-right" margin={[50, 50]}>
            <GizmoViewcube />
          </GizmoHelper>
        </group>
      </Canvas>
    </div>
  );
});
