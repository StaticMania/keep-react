'use client'
import { HTMLAttributes, forwardRef, useState } from 'react'
import { cn } from '../../utils/cn'
import { NavbarContext } from './Context'

const Navbar = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(({ children, className, ...props }, ref) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen((prev) => !prev)

  return (
    <header
      ref={ref}
      {...props}
      className={cn(
        'relative border border-metal-100 bg-white py-5 dark:border-metal-800 dark:bg-metal-900',
        className,
      )}>
      <NavbarContext.Provider value={{ open, handleOpen }}>{children}</NavbarContext.Provider>
    </header>
  )
})

Navbar.displayName = 'Navbar'

export { Navbar }
