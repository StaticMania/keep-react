'use client'
import { FC, ReactNode } from 'react'
import { cn } from '~/src/helpers/cn'
import { usePopoverContext } from './PopoverContext'
import { useTheme } from '~/src/Keep/ThemeContext'

export interface PopoverDescriptionProps {
  children?: ReactNode
  className?: string
  [key: string]: any
}

export const Description: FC<PopoverDescriptionProps> = ({ children, className, ...props }) => {
  const { isTitleExist } = usePopoverContext()
  const { description } = useTheme().theme.popover
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
