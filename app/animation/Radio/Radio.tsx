'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '~/app/src/helpers/cn'
import { radioTheme } from './theme'
export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'circle' | 'rounded' | 'square'
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, type = 'radio', variant = 'rounded', ...props }, ref) => {
    return (
      <AnimatePresence>
        <input ref={ref} {...props} type={type} className={cn(radioTheme.input)} />
        <motion.button
          initial={{ opacity: 0, height: '0px', width: '0px' }}
          animate={{ opacity: 1, height: '20px', width: '20px', transition: { duration: 0.2 } }}
          exit={{ opacity: 0, height: '0px', width: '0px' }}
          className={cn(radioTheme.button.base, radioTheme.button.variant[variant], className)}></motion.button>
      </AnimatePresence>
    )
  },
)

Radio.displayName = 'Radio'
