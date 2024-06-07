'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { CardContent } from './Content'
import { CardDescription } from './Description'
import { CardFooter } from './Footer'
import { CardHeader } from './Header'
import { CardTitle } from './Title'

const CardComponent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div
        {...props}
        className={cn(
          'max-w-xs overflow-hidden rounded-xl border border-metal-100 bg-white shadow-small dark:border-metal-900 dark:bg-metal-900',
          className,
        )}
        ref={ref}>
        {children}
      </div>
    )
  },
)

CardComponent.displayName = 'Card'

const Card = Object.assign(CardComponent, {
  Footer: CardFooter,
  Content: CardContent,
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
})

export { Card }
