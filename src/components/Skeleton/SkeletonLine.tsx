import { useTheme } from "@/src/Keep/ThemeContex";
import classNames from "classnames";
import { FC } from "react";

interface SkeletonProps {
  height?: string;
}

const SkeletonLine: FC<SkeletonProps> = ({ height }) => {
  const theme = useTheme().theme.skeleton;
  return <div className={classNames(theme.line, height)}></div>;
};

export default SkeletonLine;
