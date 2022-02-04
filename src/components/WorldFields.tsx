import { observer } from "mobx-react";
import { FieldType } from "../models/CommonTypes";
import { KarolModel } from "../models/KarolModel";
import React from "react";
import { Brick } from "./Brick";
import { Karol } from "./Karol";

// const DirtTexture = new TextureLoader().load(dirt);
// const GrassTexture = new TextureLoader().load(grass);
const Field = observer((props: { content: FieldType; karol: KarolModel; position: [number, number, number] }) => {
  let result;
  const key = `${props.position[0]}_${props.position[1]}_${props.position[2]}`;
  // console.log("Rendering field " + key);
  switch (props.content) {
    case FieldType.brick_red:
      result = <Brick key={key} position={props.position} color="red" heightUnits={0.5} />;
      break;
    case FieldType.brick_yellow:
      result = <Brick key={key} position={props.position} color="yellow" heightUnits={0.5} />;
      break;
    case FieldType.brick_blue:
      result = <Brick key={key} position={props.position} color="blue" heightUnits={0.5} />;
      break;
    case FieldType.brick_green:
      result = <Brick key={key} position={props.position} color="green" heightUnits={0.5} />;
      break;
    case FieldType.brick_black:
      result = <Brick key={key} position={props.position} color="black" heightUnits={0.5} />;
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
export const WorldFields = observer((props: { fields: FieldType[][][]; karol: KarolModel }) => {
  return (
    <>
      {props.fields.map((fieldInfo, x) =>
        fieldInfo.map((fieldInfo, y) => <WorldFieldsX fields={fieldInfo} karol={props.karol} y={y} x={x} />)
      )}
    </>
  );
});
