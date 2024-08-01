'use client'
import { motion, MotionProps } from 'framer-motion'
import { forwardRef, HTMLProps } from 'react'
import { cn } from '../../utils/cn'

export type StepPointProps = HTMLProps<HTMLDivElement> &
  MotionProps & {
    variant?: 'default' | 'border' | 'icon'
    completed?: boolean
  }

const StepPoint = forwardRef<HTMLDivElement, StepPointProps>(
  ({ children, variant = 'default', completed = false, className, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        {...props}
        data-completed={completed}
        animate={{
          transition: { duration: 0.4, ease: 'anticipate' },
        }}
        className={cn(
          variant === 'default' &&
            'flex h-10 max-w-max shrink-0 items-center gap-2 capitalize data-[completed=false]:text-metal-900/50 data-[completed=true]:text-metal-900 dark:data-[completed=false]:text-white/50 dark:data-[completed=true]:text-white',
          variant === 'border' &&
            'flex h-10 max-w-max shrink-0 items-center gap-2 rounded-full border pl-2 pr-4 capitalize data-[completed=true]:bg-metal-900 data-[completed=false]:text-metal-900/50 data-[completed=true]:text-white dark:data-[completed=false]:border-metal-900 dark:data-[completed=true]:bg-white dark:data-[completed=false]:text-white/50 dark:data-[completed=true]:text-metal-900',
          variant === 'icon' &&
            'flex size-10 shrink-0 items-center justify-center rounded-full border text-metal-600 data-[completed=true]:bg-metal-900 data-[completed=false]:text-metal-900/50 data-[completed=true]:text-white dark:data-[completed=false]:border-metal-900 dark:data-[completed=true]:bg-white dark:data-[completed=false]:text-white/50 dark:data-[completed=true]:text-metal-900',
          className,
        )}>
        {children}
      </motion.div>
    )
  },
)

StepPoint.displayName = 'StepPoint'

export { StepPoint }
