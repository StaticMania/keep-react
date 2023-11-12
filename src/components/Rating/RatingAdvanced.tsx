import { KeepSizes } from '../../Keep/KeepTheme'
import { useTheme } from '../../Keep/ThemeContext'
import { twMerge } from 'tailwind-merge'
import type { ComponentProps, FC, PropsWithChildren } from 'react'

export interface RatingAdvancedProps extends PropsWithChildren<ComponentProps<'div'>> {
  percentFilled?: number
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
    <div className={twMerge(theme.base, className)} {...props}>
      <span className={theme.label}>{children}</span>
      <div className={twMerge(theme.progress.base, theme.progress.size[size])}>
        <div
          className={twMerge(theme.progress.fill, theme.progress.size[size])}
          data-testid="keep-rating-fill"
          style={{ width: `${percentFilled}%` }}
        />
      </div>
      <span className={theme.progress.label}>{`${percentFilled}%`}</span>
    </div>
  )
}
