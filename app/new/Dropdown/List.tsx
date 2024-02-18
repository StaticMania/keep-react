'use client'
import { HTMLProps, forwardRef } from 'react'
import { cn } from '~/app/src/helpers/cn'

export const List = forwardRef<HTMLUListElement, HTMLProps<HTMLUListElement>>(function List(props, ref) {
  return (
    <ul {...props} ref={ref} className={cn(props.className)}>
      {props.children}
    </ul>
  )
})
