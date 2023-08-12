import classNames from "classnames";
import type { ReactNode } from "react";

interface CardListProps {
  children?: ReactNode;
  className?: string;
}

const CardList: React.FC<CardListProps> = ({ children, className }) => {
  return <li className={classNames(className)}>{children}</li>;
};

export default CardList;
