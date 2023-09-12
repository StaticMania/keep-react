import { twMerge } from "tailwind-merge";
import type { ComponentProps, FC, PropsWithChildren } from "react";
import { useStepItemContext } from "./StepItemContext";
import { useTheme } from "../../Keep/ThemeContex";

export type StepContentProps = PropsWithChildren<
  ComponentProps<"div"> & {
    className?: string;
  }
>;

export const StepContent: FC<StepContentProps> = ({
  children,
  className,
  ...props
}) => {
  const theme = useTheme().theme.stepper;
  const { active } = useStepItemContext();

  return (
    <div
      data-testid="step-content"
      className={twMerge(
        theme.horizontal.content,
        theme.horizontal.active[active ? "on" : "off"],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
