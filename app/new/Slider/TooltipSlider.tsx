/* eslint-disable no-unused-vars */
import type { SliderProps } from 'rc-slider'
import Slider from 'rc-slider'
import type { TooltipRef } from 'rc-tooltip'
import Tooltip from 'rc-tooltip'
import raf from 'rc-util/lib/raf'
import { FC, ReactElement, ReactNode, useEffect, useRef } from 'react'

interface HandleTooltipProps {
  value: number
  children: ReactElement
  visible: boolean
  tipFormatter?: (value: number) => ReactNode
}

const HandleTooltip: FC<HandleTooltipProps> = (props) => {
  const { value, children, visible, tipFormatter = (val) => `${val} %`, ...restProps } = props

  const tooltipRef = useRef<TooltipRef>(null)
  const rafRef = useRef<number | null>(null)

  function cancelKeepAlign() {
    raf.cancel(rafRef.current!)
  }

  function keepAlign() {
    rafRef.current = raf(() => {
      tooltipRef.current?.forceAlign()
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
      visible={visible}
      {...restProps}>
      {children}
    </Tooltip>
  )
}

export const handleRender: SliderProps['handleRender'] = (node, props) => (
  <HandleTooltip value={props.value} visible={props.dragging}>
    {node}
  </HandleTooltip>
)

interface TooltipSliderProps extends SliderProps {
  tipFormatter?: (value: number) => ReactNode
  tipProps?: any
}

const TooltipSlider: FC<TooltipSliderProps> = ({ tipFormatter, tipProps, ...props }) => {
  const tipHandleRender: SliderProps['handleRender'] = (node, handleProps) => (
    <HandleTooltip value={handleProps.value} visible={handleProps.dragging} tipFormatter={tipFormatter} {...tipProps}>
      {node}
    </HandleTooltip>
  )

  return <Slider {...props} handleRender={tipHandleRender} />
}

export default TooltipSlider
