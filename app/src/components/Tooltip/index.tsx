import type { Placement } from '@floating-ui/core'
import type { FC, ReactNode } from 'react'
import { excludeClassName } from '../../helpers/exclude'
import { Floating } from '../Floating'
import { tooltipTheme } from './theme'

/**
 * Props for the Tooltip component.
 * @interface TooltipProps
 */
export interface TooltipProps {
  /**
   * The title of the tooltip.
   * @type {string}
   * @default ''
   */
  title?: string

  /**
   * children of the tooltip.
   * @type {ReactNode}
   * @default ''
   */
  children?: ReactNode

  /**
   * The content of the tooltip.
   * @type {ReactNode}
   * @default ''
   */
  content: ReactNode

  /**
   * The placement of the tooltip.
   * @type {'auto' | Placement}
   * @default 'auto'
   */
  placement?: 'auto' | Placement

  /**
   * The trigger event for the tooltip.
   * @type {'hover' | 'click'}
   * @default 'hover'
   */
  trigger?: 'hover' | 'click'

  /**
   * The style of the tooltip.
   * @type {'dark' | 'light' | 'auto'}
   * @default 'dark'
   */
  style?: 'dark' | 'light' | 'auto'

  /**
   * The animation duration of the tooltip.
   * @type {false | `duration-${number}`}
   * @default 'duration-300'
   */
  animation?: false | `duration-${number}`

  /**
   * Whether to show the arrow of the tooltip.
   * @type {boolean}
   * @default true
   */
  arrow?: boolean
}

/**
 * @see https://floating-ui.com/docs/react-dom-interactions
 */
export const Tooltip: FC<TooltipProps> = ({
  animation = 'duration-300',
  arrow = true,
  children,
  title,
  content,
  placement = 'top',
  style = 'dark',
  trigger = 'hover',
  ...props
}) => {
  const theme = tooltipTheme
  const theirProps = excludeClassName(props)

  return (
    <Floating
      title={title}
      content={content}
      style={style}
      animation={animation}
      placement={placement}
      arrow={arrow}
      trigger={trigger}
      theme={theme}
      {...theirProps}>
      {children}
    </Floating>
  )
}
