'use client'
import { FC, useEffect, useState } from 'react'
import { Bar, BarChart as BarChartCom, CartesianGrid, Cell, Legend, Tooltip, XAxis, YAxis } from 'recharts'
import CustomLegend from './CustomLegend'
import { CustomTooltip } from './CustomTooltip'

/**
 * Props for the BarChart component.
 * @interface BarChartProps
 */
interface BarChartProps {
  /**
   * Determines if the bar is active.
   */
  active?: boolean

  /**
   * The color of the active bar.
   */
  activeColor?: string

  /**
   * The index of the active bar.
   */
  activeIndex?: number

  /**
   * The background color of the bar.
   */
  barBg?: string

  /**
   * The color of the bar.
   */
  barColor?: string

  /**
   * The radius of the bar's border.
   */
  barRadius?: number | [number, number, number, number]

  /**
   * The size of the bar.
   */
  barSize?: number

  /**
   * The data for the chart.
   */
  chartData?: unknown[]

  /**
   * The key for accessing the data in the chartData array.
   */
  dataKey: string

  /**
   * The height of the chart.
   */
  height?: number

  /**
   * The color of the inactive bar.
   */
  inActiveColor?: string

  /**
   * The background color of the secondary bar.
   */
  secondaryBarBg?: string

  /**
   * The color of the secondary bar.
   */
  secondaryBarColor?: string

  /**
   * The key for accessing the secondary data in the chartData array.
   */
  secondaryDataKey?: string

  /**
   * Determines if the background is shown.
   */
  showBg?: boolean

  /**
   * Determines if the grid lines are shown.
   */
  showGridLine?: boolean

  /**
   * Determines if the legend is shown.
   */
  showLegend?: boolean

  /**
   * Determines if the tooltip is shown.
   */
  showTooltip?: boolean

  /**
   * Determines if the X-axis is shown.
   */
  showXaxis?: boolean

  /**
   * Determines if the Y-axis is shown.
   */
  showYaxis?: boolean

  /**
   * The width of the chart.
   */
  width?: number

  /**
   * The key for accessing the data on the X-axis.
   */
  XAxisDataKey?: string

  /**
   * The key for accessing the data on the Y-axis.
   */
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
