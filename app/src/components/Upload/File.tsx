'use client'
import { Trash } from 'phosphor-react'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'

export interface FileProps {
  children?: ReactNode
  className?: string
  icon?: ReactNode
  onClick?: () => void
}

export const File: FC<FileProps> = ({ children, className, onClick, icon = <Trash size={16} color="red" /> }) => {
  return (
    <li
      className={cn(
        'flex items-center justify-between border-l-4 border-l-metal-100 bg-metal-25 px-4 py-2.5 text-left text-body-6 font-normal capitalize text-metal-600',
        className,
      )}>
      {children}
      <button onClick={onClick}>{icon}</button>
    </li>
  )
}
