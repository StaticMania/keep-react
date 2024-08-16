'use client'
import { motion } from 'framer-motion'
import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { radioTheme } from './theme'

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'circle' | 'rounded' | 'square'
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, type = 'radio', variant = 'rounded', ...props }, ref) => {
    return (
      <>
        <input ref={ref} {...props} type={type} className={cn(radioTheme.input)} />
        <motion.button
          className={cn(
            'pointer-events-none relative flex h-5 w-5 cursor-pointer items-center justify-center border border-metal-200 opacity-100 transition-all duration-300 peer-checked:border-primary-500 peer-checked:before:h-2.5 peer-checked:before:w-2.5 peer-checked:before:animate-zoomIn peer-checked:before:bg-primary-500 peer-disabled:opacity-50 dark:border-metal-100 dark:peer-checked:border-primary-500 dark:peer-checked:before:bg-primary-500',
            radioTheme.button.variant[variant],
            className,
          )}></motion.button>
      </>
    )
  },
)

Radio.displayName = 'Radio'
