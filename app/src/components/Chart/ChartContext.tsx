import { createContext, useContext } from 'react'

type ChartContextProps = {
  tooltipBtnColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
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
