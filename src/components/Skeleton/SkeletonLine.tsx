import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../../Keep/ThemeContex";

export interface SkeletonProps {
  height?: string;
}

export const SkeletonLine: FC<SkeletonProps> = ({ height }) => {
  const theme = useTheme().theme.skeleton;
  return <div className={twMerge(theme.line, height)}></div>;
};
