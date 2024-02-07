'use client'
import { Trash } from 'phosphor-react'
import { FC, ReactNode } from 'react'
import { cn } from '~/app/src/helpers/cn'

export interface FileProps {
  children?: ReactNode
  className?: string
  icon?: ReactNode
  onClick?: () => void
}

export const File: FC<FileProps> = ({ children, className, onClick, icon }) => {
  return (
    <li
      className={cn(
        className,
        'flex items-center justify-between border-l-4 border-l-metal-100 bg-metal-25 px-4 py-2.5 text-left text-body-6 font-normal capitalize text-metal-600',
      )}>
      {children}
      <button onClick={onClick}>{icon ? icon : <Trash size={16} color="red" />}</button>
    </li>
  )
}
