'use client'
import { ComponentProps } from 'react'
import { cn } from '../../utils/cn'

const BreadcrumbDivider = ({ children, className, ...props }: ComponentProps<'li'>) => (
  <li role="presentation" aria-hidden="true" className={cn('[&>svg]:size-3.5', className)} {...props}>
    {children ?? (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">
        <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
      </svg>
    )}
  </li>
)
BreadcrumbDivider.displayName = 'BreadcrumbDivider'

export { BreadcrumbDivider }
