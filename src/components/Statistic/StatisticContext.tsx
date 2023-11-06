import { createContext, ReactNode, useContext } from "react";

export type StatisticContext = {
  showDollar?: boolean;
  showFilter?: boolean;
  iconBg?: "primary" | "success";
  children?: ReactNode;
  filterLabel?: string;
  filterData?: string[];
};

export const StatisticContext = createContext<StatisticContext | undefined>(
  undefined
);

export function useStatisticContext(): StatisticContext {
  const context = useContext(StatisticContext);

  if (!context) {
    throw new Error(
      "useStatisticContext should be used within the StatisticContext provider!"
    );
  }

  return context;
}
