import { twMerge } from "tailwind-merge";
import type { ReactNode } from "react";

export interface CardDescriptionProps {
  children?: ReactNode;
  className?: string;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({
  children,
  className,
}) => {
  return (
    <p
      className={twMerge(
        className
          ? className
          : "font-normal md:text-base text-xs text-slate-500"
      )}
    >
      {children}
    </p>
  );
};
