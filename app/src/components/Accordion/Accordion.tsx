'use client'
import { AccordionMultipleProps, AccordionSingleProps, Root } from '@radix-ui/react-accordion'
import { FC } from 'react'
import { cn } from '../../utils/cn'
import { AccordionContext } from './Context'

export type AccordionProps = AccordionMultipleProps | AccordionSingleProps

type AccordionCustomProps = {
  flush?: boolean
  type?: 'single' | 'multiple'
}

const Accordion: FC<AccordionProps & AccordionCustomProps> = ({
  className,
  children,
  disabled = false,
  flush,
  ...props
}) => {
  return (
    <Root
      className={cn(
        'w-full',
        disabled && 'pointer-events-none opacity-50',
        flush ? 'space-y-0' : 'space-y-4',
        className,
      )}
      {...props}>
      <AccordionContext.Provider value={{ flush }}>{children}</AccordionContext.Provider>
    </Root>
  )
}

export { Accordion }
