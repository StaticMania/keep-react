'use client'
import { motion, MotionProps } from 'framer-motion'
import { forwardRef, HTMLProps } from 'react'
import { cn } from '../../utils/cn'

export type DropdownListProps = HTMLProps<HTMLDivElement> &
  MotionProps & {
    asChild?: boolean
  }

export const DropdownList = forwardRef<HTMLDivElement, DropdownListProps>(
  ({ children, className, asChild, ...props }, ref) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: '10px', height: 0 }}
        animate={{
          opacity: 1,
          y: 0,
          height: '100%',
          transition: {
            type: 'spring',
            duration: 0.3,
            delay: 0.1,
            damping: 25,
            stiffness: 500,
          },
        }}
        exit={{ opacity: 0, y: '10px', height: 0 }}
        {...props}
        ref={ref}
        className={cn('overflow-hidden', className)}>
        {children}
      </motion.div>
    )
  },
)

DropdownList.displayName = 'DropdownList'
