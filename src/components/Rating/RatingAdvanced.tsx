import { KeepSizes } from '../../Keep/KeepTheme'
import { useTheme } from '../../Keep/ThemeContext'
import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { cn } from '../../helpers/cn'

/**
 * Props for the RatingAdvanced component.
 * @interface RatingAdvancedProps
 * @extends {PropsWithChildren<ComponentProps<'div'>>}
 */
export interface RatingAdvancedProps extends PropsWithChildren<ComponentProps<'div'>> {
  /**
   * The percentage of the rating that should be filled.
   */
  percentFilled?: number

  /**
   * The size of the rating.
   * Options: 'sm', 'md', 'lg'
   */
  size?: keyof RatingAdvancedSizes
}

export interface RatingAdvancedSizes extends Pick<KeepSizes, 'sm' | 'md' | 'lg'> {
  [key: string]: string
}

export const RatingAdvanced: FC<RatingAdvancedProps> = ({
  percentFilled = 0,
  size = 'sm',
  children,
  className,
  ...props
}) => {
  const theme = useTheme().theme.rating.advanced

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
