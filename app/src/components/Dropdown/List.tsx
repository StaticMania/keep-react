'use client'
import { motion, MotionProps, stagger, useAnimate } from 'framer-motion'
import { cloneElement, forwardRef, HTMLProps, isValidElement, useEffect } from 'react'
import { cn } from '../../helpers/cn'

export type DropdownListProps = HTMLProps<HTMLUListElement> &
  MotionProps & {
    asChild?: boolean
  }

export const DropdownList = forwardRef<HTMLUListElement, DropdownListProps>(
  ({ children, className, asChild, ...props }, ref) => {
    const [scope, animate] = useAnimate()

    useEffect(() => {
      animate(
        'li',
        { x: [-50, 0], opacity: [0, 1] },
        { ease: 'linear', delay: stagger(0.1, { startDelay: 0.1, from: 0 }) },
      )
    })

    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        itemRef: ref,
        ...props,
      })
    }

    return (
      <motion.ul {...props} ref={scope} className={cn('overflow-hidden', className)}>
        {children}
      </motion.ul>
    )
  },
)

DropdownList.displayName = 'DropdownList'
