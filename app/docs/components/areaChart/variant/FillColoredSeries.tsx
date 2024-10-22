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

const FillColoredSeries = () => {
  const chartData = [
    { month: 'January', desktop: 186, mobile: 80 },
    { month: 'February', desktop: 305, mobile: 200 },
    { month: 'March', desktop: 237, mobile: 120 },
    { month: 'April', desktop: 73, mobile: 190 },
    { month: 'May', desktop: 209, mobile: 130 },
    { month: 'June', desktop: 214, mobile: 140 },
  ]

  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: '#1B4DFF',
    },
    mobile: {
      label: 'Mobile',
      color: '#ff3838',
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
        <ChartLegend verticalAlign="top" align="right" content={<ChartLegendContent />} />
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Area stackId="a" type="natural" dataKey="mobile" stroke="#ff3838" fill="#ff3838" />
        <Area stackId="a" type="natural" dataKey="desktop" stroke="#1B4DFF" fill="#1B4DFF" />
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
      </AreaChart>
    </ChartContainer>
  )
}

const FillColoredSeriesCode = {
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
    { month: 'January', desktop: 186, mobile: 80 },
    { month: 'February', desktop: 305, mobile: 200 },
    { month: 'March', desktop: 237, mobile: 120 },
    { month: 'April', desktop: 73, mobile: 190 },
    { month: 'May', desktop: 209, mobile: 130 },
    { month: 'June', desktop: 214, mobile: 140 },
  ]

  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: '#1B4DFF',
    },
    mobile: {
      label: 'Mobile',
      color: '#ff3838',
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
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartLegend verticalAlign="top" align="right" content={<ChartLegendContent />} />
        <Area stackId="a" type="natural" dataKey="mobile" stroke="#ff3838" fill="#ff3838" />
        <Area stackId="a" type="natural" dataKey="desktop" stroke="#1B4DFF" fill="#1B4DFF" />
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
      </AreaChart>
    </ChartContainer>
  )
}
`,
}

export { FillColoredSeries, FillColoredSeriesCode }
