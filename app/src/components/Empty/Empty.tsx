'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { Description } from './Description'
import { Image } from './Image'
import { Title } from './Title'
import { emptyTheme } from './theme'

interface EmptyProps {
  className?: string
  children?: ReactNode
}
const EmptyComponent: FC<EmptyProps> = ({ children, className }) => {
  const { root } = emptyTheme
  return <section className={cn(root.base, className)}>{children}</section>
}

Title.displayName = 'Empty.Title'
Description.displayName = 'Empty.Description'
Image.displayName = 'Empty.Image'

export const Empty = Object.assign(EmptyComponent, {
  Title,
  Description,
  Image,
})
