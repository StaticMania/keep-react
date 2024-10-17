'use client'
import { ComponentPropsWithoutRef, HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

const DropdownShortcut = ({ className, ...props }: HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn('ml-auto text-body-5 opacity-60', className)} {...props} />
}
DropdownShortcut.displayName = 'DropdownShortcut'

export { DropdownShortcut }

export type DropdownShortcutProps = ComponentPropsWithoutRef<typeof DropdownShortcut>
