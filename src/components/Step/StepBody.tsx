import { twMerge } from "tailwind-merge";
import type { ComponentProps, FC, PropsWithChildren } from "react";

export type StepBodyProps = PropsWithChildren<
  ComponentProps<"p"> & {
    className?: string;
  }
>;

export const StepBody: FC<StepBodyProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p
      className={twMerge(
        "!mb-4 text-base font-normal text-slate-500",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};
