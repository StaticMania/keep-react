'use client'
import { ButtonHTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { ButtonGroup } from '../ButtonGroup'
import { buttonTheme } from './theme'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  variant?: 'link' | 'outline'
  shape?: 'circle' | 'icon'
  position?: 'start' | 'end' | 'center'
}

const ButtonComponent = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, className, size = 'md', color = 'primary', variant, shape, position, ...props },
    ref: Ref<HTMLButtonElement>,
  ) => {
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
      <button {...props} ref={ref} className={combinedClassNames}>
        {children}
      </button>
    )
  },
)

ButtonComponent.displayName = 'Button'
ButtonGroup.displayName = 'Button.Group'

const Button = Object.assign(ButtonComponent, {
  Group: ButtonGroup,
})

export { Button }
