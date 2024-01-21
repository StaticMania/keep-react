'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { usePopoverContext } from './PopoverContext'
import { popoverTheme } from './theme'

export interface PopoverDescriptionProps {
  children?: ReactNode
  className?: string
  [key: string]: any
}

export const Description: FC<PopoverDescriptionProps> = ({ children, className, ...props }) => {
  const { isTitleExist } = usePopoverContext()
  const { description } = popoverTheme
  return (
    <p
      className={cn(
        description.base,
        !isTitleExist && description.title.off,
        isTitleExist && description.title.on,
        className,
      )}
      {...props}>
      {children}
    </p>
  )
}
