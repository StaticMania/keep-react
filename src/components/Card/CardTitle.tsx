import { twMerge } from "tailwind-merge";
import type { ReactNode } from "react";

export interface CardTitleProps {
  children?: ReactNode;
  className?: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({
  children,
  className,
}) => {
  return (
    <p
      className={twMerge(
        className
          ? className
          : "md:text-xl text-base font-bold tracking-tight text-slate-700"
      )}
    >
      {children}
    </p>
  );
};
