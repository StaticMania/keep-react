'use client'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { usePopoverContext } from './Context'

export const PopoverClose = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>((props, ref) => {
  const { setOpen } = usePopoverContext()
  return (
    <button
      type="button"
      ref={ref}
      {...props}
      onClick={(event) => {
        props.onClick?.(event)
        setOpen(false)
      }}
    />
  )
})

PopoverClose.displayName = 'PopoverClose'
