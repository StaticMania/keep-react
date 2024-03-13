'use client'
import { createContext, useContext } from 'react'

export type RatingPropsContext = {
  size?: number
}

export const RatingContext = createContext<RatingPropsContext | undefined>(undefined)

export function useRatingContext(): RatingPropsContext {
  const context = useContext(RatingContext)

  if (!context) {
    throw new Error('useRatingContext should be used within the RatingContext provider!')
  }

  return context
}
