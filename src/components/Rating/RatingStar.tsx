import { twMerge } from 'tailwind-merge'
import { Star, StarHalf } from 'phosphor-react'
import type { FC, ReactNode } from 'react'
import { useRatingContext } from './RatingContext'
import { useTheme } from '../../Keep/ThemeContext'

export interface RatingStarProps {
  filledType?: 'regular' | 'fill' | 'bold' | 'duotone' | 'thin' | 'light'
  starType?: 'half' | 'full'
  starIcon?: ReactNode
  className?: string
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
    <span className={twMerge(theme.base, className)} data-testid="keep-rating-star">
      {Icon}
    </span>
  )
}
