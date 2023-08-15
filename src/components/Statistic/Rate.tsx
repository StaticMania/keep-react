import { useTheme } from "@/src/Keep/ThemeContex";
import classNames from "classnames";
import { ArrowUp } from "phosphor-react";
import { FC } from "react";

export interface keepRateTheme {
  base?: string;
}

interface RateProps {
  children?: string;
}

const Rate: FC<RateProps> = ({ children }) => {
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

export default Rate;
