import { FC, ReactNode } from 'react'
import { accordionTheme } from './theme'
import { cn } from '../../helpers/cn'

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
  return <h3 className={cn(title.base, className)}>{children}</h3>
}
