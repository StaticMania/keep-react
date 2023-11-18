import type { ReactNode } from 'react'
import { FC } from 'react'
import { Button, ButtonSizes } from '../Button/Button'
import { cn } from '../../helpers/cn'

interface PlayButtonProps {
  title?: string
  type?: 'primary' | 'text' | 'outlineGray' | 'blur'
  icon?: ReactNode
  circle?: boolean
  size?: keyof ButtonSizes
  className?: string
  onClick?: () => void
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
      <Button onClick={onClick} type={type} circle={circle} size={size} className={className}>
        <span className="text-white">{icon}</span>
      </Button>
    )
  }
  return (
    <Button onClick={onClick} type={type} circle={circle} size={size} className={className}>
      {typeof icon !== undefined && <span className={cn(title ? 'pr-2' : '', titleStyle)}>{icon}</span>}
      {title}
    </Button>
  )
}
