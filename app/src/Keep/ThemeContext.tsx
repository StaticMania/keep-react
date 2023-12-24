/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import type { Dispatch, FC, ReactNode, SetStateAction } from 'react'
import { createContext, useContext, useEffect, useState } from 'react'
import type { KeepTheme } from './KeepTheme'
import { theme as defaultTheme } from '../theme/theme'
import { windowExists } from '../helpers/window-exists'

/**
 * Represents the mode of the theme.
 * It can be 'light', 'dark', or undefined.
 */
export type Mode = string | undefined | 'light' | 'dark'

/**
 * Props for the ThemeContext component.
 */
interface ThemeContextProps {
  theme: KeepTheme
  mode?: Mode
  toggleMode?: () => void | null
}

/**
 * Context for managing the theme in the application.
 */
export const ThemeContext = createContext<ThemeContextProps>({
  theme: defaultTheme,
})

/**
 * Props for the ThemeProvider component.
 */
interface ThemeProviderProps {
  children: ReactNode
  value: ThemeContextProps
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, value }) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme(): ThemeContextProps {
  return useContext(ThemeContext)
}

/**
 * Custom hook that provides theme mode state and functions for toggling the theme mode.
 * @param usePreferences - Flag indicating whether to use user preferences for theme mode.
 * @returns A tuple containing the current theme mode, a function to set the theme mode, and a function to toggle the theme mode.
 */
export const useThemeMode = (
  usePreferences: boolean,
): [Mode, Dispatch<SetStateAction<Mode>> | undefined, (() => void) | undefined] => {
  if (!usePreferences) return [undefined, undefined, undefined]

  const [mode, setMode] = useState<Mode>(undefined)

  /**
   * Saves the theme preference to the local storage.
   *
   * @param m - The theme preference to be saved.
   */
  const savePreference = (m: string) => localStorage.setItem('theme', m)

  /**
   * Toggles the mode between 'dark' and 'light'.
   * If the current mode is 'dark', it will be changed to 'light', and vice versa.
   * Saves the preference and updates the mode state accordingly.
   */
  const toggleMode = () => {
    if (!mode) {
      return
    }

    if (windowExists()) {
      document.documentElement.classList.toggle('dark')
    }

    savePreference(mode)
    setMode(mode == 'dark' ? 'light' : 'dark')
  }

  if (usePreferences) {
    useEffect(() => {
      const userPreference =
        windowExists() && !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      const userMode = localStorage.getItem('theme') || (userPreference ? 'dark' : 'light')

      if (userMode) {
        setMode(userMode)
      }
    }, [])

    useEffect(() => {
      if (!mode) {
        return
      }

      savePreference(mode)

      if (!windowExists()) {
        return
      }

      if (mode != 'dark') {
        document.documentElement.classList.remove('dark')
      } else {
        document.documentElement.classList.add('dark')
      }
    }, [mode])
  }

  return [mode, setMode, toggleMode]
}
