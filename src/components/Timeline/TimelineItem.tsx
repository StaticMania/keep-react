import { twMerge } from "tailwind-merge";
import type { ComponentProps, FC, PropsWithChildren } from "react";
import { useTimelineContext } from "./TimelineContext";

export type TimelineItemProps = PropsWithChildren<
  ComponentProps<"li"> & {
    className?: string;
  }
>;

export const TimelineItem: FC<TimelineItemProps> = ({
  children,
  className,
  ...props
}) => {
  const { horizontal } = useTimelineContext();
  return (
    <li
      data-testid="timeline-item"
      className={twMerge(
        !horizontal && "mb-10 ml-6",
        horizontal && "relative mb-6 sm:mb-0",
        className
      )}
      {...props}
    >
      {children}
    </li>
  );
};
