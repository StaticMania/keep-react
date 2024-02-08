'use client'
import { FC, ReactNode } from 'react'

export interface GroupProps {
  children?: ReactNode
}

export const Group: FC<GroupProps> = ({ children }) => {
  return <div className="flex items-center -space-x-3">{children}</div>
}
