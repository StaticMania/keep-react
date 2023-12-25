import { createContext, useContext } from 'react'
import { ButtonVariant } from '../Button/Button'

type ChartContextProps = {
  tooltipBtnVariant?: keyof ButtonVariant
  tooltipBtnStyle?: string
}

export const ChartContext = createContext<ChartContextProps | undefined>(undefined)

export function useChartContext(): ChartContextProps {
  const context = useContext(ChartContext)

  if (!context) {
    throw new Error('useChartContext should be used within the ChartContext provider!')
  }

  return context
}
