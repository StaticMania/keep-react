'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { alertTheme } from './theme'

export interface LinkProps {
  children?: ReactNode
  className?: string
  href?: string
}

export const Link: FC<LinkProps> = ({ children, className, href = '#' }) => {
  return (
    <a href={href} className={cn(alertTheme.link.base, className)}>
      {children}
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
        <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
      </svg>
    </a>
  )
}
