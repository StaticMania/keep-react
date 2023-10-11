import { twMerge } from "tailwind-merge";
import type { FC, PropsWithChildren } from "react";
import { TimelineBody } from "./TimelineBody";
import { TimelineContent } from "./TimelineContent";
import { TimelineContext } from "./TimelineContext";
import { TimelineItem } from "./TimelineItem";
import { TimelinePoint } from "./TimelinePoint";
import { TimelineTime } from "./TimelineTime";
import { TimelineTitle } from "./TimelineTitle";
import { KeepBoolean, KeepColors, KeepSizes } from "../../Keep/KeepTheme";

export interface TimelinePointSizes
  extends Pick<KeepSizes, "sm" | "md" | "lg" | "xl"> {
  [key: string]: string;
}

export interface TimelinePointColor
  extends Pick<KeepColors, "info" | "error" | "success" | "warning" | "gray"> {
  [key: string]: string;
}

export interface keepTimelineTheme {
  horizontal: {
    base: string;
    item: {
      base: string;
      size: TimelinePointSizes;
      completed: {
        base: string;
        on: TimelinePointColor;
        off: TimelinePointColor;
      };
      borderType: {
        solid: string;
        dashed: string;
      };
    };
    point: {
      base: string;
      size: TimelinePointSizes;
      withBg: {
        on: string;
        off: TimelinePointColor;
      };
      completed: {
        on: TimelinePointColor;
        off: TimelinePointColor;
      };
      withRing: {
        color: {
          light: TimelinePointColor;
          deep: TimelinePointColor;
        };
      };
      withBorder: {
        on: TimelinePointColor;
        off: string;
      };
    };
    title: string;
    content: string;
    active: KeepBoolean;
  };
  vertical: {
    base: string;
  };
}

export type TimelineProps = PropsWithChildren<{
  className?: string;
  horizontal?: boolean;
  gradientPoint?: boolean;
  gradientColor?: string;
  timelineBarType?: "solid" | "dashed";
}>;

const TimelineComponent: FC<TimelineProps> = ({
  children,
  horizontal,
  gradientPoint,
  timelineBarType = "solid",
  gradientColor,
  className,
}) => {
  return (
    <TimelineContext.Provider
      value={{ horizontal, gradientPoint, gradientColor }}
    >
      <ol
        data-testid="timeline-component"
        className={twMerge(
          !horizontal && "relative border-l border-slate-200",
          horizontal && "items-start border-t border-slate-200 sm:flex",
          timelineBarType === "solid" && "border-solid",
          timelineBarType === "dashed" && "border-dashed",
          className
        )}
      >
        {children}
      </ol>
    </TimelineContext.Provider>
  );
};

TimelineComponent.displayName = "Timeline";
TimelineItem.displayName = "Timeline.Item";
TimelinePoint.displayName = "Timeline.Point";
TimelineContent.displayName = "Timeline.Content";
TimelineTime.displayName = "Timeline.Time";
TimelineTitle.displayName = "Timeline.Title";
TimelineBody.displayName = "Timeline.Body";

export const Timeline = Object.assign(TimelineComponent, {
  Item: TimelineItem,
  Point: TimelinePoint,
  Content: TimelineContent,
  Time: TimelineTime,
  Title: TimelineTitle,
  Body: TimelineBody,
});
