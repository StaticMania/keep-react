import { createContext, useContext } from 'react'

/**
 * Represents the navigation context.
 * @typedef {Object} NavigationContext
 * @property {boolean} [isOpen] - Indicates whether the navigation is open or not.
 * @property {function} setIsOpen - A function to set the value of `isOpen`.
 * @param {boolean} isOpen - The new value for `isOpen`.
 * @returns {void}
 */
type NavigationPropsContext = {
  isOpen?: boolean
  // eslint-disable-next-line no-unused-vars
  setIsOpen: (isOpen: boolean) => void
}

export const NavigationContext = createContext<NavigationPropsContext | undefined>(undefined)

export function useNavigationContext(): NavigationPropsContext {
  const context = useContext(NavigationContext)

  if (!context) {
    throw new Error('useNavigationContext should be used within the NavigationContext provider!')
  }

  return context
}
