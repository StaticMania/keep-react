'use client'
import { ReactNode } from 'react'
import { TooltipAction } from './Action'
import { TooltipContent } from './Content'
import { TooltipContext, TooltipOptions, useTooltip } from './Context'

const TooltipComponent = ({
  children,
  initialOpen,
  ...restOptions
}: {
  children: ReactNode
} & TooltipOptions) => {
  const tooltip = useTooltip({ initialOpen, ...restOptions })
  return <TooltipContext.Provider value={{ ...tooltip }}>{children}</TooltipContext.Provider>
}

export const Tooltip = Object.assign(TooltipComponent, {
  Action: TooltipAction,
  Content: TooltipContent,
})
