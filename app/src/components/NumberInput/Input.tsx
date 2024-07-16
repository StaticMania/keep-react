'use client'
import { motion, MotionProps } from 'framer-motion'
import { forwardRef, InputHTMLAttributes } from 'react'
import { cn } from '../../helpers/cn'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & MotionProps

export const NumberInputBox = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  const variants = {
    initial: { opacity: 0, y: '10px' },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: '-10px' },
  }
  return (
    <motion.input
      key={Math.random()}
      {...props}
      ref={ref}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      type="number"
      className={cn(
        'flex-auto bg-transparent px-3 py-2.5 text-center text-body-3 font-medium text-metal-900  outline-none',
        className,
      )}
    />
  )
})

NumberInputBox.displayName = 'NumberInputBox'
