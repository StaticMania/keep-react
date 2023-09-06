import type { FC, PropsWithChildren } from "react";

import classNames from "classnames";
import { StepBody } from "./StepBody";
import { StepContent } from "./StepContent";
import { StepContext } from "./StepContext";
import { StepItem } from "./StepItem";
import { StepPoint } from "./StepPoint";
import { StepTitle } from "./StepTitle";
import { KeepColors, KeepSizes } from "@/src/Keep/KeepTheme";
import { useTheme } from "@/src/Keep/ThemeContex";

export type StepProps = PropsWithChildren<{
  className?: string;
  horizontal?: boolean;
  withBg?: boolean;
  withRing?: boolean;
  withBorder?: boolean;
  borderType?: "solid" | "dashed";
  color?: keyof StepPointColor;
  stepPointSize?: keyof StepPointSizes;
  ringType?: "ring-2" | "ring-4";
  ringTypeColor?: "light" | "deep";
}>;

export interface StepPointSizes
  extends Pick<KeepSizes, "sm" | "md" | "lg" | "xl"> {
  [key: string]: string;
}

export interface StepPointColor
  extends Pick<KeepColors, "info" | "error" | "success" | "warning" | "gray"> {
  [key: string]: string;
}

const StepComponent: FC<StepProps> = ({
  children,
  horizontal,
  stepPointSize = "xl",
  color = "info",
  withBg = true,
  withRing = false,
  withBorder = false,
  ringType = "ring-2",
  ringTypeColor = "light",
  borderType = "solid",
  className,
}) => {
  const theme = useTheme().theme.stepper;
  return (
    <StepContext.Provider
      value={{
        horizontal,
        stepPointSize,
        color,
        withBg,
        withBorder,
        withRing,
        ringType,
        borderType,
        ringTypeColor,
      }}
    >
      <div
        className={classNames(
          horizontal ? theme.horizontal.base : theme.vertical.base,
          className
        )}
      >
        {children}
      </div>
    </StepContext.Provider>
  );
};

StepComponent.displayName = "Step";
StepItem.displayName = "Step.Item";
StepPoint.displayName = "Step.Point";
StepContent.displayName = "Step.Content";
StepTitle.displayName = "Step.Title";
StepBody.displayName = "Step.Body";

export const Step = Object.assign(StepComponent, {
  Item: StepItem,
  Point: StepPoint,
  Content: StepContent,
  Title: StepTitle,
  Body: StepBody,
});
