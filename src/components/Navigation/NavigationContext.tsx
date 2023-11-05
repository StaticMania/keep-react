import { createContext, useContext } from "react";

type NavigationContext = {
  isOpen?: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const NavigationContext = createContext<NavigationContext | undefined>(
  undefined
);

export function useNavigationContext(): NavigationContext {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error(
      "useNavigationContext should be used within the NavigationContext provider!"
    );
  }

  return context;
}
