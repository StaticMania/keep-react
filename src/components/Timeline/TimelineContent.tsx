import { twMerge } from "tailwind-merge";
import type { ComponentProps, FC, PropsWithChildren } from "react";
import { useTimelineContext } from "./TimelineContext";

export type TimelineContentProps = PropsWithChildren<
  ComponentProps<"div"> & {
    className?: string;
  }
>;

export const TimelineContent: FC<TimelineContentProps> = ({
  children,
  className,
  ...props
}) => {
  const { horizontal } = useTimelineContext();
  return (
    <div
      data-testid="timeline-content"
      className={twMerge(horizontal && "mt-4 -ms-2 sm:pr-8", className)}
      {...props}
    >
      {children}
    </div>
  );
};
