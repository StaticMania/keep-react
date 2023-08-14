import { useTheme } from "@/src/Keep/ThemeContex";
import classNames from "classnames";
import { FC } from "react";
const SkeletonAvator: FC = () => {
  const theme = useTheme().theme.skeleton;
  return <div className={classNames(theme.avatar)}></div>;
};

export default SkeletonAvator;
