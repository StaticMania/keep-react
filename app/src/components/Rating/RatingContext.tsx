import { createContext, useContext } from 'react'

/**
 * Represents the context for the Rating component.
 * @typedef {Object} RatingContext
 * @property {number} [size] - The size of the rating.
 */
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
