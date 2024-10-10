'use client'
import { Close, Portal, Trigger } from '@radix-ui/react-dialog'
import { Drawer } from './Drawer'
import { DrawerContent } from './DrawerContent'
import { DrawerDescription } from './DrawerDescription'
import { DrawerFooter } from './DrawerFooter'
import { DrawerHeader } from './DrawerHeader'
import { DrawerOverlay } from './DrawerOverlay'
import { DrawerTitle } from './DrawerTitle'

const DrawerAction = Trigger
const DrawerClose = Close
const DrawerPortal = Portal

export {
  Drawer,
  DrawerAction,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
}
