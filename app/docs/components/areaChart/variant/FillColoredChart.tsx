'use client'

import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '../../../../src'

const FillColoredChart = () => {
  const chartData = [
    { month: 'January', desktop: 186 },
    { month: 'February', desktop: 305 },
    { month: 'March', desktop: 237 },
    { month: 'April', desktop: 73 },
    { month: 'May', desktop: 209 },
    { month: 'June', desktop: 214 },
  ]

  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: '#1B4DFF',
    },
  } satisfies ChartConfig

  return (
    <ChartContainer config={chartConfig} className="mx-auto min-h-[200px] w-[600px]">
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}>
        <ChartLegend verticalAlign="top" align="right" content={<ChartLegendContent />} />
        <CartesianGrid vertical={false} />

        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
        <Area dataKey="desktop" type="natural" stroke="#1B4DFF" fillOpacity={0.6} fill="#1B4DFF" />
      </AreaChart>
    </ChartContainer>
  )
}

const FillColoredChartCode = {
  'AreaChartComponent.tsx': `'use client'

import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from 'keep-react'

export const AreaChartComponent = () => {
  const chartData = [
    { month: 'January', desktop: 186 },
    { month: 'February', desktop: 305 },
    { month: 'March', desktop: 237 },
    { month: 'April', desktop: 73 },
    { month: 'May', desktop: 209 },
    { month: 'June', desktop: 214 },
  ]

  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: '#1B4DFF',
    },
  } satisfies ChartConfig

  return (
    <ChartContainer config={chartConfig} className="min-h-[200px]">
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}>
        <ChartLegend verticalAlign="top" align="right" content={<ChartLegendContent />} />
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
        <Area dataKey="desktop" type="natural" stroke="#1B4DFF" fillOpacity={1} fill="#1B4DFF" />
      </AreaChart>
    </ChartContainer>
  )
}`,
}

export { FillColoredChart, FillColoredChartCode }
