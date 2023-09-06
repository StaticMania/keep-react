import classNames from "classnames";
import type { ReactNode } from "react";
import React from "react";

interface CardTitleProps {
  children?: ReactNode;
  className?: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({
  children,
  className,
}) => {
  return (
    <p
      className={classNames(
        className
          ? className
          : "md:text-xl text-base font-bold tracking-tight text-slate-700"
      )}
    >
      {children}
    </p>
  );
};
