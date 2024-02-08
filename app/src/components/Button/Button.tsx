'use client'
import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { ButtonGroup } from '../ButtonGroup'
import { buttonTheme } from './theme'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  type?: 'reset' | 'submit' | 'button'
  variant?: 'link' | 'outline'
  className?: string
  disabled?: boolean
  shape?: 'circle' | 'icon'
  position?: 'start' | 'end' | 'center'
  onClick?: () => void
  [key: string]: any
}

const ButtonComponent: FC<ButtonProps> = ({
  type = 'button',
  disabled,
  children,
  className,
  size = 'md',
  color = 'primary',
  onClick,
  variant,
  shape,
  position,
  ...props
}) => {
  const classNames = {
    base: buttonTheme.base,
    size: !shape && buttonTheme.size[size],
    iconBtn: (shape === 'icon' || shape === 'circle') && buttonTheme.iconBtn[size],
    roundedFull: shape === 'circle' && 'rounded-full',
    color: !variant && buttonTheme.color[color],
    link: variant === 'link' && buttonTheme.variant.link[color],
    outline: variant === 'outline' && buttonTheme.variant.outline[color],
    position: position && buttonTheme.position[position],
  }

  const combinedClassNames = cn(
    classNames.base,
    classNames.size,
    classNames.iconBtn,
    classNames.roundedFull,
    classNames.color,
    classNames.link,
    classNames.outline,
    classNames.position,
    className,
  )

  return (
    <button {...props} type={type} disabled={disabled} onClick={onClick} className={combinedClassNames}>
      {children}
    </button>
  )
}

ButtonGroup.displayName = 'Button.Group'
export const Button = Object.assign(ButtonComponent, {
  Group: ButtonGroup,
})
