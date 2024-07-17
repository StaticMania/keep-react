'use client'
import { FloatingArrow, FloatingFocusManager, FloatingPortal, useMergeRefs } from '@floating-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { forwardRef, HTMLProps } from 'react'
import { cn } from '../../helpers/cn'
import { usePopoverContext } from './Context'
import { PopoverIVariants, popoverVariants } from './animation'

export const PopoverContent = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  ({ style, className, children, ...props }, propRef) => {
    const { context: floatingContext, showArrow, placement = 'bottom', ...context } = usePopoverContext()
    const ref = useMergeRefs([context.refs.setFloating, propRef])
    const getPlacement = placement.split('-')[0] as keyof PopoverIVariants

    return (
      <FloatingPortal>
        <AnimatePresence>
          {floatingContext.open && (
            <FloatingFocusManager context={floatingContext} modal={context.modal}>
              <div
                className="z-20"
                ref={ref}
                style={{ ...context.floatingStyles, ...style }}
                aria-labelledby={context.labelId}
                aria-describedby={context.descriptionId}
                {...context.getFloatingProps(props)}>
                <motion.div
                  key="popover"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={popoverVariants[getPlacement]}
                  className={cn('max-w-sm rounded-xl bg-white dark:bg-metal-900', className)}>
                  {children}
                  {showArrow && (
                    <FloatingArrow
                      className="fill-white dark:fill-metal-900"
                      width={20}
                      height={10}
                      tipRadius={2}
                      ref={context.arrowRef}
                      context={floatingContext}
                    />
                  )}
                </motion.div>
              </div>
            </FloatingFocusManager>
          )}
        </AnimatePresence>
      </FloatingPortal>
    )
  },
)

PopoverContent.displayName = 'PopoverContent'
