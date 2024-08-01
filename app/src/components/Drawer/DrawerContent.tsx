'use client'
import { AnimatePresence, MotionProps, motion } from 'framer-motion'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { drawerVariants } from './animation'
import { useDrawerContext } from './DrawerContext'
import { DrawerPortal } from './DrawerPortal'
import { keepDrawerTheme } from './theme'

type DrawerContentProps = HTMLAttributes<HTMLDivElement> & MotionProps

const DrawerContent = forwardRef<HTMLDivElement, DrawerContentProps>(({ children, className, ...props }, ref) => {
  const { position = 'bottom', isOpen } = useDrawerContext()
  return (
    <AnimatePresence>
      {isOpen && (
        <DrawerPortal>
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={drawerVariants[position]}
            {...props}
            ref={ref}
            className={cn(keepDrawerTheme.content.base, keepDrawerTheme.content.position[position], className)}>
            {children}
          </motion.div>
        </DrawerPortal>
      )}
    </AnimatePresence>
  )
})

DrawerContent.displayName = 'DrawerContent'

export { DrawerContent }
