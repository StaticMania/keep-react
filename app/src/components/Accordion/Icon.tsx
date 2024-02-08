'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { useAccordionContext } from './AccordionContext'
import { accordionTheme } from './theme'

export interface IconProps {
  children?: ReactNode
  className?: string
  [key: string]: any
}

export interface keepAccordionIconTheme {
  base: string
  rotated: {
    full: string
    half: string
  }
}

export const Icon: FC<IconProps> = ({ children, className, ...otherProps }) => {
  const { isOpen } = useAccordionContext()
  const { icon } = accordionTheme
  return (
    <span
      {...otherProps}
      className={cn(icon.base, children && (isOpen ? icon.rotated.full : icon.rotated.half), className)}>
      {children ?? (
        <svg className="shrink-0 fill-metal-300" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`origin-center transform transition duration-150 ease-out ${isOpen && '!rotate-180'}`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`origin-center rotate-90 transform transition duration-150 ease-out ${isOpen && '!rotate-180'}`}
          />
        </svg>
      )}
    </span>
  )
}
