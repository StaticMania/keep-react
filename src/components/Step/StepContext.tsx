import { createContext, useContext } from "react";
import type { StepPointColor, StepPointSizes } from ".";

export type StepContext = {
  horizontal?: boolean;
  withBg?: boolean;
  withRing?: boolean;
  withBorder?: boolean;
  color?: keyof StepPointColor;
  stepPointSize?: keyof StepPointSizes;
  ringType?: "ring-2" | "ring-4";
  ringTypeColor?: "light" | "deep";
  borderType?: "solid" | "dashed";
};

export const StepContext = createContext<StepContext | undefined>(undefined);

export function useStepContext(): StepContext {
  const context = useContext(StepContext);

  if (!context) {
    throw new Error(
      "useStepContext should be used within the StepContext providor!"
    );
  }

  return context;
}
