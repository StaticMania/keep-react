'use client'
import { FC, useEffect, useState } from 'react'
import {
  LineChart as LineCartCom,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarProps,
} from 'recharts'
import { CustomTooltip } from './CustomTooltip'
import CustomLegend from './CustomLegend'
import { ChartContext } from './ChartContext'

interface LineChartProps extends BarProps {
  tooltipBtnColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  tooltipBtnStyle?: string
  active?: boolean
  activeColor?: string
  activeIndex?: number
  barBg?: string
  lineColor?: string
  barRadius?: number | [number, number, number, number]
  barSize?: number
  chartData?: unknown[]
  dataKey: string
  height?: number
  inActiveColor?: string
  secondaryBarBg?: string
  secondaryLineColor?: string
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

export const LineChart: FC<LineChartProps> = ({
  showGridLine = false,
  showTooltip = false,
  //   showBg = false,
  showLegend = false,
  //   active = false,
  //   activeColor,
  //   inActiveColor,
  lineColor = '#1C222B',
  //   barBg = '#F0F3F9',
  secondaryLineColor = '#3D4A5C',
  //   secondaryBarBg = '#F0F3F9',
  //   activeIndex = 4,
  XAxisDataKey,
  dataKey,
  YAxisDataKey,
  chartData,
  height = 300,
  width = 600,
  secondaryDataKey,
  tooltipBtnColor = 'primary',
  tooltipBtnStyle,
  showXAxis = false,
  showYAxis = false,
}) => {
  const [client, setClient] = useState(false)
  const RenderLineCart = (
    <ResponsiveContainer width="100%" height="100%">
      <LineCartCom width={width} height={height} data={chartData}>
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
        <Line type="monotone" dataKey={dataKey} stroke={lineColor} activeDot={{ r: 8 }} />
        {secondaryDataKey && <Line type="monotone" dataKey={secondaryDataKey} stroke={secondaryLineColor} />}
      </LineCartCom>
    </ResponsiveContainer>
  )
  useEffect(() => {
    setClient(true)
  }, [])
  return (
    <ChartContext.Provider value={{ tooltipBtnColor, tooltipBtnStyle }}>
      {client ? RenderLineCart : null}
    </ChartContext.Provider>
  )
}
