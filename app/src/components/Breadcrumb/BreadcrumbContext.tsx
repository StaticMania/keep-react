import type { ReactNode } from 'react'
import { createContext, useContext } from 'react'

/**
 * Represents the context for the Breadcrumb component.
 * @interface BreadcrumbContext
 */
type BreadcrumbContextProps = {
  /**
   * The separator icon to be displayed between breadcrumb items.
   * @type {ReactNode}
   */
  separatorIcon?: ReactNode
}

export const BreadcrumbContext = createContext<BreadcrumbContextProps | undefined>(undefined)

/**
 * Returns the BreadcrumbContext object from the nearest BreadcrumbContext provider.
 * @returns {BreadcrumbContext} The BreadcrumbContext object.
 * @throws {Error} Throws an error if used outside of a BreadcrumbContext provider.
 */
export function useBreadcrumbContext(): BreadcrumbContextProps {
  const context = useContext(BreadcrumbContext)

  if (!context) {
    throw new Error('useBreadcrumbContext should be used within the BreadcrumbContext provider!')
  }

  return context
}
