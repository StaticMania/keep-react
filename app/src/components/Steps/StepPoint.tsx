'use client'
import { motion, MotionProps } from 'framer-motion'
import { forwardRef, HTMLProps } from 'react'
import { cn } from '../../utils/cn'
import { stepPointTheme } from './theme'

export type StepPointProps = HTMLProps<HTMLDivElement> &
  MotionProps & {
    variant?: 'default' | 'border' | 'icon'
    completed?: boolean
  }

const StepPoint = forwardRef<HTMLDivElement, StepPointProps>(
  ({ children, variant = 'default', completed = false, className, ...props }, ref) => {
    const theme = stepPointTheme
    return (
      <motion.div
        ref={ref}
        {...props}
        data-completed={completed}
        animate={{
          transition: { duration: 0.4, ease: 'anticipate' },
        }}
        className={cn(
          variant === 'default' && theme.default,
          variant === 'border' && theme.border,
          variant === 'icon' && theme.icon,
          className,
        )}>
        {children}
      </motion.div>
    )
  },
)

StepPoint.displayName = 'StepPoint'

export { StepPoint }
