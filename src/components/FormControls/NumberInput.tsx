import { twMerge } from 'tailwind-merge'
import { Minus, Plus } from 'phosphor-react'
import type { ComponentProps, ReactNode } from 'react'
import { forwardRef } from 'react'
import { excludeClassName } from '../../helpers/exclude'
import type { KeepSizes } from '../../Keep/KeepTheme'
import { useTheme } from '../../Keep/ThemeContext'

export interface keepNumberInputTheme {
  base: string
  field: {
    base: string
    icon: {
      base: string
      incrementIcon: string
      decrementIcon: string
      disabled: string
      sizes: NumberInputSizes
      position: {
        right: string
        incrementIcon: string
        decrementIcon: string
      }
    }
    input: {
      base: string
      disabled: string
      sizes: NumberInputSizes
      withIcon: {
        on: {
          left: string
          right: string
        }
        off: string
      }
    }
  }
}

export interface NumberInputSizes extends Pick<KeepSizes, 'sm' | 'md' | 'lg'> {
  [key: string]: string
}

export interface NumberInputProps extends Omit<ComponentProps<'input'>, 'ref' | 'color' | 'className'> {
  value: number
  sizing?: keyof NumberInputSizes
  disabled?: boolean
  helperText?: ReactNode
  icon?: ReactNode
  iconPosition?: 'right'
  setValue: React.Dispatch<React.SetStateAction<number>>
}

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  ({ value = 0, sizing = 'md', icon: Icon, disabled = false, iconPosition = 'right', setValue, ...props }, ref) => {
    const theme = useTheme().theme.formControls.numberInput
    const theirProps = excludeClassName(props)
    const handleScroll = (event: { deltaY: number }) => {
      if (event.deltaY > 0) {
        setValue && setValue(value - 1)
      } else {
        setValue && setValue(value + 1)
      }
    }
    return (
      <div className={theme.base}>
        <div className={theme.field.base}>
          <div
            className={twMerge(
              theme.field.icon.base,
              theme.field.icon.sizes[sizing],
              theme.field.icon.position.incrementIcon,
              disabled && theme.field.icon.disabled,
            )}
            onClick={() => setValue((prevVal: number): number => prevVal + 1)}>
            <span className={twMerge(theme.field.icon.incrementIcon)}>
              <Plus size={sizing === 'sm' ? 14 : sizing === 'lg' ? 18 : 16} weight="bold" color="#5E718D" />
            </span>
          </div>
          <input
            className={twMerge(
              theme.field.input.base,
              theme.field.input.sizes[sizing],
              disabled && theme.field.input.disabled,
              Icon ? theme.field.input.withIcon.on[iconPosition] : theme.field.input.withIcon.off,
            )}
            {...theirProps}
            ref={ref}
            type="number"
            value={value}
            disabled={disabled}
            onWheel={handleScroll}
            readOnly
          />
          <div
            className={twMerge(
              theme.field.icon.base,
              theme.field.icon.sizes[sizing],
              theme.field.icon.position.decrementIcon,
              disabled && theme.field.icon.disabled,
            )}
            onClick={(e) => {
              if (disabled) e.stopPropagation()
              else setValue((prevVal: number): number => prevVal - 1)
            }}>
            <span className={twMerge(theme.field.icon.decrementIcon)}>
              <Minus size={sizing === 'sm' ? 14 : sizing === 'lg' ? 18 : 16} weight="bold" color="#5E718D" />
            </span>
          </div>
        </div>
      </div>
    )
  },
)

NumberInput.displayName = 'NumberInput'
