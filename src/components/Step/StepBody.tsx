import classNames from "classnames";
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
      className={classNames(
        "!mb-4 text-base font-normal text-slate-500",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};
