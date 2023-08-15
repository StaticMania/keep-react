import { KeepHeadingLevel } from "@/src/Keep/KeepTheme";
import { useTheme } from "@/src/Keep/ThemeContex";
import classNames from "classnames";
import type { ComponentProps, FC, PropsWithChildren } from "react";

export type StepTitleProps = PropsWithChildren<
  ComponentProps<KeepHeadingLevel> & {
    className?: string;
    as?: KeepHeadingLevel;
  }
>;

export const StepTitle: FC<StepTitleProps> = ({
  children,
  className,
  as = "h3",
  ...props
}) => {
  const Tag = as;
  const theme = useTheme().theme.stepper;

  return (
    <Tag className={classNames(theme.horizontal.title, className)} {...props}>
      {children}
    </Tag>
  );
};
