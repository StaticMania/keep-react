'use client'
import { FC, useEffect, useState } from 'react'
import { LineChart as LineCartCom, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarProps } from 'recharts'
import { CurveType } from 'recharts/types/shape/Curve'
import { CustomTooltip } from './CustomTooltip'
import CustomLegend from './CustomLegend'
import { ChartContext } from './ChartContext'

interface LineChartProps extends BarProps {
  tooltipBtnColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  tooltipBtnStyle?: string
  lineColor?: string
  chartData?: unknown[]
  dataKey: string
  height?: number
  secondaryLineColor?: string
  secondaryDataKey?: string
  showGridLine?: boolean
  showLegend?: boolean
  showTooltip?: boolean
  width?: number
  XAxisDataKey?: string
  YAxisDataKey?: string
  showXAxis?: boolean
  showYAxis?: boolean
  lineType?: CurveType
  strokeWidth?: number
}

export const LineChart: FC<LineChartProps> = ({
  showGridLine = false,
  showTooltip = false,
  showLegend = false,
  lineColor = '#1C222B',
  secondaryLineColor = '#3D4A5C',
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
  lineType = 'monotone',
  strokeWidth = 2,
}) => {
  const [client, setClient] = useState(false)
  const RenderLineCart = (
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
      <Line type={lineType} dataKey={dataKey} stroke={lineColor} activeDot={{ r: 8 }} strokeWidth={strokeWidth} />
      {secondaryDataKey && (
        <Line type={lineType} dataKey={secondaryDataKey} stroke={secondaryLineColor} strokeWidth={strokeWidth} />
      )}
    </LineCartCom>
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
