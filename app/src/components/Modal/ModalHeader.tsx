'use client'
import { HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

const ModalHeader = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col gap-1', className)} {...props} />
)
ModalHeader.displayName = 'ModalHeader'

export { ModalHeader }
