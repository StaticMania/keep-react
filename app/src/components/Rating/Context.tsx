/* eslint-disable no-unused-vars */
import { createContext, useContext } from 'react'

type RatingContextProps = {
  handleRating?: (value: number | undefined) => void
}

export const RatingContext = createContext<RatingContextProps | undefined>(undefined)

export function useRatingContext(): RatingContextProps {
  const context = useContext(RatingContext)

  if (!context) {
    throw new Error('useRatingContext should be used within the RatingContext provider!')
  }

  return context
}
