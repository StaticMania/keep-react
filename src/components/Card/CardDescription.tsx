import classNames from "classnames";
import type { ReactNode } from "react";
import React from "react";

interface CardDescriptionProps {
  children?: ReactNode;
  className?: string;
}

const CardDescription: React.FC<CardDescriptionProps> = ({
  children,
  className,
}) => {
  return (
    <p
      className={classNames(
        className ? className : "font-normal text-base text-slate-500"
      )}
    >
      {children}
    </p>
  );
};

export default CardDescription;
