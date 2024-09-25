'use client'
import { FloatingArrow, FloatingFocusManager } from '@floating-ui/react'
import { AnimatePresence, MotionProps, motion } from 'framer-motion'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { useDropdownContext } from './Context'
import { dropdownTheme } from './theme'

export type DropdownContentProps = HTMLAttributes<HTMLDivElement> & MotionProps

const DropdownContent = forwardRef<HTMLDivElement, DropdownContentProps>(({ className, children, ...props }, ref) => {
  const { context: floatingContext, showArrow, placement = 'bottom', ...restContext } = useDropdownContext()
  return (
    <AnimatePresence>
      {floatingContext.open && (
        <FloatingFocusManager context={floatingContext}>
          <div
            {...props}
            ref={restContext.refs.setFloating || ref}
            style={restContext.floatingStyles}
            {...restContext.getFloatingProps()}>
            <motion.div
              key="dropdown"
              className={cn(dropdownTheme.content, className)}
              initial={{ opacity: 0, y: '20px' }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.3,
                  delay: 0.1,
                  type: 'spring',
                  damping: 25,
                  stiffness: 500,
                },
              }}
              exit={{ opacity: 0, y: '20px' }}>
              {children}
              {showArrow && (
                <FloatingArrow
                  className="fill-white dark:fill-metal-900"
                  width={20}
                  height={10}
                  tipRadius={2}
                  ref={restContext.arrowRef}
                  context={floatingContext}
                />
              )}
            </motion.div>
          </div>
        </FloatingFocusManager>
      )}
    </AnimatePresence>
  )
})

DropdownContent.displayName = 'DropdownContent'

export { DropdownContent }
