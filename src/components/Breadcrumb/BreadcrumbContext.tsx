import type { ReactNode } from 'react'
import { createContext, useContext } from 'react'

type BreadcrumbContext = {
  separatorIcon?: ReactNode
}

export const BreadcrumbContext = createContext<BreadcrumbContext | undefined>(undefined)

/**
 * Returns the BreadcrumbContext object from the nearest BreadcrumbContext provider.
 * @returns {BreadcrumbContext} The BreadcrumbContext object.
 * @throws {Error} Throws an error if used outside of a BreadcrumbContext provider.
 */
export function useBreadcrumbContext(): BreadcrumbContext {
  const context = useContext(BreadcrumbContext)

  if (!context) {
    throw new Error('useBreadcrumbContext should be used within the BreadcrumbContext provider!')
  }

  return context
}
