'use client'
import { HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

const DrawerHeader = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col space-y-2 text-center sm:text-left', className)} {...props} />
)
DrawerHeader.displayName = 'DrawerHeader'

export { DrawerHeader }
