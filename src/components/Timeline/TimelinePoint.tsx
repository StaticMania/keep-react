import classNames from "classnames";
import type { ComponentProps, FC, PropsWithChildren, ReactNode } from "react";
import { useTimelineContext } from "./TimelineContext";

export type TimelnePointProps = PropsWithChildren<
  ComponentProps<"div"> & {
    icon?: ReactNode;
    className?: string;
  }
>;

export const gradientColor: string[] = [
  "bg-gradient-1",
  "bg-gradient-2",
  "bg-gradient-3",
  "bg-gradient-4",
  "bg-gradient-5",
  "bg-gradient-6",
  "bg-gradient-7",
  "bg-gradient-8",
  "bg-gradient-9",
  "bg-gradient-10",
  "bg-gradient-11",
  "bg-gradient-12",
  "bg-gradient-13",
  "bg-gradient-14",
  "bg-gradient-15",
  "bg-gradient-16",
  "bg-gradient-17",
  "bg-gradient-18",
  "bg-gradient-19",
  "bg-gradient-20",
  "bg-gradient-21",
  "bg-gradient-22",
  "bg-gradient-23",
  "bg-gradient-24",
  "bg-gradient-25",
  "bg-gradient-26",
  "bg-gradient-27",
  "bg-gradient-28",
  "bg-gradient-29",
  "bg-gradient-30",
  "bg-gradient-31",
];

export const TimelinePoint: FC<TimelnePointProps> = ({
  children,
  className,
  icon: Icon,
  ...props
}) => {
  const { horizontal, gradientPoint } = useTimelineContext();

  return (
    <div
      data-testid="timeline-point"
      className={classNames({ "flex items-center": horizontal }, className)}
      {...props}
    >
      {children}
      {Icon ? (
        <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 ring-8 ring-white">
          <span aria-hidden className="h-3 w-3 text-blue-500">
            {Icon}
          </span>
        </span>
      ) : (
        <div
          className={classNames(
            "absolute -left-2 h-4 w-4 rounded-full border border-white",
            {
              [gradientColor[Math.floor(Math.random() * gradientColor.length)]]:
                gradientPoint,
              "bg-slate-200": !gradientPoint,
            }
          )}
        ></div>
      )}
    </div>
  );
};
