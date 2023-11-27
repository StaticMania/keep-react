import { createContext, useContext } from 'react'

/**
 * Represents the context for the Rating component.
 * @typedef {Object} RatingContext
 * @property {number} [size] - The size of the rating.
 */
export type RatingContext = {
  size?: number
}

export const RatingContext = createContext<RatingContext | undefined>(undefined)

export function useRatingContext(): RatingContext {
  const context = useContext(RatingContext)

  if (!context) {
    throw new Error('useRatingContext should be used within the RatingContext provider!')
  }

  return context
}
