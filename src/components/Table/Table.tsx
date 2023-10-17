import { twMerge } from "tailwind-merge";
import {
  useState,
  type ComponentProps,
  type FC,
  type PropsWithChildren,
} from "react";
import type { keepTableBodyTheme } from "./TableBody";
import type { TableContextType } from "./TableContext";
import type { keepTableHeadTheme } from "./TableHead";
import type { keepTableRowTheme } from "./TableRow";

import { TableBody } from "./TableBody";
import { keepTableCaptionTheme, TableCaption } from "./TableCaption";
import { TableCell } from "./TableCell";
import { TableContext } from "./TableContext";
import { TableHead } from "./TableHead";
import { TableHeadCell } from "./TableHeadCell";
import { TableRow } from "./TableRow";
import { DeepPartial } from "../../helpers/deep-partial";
import { useTheme } from "../../Keep/ThemeContex";

export interface keepTableTheme {
  root: keepTableRootTheme;
  head: keepTableHeadTheme;
  row: keepTableRowTheme;
  body: keepTableBodyTheme;
  caption: keepTableCaptionTheme;
}
export interface keepTableRootTheme {
  base: string;
  shadow: string;
  wrapper: string;
}
export interface TableProps
  extends PropsWithChildren,
    ComponentProps<"table">,
    TableContextType {
  theme?: DeepPartial<keepTableTheme>;
  showCheckbox?: boolean;
  showBorder?: boolean;
  showBorderPosition?: "left" | "right";
  checked?: boolean;
}
const TableComponent: FC<TableProps> = ({
  children,
  className,
  hoverable,
  striped,
  showCheckbox = false,
  showBorder = false,
  showBorderPosition = "right",
  checked,
  ...props
}) => {
  const theme = useTheme().theme.table;

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = (value: boolean) => {
    setIsChecked(value);
  };

  return (
    <div id="tableScrollBar" className="w-full overflow-x-auto rounded-lg">
      <div data-testid="table-element" className={twMerge(theme.root.wrapper)}>
        <TableContext.Provider
          value={{
            striped,
            hoverable,
            showCheckbox,
            showBorder,
            showBorderPosition,
            checked: isChecked,
            handleCheckbox: handleCheckbox,
          }}
        >
          <div className={twMerge(theme.root.shadow, className)}></div>
          <table className={twMerge(theme.root.base, className)} {...props}>
            {children}
          </table>
        </TableContext.Provider>
      </div>
    </div>
  );
};

TableComponent.displayName = "Table";
TableHead.displayName = "Table.Head";
TableBody.displayName = "Table.Body";
TableRow.displayName = "Table.Row";
TableCell.displayName = "Table.Cell";
TableHeadCell.displayName = "Table.HeadCell";
TableCaption.displayName = "Table.Caption";

export const Table = Object.assign(TableComponent, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
  HeadCell: TableHeadCell,
  Caption: TableCaption,
});
