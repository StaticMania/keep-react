import classNames from "classnames";
import type { ReactNode } from "react";

interface CardListProps {
  children?: ReactNode;
  className?: string;
}

export const CardList: React.FC<CardListProps> = ({ children, className }) => {
  return <li className={classNames(className)}>{children}</li>;
};
