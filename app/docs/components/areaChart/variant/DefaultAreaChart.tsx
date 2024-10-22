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

const DefaultAreaChart = () => {
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
    <ChartContainer config={chartConfig} className="mx-auto max-h-[250px] w-[600px]">
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}>
        <defs>
          <linearGradient id="price" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#1B4DFF" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#1B4DFF" stopOpacity={0} />
          </linearGradient>
        </defs>
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
        <Area dataKey="desktop" type="natural" stroke="#1B4DFF" fillOpacity={1} fill="url(#price)" />
      </AreaChart>
    </ChartContainer>
  )
}

const DefaultAreaChartCode = {
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
    <ChartContainer config={chartConfig} className="max-h-[250px]">
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}>
        <defs>
          <linearGradient id="price" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#1B4DFF" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#1B4DFF" stopOpacity={0} />
          </linearGradient>
        </defs>
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
        <Area dataKey="desktop" type="natural" stroke="#1B4DFF" fillOpacity={1} fill="url(#price)" />
      </AreaChart>
    </ChartContainer>
  )
}`,
}

export { DefaultAreaChart, DefaultAreaChartCode }
