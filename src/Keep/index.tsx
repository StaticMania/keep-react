'use client'
import type { FC, HTMLAttributes } from 'react'
import { useEffect, useMemo } from 'react'
import type { KeepTheme } from './KeepTheme'
import { ThemeContext, useThemeMode } from './ThemeContext'
import { DeepPartial } from '../helpers/deep-partial'
import { mergeDeep } from '../helpers/mergeDeep'
import { theme as defaultTheme } from '../theme/theme'
import { windowExists } from '../helpers/window-exists'

/**
 * Interface for theme props.
 *
 * @interface ThemeProps
 * @property {boolean} [dark] - Indicates if the theme is dark.
 * @property {DeepPartial<KeepTheme>} [theme] - The theme object.
 * @property {boolean} [usePreferences] - Indicates if preferences should be used.
 */
export interface ThemeProps {
  dark?: boolean
  theme?: DeepPartial<KeepTheme>
  usePreferences?: boolean
}

/**
 * Props for the Keep component.
 */
interface KeepProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  theme?: ThemeProps
}

/**
 * Renders the Keep component.
 *
 * @component
 * @param {KeepProps} props - The component props.
 * @param {ReactNode} props.children - The child elements to be rendered.
 * @param {object} props.theme - The theme object.
 * @param {object} props.theme.theme - The custom theme object.
 * @param {boolean} props.theme.dark - Indicates if the dark mode is enabled.
 * @param {boolean} props.theme.usePreferences - Indicates if the theme preferences should be used.
 * @returns {JSX.Element} The rendered Keep component.
 */
export const Keep: FC<KeepProps> = ({ children, theme = {} }) => {
  const { theme: customTheme = {}, dark, usePreferences = true } = theme
  const [mode, setMode, toggleMode] = useThemeMode(usePreferences)

  /**
   * Merged theme object combining the default theme and custom theme.
   * @type {KeepTheme}
   */
  const mergedTheme = mergeDeep(defaultTheme, customTheme) as unknown as KeepTheme

  useEffect(() => {
    if (dark) {
      if (setMode != null) {
        setMode('dark')
      }

      if (windowExists()) {
        document.documentElement.classList.add('dark')
      }
    }
  }, [dark, setMode])

  /**
   * The value of the theme context.
   *
   * @type {Object}
   * @property {Object} theme - The merged theme object.
   * @property {string} mode - The current mode.
   * @property {Function} toggleMode - The function to toggle the mode.
   */
  const themeContextValue = useMemo(
    () => ({
      theme: mergedTheme,
      mode,
      toggleMode,
    }),
    [mode, toggleMode, mergedTheme],
  )

  return <ThemeContext.Provider value={themeContextValue}>{children}</ThemeContext.Provider>
}

export type { KeepTheme } from './KeepTheme'
