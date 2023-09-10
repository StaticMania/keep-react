import classNames from "classnames";
import { FC, ReactNode } from "react";
import { useStatisticContext } from "./StatisticContext";
import { useTheme } from "../../Keep/ThemeContex";

export interface keepIconTheme {
  base: string;
  selected: {
    on: string;
    off: string;
  };
}

export interface StatusIconProps {
  icon: ReactNode;
}

export const StatusIcon: FC<StatusIconProps> = ({ icon }) => {
  const { iconBg } = useStatisticContext();

  const theme = useTheme().theme.statistic;
  return (
    <div
      className={classNames(
        theme.icon.base,

        iconBg === "success" ? theme.icon.selected.on : theme.icon.selected.off
      )}
    >
      {icon}
    </div>
  );
};
