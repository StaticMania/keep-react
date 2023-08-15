import classNames from "classnames";
import type { ComponentProps, FC, PropsWithChildren, ReactNode } from "react";
import { useStepContext } from "./StepContext";
import { useTheme } from "@/src/Keep/ThemeContex";

export type StepPointProps = PropsWithChildren<
  ComponentProps<"div"> & {
    icon?: ReactNode;
    className?: string;
    completed?: boolean;
  }
>;

export const StepPoint: FC<StepPointProps> = ({
  children,
  className,
  icon: Icon,
  completed = false,
  ...props
}) => {
  const theme = useTheme().theme.stepper;
  const {
    stepPointSize,
    color,
    withBg,
    withBorder,
    withRing,
    ringType,
    ringTypeColor,
  } = useStepContext();

  return (
    <div
      data-testid="step-point"
      className={classNames(
        theme.horizontal.point.base,
        withRing && ringType,
        withBg && theme.horizontal.point.withBg.on,
        !withBg && color && theme.horizontal.point.withBg.off[color],
        stepPointSize && theme.horizontal.point.size[stepPointSize],
        completed &&
          withBg &&
          color &&
          theme.horizontal.point.completed.on[color],
        !completed &&
          withBg &&
          color &&
          theme.horizontal.point.completed.off[color],
        withBorder && color && theme.horizontal.point.withBorder.on[color],
        !withBorder && theme.horizontal.point.withBorder.off,
        withRing &&
          color &&
          ringTypeColor &&
          theme.horizontal.point.withRing.color[ringTypeColor][color],
        className
      )}
      {...props}
    >
      {children}
      {Icon && <span aria-hidden>{Icon}</span>}
    </div>
  );
};
