'use client'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { usePopoverContext } from './Context'

export const PopoverClose = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  function PopoverClose(props, ref) {
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
  },
)
