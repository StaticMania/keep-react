import { FC } from 'react'
import { Area, AreaChart as AreaChartCom, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { CustomTooltip } from './CustomTooltip'
import { ChartContext } from './ChartContext'

/**
 * Props for the AreaChart component.
 * @interface AreaChartProps
 */
interface AreaChartProps {
  /**
   * Determines tooltip button variant.
   * @type {string}
   * @default primary
   */
  tooltipBtnColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  /**
   * Tooltip custom className
   * @type {string}
   * @default ''
   */
  tooltipBtnStyle?: string
  /**
   * Determines whether to show the tooltip.
   * @type {boolean}
   * @default false
   */
  showTooltip?: boolean

  /**
   * Determines whether to show the grid lines.
   * @type {boolean}
   * @default false
   */
  showGridLine?: boolean

  /**
   * The type of chart to display. Can be either 'natural' or 'linear'.
   * @type {'natural' | 'linear'}
   * @default 'linear'
   */
  chartType?: 'natural' | 'linear'

  /**
   * Determines whether to show the X-axis.
   * @type {boolean}
   * @default false
   */
  showXaxis?: boolean

  /**
   * Determines whether to show the Y-axis.
   * @type {boolean}
   * @default false
   */
  showYaxis?: boolean

  /**
   * The key for the main data in the chart.
   * @type {string}
   * @default ''
   */
  dataKey: string

  /**
   * The key for the secondary data in the chart.
   * @type {string}
   * @default ''
   */
  secondaryDataKey?: string

  /**
   * The key for the X-axis data.
   * @type {string}
   * @default ''
   */
  XAxisDataKey?: string

  /**
   * The key for the Y-axis data.
   * @type {string}
   * @default ''
   */
  YAxisDataKey?: string

  /**
   * The chart data.
   * @type {unknown[]}
   * @default []
   */
  chartData?: unknown[]

  /**
   * The color of the main chart.
   * @type {string}
   * @default '#1B4DFF'
   */
  chartColor?: string

  /**
   * The color of the secondary chart.
   * @type {string}
   * @default '#1B4DFF'
   */
  secondaryChartColor?: string

  /**
   * The stroke color of the main area.
   * @type {string}
   * @default '#1B4DFF'
   */
  areaStoke?: string

  /**
   * The stroke color of the secondary area.
   * @type {string}
   * @default '#94ABFF'
   */
  secondaryAreaStoke?: string

  /**
   * The opacity values for different parts of the chart.
   * @type {object}
   * @default "{ topStartOpacity: 0.3, topEndOpacity: 0, secondaryStartOpacity: 0.2, secondaryEndOpacity: 0 }"
   */
  opacity?: {
    /**
     * The start opacity for the top area.
     * @type {number}
     * @default 0.3
     */
    topStartOpacity?: number

    /**
     * The end opacity for the top area.
     * @type {number}
     * @default 0
     */
    topEndOpacity?: number

    /**
     * The start opacity for the secondary area.
     * @type {number}
     * @default 0
     */
    secondaryStartOpacity?: number

    /**
     * The end opacity for the secondary area.
     * @type {number}
     * @default 0
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
  tooltipBtnColor = 'primary',
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

  return <ChartContext.Provider value={{ tooltipBtnStyle, tooltipBtnColor }}>{RenderLineChart}</ChartContext.Provider>
}
