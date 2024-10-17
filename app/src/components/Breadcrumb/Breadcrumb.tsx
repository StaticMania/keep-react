'use client'
import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react'

const Breadcrumb = forwardRef<
  HTMLElement,
  ComponentPropsWithoutRef<'nav'> & {
    separator?: ReactNode
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />)
Breadcrumb.displayName = 'Breadcrumb'

export { Breadcrumb }
