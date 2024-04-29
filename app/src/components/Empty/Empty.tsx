'use client'
import { HTMLProps, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { EmptyDescription } from './Description'
import { EmptyImage } from './Image'
import { EmptyTitle } from './Title'
import { emptyTheme } from './theme'

const EmptyComponent = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(({ children, ...props }, ref) => {
  const { root } = emptyTheme
  return (
    <div {...props} ref={ref} className={cn(root.base, props.className)}>
      {children}
    </div>
  )
})

EmptyComponent.displayName = 'Empty'

export const Empty = Object.assign(EmptyComponent, {
  Title: EmptyTitle,
  Description: EmptyDescription,
  Image: EmptyImage,
})
