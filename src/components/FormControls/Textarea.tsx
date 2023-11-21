import type { ComponentProps, ReactNode } from 'react'
import { forwardRef } from 'react'
import { excludeClassName } from '../../helpers/exclude'
import { HelperText } from './HelperText'
import type { KeepBoolean, KeepColors } from '../../Keep/KeepTheme'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

export interface keepTextAreaTheme {
  base: string
  colors: TextareaColors
  disabled: string
  withBg: {
    on: {
      colors: TextareaColors
    }
    off: string
  }
  withBorder: KeepBoolean
  withShadow: KeepBoolean
}

export interface TextareaColors extends Pick<KeepColors, 'gray' | 'info' | 'error' | 'warning' | 'success'> {
  [key: string]: string
}

/**
 * Props for the Textarea component.
 * @interface TextareaProps
 * @extends {Omit<ComponentProps<'textarea'>, 'className' | 'color' | 'ref'>}
 */
export interface TextareaProps extends Omit<ComponentProps<'textarea'>, 'className' | 'color' | 'ref'> {
  /**
   * If true, the textarea will have a shadow.
   */
  shadow?: boolean
  /**
   * The helper text to display below the textarea.
   */
  helperText?: ReactNode
  /**
   * If true, the textarea will have a background color.
   */
  withBg?: boolean
  /**
   * If true, the textarea will have a border.
   */
  border?: boolean
  /**
   * If true, the textarea will be disabled.
   */
  disabled?: boolean
  /**
   * The color of the textarea.
   */
  color?: keyof TextareaColors
  /**
   * The CSS class name for the textarea.
   */
  className?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ shadow, helperText, withBg, border = true, disabled = false, color = 'default', className, ...props }, ref) => {
    const theme = useTheme().theme.formControls.textarea
    const theirProps = excludeClassName(props)

    return (
      <>
        <textarea
          ref={ref}
          disabled={disabled}
          className={cn(
            theme.base,
            theme.colors[color],
            disabled && theme.disabled,
            theme.withShadow[shadow ? 'on' : 'off'],
            theme.withBorder[border ? 'on' : 'off'],
            withBg ? theme.withBg.on.colors[color] : theme.withBg.off,
            className,
          )}
          {...theirProps}
        />
        {helperText && (
          <HelperText color={color} disabled={disabled}>
            {helperText}
          </HelperText>
        )}
      </>
    )
  },
)

Textarea.displayName = 'Textarea'
