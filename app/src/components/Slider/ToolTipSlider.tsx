/* eslint-disable no-unused-vars */
'use client'
import type { SliderProps } from 'rc-slider'
import Slider from 'rc-slider'
import Tooltip from 'rc-tooltip'
import raf from 'rc-util/lib/raf'
import { ReactElement, ReactNode, useEffect, useRef } from 'react'

const HandleTooltip = (props: {
  value: number
  children: ReactElement
  visible: boolean
  tipFormatter?: (value: number) => ReactNode
}) => {
  const { value, children, visible, tipFormatter = (val) => `${val} %`, ...restProps } = props

  const tooltipRef = useRef<any>()
  const rafRef = useRef<number | null>(null)

  function cancelKeepAlign() {
    raf.cancel(rafRef.current!)
  }

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
