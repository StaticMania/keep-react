import { twMerge } from "tailwind-merge";
import type { ReactNode } from "react";

export interface NavigationContainerProps {
  children?: ReactNode;
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
}

export const NavigationContainer: React.FC<NavigationContainerProps> = ({
  children,
  className,
  tag = "div",
}) => {
  const Tag = tag ? tag : "div";
  return <Tag className={twMerge(className)}>{children}</Tag>;
};
