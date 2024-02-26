'use client'
import { FC, ReactNode } from 'react'
import { cn } from '~/app/src/helpers/cn'
import { NumberButton } from './Button'
import { NumberInputEl } from './Input'

interface NumberInputProps {
  children?: ReactNode
  className?: string
}

const NumberInputComponent: FC<NumberInputProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'relative flex h-11 max-w-xs items-center justify-between overflow-hidden rounded-md border border-metal-100 bg-white px-2 shadow-sm',
        className,
      )}>
      {children}
    </div>
  )
}
export const NumberInput = Object.assign(NumberInputComponent, {
  Input: NumberInputEl,
  Button: NumberButton,
})
