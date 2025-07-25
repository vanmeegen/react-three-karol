// noinspection RequiredAttributes

import React, { RefObject, useEffect, useRef } from "react";
import { WorldModel } from "../models/WorldModel";
import { observer } from "mobx-react";
import { Canvas } from "@react-three/fiber";
import { GizmoHelper, GizmoViewcube, Line, OrbitControls, OrthographicCamera, Plane, Environment } from "@react-three/drei";
import * as THREE from "three";
import { KarolModel } from "../models/KarolModel";
import { WorldMarkers } from "./WorldMarkers";
import { WorldFields } from "./WorldFields";

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

export const World3D = observer((props: { world: WorldModel; karol: KarolModel }) => {
  const cameraRef = useRef<THREE.OrthographicCamera>(null);
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
  }, [props.world.dimensions.x, props.world.dimensions.y, props.world.dimensions.z]);
  // noinspection RequiredAttributes
  return (
    <div style={{ width: "700px", height: "600px", borderTop: "solid black 1px" }}>
      <Canvas
        shadows={true}
        gl={{ 
          antialias: true
        }}
      >
        <OrthographicCamera
          zoom={920 / (max.x + max.z)}
          position={[max.x, max.y, max.z]}
          makeDefault={true}
          ref={cameraRef}
        />
        <Environment preset="studio" />
        <group key="all" position={[-5, -3, -5]}>
          <ambientLight key="l1" intensity={1.2} />
          <pointLight key="l2" castShadow intensity={0.9} position={[60, 15, 25]} />
          <pointLight key="l3" castShadow intensity={0.9} position={[-60, 15, 25]} />
          {rangeZ.map((z) => (
            <DashedLine key={"gridz" + z} from={[0, 0, z]} to={[max.x, 0, z]} color="green" />
          ))}
          {rangeX.map((x) => (
            <DashedLine key={"gridx" + x} from={[x, 0, 0]} to={[x, 0, max.z]} color="green" />
          ))}
          <DashedLine key="gridy" from={[0, 0, 0]} to={[0, max.y / 2, 0]} color="blue" />
          <Plane key="p1" args={[max.z, max.y / 2]} position={[0, max.y / 4, max.z / 2]} rotation={[0, Math.PI / 2, 0]}>
            <meshPhongMaterial attach="material" color="#a0e6e6" transparent={true} opacity={0.4}/>
          </Plane>
          <Plane key="p2" args={[max.x, max.y / 2]} position={[max.x / 2, max.y / 4, 0]} rotation={[0, 0, 0]}>
            <meshPhongMaterial attach="material" color="#a0e6e6"  transparent={true} opacity={0.4} />
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
