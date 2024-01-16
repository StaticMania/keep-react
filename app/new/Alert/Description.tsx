import { FC, ReactNode } from 'react'
import { cn } from '~/app/src/helpers/cn'

export interface DescriptionProps {
  children?: ReactNode
  className?: string
}

export const Description: FC<DescriptionProps> = ({ children, className }) => {
  return <p className={cn('hidden w-[234px] text-body-3 font-normal sm:line-clamp-1', className)}>{children}</p>
}
