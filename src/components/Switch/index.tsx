import type { FC, ReactNode } from 'react'
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { KeepSizes } from '../../Keep/KeepTheme'
import { useTheme } from '../../Keep/ThemeContext'
import { excludeClassName } from '../../helpers/exclude'
import { cn } from '../../helpers/cn'

export interface keepToggleTheme {
  base: string
  circleBase: string
  enabledBg: {
    on: {
      primary: string
      slate: string
    }
    off: string
  }
  enabledCircle: {
    on: ToggleSizes
    off: ToggleSizes
  }
  disabled: string
  size: ToggleSizes
  label: ToggleSizes
  withIconBase: string
}

/**
 * Props for the Toggle component.
 * @interface ToggleProps
 */
export interface ToggleProps {
  /**
   * The label to be displayed alongside the toggle.
   * @type {ReactNode}
   * @default 'Toggle'
   */
  label?: ReactNode

  /**
   * Determines whether to display an icon alongside the toggle.
   * @type {boolean}
   * @default false
   */
  withIcon?: boolean

  /**
   * Determines whether the toggle is disabled.
   * @type {boolean}
   * @default false
   */
  disabled?: boolean

  /**
   * The size of the toggle.
   * @type {keyof ToggleSizes}
   * @default 'sm'
   */
  size?: keyof ToggleSizes

  /**
   * The background color of the toggle.
   * @type {'primary' | 'slate'}
   * @default 'primary'
   */
  bgColor?: 'primary' | 'slate'

  /**
   * Additional CSS class name for the toggle component.
   * @type {string}
   * @default ''
   */
  className?: string

  /**
   * Additional CSS styles for the toggle circle.
   * @type {string}
   * @default ''
   */
  circleStyle?: string

  /**
   * Additional CSS styles for the toggle label.
   * @type {string}
   * @default ''
   */
  labelStyle?: string
}

export interface ToggleSizes extends Pick<KeepSizes, 'sm' | 'md' | 'lg'> {
  [key: string]: string
}

const ToggleComponent: FC<ToggleProps> = ({
  label = 'Toggle',
  bgColor = 'primary',
  disabled = false,
  withIcon = false,
  size = 'sm',
  className,
  circleStyle,
  labelStyle,
  ...props
}) => {
  const [enabled, setEnabled] = useState(false)
  const theirProps = excludeClassName(props)
  const theme = useTheme().theme.switch

  const showWithIcon = (enabled: boolean, size: keyof ToggleSizes): string => {
    if (enabled) {
      const enableIcon: ToggleSizes = {
        sm: `after:h-[10px] after:w-[10px] after:bg-[url('https://staticmania.cdn.prismic.io/staticmania/94b4a4f9-0d62-4504-8ce7-1e034cd4ef4b_moon-10.svg')]`,
        md: `after:h-[12px] after:w-[12px] after:bg-[url('https://staticmania.cdn.prismic.io/staticmania/33d8fbe6-f91d-47fb-bdb2-cf4c0ed5e233_moon-12.svg')]`,
        lg: `after:h-[13px] after:w-[13px] after:bg-[url('https://staticmania.cdn.prismic.io/staticmania/e92c83b0-1163-4dc0-b639-3fc572208a88_moon-13.svg')]`,
      }
      return enableIcon[size]
    }

    const disabledIcon: ToggleSizes = {
      sm: `after:h-[10px] after:w-[10px] after:bg-[url('https://staticmania.cdn.prismic.io/staticmania/0ec60af9-5904-46c0-aa2a-c030c87a4ef9_sun-10.svg')]`,
      md: `after:h-[12px] after:w-[12px] after:bg-[url('https://staticmania.cdn.prismic.io/staticmania/50fbbf0c-a842-464e-8f3a-c34d3b4cbc42_sun-12.svg')]`,
      lg: `after:h-[13px] after:w-[13px] after:bg-[url('https://staticmania.cdn.prismic.io/staticmania/8bfd02e9-f130-410e-9a4f-f54eec33f14a_sun-13.svg')]`,
    }
    return disabledIcon[size]
  }

  return (
    <div data-testid="toggle-element" {...theirProps} className="inline-flex items-center" id="test-switch">
      <Switch
        id="test-switchId"
        checked={disabled ? disabled : enabled}
        onChange={setEnabled}
        className={cn(
          theme.base,
          theme.size[size],
          disabled && theme.disabled,
          enabled ? theme.enabledBg.on[bgColor] : theme.enabledBg.off,
          className,
        )}>
        <span className="sr-only">Enable notifications</span>
        <span
          className={cn(
            theme.circleBase,
            theme.enabledCircle[enabled ? 'on' : 'off'][size],
            withIcon && theme.withIconBase,
            withIcon && showWithIcon(enabled, size),
            enabled ? theme.enabledCircle.on[size] : theme.enabledCircle.off[size],
            circleStyle,
          )}
        />
      </Switch>
      {typeof label !== 'undefined' ||
        (!label && <label className={cn(theme.label[size], disabled && theme.disabled, labelStyle)}>{label}</label>)}
    </div>
  )
}

ToggleComponent.displayName = 'Toggle'
export const Toggle = ToggleComponent
