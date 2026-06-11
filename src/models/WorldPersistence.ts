import { fileOpen, fileSave } from "browser-fs-access";
import { SerializedWorld, WorldModel } from "./WorldModel";
import { KarolModel, SerializedKarol } from "./KarolModel";

interface SerializedWorldAndKarol {
  karol: SerializedKarol;
  world: SerializedWorld;
}

/**
 * lets the user pick a .kworld file and loads world and Karol state from it
 * @return the name of the loaded file
 */
export async function loadWorld(world: WorldModel, karol: KarolModel): Promise<string> {
  const blob = await fileOpen({
    mimeTypes: ["application/karol-world"],
    extensions: [".kworld"],
    description: "Karol World",
  });
  const serializedWorldAndKarol: SerializedWorldAndKarol = JSON.parse(await blob.text()) as SerializedWorldAndKarol;
  world.deserialize(serializedWorldAndKarol.world);
  karol.deserialize(serializedWorldAndKarol.karol);
  return blob.name;
}

/**
 * saves world and Karol state to a .kworld file chosen by the user
 * @return the name of the saved file, or the passed fileName if the browser does not report one
 */
export async function saveWorld(world: WorldModel, karol: KarolModel, fileName: string): Promise<string> {
  const serializedWorldAndKarol: SerializedWorldAndKarol = { world: world.serialize(), karol: karol.serialize() };
  const blob = new Blob([JSON.stringify(serializedWorldAndKarol)], { type: "application/karol-world" });
  const handle: FileSystemHandle | null = await fileSave(blob, {
    fileName: fileName,
    extensions: [".kworld"],
  });
  return handle !== null ? handle.name : fileName;
}
