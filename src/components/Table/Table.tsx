import classNames from "classnames";
import type { ComponentProps, FC, PropsWithChildren } from "react";
import type { keepTableBodyTheme } from "./TableBody";
import { TableBody } from "./TableBody";
import { keepTableCaptionTheme, TableCaption } from "./TableCaption";
import { TableCell } from "./TableCell";
import type { TableContextType } from "./TableContext";
import { TableContext } from "./TableContext";
import type { keepTableHeadTheme } from "./TableHead";
import { TableHead } from "./TableHead";
import { TableHeadCell } from "./TableHeadCell";
import type { keepTableRowTheme } from "./TableRow";
import { TableRow } from "./TableRow";
import { DeepPartial } from "@/src/helpers/deep-partial";
import { useTheme } from "@/src/Keep/ThemeContex";

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
}

const TableComponent: FC<TableProps> = ({
  children,
  className,
  hoverable,
  striped,
  showCheckbox = false,
  showBorder = false,
  showBorderPosition = "right",
  ...props
}) => {
  const theme = useTheme().theme.table;
  return (
    <div data-testid="table-element" className={classNames(theme.root.wrapper)}>
      <TableContext.Provider
        value={{
          striped,
          hoverable,
          showCheckbox,
          showBorder,
          showBorderPosition,
        }}
      >
        <div className={classNames(theme.root.shadow, className)}></div>
        <table className={classNames(theme.root.base, className)} {...props}>
          {children}
        </table>
      </TableContext.Provider>
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
