'use client'
import { FC, ReactNode } from 'react'
import { Image } from './Image'
import { Redirect } from './Redirect'
import { Title } from './Title'
import { Description } from './Description'
import { cn } from '../../helpers/cn'
import { emptyTheme } from './theme'

interface EmptyProps {
  /**
   * The class name of the Empty.
   * @type {string}
   * @default ''
   */
  className?: string
  /**
   * The content of the Empty.
   * @type {ReactNode}
   */
  children?: ReactNode
}
const EmptyComponent: FC<EmptyProps> = ({ children, className }) => {
  const { root } = emptyTheme
  return (
    <section role="contentinfo" className={cn(root.base, className)}>
      {children}
    </section>
  )
}

Title.displayName = 'Empty.Title'
Description.displayName = 'Empty.Description'
Image.displayName = 'Empty.Image'
Redirect.displayName = 'Empty.Redirect'

export const Empty = Object.assign(EmptyComponent, {
  Title,
  Description,
  Image,
  Redirect,
})
