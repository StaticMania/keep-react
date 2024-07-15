'use client'
import { MotionProps, Variants, motion } from 'framer-motion'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { useDrawerContext } from './DrawerContext'
import { keepDrawerTheme } from './theme'

type DrawerContentProps = HTMLAttributes<HTMLDivElement> & MotionProps

const duration = {
  duration: 0.5,
  ease: 'anticipate',
}

interface VariantsProps {
  left: Variants
  right: Variants
  top: Variants
  bottom: Variants
}

const variants: VariantsProps = {
  left: {
    initial: { x: '-100%', opacity: 0.5 },
    animate: { opacity: 1, height: '100%', x: 0, transition: duration },
    exit: { opacity: 1, x: '-100%' },
  },
  right: {
    initial: { x: '100%', opacity: 0.5 },
    animate: { opacity: 1, height: '100%', x: 0, transition: duration },
    exit: { opacity: 1, x: '100%' },
  },
  top: {
    initial: { y: '-100%', opacity: 0.5 },
    animate: { opacity: 1, height: 'auto', y: 0, transition: duration },
    exit: { opacity: 1, y: '-100%' },
  },
  bottom: {
    initial: { y: '100%', opacity: 0.5 },
    animate: { opacity: 1, overflow: 'hidden', y: 0, transition: duration },
    exit: { opacity: 1, y: '100%' },
  },
}

const DrawerContent = forwardRef<HTMLDivElement, DrawerContentProps>(({ children, className, ...props }, ref) => {
  const { position = 'bottom' } = useDrawerContext()
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants[position]}
      {...props}
      ref={ref}
      className={cn(keepDrawerTheme.content.base, keepDrawerTheme.content.position[position], className)}>
      {children}
    </motion.div>
  )
})

DrawerContent.displayName = 'DrawerContent'

export { DrawerContent }
