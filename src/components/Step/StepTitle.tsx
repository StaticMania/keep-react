import { KeepHeadingLevel } from "../../Keep/KeepTheme";
import { useTheme } from "../../Keep/ThemeContex";
import { twMerge } from "tailwind-merge";
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
    <Tag className={twMerge(theme.horizontal.title, className)} {...props}>
      {children}
    </Tag>
  );
};
