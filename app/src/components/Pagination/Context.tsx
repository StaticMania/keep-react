'use client'
import { createContext, useContext } from 'react'

export type PaginationPropsContext = {
  shape?: 'rounded' | 'circle'
}

export const PaginationContext = createContext<PaginationPropsContext | undefined>(undefined)

export function usePaginationContext(): PaginationPropsContext {
  const context = useContext(PaginationContext)

  if (!context) {
    throw new Error('usePaginationContext should be used within the PaginationContext provider!')
  }

  return context
}
