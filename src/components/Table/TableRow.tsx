import type { ComponentProps, FC, PropsWithChildren } from "react";
import type { DeepPartial } from "../../helpers/deep-partial";

import { twMerge } from "tailwind-merge";
import { useTableContext } from "./TableContext";
import { useTheme } from "../../Keep/ThemeContex";

export interface keepTableRowTheme {
  base: string;
  hovered: string;
  striped: string;
}
export interface TableRowProps extends PropsWithChildren, ComponentProps<"tr"> {
  theme?: DeepPartial<keepTableRowTheme>;
}
export const TableRow: FC<TableRowProps> = ({
  children,
  className,
  ...props
}) => {
  const { hoverable, striped, showCheckbox } = useTableContext();
  const theme = useTheme().theme.table.row;

  return (
    <tr
      data-testid="table-row-element"
      className={twMerge(
        theme.base,
        striped && theme.striped,
        hoverable && theme.hovered,
        className
      )}
      {...props}
    >
      {showCheckbox && (
        <th className="p-4">
          <input
            type="checkbox"
            id="member"
            name="vehicle1"
            checked={false}
            className="flex h-4 w-4 items-center justify-center rounded border border-slate-300 bg-slate-25 outline-none checked:after:h-2.5 checked:after:w-2.5  checked:after:rounded-sm focus:ring-0 focus:ring-offset-0"
          />
        </th>
      )}
      {children}
    </tr>
  );
};
