import classNames from "classnames";
import { CaretDown } from "phosphor-react";
import { FC } from "react";
import { Button } from "../Button";
import { useStatisticContext } from "./StatisticContext";
import { useTheme } from "../../Keep/ThemeContex";

export interface keepTitleTheme {
  base: string;
  title: string;
  filter: {
    text: string;
    icon: string;
  };
}
export interface TitleProps {
  children: string;
}

export const Title: FC<TitleProps> = ({ children }) => {
  const { showFilter } = useStatisticContext();

  const theme = useTheme().theme.statistic;
  return (
    <div className={classNames(theme.title.base)}>
      <p className={classNames(theme.title.title)}>{children}</p>

      {showFilter && (
        <Button size="xs" type="outlineGray">
          <span className={classNames(theme.title.filter.text)}>
            This Month
          </span>
          <span className={classNames(theme.title.filter.icon)}>
            <CaretDown size={16} color="#5E718D" />
          </span>
        </Button>
      )}
    </div>
  );
};
