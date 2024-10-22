'use client'
import { AccordionContentProps, Content } from '@radix-ui/react-accordion'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const AccordionContent = forwardRef<ElementRef<typeof Content>, ComponentPropsWithoutRef<typeof Content>>(
  ({ className, children, ...props }, ref) => (
    <Content
      ref={ref}
      className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}>
      <div
        className={cn('select-none px-6 pb-5 text-body-3 font-normal text-metal-600 dark:text-metal-300', className)}>
        {children}
      </div>
    </Content>
  ),
)

AccordionContent.displayName = Content.displayName

export { AccordionContent, type AccordionContentProps }
