'use client'
import { LiHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { useNavbarContext } from './Context'

const NavbarCollapse = forwardRef<HTMLOListElement, LiHTMLAttributes<HTMLUListElement>>(
  ({ children, className, ...props }, ref) => {
    const { open } = useNavbarContext()
    return (
      <ul
        ref={ref}
        {...props}
        className={cn(
          'absolute right-0 top-full z-50 flex h-auto w-full flex-col items-start gap-2.5 rounded-b-xl border border-metal-100 bg-white p-6 transition-all duration-300 sm:w-[20rem] lg:hidden',
          open ? 'animate-keep-bounce' : 'hidden',
          className,
        )}>
        {children}
      </ul>
    )
  },
)
NavbarCollapse.displayName = 'Navbar.Collapse'

export { NavbarCollapse }
