'use client'
import { DialogProps, Root } from '@radix-ui/react-dialog'
import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import { DrawerContext } from './Context'

export interface IDrawerProps extends DialogProps {
  showCloseIcon?: boolean
  children: ReactNode
}

const Drawer: FC<IDrawerProps> = ({ children, showCloseIcon = true, ...props }) => {
  return (
    <Root {...props}>
      <DrawerContext.Provider value={{ showCloseIcon }}>{children}</DrawerContext.Provider>
    </Root>
  )
}

export { Drawer }

export type DrawerProps = ComponentPropsWithoutRef<typeof Drawer>
