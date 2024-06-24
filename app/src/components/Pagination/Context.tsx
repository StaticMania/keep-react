'use client'
import { createContext, useContext } from 'react'
import { PaginationProps } from './Pagination'

export const PaginationContext = createContext<PaginationProps | undefined>(undefined)

export function usePaginationContext(): PaginationProps {
  const context = useContext(PaginationContext)

  if (!context) {
    throw new Error('usePaginationContext should be used within the PaginationContext provider!')
  }

  return context
}
