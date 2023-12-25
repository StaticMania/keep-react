import type { ReactNode } from 'react'
import { FC } from 'react'
import { Button, ButtonSizes } from '../Button/Button'
import { cn } from '../../helpers/cn'

/**
 * Props for the PlayButton component.
 * @interface PlayButtonProps
 */
interface PlayButtonProps {
  /**
   * The title of the button.
   */
  title?: string

  /**
   * The type of the button.
   */
  type?: 'primary' | 'text' | 'outlineGray' | 'blur'

  /**
   * The icon to be displayed in the button.
   */
  icon?: ReactNode

  /**
   * Determines if the button should be displayed as a circle.
   */
  circle?: boolean

  /**
   * The size of the button.
   */
  size?: keyof ButtonSizes

  /**
   * Additional CSS class for the button.
   */
  className?: string

  /**
   * The click event handler for the button.
   */
  onClick?: () => void

  /**
   * The CSS style for the title.
   */
  titleStyle?: string
}

export const PlayButton: FC<PlayButtonProps> = ({
  title,
  type = 'primary',
  icon,
  circle = false,
  size = 'md',
  className,
  titleStyle,
  onClick,
}) => {
  if (type === 'blur') {
    return (
      <Button onClick={onClick} variant={type} circle={circle} size={size} className={className}>
        <span className="text-white">{icon}</span>
      </Button>
    )
  }
  return (
    <Button onClick={onClick} variant={type} circle={circle} size={size} className={className}>
      {typeof icon !== 'undefined' && <span className={cn(title ? 'pr-2' : '', titleStyle)}>{icon}</span>}
      {title}
    </Button>
  )
}
