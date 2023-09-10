import { FC } from "react";
import { ArrowUp } from "phosphor-react";
import classNames from "classnames";
import { useTheme } from "../../Keep/ThemeContex";

export interface keepRateTheme {
  base?: string;
}

export interface RateProps {
  children?: string;
}

export const Rate: FC<RateProps> = ({ children }) => {
  const theme = useTheme().theme.statistic;
  return (
    <p className={classNames(theme.rate.base)}>
      <span>
        <ArrowUp size="12" color="#1B4DFF" weight="bold" />
      </span>
      <span>{children}%</span>
    </p>
  );
};
