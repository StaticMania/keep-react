/* eslint-disable no-unused-vars */
'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { RatingContext } from './Context'
import { Star } from './Star'

interface RatingProps extends HTMLAttributes<HTMLDivElement> {
  handleRating?: (value: number | undefined) => void
}

export const RatingComponent = forwardRef<HTMLDivElement, RatingProps>(
  ({ children, className, handleRating, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div {...props} className={cn('items center flex flex-row-reverse justify-end gap-0.5', className)} ref={ref}>
        <RatingContext.Provider value={{ handleRating }}>{children}</RatingContext.Provider>
      </div>
    )
  },
)

RatingComponent.displayName = 'Rating'
Star.displayName = 'Rating.Star'

export const Rating = Object.assign(RatingComponent, {
  Star,
})
