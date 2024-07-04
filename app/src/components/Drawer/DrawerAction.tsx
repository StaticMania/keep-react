'use client'
import { HTMLAttributes, cloneElement, forwardRef, isValidElement } from 'react'
import { Button } from '../Button'
import { useDrawerContext } from './DrawerContext'

export interface DrawerActionProps extends HTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

const DrawerAction = forwardRef<HTMLButtonElement, DrawerActionProps>(({ children, asChild, ...props }, ref) => {
  const { handleOpen } = useDrawerContext()

  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      onClick: handleOpen,
      itemRef: ref,
      ...props,
    })
  }

  return (
    <Button ref={ref} size="sm" color="secondary" onClick={handleOpen}>
      Drawer Action
    </Button>
  )
})

DrawerAction.displayName = 'DrawerAction'

export { DrawerAction }
