'use client'
import { HTMLProps, forwardRef, useId, useLayoutEffect } from 'react'
import { cn } from '../../utils/cn'
import { usePopoverContext } from './Context'

export const PopoverHeading = forwardRef<HTMLHeadingElement, HTMLProps<HTMLHeadingElement>>(function PopoverHeading(
  { children, className, ...props },
  ref,
) {
  const { setLabelId } = usePopoverContext()
  const id = useId()
  useLayoutEffect(() => {
    setLabelId(id)
    return () => setLabelId(undefined)
  }, [id, setLabelId])

  return (
    <h2
      {...props}
      ref={ref}
      id={id}
      className={cn('text-body-3 font-medium text-metal-900 dark:text-white', className)}>
      {children}
    </h2>
  )
})
