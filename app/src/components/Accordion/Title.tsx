import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { accordionTheme } from './theme'

export interface TitleProps {
  children?: ReactNode
  className?: string
  [key: string]: any
}
export interface keepAccordionTitleTheme {
  base: string
}

export const Title: FC<TitleProps> = ({ children, className }) => {
  const { title } = accordionTheme
  return <span className={cn(title.base, className)}>{children}</span>
}
