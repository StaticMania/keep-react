'use client'
import { HTMLProps, forwardRef, useId, useLayoutEffect } from 'react'
import { cn } from '../../utils/cn'
import { usePopoverContext } from './Context'

export const PopoverDescription = forwardRef<HTMLParagraphElement, HTMLProps<HTMLParagraphElement>>(
  ({ children, className, ...props }, ref) => {
    const { setDescriptionId } = usePopoverContext()
    const id = useId()
    useLayoutEffect(() => {
      setDescriptionId(id)
      return () => setDescriptionId(undefined)
    }, [id, setDescriptionId])

    return (
      <p
        {...props}
        ref={ref}
        id={id}
        className={cn('text-body-4 font-normal text-metal-600 dark:text-metal-300', className)}>
        {children}
      </p>
    )
  },
)

PopoverDescription.displayName = 'PopoverDescription'
