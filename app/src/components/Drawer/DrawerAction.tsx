'use client'
import { HTMLAttributes, forwardRef, isValidElement } from 'react'
import { KeepSlot } from '../Helpers/KeepSlot'
import { useDrawerContext } from './DrawerContext'

export interface DrawerActionProps extends HTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

const DrawerAction = forwardRef<HTMLButtonElement, DrawerActionProps>(({ children, asChild, ...props }, ref) => {
  const { handleOpen } = useDrawerContext()

  const Slot = asChild && isValidElement(children) ? KeepSlot : 'button'

  return (
    <Slot ref={ref} onClick={handleOpen} {...props}>
      {children}
    </Slot>
  )
})

DrawerAction.displayName = 'DrawerAction'

export { DrawerAction }
