'use client'
import { HTMLProps, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { dropdownTheme } from './theme'

export const Item = forwardRef<HTMLLIElement, HTMLProps<HTMLLIElement>>(function Item(props, ref) {
  return (
    <li {...props} ref={ref} className={cn(dropdownTheme.item, props.className)}>
      {props.children}
    </li>
  )
})
