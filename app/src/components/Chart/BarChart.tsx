'use client'
import { FC, useEffect, useState } from 'react'
import { Bar, BarChart as BarChartCom, BarProps, CartesianGrid, Cell, Legend, Tooltip, XAxis, YAxis } from 'recharts'
import { ChartContext } from './ChartContext'
import CustomLegend from './CustomLegend'
import { CustomTooltip } from './CustomTooltip'

interface BarChartProps extends BarProps {
  tooltipBtnColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  tooltipBtnStyle?: string
  active?: boolean
  activeColor?: string
  activeIndex?: number
  barBg?: string
  barColor?: string
  barRadius?: number | [number, number, number, number]
  barSize?: number
  chartData?: unknown[]
  dataKey: string
  height?: number
  inActiveColor?: string
  secondaryBarBg?: string
  secondaryBarColor?: string
  secondaryDataKey?: string
  showBg?: boolean
  showGridLine?: boolean
  showLegend?: boolean
  showTooltip?: boolean
  width?: number
  XAxisDataKey?: string
  YAxisDataKey?: string
  showXAxis?: boolean
  showYAxis?: boolean
}

export const BarChart: FC<BarChartProps> = ({
  showGridLine = false,
  showTooltip = false,
  showBg = false,
  showLegend = false,
  active = false,
  activeColor,
  inActiveColor,
  barColor = '#1C222B',
  barBg = '#F0F3F9',
  secondaryBarColor = '#3D4A5C',
  secondaryBarBg = '#F0F3F9',
  activeIndex = 4,
  XAxisDataKey,
  dataKey,
  YAxisDataKey,
  chartData,
  barRadius = [8, 8, 0, 0],
  height = 300,
  width = 600,
  barSize = 32,
  secondaryDataKey,
  tooltipBtnColor = 'primary',
  tooltipBtnStyle,
  showXAxis = false,
  showYAxis = false,
}) => {
  const [client, setClient] = useState(false)
  const RenderBarChart = (
    <BarChartCom width={width} height={height} data={chartData}>
      {showGridLine && <CartesianGrid strokeDasharray="4 4" fill="#E9EFF6" y={1000} />}
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
          axisLine={false}
          className="text-body-4 font-medium text-metal-600"
          dataKey={YAxisDataKey}
          strokeDasharray="4 4"
          tickLine={false}
          tickSize={10}
        />
      )}

      {showTooltip && <Tooltip cursor={false} offset={10} content={<CustomTooltip />} />}
      {showLegend && <Legend verticalAlign="top" align="left" iconSize={6} content={<CustomLegend payload={[]} />} />}

      <Bar
        legendType="circle"
        dataKey={dataKey}
        barSize={barSize}
        fill={barColor}
        radius={barRadius}
        background={{
          fill: showBg ? barBg : 'transparent',
          radius: 4,
        }}>
        {active &&
          chartData?.map((_entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={`${index === activeIndex && activeColor ? activeColor : inActiveColor ? inActiveColor : barColor}`}
            />
          ))}
      </Bar>
      {secondaryDataKey && (
        <Bar
          legendType="circle"
          dataKey={secondaryDataKey}
          fill={secondaryBarColor}
          barSize={barSize}
          radius={barRadius}
          background={{
            fill: showBg ? secondaryBarBg : 'transparent',
            radius: 4,
          }}
        />
      )}
    </BarChartCom>
  )

  useEffect(() => {
    setClient(true)
  }, [])

  return (
    <ChartContext.Provider value={{ tooltipBtnColor, tooltipBtnStyle }}>
      {client ? RenderBarChart : null}
    </ChartContext.Provider>
  )
}
