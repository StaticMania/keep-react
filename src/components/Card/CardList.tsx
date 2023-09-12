import { twMerge } from "tailwind-merge";
import type { ReactNode } from "react";

export interface CardListProps {
  children?: ReactNode;
  className?: string;
}

export const CardList: React.FC<CardListProps> = ({ children, className }) => {
  return <li className={twMerge(className)}>{children}</li>;
};
