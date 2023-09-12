import { twMerge } from "tailwind-merge";
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
      className={twMerge(
        "block mb-2 text-sm font-normal leading-none text-slate-500",
        horizontal && "mt-6",
        className
      )}
      {...props}
    >
      {children}
    </time>
  );
};
