'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { useDrawerContext } from './DrawerContext'
import { keepDrawerTheme } from './theme'

const DrawerContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => {
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

DrawerContent.displayName = 'DrawerContent'

export { DrawerContent }
