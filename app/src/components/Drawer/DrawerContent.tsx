'use client'
import { MotionProps, motion } from 'framer-motion'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { drawerVariants } from './animation'
import { useDrawerContext } from './DrawerContext'
import { keepDrawerTheme } from './theme'

type DrawerContentProps = HTMLAttributes<HTMLDivElement> & MotionProps

const DrawerContent = forwardRef<HTMLDivElement, DrawerContentProps>(({ children, className, ...props }, ref) => {
  const { position = 'bottom' } = useDrawerContext()
  return (
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
  )
})

DrawerContent.displayName = 'DrawerContent'

export { DrawerContent }
