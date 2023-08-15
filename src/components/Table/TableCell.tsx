import classNames from "classnames";
import type { ComponentProps, FC, PropsWithChildren } from "react";
import { useTableContext } from "./TableContext";
import { DeepPartial } from "@/src/helpers/deep-partial";
import { useTheme } from "@/src/Keep/ThemeContex";
export interface keepTableCellTheme {
  base: string;
}

export interface TableCellProps
  extends PropsWithChildren,
    ComponentProps<"td"> {
  theme?: DeepPartial<keepTableCellTheme>;
}

export const TableCell: FC<TableCellProps> = ({
  children,
  className,
  ...props
}) => {
  const theme = useTheme().theme.table;
  const { showBorder, showBorderPosition } = useTableContext();
  return (
    <td
      className={classNames(
        theme.body.cell.base,
        className,
        showBorder &&
          showBorderPosition === "right" &&
          theme.body.showBorderPosition.right,
        showBorder &&
          showBorderPosition === "left" &&
          theme.body.showBorderPosition.left
      )}
      {...props}
    >
      {children}
    </td>
  );
};
