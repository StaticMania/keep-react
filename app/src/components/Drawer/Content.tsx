'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { useDrawerContext } from './Context'
import { keepDrawerTheme } from './theme'

const Content = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    const { position = 'bottom' } = useDrawerContext()
    return (
      <div
        {...props}
        ref={ref}
        className={cn(keepDrawerTheme.content.base, keepDrawerTheme.content.position[position], className)}>
        {children}
      </div>
    )
  },
)

Content.displayName = 'Drawer.Content'

export { Content }
