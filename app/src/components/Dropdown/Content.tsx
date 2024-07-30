'use client'
import { FloatingArrow, FloatingFocusManager } from '@floating-ui/react'
import { AnimatePresence, MotionProps, motion } from 'framer-motion'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { useDropdownContext } from './Context'
import { dropdownTheme } from './theme'

export type DropdownContentProps = HTMLAttributes<HTMLDivElement> & MotionProps

const DropdownContent = forwardRef<HTMLDivElement, DropdownContentProps>(({ className, children, ...props }, ref) => {
  const { context, arrowRef, refs, floatingStyles, getFloatingProps, showArrow, isOpen } = useDropdownContext()
  return (
    <AnimatePresence>
      {isOpen && (
        <FloatingFocusManager context={context}>
          <div {...props} ref={refs.setFloating || ref} style={floatingStyles} {...getFloatingProps()}>
            {showArrow && (
              <FloatingArrow width={20} height={10} tipRadius={2} fill="#fff" ref={arrowRef} context={context} />
            )}
            <motion.div
              key="dropdown"
              className={cn(dropdownTheme.content, className)}
              initial={{ opacity: 0, y: '20px' }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.3,
                },
              }}
              exit={{ opacity: 0, y: '20px' }}>
              {children}
            </motion.div>
          </div>
        </FloatingFocusManager>
      )}
    </AnimatePresence>
  )
})

DropdownContent.displayName = 'DropdownContent'

export { DropdownContent }
