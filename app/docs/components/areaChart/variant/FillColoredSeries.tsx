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
    { month: 'January', sales: 186, profit: 80 },
    { month: 'February', sales: 305, profit: 200 },
    { month: 'March', sales: 237, profit: 120 },
    { month: 'April', sales: 73, profit: 190 },
    { month: 'May', sales: 209, profit: 130 },
    { month: 'June', sales: 214, profit: 140 },
  ]

  const chartConfig = {
    sales: {
      label: 'Sales',
      color: '#1B4DFF',
    },
    profit: {
      label: 'Profit',
      color: '#ff3838',
    },
  } satisfies ChartConfig

  return (
    <ChartContainer config={chartConfig} className="mx-auto max-h-[300px] w-full">
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
        <Area stackId="a" type="natural" dataKey="profit" stroke="#ff3838" fill="#ff3838" />
        <Area stackId="a" type="natural" dataKey="sales" stroke="#1B4DFF" fill="#1B4DFF" />
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
    { month: 'January', sales: 186, profit: 80 },
    { month: 'February', sales: 305, profit: 200 },
    { month: 'March', sales: 237, profit: 120 },
    { month: 'April', sales: 73, profit: 190 },
    { month: 'May', sales: 209, profit: 130 },
    { month: 'June', sales: 214, profit: 140 },
  ]

  const chartConfig = {
    sales: {
      label: 'Sales',
      color: '#1B4DFF',
    },
    profit: {
      label: 'Profit',
      color: '#ff3838',
    },
  } satisfies ChartConfig

  return (
    <ChartContainer config={chartConfig} className="max-h-[300px] w-full">
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
        <Area stackId="a" type="natural" dataKey="profit" stroke="#ff3838" fill="#ff3838" />
        <Area stackId="a" type="natural" dataKey="sales" stroke="#1B4DFF" fill="#1B4DFF" />
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
      </AreaChart>
    </ChartContainer>
  )
}
`,
}

export { FillColoredSeries, FillColoredSeriesCode }
