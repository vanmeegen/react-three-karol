declare module 'react-contextmenu' {
  import { Component, ReactNode } from 'react';

  export interface MenuItemProps {
    data?: any;
    disabled?: boolean;
    divider?: boolean;
    onClick?: (event: any, data: any) => void;
    children?: ReactNode;
  }

  export interface ContextMenuProps {
    id: string;
    children?: ReactNode;
  }

  export interface ContextMenuTriggerProps {
    id: string;
    children?: ReactNode;
  }

  export interface SubMenuProps {
    title: string;
    children?: ReactNode;
  }

  export class MenuItem extends Component<MenuItemProps> {}
  export class ContextMenu extends Component<ContextMenuProps> {}
  export class ContextMenuTrigger extends Component<ContextMenuTriggerProps> {}
  export class SubMenu extends Component<SubMenuProps> {}
}