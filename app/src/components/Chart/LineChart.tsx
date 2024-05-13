'use client'
import { FC } from 'react'
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

interface LineChartProps extends BarProps {
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

const LineChart: FC<LineChartProps> = ({
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
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineCartCom width={width} height={height} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineCartCom>
    </ResponsiveContainer>
  )
}

export default LineChart
