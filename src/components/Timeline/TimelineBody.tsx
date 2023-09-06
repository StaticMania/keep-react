import classNames from "classnames";
import type { ComponentProps, FC, PropsWithChildren } from "react";

export type TimelineBodyProps = PropsWithChildren<
  ComponentProps<"p"> & {
    className?: string;
  }
>;
export const TimelineBody: FC<TimelineBodyProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p
      className={classNames(
        "!mb-4 text-xs md:text-lg font-normal text-slate-500",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};
