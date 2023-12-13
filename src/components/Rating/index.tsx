import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { RatingAdvanced, RatingAdvancedSizes } from './RatingAdvanced'
import { RatingContext } from './RatingContext'
import { RatingStar } from './RatingStar'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

export interface keepRatingTheme {
  base: string
  star: {
    base: string
  }
  advanced: {
    base: string
    label: string
    progress: {
      base: string
      fill: string
      label: string
      size: RatingAdvancedSizes
    }
  }
}

/**
 * Props for the Rating component.
 * @interface RatingProps
 * @extends {PropsWithChildren<ComponentProps<'div'>>}
 */
export interface RatingProps extends PropsWithChildren<ComponentProps<'div'>> {
  /**
   * The size of the rating.
   */
  size?: number
}

const RatingComponent: FC<RatingProps> = ({ children, size, className, ...props }) => {
  const theme = useTheme().theme.rating

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
