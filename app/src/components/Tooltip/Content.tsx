'use client'
import { FloatingArrow } from '@floating-ui/react'
import { HTMLAttributes, ReactNode, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { useTooltipContext } from './Context'

export interface floatingArrow extends HTMLAttributes<HTMLDivElement> {
  width?: number
  height?: number
  tipRadius?: number
  staticOffset?: number | string | null
  d?: string
  fill?: string
  stroke?: string
  strokeWidth?: number
  children?: ReactNode
  className?: string
  arrowClassName?: string
}

export const TooltipContent = forwardRef<HTMLDivElement, floatingArrow>(
  (
    {
      children,
      className,
      width,
      height,
      tipRadius,
      staticOffset,
      fill = '#1C222B',
      stroke,
      strokeWidth,
      d,
      arrowClassName,
      ...props
    },
    ref: Ref<HTMLDivElement>,
  ) => {
    const { refs, floatingStyles, arrowRef, context, getFloatingProps, isOpen, showArrow } = useTooltipContext()
    return (
      isOpen && (
        <div
          {...props}
          className={cn(
            'max-w-[263px] rounded-xl border border-metal-900 bg-metal-900 px-2.5 py-2 dark:border-white dark:bg-white',
            className,
          )}
          ref={refs.setFloating || ref}
          {...getFloatingProps()}
          style={floatingStyles}>
          {showArrow && (
            <FloatingArrow
              ref={arrowRef}
              context={context}
              width={width}
              height={height}
              tipRadius={tipRadius}
              staticOffset={staticOffset}
              d={d}
              stroke={stroke}
              strokeWidth={strokeWidth}
              className={cn('fill-metal-900 dark:fill-white', arrowClassName)}
            />
          )}
          {children}
        </div>
      )
    )
  },
)

TooltipContent.displayName = 'Tooltip.Content'
