'use client'
import { FloatingArrow } from '@floating-ui/react'
import { AnimatePresence, motion, MotionProps } from 'framer-motion'
import { forwardRef, HTMLAttributes, ReactNode, Ref } from 'react'
import { cn } from '../../utils/cn'
import { useTooltipContext } from './Context'
import { TooltipIVariants, TooltipVariants } from './animation'

type CombinedProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> &
  MotionProps & {
    children?: ReactNode
  }

export interface floatingArrow extends CombinedProps {
  width?: number
  height?: number
  tipRadius?: number
  staticOffset?: number | string | null
  d?: string
  fill?: string
  stroke?: string
  strokeWidth?: number
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
    const { refs, floatingStyles, arrowRef, context, getFloatingProps, isOpen, showArrow, placement } =
      useTooltipContext()

    const getPlacement = placement.split('-')[0] as keyof TooltipIVariants
    return (
      <AnimatePresence>
        {isOpen && (
          <div key="tooltip" ref={refs.setFloating || ref} {...getFloatingProps()} style={floatingStyles}>
            <motion.div
              {...props}
              className={cn(
                'max-w-[263px] rounded-xl border border-primary-500 bg-primary-500 px-2.5 py-2 dark:border-primary-500 dark:bg-primary-500',
                className,
              )}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={TooltipVariants[getPlacement]}>
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
                  className={cn('fill-primary-500 dark:fill-primary-500', arrowClassName)}
                />
              )}
              {children}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    )
  },
)

TooltipContent.displayName = 'TooltipContent'
