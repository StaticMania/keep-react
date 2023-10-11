import type { ChangeEvent, ReactNode } from "react";
import { createContext, useContext } from "react";

export type TableContextType = {
  striped?: boolean;
  hoverable?: boolean;
  showCheckbox?: boolean;
  icon?: ReactNode;
  iconPosition?: string;
  showBorder?: boolean;
  showBorderPosition?: "left" | "right";
  checked?: boolean;
  handleCheck?: (event: ChangeEvent<HTMLInputElement>) => void;
};
export const TableContext = createContext<TableContextType | undefined>(
  undefined
);
export function useTableContext(): TableContextType {
  const context = useContext(TableContext);

  if (!context) {
    throw new Error(
      "useTableContext should be used within the TableContext provider!"
    );
  }

  return context;
}
