'use client'
import { FC, useEffect, useState } from 'react'
import { Bar, BarChart as BarChartCom, CartesianGrid, Cell, Legend, Tooltip, XAxis, YAxis } from 'recharts'
import CustomLegend from './CustomLegend'
import { CustomTooltip } from './CustomTooltip'

interface BarChartProps {
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
  showXaxis?: boolean
  showYaxis?: boolean
  width?: number
  XAxisDataKey?: string
  YAxisDataKey?: string
}

export const BarChart: FC<BarChartProps> = ({
  showGridLine = false,
  showTooltip = false,
  showXaxis = false,
  showYaxis = false,
  showBg = false,
  showLegend = false,
  active = false,
  activeColor,
  inActiveColor,
  barColor = '#1B4DFF',
  barBg = '#E8EDFF',
  secondaryBarColor = '#1DB469',
  secondaryBarBg = '#D7FFEB',
  activeIndex = 4,
  XAxisDataKey,
  dataKey,
  YAxisDataKey,
  chartData,
  barRadius,
  height = 300,
  width = 600,
  barSize = 6,
  secondaryDataKey,
}) => {
  const [client, setClient] = useState(false)
  const RenderBarChart = (
    <BarChartCom id="testId" width={width} height={height} data={chartData}>
      {showGridLine && <CartesianGrid strokeDasharray="4 4" fill="#E9EFF6" y={1000} />}
      {showXaxis && (
        <XAxis axisLine={false} dataKey={XAxisDataKey} strokeDasharray="4 4" tickSize={20} tickLine={false} />
      )}
      {showYaxis && (
        <YAxis axisLine={false} dataKey={YAxisDataKey} strokeDasharray="4 4" tickLine={false} tickSize={10} />
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

  return <>{client ? RenderBarChart : null}</>
}
