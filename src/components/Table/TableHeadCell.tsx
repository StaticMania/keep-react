import type { ComponentProps, FC, PropsWithChildren, ReactNode } from "react";

import classNames from "classnames";
import { TableContext } from "./TableContext";
import { DeepPartial } from "@/src/helpers/deep-partial";
import { useTheme } from "@/src/Keep/ThemeContex";

export interface keepTableHeadCellTheme {
  base: string;
  icon: {
    base: string;
    on: {
      left: string;
      right: string;
    };
    off: string;
  };
}

export interface TableHeadCellProps
  extends PropsWithChildren,
    ComponentProps<"th"> {
  theme?: DeepPartial<keepTableHeadCellTheme>;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

export const TableHeadCell: FC<TableHeadCellProps> = ({
  children,
  className,
  icon,
  iconPosition = "right",
  ...props
}) => {
  const theme = useTheme().theme.table.head.cell;

  return (
    <TableContext.Provider value={{ icon, iconPosition }}>
      <th
        className={classNames(theme.base, className, !icon && theme.icon.off)}
        {...props}
      >
        <div className={classNames(theme.icon.base)}>
          {icon && iconPosition === "left" && (
            <span className={classNames(theme.icon.on.left)}>{icon}</span>
          )}
          {children}
          {icon && iconPosition === "right" && (
            <span className={classNames(theme.icon.on.right)}>{icon}</span>
          )}
        </div>
      </th>
    </TableContext.Provider>
  );
};
