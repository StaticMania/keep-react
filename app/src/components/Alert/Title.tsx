'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { alertTheme } from './theme'

const Title = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ children, ...props }: HTMLAttributes<HTMLParagraphElement>, ref: Ref<HTMLParagraphElement>) => {
    return (
      <p {...props} className={cn(alertTheme.title.base, props.className)} ref={ref}>
        {children}
      </p>
    )
  },
)

Title.displayName = 'Alert.Title'

export { Title }
