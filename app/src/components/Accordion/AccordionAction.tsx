'use client'
import { Header, Trigger, type AccordionTriggerProps } from '@radix-ui/react-accordion'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const AccordionAction = forwardRef<ElementRef<typeof Trigger>, ComponentPropsWithoutRef<typeof Trigger>>(
  ({ className, children, ...props }, ref) => (
    <Header className="flex">
      <Trigger
        ref={ref}
        className={cn(
          'flex flex-1 select-none items-center justify-between px-6 py-5 transition-all [&[data-state=open]>span>svg>rect]:!rotate-180 [&[data-state=open]>span]:rotate-180 [&[data-state=open]>svg>rect]:!rotate-180 [&[data-state=open]>svg]:rotate-180',
          className,
        )}
        {...props}>
        {children}
      </Trigger>
    </Header>
  ),
)
AccordionAction.displayName = Trigger.displayName

export { AccordionAction, type AccordionTriggerProps as AccordionActionProps }
