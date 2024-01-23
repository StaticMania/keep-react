import type { ComponentProps, Dispatch, ReactNode, SetStateAction } from 'react'
import { forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { excludeClassName } from '../../helpers/exclude'
import { NumberInputSizes, formControlsTheme } from './theme'

/**
 * Props for the NumberInput component.
 * @interface NumberInputProps
 * @extends {Omit<ComponentProps<'input'>, 'ref' | 'color' | 'className'>}
 */
export interface NumberInputProps extends Omit<ComponentProps<'input'>, 'ref' | 'color' | 'className'> {
  /**
   * The value of the input.
   * @type {number}
   * @default 0
   */
  value: number

  /**
   * The size of the input.
   * @type {keyof NumberInputSizes}
   * @default 'md'
   */
  sizing?: keyof NumberInputSizes

  /**
   * Specifies whether the input is disabled.
   * @type {boolean}
   * @default false
   */
  disabled?: boolean

  /**
   * The helper text of the input.
   * @type {ReactNode}
   * @default ''
   */
  helperText?: ReactNode

  /**
   * The label of the input.
   * @type {ReactNode}
   * @default ''
   */
  icon?: ReactNode

  /**
   * The position of the icon.
   * @type {'left' | 'right'}
   * @default 'right'
   */
  iconPosition?: 'right'

  /**
   * Callback function to handle input value changes.
   * @param value - The new value of the input.
   * @returns {void}
   * @default () => {}
   */
  setValue: Dispatch<SetStateAction<number>>
}

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  ({ value = 0, sizing = 'md', icon: Icon, disabled = false, iconPosition = 'right', setValue, ...props }, ref) => {
    const theme = formControlsTheme.numberInput
    const theirProps = excludeClassName(props)
    const handleScroll = (event: { deltaY: number }) => {
      if (!disabled) {
        if (event.deltaY > 0) {
          setValue && setValue(value - 1)
        } else {
          setValue && setValue(value + 1)
        }
      }
    }
    return (
      <div className={theme.base}>
        <div className={theme.field.base}>
          <div
            className={cn(
              theme.field.icon.base,
              theme.field.icon.sizes[sizing],
              theme.field.icon.position.incrementIcon,
              disabled && theme.field.icon.disabled,
            )}
            onClick={() => setValue((prevVal: number): number => prevVal + 1)}>
            <span className={cn(theme.field.icon.incrementIcon)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={sizing === 'sm' ? 14 : sizing === 'lg' ? 18 : 16}
                height={sizing === 'sm' ? 14 : sizing === 'lg' ? 18 : 16}
                fill="#5e718d"
                viewBox="0 0 256 256">
                <path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"></path>
              </svg>
            </span>
          </div>
          <input
            className={cn(
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
            className={cn(
              theme.field.icon.base,
              theme.field.icon.sizes[sizing],
              theme.field.icon.position.decrementIcon,
              disabled && theme.field.icon.disabled,
            )}
            onClick={(e) => {
              if (disabled) e.stopPropagation()
              else setValue((prevVal: number): number => prevVal - 1)
            }}>
            <span className={cn(theme.field.icon.decrementIcon)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={sizing === 'sm' ? 14 : sizing === 'lg' ? 18 : 16}
                height={sizing === 'sm' ? 14 : sizing === 'lg' ? 18 : 16}
                fill="#5e718d"
                viewBox="0 0 256 256">
                <path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    )
  },
)

NumberInput.displayName = 'NumberInput'
