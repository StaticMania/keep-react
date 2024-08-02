export const viteReactDarkModeCode = {
  'Theme-provider.jsx': `
import { createContext, useEffect, useState, useContext } from "react";

const initialState = {
  theme: "system",
  setTheme: () => null,
};

export const ThemeProviderContext = createContext(initialState);

export function ThemeProvider({ children, defaultTheme = "system", storageKey = "vite-ui-theme", ...props }) {
  const [theme, setTheme] = useState(() => localStorage.getItem(storageKey) || defaultTheme);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}


export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

`,
  'Theme-provider.tsx': `
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
`,
}

export const ThemeProviderWrapper = {
  'main.tsx': `
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "./components/theme-provider.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  </StrictMode>
);
`,
}

export const viteThemeSwitcherCode = {
  'ThemeSwitcher.tsx': `
import {
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownList,
} from "keep-react";
import { MoonStars, SunDim } from "phosphor-react";
import { useTheme } from "./theme-provider.jsx";

const ThemeSwitcher = () => {
  const { setTheme } = useTheme();
  return (
    <Dropdown placement="bottom-start">
      <DropdownAction asChild>
        <button className="rounded-lg bg-primary-25 p-2.5 dark:bg-white">
          <MoonStars size={20} color="#1C222B" className="hidden dark:block" />
          <SunDim size={20} color="#444" className="block dark:hidden" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownAction>
      <DropdownContent className="w-[150px] dark:bg-metal-900">
        <DropdownList className="flex flex-col items-start">
          <button
            className="block w-full rounded-lg p-2 text-body-4 font-medium text-metal-900 hover:bg-primary-25 dark:text-white dark:hover:bg-metal-800"
            onClick={() => setTheme('light')}>
            Light
          </button>
          <button
            className="block w-full rounded-lg p-2 text-body-4 font-medium text-metal-900 hover:bg-primary-25 dark:text-white dark:hover:bg-metal-800"
            onClick={() => setTheme('dark')}>
            Dark
          </button>
          <button
            className="block w-full rounded-lg p-2 text-body-4 font-medium text-metal-900 hover:bg-primary-25 dark:text-white dark:hover:bg-metal-800"
            onClick={() => setTheme('system')}>
            System
          </button>
        </DropdownList>
      </DropdownContent>
    </Dropdown>
  );
};

export default ThemeSwitcher;
`,
}

export const viteThemeSwitcherCodeHighlight = {
  'Theme-switcher.tsx': viteThemeSwitcherCode,
}
export const nextThemeInstall = {
  npm: 'npm install next-themes',
  yarn: 'yarn add next-themes',
  pnpm: 'pnpm add next-themes',
}
export const nextThemeProvider = {
  'theme-provider.jsx': `
"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
`,

  'theme-provider.tsx': `
  'use client'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'

export function KeepThemeProvider({ children, ...props }: Readonly<ThemeProviderProps>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

  `,
}

export const nextThemeWrapper = {
  'app/layout.jsx': `
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
`,
  'app/layout.tsx': `
import { ReactNode } from 'react'
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({ children }: Readonly<{ children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
  `,
}

export const nextThemeSwitcher = {
  'ThemeSwitcher.tsx': `
'use client'
import { useTheme } from 'next-themes'
import { MoonStars, SunDim } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { Dropdown, DropdownAction, DropdownContent, DropdownList } from 'keep-react'

const ThemeSwitcher = () => {

  const { setTheme } = useTheme()
  const [client, setClient] = useState(false)

  useEffect(() => {
    let ignore = false
    if (!ignore) {
      setClient(true)
    }
    return () => {
      ignore = true
    }
  }, [])

  return client ? (
    <Dropdown placement="bottom-start">
      <DropdownAction asChild>
        <button className="rounded-lg bg-primary-25 p-2.5 dark:bg-white">
          <MoonStars size={20} color="#1C222B" className="hidden dark:block" />
          <SunDim size={20} color="#444" className="block dark:hidden" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownAction>
      <DropdownContent className="w-[150px] dark:bg-metal-900">
        <DropdownList className="flex flex-col items-start">
          <button
            className="block w-full rounded-lg p-2 text-body-4 font-medium text-metal-900 hover:bg-primary-25 dark:text-white dark:hover:bg-metal-800"
            onClick={() => setTheme('light')}>
            Light
          </button>
          <button
            className="block w-full rounded-lg p-2 text-body-4 font-medium text-metal-900 hover:bg-primary-25 dark:text-white dark:hover:bg-metal-800"
            onClick={() => setTheme('dark')}>
            Dark
          </button>
          <button
            className="block w-full rounded-lg p-2 text-body-4 font-medium text-metal-900 hover:bg-primary-25 dark:text-white dark:hover:bg-metal-800"
            onClick={() => setTheme('system')}>
            System
          </button>
        </DropdownList>
      </DropdownContent>
    </Dropdown>
  ) : null
}

export default ThemeSwitcher
`,
}
