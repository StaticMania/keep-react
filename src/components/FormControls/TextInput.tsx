import React, { ComponentProps, forwardRef, ReactNode } from 'react'
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

export interface TextInputProps extends Omit<ComponentProps<'input'>, 'ref' | 'color' | 'className'> {
  sizing?: keyof TextInputSizes
  withBg?: boolean
  border?: boolean
  shadow?: boolean
  disabled?: boolean
  helperText?: ReactNode
  addon?: ReactNode
  addonPosition?: 'left' | 'right'
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  color?: keyof TextInputColors
  value?: string
  handleOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  addonStyle?: string
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
