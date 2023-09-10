import type { ComponentProps, FC, PropsWithChildren } from "react";
import type { keepTableHeadCellTheme } from "./TableHeadCell";

import classNames from "classnames";
import { useTableContext } from "./TableContext";
import { useTheme } from "../../Keep/ThemeContex";
import { DeepPartial } from "../../helpers/deep-partial";

export interface keepTableHeadTheme {
  base: string;
  cell: keepTableHeadCellTheme;
}

export interface TableHeadProps
  extends PropsWithChildren,
    ComponentProps<"thead"> {
  theme?: DeepPartial<keepTableHeadTheme>;
}

export const TableHead: FC<TableHeadProps> = ({
  children,
  className,
  ...props
}) => {
  const theme = useTheme().theme.table;
  const { showCheckbox } = useTableContext();

  return (
    <thead className={classNames(theme.head.base, className)} {...props}>
      <tr>
        {showCheckbox && (
          <td className="pl-4">
            <input
              type="checkbox"
              id="member"
              name="vehicle1"
              value=""
              className="flex h-4 w-4 items-center justify-center rounded border border-slate-300 bg-slate-25 outline-none checked:after:h-2.5 checked:after:w-2.5  checked:after:rounded-sm focus:ring-0 focus:ring-offset-0"
            />
          </td>
        )}
        {children}
      </tr>
    </thead>
  );
};
