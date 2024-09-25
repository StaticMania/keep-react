'use client'
import { AnimatePresence, MotionProps, motion } from 'framer-motion'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { useNavbarContext } from './Context'

type NavbarCollapseProps = HTMLAttributes<HTMLDivElement> & MotionProps

const NavbarCollapse = forwardRef<HTMLDivElement, NavbarCollapseProps>(({ children, className, ...props }, ref) => {
  const { open } = useNavbarContext()

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ y: '20px', opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: 'anticipate' }}
          exit={{ opacity: 0, y: '20px' }}
          ref={ref}
          {...props}
          className={cn(
            'absolute right-0 top-full z-50 flex h-auto w-full flex-col items-start gap-2.5 overflow-hidden rounded-xl rounded-t-none border border-metal-100 bg-white p-6 sm:w-[20rem] lg:hidden dark:border-metal-800 dark:bg-metal-900',
            className,
          )}>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
})
NavbarCollapse.displayName = 'NavbarCollapse'

export { NavbarCollapse }
