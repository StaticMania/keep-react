'use client'
import { motion, MotionProps, stagger, useAnimate } from 'framer-motion'
import { cloneElement, forwardRef, HTMLProps, isValidElement, useEffect } from 'react'
import { cn } from '../../utils/cn'

export type DropdownListProps = HTMLProps<HTMLDivElement> &
  MotionProps & {
    asChild?: boolean
  }

export const DropdownList = forwardRef<HTMLDivElement, DropdownListProps>(
  ({ children, className, asChild, ...props }, ref) => {
    const [scope, animate] = useAnimate()

    useEffect(() => {
      animate(
        scope.current.children,
        { x: [-50, 0], opacity: [0, 1] },
        { ease: 'linear', delay: stagger(0.05, { startDelay: 0.01, from: 0 }) },
      )
    })

    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        itemRef: ref,
        ...props,
      })
    }

    return (
      <motion.div {...props} ref={scope} className={cn('overflow-hidden', className)}>
        {children}
      </motion.div>
    )
  },
)

DropdownList.displayName = 'DropdownList'
