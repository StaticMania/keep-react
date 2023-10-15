import { FC } from "react";
import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface NavigationContainerProps {
  children?: ReactNode;
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
}

export const NavigationContainer: FC<NavigationContainerProps> = ({
  children,
  className,
  tag = "div",
}) => {
  const Tag = tag ? tag : "div";
  return <Tag className={twMerge(className)}>{children}</Tag>;
};
