'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '~/app/src/helpers/cn'
import { Content } from './Content'
import { Description } from './Description'
import { Footer } from './Footer'
import { Header } from './Header'
import { Title } from './Title'

const CardComponent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div
        {...props}
        className={cn('max-w-xs overflow-hidden rounded-xl border border-metal-100 bg-white shadow-small', className)}
        ref={ref}>
        {children}
      </div>
    )
  },
)

CardComponent.displayName = 'Card'

const Card = Object.assign(CardComponent, {
  Footer,
  Content,
  Header,
  Title,
  Description,
})

export { Card }
