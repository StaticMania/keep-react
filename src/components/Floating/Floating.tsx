import type { Placement } from '@floating-ui/core'
import { autoUpdate, useFocus } from '@floating-ui/react'
import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'
import { getArrowPlacement } from '../../helpers/floating'
import { useBaseFLoating, useFloatingInteractions } from '../../helpers/use-Floating'
import { cn } from '../../helpers/cn'

/**
 * Interface representing the theme for the Floating component.
 */
/**
 * Interface representing the theme for the floating component.
 */
export interface keepFloatingTheme {
  /**
   * The theme for the arrow in the floating component.
   */
  arrow: keepFloatingArrowTheme

  /**
   * The animation style for the floating component.
   */
  animation: string

  /**
   * The base style for the floating component.
   */
  base: string

  /**
   * The content style for the floating component.
   */
  content: string

  /**
   * The hidden style for the floating component.
   */
  hidden: string

  /**
   * The style object for the floating component.
   */
  style: {
    /**
     * The auto style for the floating component.
     */
    auto: string

    /**
     * The dark style for the floating component.
     */
    dark: string

    /**
     * The light style for the floating component.
     */
    light: string
  }

  /**
   * The target style for the floating component.
   */
  target: string

  /**
   * The title style for the floating component.
   */
  title: string
}

/**
 * Interface representing the theme for the keepFloatingArrow component.
 */
export interface keepFloatingArrowTheme {
  /**
   * The base theme for the arrow.
   */
  base: string

  /**
   * The placement of the arrow.
   */
  placement: string

  /**
   * The styles for different color schemes.
   */
  style: {
    /**
     * The dark color scheme.
     */
    dark: string

    /**
     * The light color scheme.
     */
    light: string

    /**
     * The automatic color scheme.
     */
    auto: string
  }
}

/**
 * Represents the style options for the Floating component.
 * The style can be either 'dark', 'light', or 'auto'.
 */
export type FloatingStyle = 'dark' | 'light' | 'auto'

/**
 * Props for the Floating component.
 */
export interface FloatingProps extends PropsWithChildren, Omit<ComponentProps<'div'>, 'content' | 'style'> {
  /**
   * The animation configuration for the Floating component.
   * Set to `false` to disable animation, or provide a string with the format `duration-${number}` to specify the animation duration.
   */
  animation?: false | `duration-${number}`
  /**
   * Determines whether to show an arrow pointing to the content.
   */
  arrow?: boolean
  /**
   * The content to be displayed inside the Floating component.
   */
  content: ReactNode
  /**
   * The placement of the Floating component relative to its trigger element.
   * Set to `'auto'` to automatically determine the placement, or provide a specific placement value.
   */
  placement?: 'auto' | Placement
  /**
   * The custom style for the Floating component.
   */
  style?: FloatingStyle
  /**
   * The theme for the Floating component.
   */
  theme: keepFloatingTheme
  /**
   * The trigger event for showing the Floating component.
   * Set to `'hover'` to show on hover, or `'click'` to show on click.
   */
  trigger?: 'hover' | 'click'
  /**
   * The minimum width of the Floating component.
   */
  minWidth?: number
  /**
   * The key used to request closing the Floating component.
   */
  closeRequestKey?: string
}

/**
 * Floating component that displays a tooltip or popover.
 * @see https://floating-ui.com/docs/react-dom-interactions
 */
export const Floating: FC<FloatingProps> = ({
  animation = 'duration-300',
  arrow = true,
  children,
  className,
  content,
  placement = 'top',
  style = 'dark',
  theme,
  trigger = 'hover',
  minWidth,
  closeRequestKey,
  ...props
}) => {
  const arrowRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)

  /**
   * The properties returned by the useBaseFloating hook.
   *
   * @typedef {Object} FloatingProperties
   * @property {boolean} open - Indicates whether the floating component is open or not.
   * @property {string} placement - The placement of the floating component.
   * @property {React.RefObject} arrowRef - The ref object for the arrow element.
   * @property {function} setOpen - A function to set the open state of the floating component.
   */
  const floatingProperties = useBaseFLoating({
    open,
    placement,
    arrowRef,
    setOpen,
  })

  const {
    context,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
    refs,
    strategy,
    update,
    x,
    y,
  } = floatingProperties

  const focus = useFocus(context)
  const { getFloatingProps, getReferenceProps } = useFloatingInteractions({
    context,
    role: 'tooltip',
    trigger,
    interactions: [focus],
  })

  useEffect(() => {
    if (refs.reference.current && refs.floating.current && open) {
      return autoUpdate(refs.reference.current, refs.floating.current, update)
    }
  }, [open, refs.floating, refs.reference, update])

  useEffect(() => {
    if (closeRequestKey !== undefined) setOpen(false)
  }, [closeRequestKey])

  return (
    <>
      <div ref={refs.setReference} className={theme.target} data-testid="keep-tooltip-target" {...getReferenceProps()}>
        {children}
      </div>
      <div
        ref={refs.setFloating}
        data-testid="keep-tooltip"
        {...getFloatingProps({
          className: cn(
            theme.base,
            animation && `${theme.animation} ${animation}`,
            !open && theme.hidden,
            theme.style[style],
            className,
          ),
          style: {
            position: strategy,
            top: y ?? ' ',
            left: x ?? ' ',
            minWidth,
          },
          ...props,
        })}>
        <div className={theme.content}>{content}</div>
        {arrow && (
          <div
            className={cn(
              theme.arrow.base,
              style === 'dark' && theme.arrow.style.dark,
              style === 'light' && theme.arrow.style.light,
              style === 'auto' && theme.arrow.style.auto,
            )}
            data-testid="keep-tooltip-arrow"
            ref={arrowRef}
            style={{
              top: arrowY ?? ' ',
              left: arrowX ?? ' ',
              right: ' ',
              bottom: ' ',
              [getArrowPlacement({ placement: floatingProperties.placement })]: theme.arrow.placement,
            }}>
            &nbsp;
          </div>
        )}
      </div>
    </>
  )
}
