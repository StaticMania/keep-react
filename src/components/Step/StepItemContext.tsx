import { createContext, useContext } from "react";

export type StepItemContext = {
  active?: boolean;
};

export const StepItemContext = createContext<StepItemContext | undefined>(
  undefined
);

export function useStepItemContext(): StepItemContext {
  const context = useContext(StepItemContext);

  if (!context) {
    throw new Error(
      "useStepItemContext should be used within the StepItemContext providor!"
    );
  }

  return context;
}
