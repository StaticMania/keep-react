import { FC } from 'react'
import { Area, AreaChart as AreaChartCom, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { CustomTooltip } from './CustomTooltip'

/**
 * Props for the AreaChart component.
 */
interface AreaChartProps {
  /**
   * Determines whether to show the tooltip.
   */
  showTooltip?: boolean

  /**
   * Determines whether to show the grid lines.
   */
  showGridLine?: boolean

  /**
   * The type of chart to display. Can be either 'natural' or 'linear'.
   */
  chartType?: 'natural' | 'linear'

  /**
   * Determines whether to show the X-axis.
   */
  showXaxis?: boolean

  /**
   * Determines whether to show the Y-axis.
   */
  showYaxis?: boolean

  /**
   * The key for the main data in the chart.
   */
  dataKey: string

  /**
   * The key for the secondary data in the chart.
   */
  secondaryDataKey?: string

  /**
   * The key for the X-axis data.
   */
  XAxisDataKey?: string

  /**
   * The key for the Y-axis data.
   */
  YAxisDataKey?: string

  /**
   * The chart data.
   */
  chartData?: unknown[]

  /**
   * The color of the main chart.
   */
  chartColor?: string

  /**
   * The color of the secondary chart.
   */
  secondaryChartColor?: string

  /**
   * The stroke color of the main area.
   */
  areaStoke?: string

  /**
   * The stroke color of the secondary area.
   */
  secondaryAreaStoke?: string

  /**
   * The opacity values for different parts of the chart.
   */
  opacity?: {
    /**
     * The start opacity for the top area.
     */
    topStartOpacity?: number

    /**
     * The end opacity for the top area.
     */
    topEndOpacity?: number

    /**
     * The start opacity for the secondary area.
     */
    secondaryStartOpacity?: number

    /**
     * The end opacity for the secondary area.
     */
    secondaryEndOpacity?: number
  }
}

export const AreaChart: FC<AreaChartProps> = ({
  showGridLine = false,
  showTooltip = false,
  chartType = 'linear',
  showXaxis = false,
  showYaxis = false,
  secondaryDataKey,
  XAxisDataKey,
  dataKey,
  YAxisDataKey,
  chartData,
  chartColor = '#1B4DFF',
  secondaryChartColor = '#1B4DFF',
  areaStoke = '#1B4DFF',
  secondaryAreaStoke = '#94ABFF',
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
        {showXaxis && (
          <XAxis axisLine={false} dataKey={XAxisDataKey} strokeDasharray="4 4" tickSize={20} tickLine={false} />
        )}
        {showYaxis && (
          <YAxis axisLine={false} dataKey={YAxisDataKey} strokeDasharray="4 4" tickLine={false} tickSize={10} />
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

  return <>{RenderLineChart}</>
}
