import React, { ReactElement } from "react";
import { coordToKey, FieldType, KarolModel, WorldModel } from "../models/WorldModel";
import { observer } from "mobx-react";
import { Canvas } from "@react-three/fiber";
// @ts-ignore
import { Box, Circle, GizmoHelper, GizmoViewcube, Line, Plane } from "@react-three/drei";
import { Brick } from "./Brick";
import { TextureLoader } from "three";
import dirt from "../assets/dirt.jpg";
import grass from "../assets/grass.jpg";
import { Karol } from "./Karol";

const DirtTexture = new TextureLoader().load(dirt);
const GrassTexture = new TextureLoader().load(grass);
const PI = 3.1415926;

function FieldInternal(props: {
  content: FieldType;
  karol: KarolModel;
  position: [number, number, number];
}): ReactElement<typeof props> | null {
  let result;
  const key = `${props.position[0]}_${props.position[1]}_${props.position[2]}`;
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
      result = null; // <Brick position={position} color="none" opacity={0}/>;
      break;
    default:
      result = null;
      break;
  }
  return result;
}

const Field = observer(FieldInternal);

const DashedLine = (props: { from: [number, number, number]; to: [number, number, number]; color: string }) => (
  <Line
    points={[props.from, props.to]} // Array of points
    color={props.color} // Default
    lineWidth={1} // In pixels (default)
    dashed={true}
    dashSize={1}
    dashScale={10}
    dashOffset={1}
  />
);

declare function Plane(props: any): any;

function World3DInternal(props: { model: WorldModel }): ReactElement<typeof props> {
  console.log("rendering world");
  const range = [];
  for (let i = 0; i < 11; i++) {
    range.push(i);
  }
  return (
    <div style={{ width: 800, height: 800, border: "solid black 1px" }}>
      <Canvas
        shadows={true}
        camera={{
          position: [5, 5, 5],
          zoom: 48,
        }}
        orthographic
      >
        {/*<OrthographicCamera makeDefault zoom={20} position={[0,10,0]} rotation={[0,0,0]}/>*/}
        <group position={[-5, -5, -5]}>
          <ambientLight key="l1" intensity={0.3} />
          <pointLight key="l2" castShadow intensity={0.8} position={[100, 100, 100]} />
          {range.map((z) => (
            <DashedLine key={"gridz" + z} from={[0, 0, z]} to={[10, 0, z]} color="green" />
          ))}
          {range.map((x) => (
            <DashedLine key={"gridx" + x} from={[x, 0, 0]} to={[x, 0, 10]} color="green" />
          ))}
          <DashedLine key="gridy" from={[0, 0, 0]} to={[0, 10, 0]} color="blue" />
          <Plane key="p1" args={[10, 10]} position={[-10, -5, -5]} rotation={[0, PI / 2, 0]}>
            <meshPhongMaterial attach="material" color="lightblue" />
          </Plane>
          <Plane key="p2" args={[10, 10]} position={[5, 5, 0]} rotation={[0, 0, 0]}>
            <meshPhongMaterial attach="material" color="lightblue" />
          </Plane>
          {props.model.asFields().map((fieldInfo) => (
            <Field
              key={coordToKey(fieldInfo)}
              content={fieldInfo.content}
              karol={props.model.getKarol()}
              position={[fieldInfo.x, fieldInfo.y / 2.0, fieldInfo.z]}
            />
          ))}
          {props.model.markers().map((markerInfo) => (
            <Brick
              key={coordToKey(markerInfo.position)}
              position={[markerInfo.position.x, markerInfo.position.y / 2.0, markerInfo.position.z]}
              heightUnits={0.1}
              color={markerInfo.color}
            />
          ))}
          <GizmoHelper alignment="bottom-right" margin={[50, 50]}>
            <GizmoViewcube />
          </GizmoHelper>
        </group>
      </Canvas>
    </div>
  );
}

/**
 * export the mobx reactified component
 */
export const World3D = observer(World3DInternal);
