"use client";
import type { FC, HTMLAttributes } from "react";
import { useEffect, useMemo } from "react";
import type { KeepTheme } from "./KeepTheme";
import { ThemeContext, useThemeMode } from "./ThemeContex";
import { DeepPartial } from "../helpers/deep-partial";
import { mergeDeep } from "../helpers/mergeDeep";
import defaultTheme from "../theme/theme";
import windowExists from "../helpers/window-exists";

export interface ThemeProps {
  dark?: boolean;
  theme?: DeepPartial<KeepTheme>;
  usePreferences?: boolean;
}

interface KeepProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  theme?: ThemeProps;
}

export const Keep: FC<KeepProps> = ({ children, theme = {} }) => {
  const { theme: customTheme = {}, dark, usePreferences = true } = theme;
  const [mode, setMode, toggleMode] = useThemeMode(usePreferences);

  const mergedTheme = mergeDeep(
    defaultTheme,
    customTheme
  ) as unknown as KeepTheme;

  useEffect(() => {
    if (dark) {
      if (setMode != null) {
        setMode("dark");
      }

      if (windowExists()) {
        document.documentElement.classList.add("dark");
      }
    }
  }, [dark, setMode]);

  const themeContextValue = useMemo(
    () => ({
      theme: mergedTheme,
      mode,
      toggleMode,
    }),
    [mode, toggleMode, mergedTheme]
  );

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export type { KeepTheme } from "./KeepTheme";
