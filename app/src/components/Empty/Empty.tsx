'use client'
import { FC, ReactNode } from 'react'

import { Image } from './Image'
import { Redirect } from './Redirect'
import { Title, keepTitleTheme } from './Title'
import { Description, keepDescriptionTheme } from './Description'

import { cn } from '../../helpers/cn'
import { useTheme } from '../../Keep/ThemeContext'

export interface keepEmptyTheme {
  root: RootTheme
  title: keepTitleTheme
  description: keepDescriptionTheme
  redirectBtn: string
}

interface RootTheme {
  base: string
}

/**
 * Props for the Empty component.
 * @interface EmptyProps
 */
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
  const { root } = useTheme().theme.empty
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
