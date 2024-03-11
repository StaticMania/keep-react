'use client'
import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { cn } from '../../helpers/cn'
import { RatingContext } from './RatingContext'
import { RatingStar } from './RatingStar'

export interface RatingProps extends PropsWithChildren<ComponentProps<'div'>> {
  size?: number
}

const RatingComponent: FC<RatingProps> = ({ children, size, className, ...props }) => {
  return (
    <RatingContext.Provider value={{ size }}>
      <div className={cn('flex items-center', className)} {...props}>
        {children}
      </div>
    </RatingContext.Provider>
  )
}

RatingStar.displayName = 'Rating.Star'

export const Rating = Object.assign(RatingComponent, {
  Star: RatingStar,
})
