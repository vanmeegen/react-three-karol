import { BlocklyWorkspace, WorkspaceSvg } from "react-blockly";
import { KAROL_TOOLBOX } from "../../blockly/Toolbox";
import { ProgramModel } from "../../models/ProgramModel";
import "../../assets/blockly.css";

/**
 * Blockly workspace bound to the program model; isolated so it can be mocked in tests
 */
export function BlocklyEditor(props: { program: ProgramModel }) {
  return (
    <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
      <BlocklyWorkspace
        className="blockly-editor"
        toolboxConfiguration={KAROL_TOOLBOX}
        workspaceConfiguration={{
          grid: {
            spacing: 20,
            length: 3,
            colour: "#ccc",
            snap: true,
          },
        }}
        initialXml={props.program.blocklyXml}
        onXmlChange={(xml) => props.program.setBlocklyXmlFromReact(xml)}
        onWorkspaceChange={(workspace: WorkspaceSvg) => props.program.setBlocklyXml(workspace)}
        onDispose={() => props.program.disposeBlocklyWorkspace()}
      />
    </div>
  );
}
