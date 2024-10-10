'use client'

import { forwardRef, InputHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

export const NumberInputBox = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        key="input"
        {...props}
        ref={ref}
        type="number"
        className={cn(
          'flex-auto bg-transparent px-3 py-2.5 text-center text-body-3 font-medium text-metal-900 outline-none dark:text-white',
          className,
        )}
      />
    )
  },
)

NumberInputBox.displayName = 'NumberInputBox'
