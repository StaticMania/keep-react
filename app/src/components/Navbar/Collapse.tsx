'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { useNavbarContext } from './Context'

const NavbarCollapse = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => {
    const { open } = useNavbarContext()

    if (!open) {
      return null
    }

    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          'absolute right-0 top-full z-50 flex h-auto w-full flex-col items-start gap-2.5 overflow-hidden rounded-xl rounded-t-none border border-metal-100 bg-white p-6 sm:w-[20rem] lg:hidden dark:border-metal-800 dark:bg-metal-900',
          className,
        )}>
        {children}
      </div>
    )
  },
)
NavbarCollapse.displayName = 'NavbarCollapse'

export { NavbarCollapse }
