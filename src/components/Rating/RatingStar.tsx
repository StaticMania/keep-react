import { Star, StarHalf } from 'phosphor-react'
import type { FC, ReactNode } from 'react'
import { useRatingContext } from './RatingContext'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

/**
 * Props for the RatingStar component.
 * @interface RatingStarProps
 */
export interface RatingStarProps {
  /**
   * The type of filled star icon to use.
   * Options: 'regular', 'fill', 'bold', 'duotone', 'thin', 'light'
   */
  filledType?: 'regular' | 'fill' | 'bold' | 'duotone' | 'thin' | 'light'

  /**
   * The type of star to display.
   * Options: 'half', 'full'
   */
  starType?: 'half' | 'full'

  /**
   * The custom star icon to use.
   */
  starIcon?: ReactNode

  /**
   * The CSS class name for the component.
   */
  className?: string

  /**
   * The color of the star.
   */
  color?: string
}

export const RatingStar: FC<RatingStarProps> = ({
  filledType = 'regular',
  starType = 'full',
  color = '#1B4DFF',
  starIcon: Icon,
  className,
}) => {
  const theme = useTheme().theme.rating.star
  const { size = 24 } = useRatingContext()

  Icon =
    starType === 'half' ? (
      <StarHalf size={size} color={color} weight={filledType} />
    ) : (
      <Star size={size} color={color} weight={filledType} />
    )

  return (
    <span className={cn(theme.base, className)} data-testid="keep-rating-star">
      {Icon}
    </span>
  )
}
