import { FC } from "react";
import classNames from "classnames";
import { useTheme } from "@/src/Keep/ThemeContex";

export const SkeletonAvator: FC = () => {
  const theme = useTheme().theme.skeleton;
  return <div className={classNames(theme.avatar)}></div>;
};
