import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'

export interface MediaProps {
  children?: ReactNode
  className?: string
}

export const Media: FC<MediaProps> = ({ children, className }) => {
  return <div className={cn(className)}>{children}</div>
}
