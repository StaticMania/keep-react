import { KeepHeadingLevel } from "@/src/Keep/KeepTheme";
import classNames from "classnames";
import type { ComponentProps, FC, PropsWithChildren } from "react";

export type TimelineTitleProps = PropsWithChildren<
  ComponentProps<KeepHeadingLevel> & {
    className?: string;
    as?: KeepHeadingLevel;
  }
>;

export const TimelineTitle: FC<TimelineTitleProps> = ({
  children,
  className,
  as = "h3",
  ...props
}) => {
  const Tag = as;
  return (
    <Tag
      className={classNames(
        "mb-6 text-sm md:text-3xl font-semibold text-slate-700",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};
