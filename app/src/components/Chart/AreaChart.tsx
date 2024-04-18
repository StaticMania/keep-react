'use client'
import { FC } from 'react'
import { Area, AreaChart as AreaChartCom, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { ChartContext } from './ChartContext'
import { CustomTooltip } from './CustomTooltip'

/**
 * Props for the AreaChart component.
 * @interface AreaChartProps
 */
interface AreaChartProps {
  tooltipBtnStyle?: string
  showTooltip?: boolean
  showGridLine?: boolean
  chartType?: 'natural' | 'linear'
  showXAxis?: boolean
  showYAxis?: boolean
  dataKey: string
  secondaryDataKey?: string
  XAxisDataKey?: string
  YAxisDataKey?: string
  chartData?: unknown[]
  chartColor?: string
  secondaryChartColor?: string
  areaStoke?: string
  secondaryAreaStoke?: string
  opacity?: {
    topStartOpacity?: number
    topEndOpacity?: number
    secondaryStartOpacity?: number
    secondaryEndOpacity?: number
  }
}

export const AreaChart: FC<AreaChartProps> = ({
  showGridLine = false,
  showTooltip = false,
  chartType = 'linear',
  showXAxis = false,
  showYAxis = false,
  secondaryDataKey,
  XAxisDataKey,
  dataKey,
  YAxisDataKey,
  chartData,
  chartColor = '#1B4DFF',
  secondaryChartColor = '#1B4DFF',
  areaStoke = '#1B4DFF',
  secondaryAreaStoke = '#94ABFF',
  tooltipBtnStyle,
  opacity = {
    topStartOpacity: 0.3,
    topEndOpacity: 0,
    secondaryStartOpacity: 0.2,
    secondaryEndOpacity: 0,
  },
}) => {
  const RenderLineChart = (
    <ResponsiveContainer width="100%" height={350} className="mx-auto">
      <AreaChartCom
        data={chartData}
        margin={{
          top: 10,
          right: 10,
          left: 0,
          bottom: 10,
        }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={chartColor} stopOpacity={opacity.topStartOpacity} />
            <stop offset="100%" stopColor={chartColor} stopOpacity={opacity.topEndOpacity} />
          </linearGradient>
          {secondaryDataKey && (
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={secondaryChartColor} stopOpacity={opacity.secondaryStartOpacity} />
              <stop offset="100%" stopColor={secondaryChartColor} stopOpacity={opacity.secondaryEndOpacity} />
            </linearGradient>
          )}
        </defs>
        {showXAxis && (
          <XAxis
            className="text-body-4 font-medium text-metal-600"
            axisLine={false}
            dataKey={XAxisDataKey}
            strokeDasharray="4 4"
            tickSize={20}
            tickLine={false}
          />
        )}
        {showYAxis && (
          <YAxis
            className="text-body-4 font-medium text-metal-600"
            axisLine={false}
            dataKey={YAxisDataKey}
            strokeDasharray="4 4"
            tickLine={false}
            tickSize={10}
          />
        )}
        {showGridLine && <CartesianGrid strokeDasharray="4 4" fill="#E9EFF6" y={800} fillOpacity={0.6} />}

        <Area type={chartType} dataKey={dataKey} stroke={areaStoke} fillOpacity={1} fill="url(#colorUv)" />
        {showTooltip && <Tooltip cursor={false} content={<CustomTooltip />} />}
        {secondaryDataKey && (
          <Area
            type={chartType}
            dataKey={secondaryDataKey}
            stroke={secondaryAreaStoke}
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        )}
      </AreaChartCom>
    </ResponsiveContainer>
  )

  return <ChartContext.Provider value={{ tooltipBtnStyle }}>{RenderLineChart}</ChartContext.Provider>
}
