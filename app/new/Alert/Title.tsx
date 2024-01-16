import { FC, ReactNode } from 'react'
import { cn } from '~/app/src/helpers/cn'

export interface TitleProps {
  children?: ReactNode
  className?: string
}

export const Title: FC<TitleProps> = ({ children, className }) => {
  return <p className={cn('text-body-3 font-semibold', className)}>{children}</p>
}
