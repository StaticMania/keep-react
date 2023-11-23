import type { ReactNode } from 'react'
import { FC } from 'react'
import { Button, ButtonSizes } from '../Button/Button'
import { cn } from '../../helpers/cn'

interface PlayButtonProps {
  title?: string
  type?: 'button' | 'submit' | 'reset'
  buttonType?: 'primary' | 'text' | 'outlineGray' | 'blur'
  icon?: ReactNode
  circle?: boolean
  size?: keyof ButtonSizes
  className?: string
  onClick?: () => void
  titleStyle?: string
}

export const PlayButton: FC<PlayButtonProps> = ({
  title,
  type = 'button',
  buttonType = 'primary',
  icon,
  circle = false,
  size = 'md',
  className,
  titleStyle,
  onClick,
}) => {
  if (buttonType === 'blur') {
    return (
      <Button onClick={onClick} type={type} buttonType={buttonType} circle={circle} size={size} className={className}>
        <span className="text-white">{icon}</span>
      </Button>
    )
  }
  return (
    <Button onClick={onClick} type={type} buttonType={buttonType} circle={circle} size={size} className={className}>
      {typeof icon !== undefined && <span className={cn(title ? 'pr-2' : '', titleStyle)}>{icon}</span>}
      {title}
    </Button>
  )
}
