'use client'
import { ReactNode } from 'react'
import { TooltipContext, TooltipOptions, useTooltip } from './Context'

const Tooltip = ({
  children,
  initialOpen,
  ...restOptions
}: {
  children: ReactNode
} & TooltipOptions) => {
  const tooltip = useTooltip({ initialOpen, ...restOptions })
  return <TooltipContext.Provider value={{ ...tooltip }}>{children}</TooltipContext.Provider>
}

export { Tooltip }
