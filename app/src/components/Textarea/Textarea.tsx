'use client'
import { TextareaHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-20 w-full rounded-md border border-metal-100 bg-white px-3 py-2 text-body-4 ring-offset-2 placeholder:text-metal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-metal-100 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)

Textarea.displayName = 'Textarea'

export { Textarea }
