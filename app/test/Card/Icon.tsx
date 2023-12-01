import { FC, ReactNode } from 'react'
import { cn } from '~/src/helpers/cn'

interface CardIconProps {
  className?: string
  children?: ReactNode
}

export const Icon: FC<CardIconProps> = ({ className, children }) => {
  return (
    <div className={cn('mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-metal-50 sm:mb-0', className)}>
      {children}
    </div>
  )
}
