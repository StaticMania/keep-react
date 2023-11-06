import type { ReactNode } from "react";
import { createContext, useContext } from "react";

type BreadcrumbContext = {
  separatorIcon?: ReactNode;
};

export const BreadcrumbContext = createContext<BreadcrumbContext | undefined>(
  undefined
);

export function useBreadcrumbContext(): BreadcrumbContext {
  const context = useContext(BreadcrumbContext);

  if (!context) {
    throw new Error(
      "useBreadcrumbContext should be used within the BreadcrumbContext provider!"
    );
  }

  return context;
}
