import classNames from "classnames";
import { FC, ReactNode } from "react";
import SkeletonAvator from "./SkeletonAvator";
import SkeletonLine from "./SkeletonLine";
import { useTheme } from "@/src/Keep/ThemeContex";

export interface keepSkeletonTheme {
  base: string;
  animation: string;
  line: string;
  avatar: string;
}

interface keepSkeletonThemeProps {
  animation?: boolean;
  children?: ReactNode;
}

const SkeletonComponent: FC<keepSkeletonThemeProps> = ({
  animation = false,
  children,
}) => {
  const theme = useTheme().theme.skeleton;
  return (
    <div className={classNames(animation && theme.animation, theme.base)}>
      {children}
    </div>
  );
};

SkeletonComponent.displayName = "Skeleton";
SkeletonLine.displayName = "Skeleton.Line";
SkeletonAvator.displayName = "Skeleton.Avatar";

export const Skeleton = Object.assign(SkeletonComponent, {
  Line: SkeletonLine,
  Avatar: SkeletonAvator,
});
