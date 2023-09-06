import { FC } from "react";
import { useTheme } from "@/src/Keep/ThemeContex";
import { useStatisticContext } from "./StatisticContext";

export interface keepAmountTheme {
  base: string;
  spacing: string;
}

interface AmountProps {
  children: number;
}

function formatNumber(number: number): string {
  const formattedNumber = number
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return formattedNumber;
}

export const Amount: FC<AmountProps> = ({ children }) => {
  const theme = useTheme().theme.statistic;
  const { showDollar } = useStatisticContext();
  return (
    <h3 className={theme.amount.base}>
      {showDollar && <span className={theme.amount.spacing}>$</span>}
      <span>{formatNumber(children)}</span>
    </h3>
  );
};
