import type { Placement } from '@floating-ui/core'
import type { FC, ReactNode } from 'react'
import { excludeClassName } from '../../helpers/exclude'
import { Floating } from '../Floating'
import { useTheme } from '../../Keep/ThemeContext'

/**
 * Props for the Tooltip component.
 * @interface TooltipProps
 */
export interface TooltipProps {
  /**
   * The title of the tooltip.
   */
  title?: string
  /**
   * children of the tooltip.
   */
  children?: ReactNode
  /**
   * The content of the tooltip.
   */
  content: ReactNode
  /**
   * The placement of the tooltip.
   */
  placement?: 'auto' | Placement
  /**
   * The trigger event for the tooltip.
   */
  trigger?: 'hover' | 'click'
  /**
   * The style of the tooltip.
   */
  style?: 'dark' | 'light' | 'auto'
  /**
   * The animation duration of the tooltip.
   */
  animation?: false | `duration-${number}`
  /**
   * Whether to show the arrow of the tooltip.
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
  const theme = useTheme().theme.tooltip
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
