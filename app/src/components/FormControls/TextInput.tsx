import React, { ChangeEvent, ComponentProps, forwardRef, ReactNode } from 'react'
import { excludeClassName } from '../../helpers/exclude'
import { HelperText } from './HelperText'
import type { KeepBoolean, KeepColors, KeepSizes } from '../../Keep/KeepTheme'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

export interface keepTextInputTheme {
  base: string
  addon: {
    base: string
    separator: {
      colors: TextInputColors
    }
    position: {
      left: string
      right: string
    }
    addonBorder: {
      on: string
      off: string
    }
  }
  field: {
    base: string
    icon: {
      base: string
      position: {
        left: string
        right: string
      }
    }
    input: {
      base: string
      disabled: string
      sizes: TextInputSizes
      colors: TextInputColors
      withBorder: KeepBoolean
      withBg: {
        on: {
          colors: TextInputColors
        }
        off: string
      }
      withIcon: {
        on: {
          left: string
          right: string
        }
        off: string
      }
      withAddon: {
        on: {
          left: string
          right: string
        }
        off: string
      }
      withShadow: KeepBoolean
    }
  }
}

export interface TextInputColors extends Pick<KeepColors, 'gray' | 'info' | 'error' | 'warning' | 'success'> {
  [key: string]: string
}

export interface TextInputSizes extends Pick<KeepSizes, 'sm' | 'md' | 'lg'> {
  [key: string]: string
}

/**
 * Props for the TextInput component.
 * @interface TextInputProps
 * @extends {Omit<ComponentProps<'input'>, 'ref' | 'color' | 'className'>}
 */
export interface TextInputProps extends Omit<ComponentProps<'input'>, 'ref' | 'color' | 'className'> {
  /**
   * The sizing option for the TextInput.
   * @type {keyof TextInputSizes}
   * @default 'md'
   */
  sizing?: keyof TextInputSizes

  /**
   * Determines whether the TextInput has a background color.
   * @type {boolean}
   * @default false
   */
  withBg?: boolean

  /**
   * Determines whether the TextInput has a border.
   * @type {boolean}
   * @default true
   */
  border?: boolean

  /**
   * Determines whether the TextInput has a shadow.
   * @type {boolean}
   * @default false
   */
  shadow?: boolean

  /**
   * Determines whether the TextInput is disabled.
   * @type {boolean}
   * @default false
   */
  disabled?: boolean

  /**
   * The helper text to display below the TextInput.
   * @type {ReactNode}
   * @default null
   */
  helperText?: ReactNode

  /**
   * The addon content to display alongside the TextInput.
   * @type {ReactNode}
   * @default null
   */
  addon?: ReactNode

  /**
   * The position of the addon content relative to the TextInput.
   * @type {'left' | 'right'}
   * @default 'left'
   */
  addonPosition?: 'left' | 'right'

  /**
   * The icon to display alongside the TextInput.
   * @type {ReactNode}
   * @default null
   */
  icon?: ReactNode

  /**
   * The position of the icon relative to the TextInput.
   * @type {'left' | 'right'}
   * @default 'right'
   */
  iconPosition?: 'left' | 'right'

  /**
   * The color variant for the TextInput.
   * @type {keyof TextInputColors}
   * @default 'default'
   */
  color?: keyof TextInputColors

  /**
   * The value of the TextInput.
   * @type {string}
   * @default ''
   */
  value?: string

  /**
   * The event handler for the onChange event of the TextInput.
   * @type {(e: React.ChangeEvent<HTMLInputElement>) => void}
   * @default null
   */
  // eslint-disable-next-line no-unused-vars
  handleOnChange?: (e: ChangeEvent<HTMLInputElement>) => void

  /**
   * The CSS class name for the TextInput.
   * @type {string}
   * @default ''
   */
  className?: string

  /**
   * The CSS style for the addon content.
   * @type {string}
   * @default ''
   */
  addonStyle?: string

  /**
   * The CSS style for the icon.
   * @type {string}
   * @default ''
   */
  iconStyle?: string
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      sizing = 'md',
      shadow,
      withBg,
      helperText,
      addon,
      icon: Icon,
      border = true,
      disabled = false,
      color = 'default',
      addonPosition = 'left',
      iconPosition = 'right',
      value,
      handleOnChange,
      addonStyle,
      iconStyle,
      ...props
    },
    ref,
  ) => {
    const theme = useTheme().theme.formControls.textInput
    const theirProps = excludeClassName(props)

    return (
      <React.Fragment>
        <div className={theme.base}>
          {addon && addonPosition === 'left' && (
            <span
              className={cn(
                theme.addon.base,
                theme.addon.separator.colors[color],
                theme.addon.position[addonPosition],
                theme.addon.addonBorder[border ? 'on' : 'off'],
                withBg ? theme.field.input.withBg.on.colors[color] : theme.field.input.withBg.off,
                disabled && theme.field.input.disabled,
                addonStyle,
              )}>
              {addon}
            </span>
          )}
          <div className={theme.field.base}>
            {Icon && iconPosition === 'left' && (
              <div className={cn(theme.field.icon.base, theme.field.icon.position[iconPosition], iconStyle)}>
                {Icon}
              </div>
            )}
            <input
              className={cn(
                theme.field.input.base,
                theme.field.input.colors[color],
                theme.field.input.sizes[sizing],
                theme.field.input.withShadow[shadow ? 'on' : 'off'],
                theme.field.input.withBorder[border ? 'on' : 'off'],
                disabled && theme.field.input.disabled,
                Icon ? theme.field.input.withIcon.on[iconPosition] : theme.field.input.withIcon.off,
                addon ? theme.field.input.withAddon.on[addonPosition] : theme.field.input.withAddon.off,
                withBg ? theme.field.input.withBg.on.colors[color] : theme.field.input.withBg.off,
                !border && '!rounded-none',
              )}
              {...theirProps}
              ref={ref}
              disabled={disabled}
              defaultValue={value}
              onChange={handleOnChange}
            />
            {Icon && iconPosition === 'right' && (
              <div className={cn(theme.field.icon.base, theme.field.icon.position[iconPosition], iconStyle)}>
                {Icon}
              </div>
            )}
          </div>
          {addon && addonPosition === 'right' && (
            <span
              className={cn(
                theme.addon.base,
                theme.addon.separator.colors[color],
                theme.addon.position[addonPosition],
                theme.field.input.withBorder[border ? 'on' : 'off'],
                withBg ? theme.field.input.withBg.on.colors[color] : theme.field.input.withBg.off,
                addonStyle,
              )}>
              {addon}
            </span>
          )}
        </div>
        {helperText && (
          <HelperText color={color} disabled={disabled}>
            {helperText}
          </HelperText>
        )}
      </React.Fragment>
    )
  },
)

TextInput.displayName = 'TextInput'
