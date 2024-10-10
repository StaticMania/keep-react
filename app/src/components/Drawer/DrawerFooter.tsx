'use client'
import { HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

const DrawerFooter = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)} {...props} />
)
DrawerFooter.displayName = 'DrawerFooter'

export { DrawerFooter }
