'use client'
import { AccordionItemProps, Item } from '@radix-ui/react-accordion'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { useAccordionContext } from './Context'

const AccordionItem = forwardRef<ElementRef<typeof Item>, ComponentPropsWithoutRef<typeof Item>>(
  ({ className, disabled = false, ...props }, ref) => {
    const { flush } = useAccordionContext()
    return (
      <Item
        ref={ref}
        data-flush={flush}
        className={cn(
          'w-full ',
          disabled && 'pointer-events-none cursor-not-allowed opacity-50',
          flush
            ? 'border-b border-b-metal-100 dark:border-metal-800'
            : 'rounded-xl border border-metal-100 outline-none transition-colors duration-300 hover:bg-metal-25 data-[state=open]:bg-metal-25 data-[state=open]:shadow-large dark:border-metal-800 dark:hover:bg-metal-900 dark:data-[state=open]:bg-metal-900',
          className,
        )}
        {...props}
      />
    )
  },
)
AccordionItem.displayName = 'AccordionItem'

export { AccordionItem, type AccordionItemProps }
