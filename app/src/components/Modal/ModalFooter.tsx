'use client'
import { HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

const ModalFooter = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex items-center gap-3', className)} {...props} />
)

ModalFooter.displayName = 'ModalFooter'

export { ModalFooter }
