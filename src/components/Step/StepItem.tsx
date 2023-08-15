import classNames from "classnames";
import type { ComponentProps, FC, PropsWithChildren } from "react";
import { useStepContext } from "./StepContext";
import { StepItemContext } from "./StepItemContext";
import { useTheme } from "@/src/Keep/ThemeContex";

export type StepItemProps = PropsWithChildren<
  ComponentProps<"div"> & {
    className?: string;
    completed?: boolean;
    active?: boolean;
  }
>;

export const StepItem: FC<StepItemProps> = ({
  children,
  completed = false,
  active = false,
  className,
  ...props
}) => {
  const theme = useTheme().theme.stepper;
  const { stepPointSize, color, borderType } = useStepContext();

  return (
    <StepItemContext.Provider value={{ active }}>
      <div
        data-testid="step-item"
        className={classNames(
          theme.horizontal.item.base,
          theme.horizontal.active[active ? "on" : "off"],
          borderType && theme.horizontal.item.borderType[borderType],
          completed && theme.horizontal.item.completed.base,
          completed && color && theme.horizontal.item.completed.on[color],
          !completed && color && theme.horizontal.item.completed.off[color],
          stepPointSize && theme.horizontal.item.size[stepPointSize],
          className
        )}
        {...props}
      >
        {children}
      </div>
    </StepItemContext.Provider>
  );
};
