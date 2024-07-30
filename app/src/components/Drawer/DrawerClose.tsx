'use client'
import { HTMLAttributes, cloneElement, forwardRef, isValidElement } from 'react'
import { cn } from '../../utils/cn'
import { useDrawerContext } from './DrawerContext'

export interface DrawerCloseProps extends HTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

export const DrawerClose = forwardRef<HTMLButtonElement, DrawerCloseProps>(
  ({ children, asChild, className, ...props }, ref) => {
    const { handleOpen } = useDrawerContext()

    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        onClick: handleOpen,
        itemRef: ref,
        ...props,
      })
    }

    return (
      <button onClick={handleOpen} className={cn(className)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 fill-metal-600 dark:fill-white" viewBox="0 0 256 256">
          <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
        </svg>
      </button>
    )
  },
)

DrawerClose.displayName = 'DrawerClose'
