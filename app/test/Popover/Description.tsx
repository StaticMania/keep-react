'use client'
import { FC, ReactNode } from 'react'
import { cn } from '~/src/helpers/cn'
import { usePopoverContext } from './PopoverContext'

export interface PopoverDescriptionProps {
  children?: ReactNode
  className?: string
  [key: string]: any
}

export const Description: FC<PopoverDescriptionProps> = ({ children, className, ...props }) => {
  const { isTitleExist } = usePopoverContext()
  return (
    <p
      className={cn(
        `text-body-5 font-normal text-metal-500`,
        !isTitleExist && 'w-[92%]',
        isTitleExist && 'mt-[14px]',
        className,
      )}
      {...props}>
      {children}
    </p>
  )
}
