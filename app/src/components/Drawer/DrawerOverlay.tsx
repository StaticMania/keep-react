'use client'
import { MotionProps, motion } from 'framer-motion'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../utils/cn'

type DrawerOverlayProps = HTMLAttributes<HTMLDivElement> & MotionProps

const DrawerOverlay = forwardRef<HTMLDivElement, DrawerOverlayProps>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        {...props}
        ref={ref}
        className={cn('fixed inset-0 z-50 bg-metal-900/90 bg-opacity-80', className)}>
        {children}
      </motion.div>
    )
  },
)

DrawerOverlay.displayName = 'DrawerOverlay'

export { DrawerOverlay }
