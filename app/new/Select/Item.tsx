'use client'

import { FC, ReactNode } from 'react'
import { cn } from '~/app/src/helpers/cn'
import { useSelectContext } from './Context'

export interface SelectItemProps {
  value: string
  className?: string
  children?: ReactNode
}

export const Item: FC<SelectItemProps> = ({ className, children, value }) => {
  const { handleSelect } = useSelectContext()
  return (
    <button
      onClick={() => handleSelect && handleSelect(value, children)}
      className={cn(
        'flex w-full justify-between border-b border-b-metal-50 px-3 py-2.5 text-left text-body-4 font-normal text-metal-600 transition-all duration-300 hover:bg-metal-900 hover:text-white',
        className,
      )}>
      {children}
    </button>
  )
}
