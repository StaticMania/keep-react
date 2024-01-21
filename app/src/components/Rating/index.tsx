import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { cn } from '../../helpers/cn'
import { RatingAdvanced } from './RatingAdvanced'
import { RatingContext } from './RatingContext'
import { RatingStar } from './RatingStar'
import { ratingTheme } from './theme'

export interface RatingProps extends PropsWithChildren<ComponentProps<'div'>> {
  size?: number
}

const RatingComponent: FC<RatingProps> = ({ children, size, className, ...props }) => {
  const theme = ratingTheme

  return (
    <RatingContext.Provider value={{ size }}>
      <div className={cn(theme.base, className)} {...props}>
        {children}
      </div>
    </RatingContext.Provider>
  )
}

RatingComponent.displayName = 'Rating'
RatingStar.displayName = 'Rating.Star'
RatingAdvanced.displayName = 'Rating.Advanced'

export const Rating = Object.assign(RatingComponent, {
  Star: RatingStar,
  Advanced: RatingAdvanced,
})
