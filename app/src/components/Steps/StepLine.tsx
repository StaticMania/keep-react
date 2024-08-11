'use client'
import { motion, MotionProps } from 'framer-motion'
import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

export type StepLineProps = HTMLAttributes<HTMLDivElement> &
  MotionProps & {
    completed?: boolean
    stepLineBg?: string
  }

const StepLine = forwardRef<HTMLDivElement, StepLineProps>(({ className, completed, stepLineBg, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      {...props}
      className={cn('relative h-0.5 w-full rounded-full bg-metal-50 dark:bg-metal-800', stepLineBg)}>
      <motion.div
        initial={{ width: '0%' }}
        animate={{ width: completed ? '100%' : '0%' }}
        transition={{ duration: 0.3, type: 'tween' }}
        className={cn('absolute bottom-0 left-0 top-0 rounded-full bg-metal-900 dark:bg-white', className)}
      />
    </motion.div>
  )
})

StepLine.displayName = 'StepLine'

export { StepLine }
