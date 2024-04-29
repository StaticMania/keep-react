'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { useDrawerContext } from './Context'
import { keepDrawerTheme } from './theme'

const DrawerContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
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

DrawerContent.displayName = 'Drawer.Content'

export { DrawerContent }
