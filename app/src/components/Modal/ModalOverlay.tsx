'use client'
import { motion, MotionProps } from 'framer-motion'
import { forwardRef, HTMLAttributes, Ref } from 'react'
import { cn } from '../../helpers/cn'

type ModalOverlayProps = HTMLAttributes<HTMLDivElement> & MotionProps

const ModalOverlay = forwardRef<HTMLDivElement, ModalOverlayProps>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        {...props}
        className={cn(
          'keep-modal fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-80',
          className,
        )}
        ref={ref}>
        {children}
      </motion.div>
    )
  },
)

ModalOverlay.displayName = 'ModalOverlay'

export { ModalOverlay }
