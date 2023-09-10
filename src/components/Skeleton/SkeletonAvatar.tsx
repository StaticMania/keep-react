import { FC } from "react";
import classNames from "classnames";
import { useTheme } from "../../Keep/ThemeContex";

export const SkeletonAvatar: FC = () => {
  const theme = useTheme().theme.skeleton;
  return <div className={classNames(theme.avatar)}></div>;
};
