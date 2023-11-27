import { createContext, useContext } from 'react'

/**
 * Represents the navigation context.
 * @typedef {Object} NavigationContext
 * @property {boolean} [isOpen] - Indicates whether the navigation is open or not.
 * @property {function} setIsOpen - A function to set the value of `isOpen`.
 * @param {boolean} isOpen - The new value for `isOpen`.
 * @returns {void}
 */
type NavigationContext = {
  isOpen?: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const NavigationContext = createContext<NavigationContext | undefined>(undefined)

export function useNavigationContext(): NavigationContext {
  const context = useContext(NavigationContext)

  if (!context) {
    throw new Error('useNavigationContext should be used within the NavigationContext provider!')
  }

  return context
}
