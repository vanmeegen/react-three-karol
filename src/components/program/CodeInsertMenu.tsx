import { ReactElement } from "react";
import { Divider, ListSubheader, Menu, MenuItem } from "@mui/material";
import { CONDITIONS, CONTROLSTRUCTURES, STATEMENTS } from "../../data/ProgrammingConstructs";

export interface MenuPosition {
  top: number;
  left: number;
}

/** entries of one section of the code insert menu; undefined renders a divider */
function menuSection(
  title: string,
  entries: (string | undefined)[],
  onInsert: (text: string) => void
): ReactElement[] {
  return [
    <ListSubheader key={title}>{title}</ListSubheader>,
    ...entries.map((entry, index) =>
      entry ? (
        <MenuItem key={`${title}_${index}`} onClick={() => onInsert(entry)}>
          {entry}
        </MenuItem>
      ) : (
        <Divider key={`${title}_${index}`} />
      )
    ),
  ];
}

/**
 * context menu offering all Karol language constructs for insertion into the code editor
 */
export function CodeInsertMenu(props: {
  position: MenuPosition | undefined;
  onClose: () => void;
  onInsert: (text: string) => void;
}) {
  return (
    <Menu
      open={props.position !== undefined}
      onClose={props.onClose}
      anchorReference="anchorPosition"
      anchorPosition={props.position}
      transitionDuration={0}
      slotProps={{ list: { dense: true } }}
    >
      {menuSection("Anweisungen", STATEMENTS, props.onInsert)}
      {menuSection("Kontrollstrukturen", CONTROLSTRUCTURES, props.onInsert)}
      {menuSection("Bedingungen", CONDITIONS, props.onInsert)}
    </Menu>
  );
}
