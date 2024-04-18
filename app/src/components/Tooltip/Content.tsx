'use client'
import { FloatingArrow } from '@floating-ui/react'
import { HTMLAttributes, ReactNode, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { useTooltipContext } from './Context'

interface floatingArrow extends HTMLAttributes<HTMLDivElement> {
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
}

export const Content = forwardRef<HTMLDivElement, floatingArrow>(
  (
    { children, className, width, height, tipRadius, staticOffset, fill = '#1C222B', stroke, strokeWidth, d, ...props },
    ref: Ref<HTMLDivElement>,
  ) => {
    const { refs, floatingStyles, arrowRef, context, getFloatingProps, isOpen } = useTooltipContext()
    return (
      isOpen && (
        <div
          {...props}
          className={cn('max-w-[263px] rounded-xl border border-metal-900 bg-metal-900 px-2.5 py-2', className)}
          ref={refs.setFloating || ref}
          {...getFloatingProps()}
          style={floatingStyles}>
          <FloatingArrow
            ref={arrowRef}
            context={context}
            width={width}
            height={height}
            tipRadius={tipRadius}
            staticOffset={staticOffset}
            d={d}
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
          {children}
        </div>
      )
    )
  },
)

Content.displayName = 'Tooltip.Content'
