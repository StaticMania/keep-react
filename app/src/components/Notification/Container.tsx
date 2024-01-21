import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'

export interface ContainerProps {
  children?: ReactNode
  className?: string
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return <div className={cn(className)}>{children}</div>
}
