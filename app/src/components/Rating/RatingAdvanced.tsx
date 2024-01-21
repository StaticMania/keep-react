import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { cn } from '../../helpers/cn'
import { RatingAdvancedSizes, ratingTheme } from './theme'

export interface RatingAdvancedProps extends PropsWithChildren<ComponentProps<'div'>> {
  percentFilled?: number
  size?: keyof RatingAdvancedSizes
}

export const RatingAdvanced: FC<RatingAdvancedProps> = ({
  percentFilled = 0,
  size = 'sm',
  children,
  className,
  ...props
}) => {
  const theme = ratingTheme.advanced

  return (
    <div className={cn(theme.base, className)} {...props}>
      <span className={theme.label}>{children}</span>
      <div className={cn(theme.progress.base, theme.progress.size[size])}>
        <div
          className={cn(theme.progress.fill, theme.progress.size[size])}
          data-testid="keep-rating-fill"
          style={{ width: `${percentFilled}%` }}
        />
      </div>
      <span className={theme.progress.label}>{`${percentFilled}%`}</span>
    </div>
  )
}
