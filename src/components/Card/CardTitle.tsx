import classNames from "classnames";
import type { ReactNode } from "react";
import React from "react";

interface CardTitleProps {
  children?: ReactNode;
  className?: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ children, className }) => {
  return (
    <p
      className={classNames(
        className
          ? className
          : "text-xl font-bold tracking-tight text-slate-700"
      )}
    >
      {children}
    </p>
  );
};

export default CardTitle;
