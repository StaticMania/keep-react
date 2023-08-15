import classNames from "classnames";
import type { ComponentProps, FC, PropsWithChildren } from "react";
import { useTimelineContext } from "./TimelineContext";

export type TimelineTimeProps = PropsWithChildren<
  ComponentProps<"time"> & {
    className?: string;
  }
>;

export const TimelineTime: FC<TimelineTimeProps> = ({
  children,
  className,
  ...props
}) => {
  const { horizontal } = useTimelineContext();

  return (
    <time
      className={classNames(
        "block mb-2 text-sm font-normal leading-none text-slate-500",
        { "mt-6": horizontal },
        className
      )}
      {...props}
    >
      {children}
    </time>
  );
};
