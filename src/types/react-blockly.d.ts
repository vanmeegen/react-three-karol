declare module 'react-blockly' {
  import { Component, ReactNode } from 'react';

  export interface WorkspaceConfiguration {
    [key: string]: any;
  }

  export interface ToolboxConfiguration {
    [key: string]: any;
  }

  export interface BlocklyWorkspaceProps {
    className?: string;
    toolboxConfiguration: ToolboxConfiguration;
    workspaceConfiguration: WorkspaceConfiguration;
    initialXml?: string;
    onXmlChange?: (xml: string) => void;
    onWorkspaceChange?: (workspace: any) => void;
    onDispose?: () => void;
    children?: ReactNode;
  }

  export interface WorkspaceSvg {
    [key: string]: any;
  }

  export const BlocklyWorkspace: React.ComponentType<BlocklyWorkspaceProps>;
}