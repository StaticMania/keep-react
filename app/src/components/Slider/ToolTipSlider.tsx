'use client'
import type { SliderProps } from 'rc-slider'
import Slider from 'rc-slider'
import Tooltip from 'rc-tooltip'
import raf from 'rc-util/lib/raf'
import { ReactElement, ReactNode, useEffect, useRef } from 'react'

/**
 * Custom tooltip component for the Slider.
 *
 * @param props - The props for the HandleTooltip component.
 * @returns The rendered HandleTooltip component.
 */

const HandleTooltip = (props: {
  value: number
  children: ReactElement
  visible: boolean
  // eslint-disable-next-line no-unused-vars
  tipFormatter?: (value: number) => ReactNode
}) => {
  const { value, children, visible, tipFormatter = (val) => `${val} %`, ...restProps } = props

  const tooltipRef = useRef<any>()
  /**
   * A reference to the requestAnimationFrame ID used for animation.
   */
  const rafRef = useRef<number | null>(null)

  /**
   * Cancels the alignment of the keep.
   */
  function cancelKeepAlign() {
    raf.cancel(rafRef.current!)
  }

  /**
   * Forces the alignment of the tooltip.
   */
  function keepAlign() {
    rafRef.current = raf(() => {
      tooltipRef?.current?.forceAlign()
    })
  }

  useEffect(() => {
    if (visible) {
      keepAlign()
    } else {
      cancelKeepAlign()
    }

    return cancelKeepAlign
  }, [value, visible])

  return (
    <Tooltip
      placement="top"
      overlay={tipFormatter(value)}
      overlayInnerStyle={{ minHeight: 'auto' }}
      ref={tooltipRef}
      showArrow
      visible={visible}
      {...restProps}>
      {children}
    </Tooltip>
  )
}

/**
 * Custom handleRender function for the Slider.
 * @param node The node to render.
 * @param props The props for the node.
 * @returns The rendered node.
 */
export const handleRender: SliderProps['handleRender'] = (node, props) => {
  return (
    <HandleTooltip value={props.value} visible={props.dragging}>
      {node}
    </HandleTooltip>
  )
}

export const TooltipSlider = ({
  tipFormatter,
  tipProps,
  ...props
}: SliderProps & {
  // eslint-disable-next-line no-unused-vars
  tipFormatter?: (value: number) => ReactNode
  tipProps: any
}) => {
  const tipHandleRender: SliderProps['handleRender'] = (node, handleProps) => {
    return (
      <HandleTooltip value={handleProps.value} visible={handleProps.dragging} tipFormatter={tipFormatter} {...tipProps}>
        {node}
      </HandleTooltip>
    )
  }

  return <Slider {...props} handleRender={tipHandleRender} />
}
