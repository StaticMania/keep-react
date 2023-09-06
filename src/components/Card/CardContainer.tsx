import classNames from "classnames";
import type { ReactNode } from "react";

interface CardContainerProps {
  children?: ReactNode;
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
}

export const CardContainer: React.FC<CardContainerProps> = ({
  children,
  className,
  tag = "div",
}) => {
  const Tag = tag ? tag : "div";
  return <Tag className={classNames(className)}>{children}</Tag>;
};
