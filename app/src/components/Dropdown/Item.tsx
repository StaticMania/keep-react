'use client'
import { HTMLProps, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

export const Item = forwardRef<HTMLLIElement, HTMLProps<HTMLLIElement>>(function Item(props, ref) {
  return (
    <li
      {...props}
      ref={ref}
      className={cn(
        'flex cursor-pointer items-center gap-2 rounded p-2 text-body-4 font-medium text-metal-600 hover:bg-metal-25',
        props.className,
      )}>
      {props.children}
    </li>
  )
})
