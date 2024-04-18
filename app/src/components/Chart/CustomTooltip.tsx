'use client'
import { ReactElement } from 'react'
import { TooltipProps } from 'recharts'
import type { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent'
import { cn } from '../../helpers/cn'
import { useChartContext } from './ChartContext'

export const CustomTooltip = ({ active, payload }: TooltipProps<ValueType, NameType>): ReactElement | null => {
  const { tooltipBtnStyle } = useChartContext()
  if (active && payload?.length) {
    return (
      <>
        {payload.length > 1 ? (
          <div
            className={cn(
              'flex gap-3 rounded-xl bg-metal-900 px-3 py-2 text-body-5 font-normal capitalize text-white',
              tooltipBtnStyle,
            )}>
            <span>
              {payload[0].name} : {payload[0].value}
            </span>
            <span>
              {payload[1].name} : {payload[1].value}
            </span>
          </div>
        ) : (
          <div
            className={cn(
              'flex gap-3 rounded-xl bg-metal-900 px-3 py-2 text-body-5 font-normal capitalize text-white',
              tooltipBtnStyle,
            )}>
            {payload[0].value}
          </div>
        )}
      </>
    )
  }

  return null
}
