import { twMerge } from 'tailwind-merge'
import { useTheme } from '../../Keep/ThemeContex'
import { KeepBoolean, KeepColors } from '../../Keep/KeepTheme'
import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react'

export interface keepTagTheme {
  base: string
  dismiss: string
  disabled: KeepBoolean
  icon: {
    left: string
    right: string
  }
  borderType: {
    solid: string
    dashed: string
  }
  color: TagColors
  bar: {
    base: string
    color: TagColors
  }
  children: {
    colors: TagColors
  }
}

export interface TagProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'color'>> {
  leftIcon?: ReactNode
  dismissIcon?: ReactNode
  dismiss?: boolean
  disabled?: boolean
  color?: keyof TagColors
  borderType?: 'solid' | 'dashed'
  onDismiss?: boolean | (() => void)
}

export interface TagColors
  extends Pick<KeepColors, 'error' | 'gray' | 'info' | 'success' | 'warning' | 'teal' | 'purple'> {
  [key: string]: string
}

export const Tag: FC<TagProps> = ({
  children,
  color = 'gray',
  borderType = 'solid',
  leftIcon,
  dismissIcon,
  onDismiss,
  dismiss = false,
  disabled = false,
  className,
}) => {
  const theme = useTheme().theme.tag

  return (
    <div
      className={twMerge(
        theme.base,
        theme.color[color],
        dismiss && theme.dismiss,
        disabled && theme.disabled.on,
        theme.borderType[borderType],
        className,
      )}
      role="tag">
      {leftIcon && <span className={twMerge(theme.icon.left, theme.children.colors[color])}>{leftIcon}</span>}

      <span className={twMerge(theme.children.colors[color])}>{children}</span>
      {onDismiss && typeof onDismiss === 'function' && (
        <>
          {leftIcon && <span className={twMerge(theme.bar.base, theme.bar.color[color])}></span>}
          <span
            onClick={(e) => (disabled ? e.stopPropagation() : onDismiss())}
            className={twMerge(!disabled && theme.disabled.off, !disabled && theme.children.colors[color])}>
            {dismissIcon}
          </span>
        </>
      )}
    </div>
  )
}

Tag.displayName = 'Tag'
