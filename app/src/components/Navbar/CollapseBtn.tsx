'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { useNavbarContext } from './Context'

const NavbarCollapseBtn = forwardRef<HTMLButtonElement, HTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => {
    const { open, handleOpen } = useNavbarContext()
    return (
      <button onClick={handleOpen} ref={ref} {...props} className={cn('block lg:hidden', className)}>
        {children ??
          (open ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#AFBACA" viewBox="0 0 256 256">
              <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#AFBACA" viewBox="0 0 256 256">
              <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
            </svg>
          ))}
      </button>
    )
  },
)

NavbarCollapseBtn.displayName = 'Navbar.CollapseBtn'

export { NavbarCollapseBtn }
