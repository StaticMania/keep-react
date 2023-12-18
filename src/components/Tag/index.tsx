import { useTheme } from '../../Keep/ThemeContext'
import { KeepBoolean, KeepColors } from '../../Keep/KeepTheme'
import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react'
import { cn } from '../../helpers/cn'

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

/**
 * Props for the Tag component.
 * @interface TagProps
 * @extends {PropsWithChildren<Omit<ComponentProps<'div'>, 'color'>>}
 */
export interface TagProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'color'>> {
  /**
   * The left icon element to be displayed in the tag.
   * @type {ReactNode}
   * @default ''
   */
  leftIcon?: ReactNode

  /**
   * The dismiss icon element to be displayed in the tag.
   * @type {ReactNode}
   * @default ''
   */
  dismissIcon?: ReactNode

  /**
   * Determines whether the tag can be dismissed.
   * @type {boolean}
   * @default false
   */
  dismiss?: boolean

  /**
   * Determines whether the tag is disabled.
   * @type {boolean}
   * @default false
   */
  disabled?: boolean

  /**
   * The color of the tag. Can be one of the predefined TagColors.
   * @type {keyof TagColors}
   * @default 'gray'
   */
  color?: keyof TagColors

  /**
   * The type of border for the tag. Can be 'solid' or 'dashed'.
   * @type {'solid' | 'dashed'}
   * @default 'solid'
   */
  borderType?: 'solid' | 'dashed'

  /**
   * Callback function to be called when the tag is dismissed.
   * If set to `true`, the tag will be dismissed automatically.
   * @type {boolean | (() => void)}
   * @default false
   */
  onDismiss?: boolean | (() => void)

  /**
   * Additional CSS class name for the tag.
   * @type {string}
   * @default ''
   */
  className?: string
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
      className={cn(
        theme.base,
        theme.color[color],
        dismiss && theme.dismiss,
        disabled && theme.disabled.on,
        theme.borderType[borderType],
        className,
      )}
      role="tag">
      {leftIcon && <span className={cn(theme.icon.left, theme.children.colors[color])}>{leftIcon}</span>}

      <span className={cn(theme.children.colors[color])}>{children}</span>
      {onDismiss && typeof onDismiss === 'function' && (
        <>
          {leftIcon && <span className={cn(theme.bar.base, theme.bar.color[color])}></span>}
          <span
            onClick={(e) => (disabled ? e.stopPropagation() : onDismiss())}
            className={cn(!disabled && theme.disabled.off, !disabled && theme.children.colors[color])}>
            {dismissIcon}
          </span>
        </>
      )}
    </div>
  )
}

Tag.displayName = 'Tag'
