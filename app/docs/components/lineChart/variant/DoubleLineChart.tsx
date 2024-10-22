'use client'
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts'
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '../../../../src'

const DoubleLineChart = () => {
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
    <ChartContainer config={chartConfig} className="mx-auto min-h-[200px] w-full max-w-[600px]">
      <LineChart
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
        <ChartLegend verticalAlign="top" content={<ChartLegendContent />} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Line dataKey="desktop" type="natural" stroke="#1B4DFF" strokeWidth={2} dot={false} />
        <Line dataKey="mobile" type="natural" stroke="#ff3838" strokeWidth={2} dot={false} />
      </LineChart>
    </ChartContainer>
  )
}

const DoubleLineChartCode = {
  'LineChartComponent.tsx': `
    'use client'
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts'
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from 'keep-react'

export const LineChartComponent = () => {
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
    <ChartContainer config={chartConfig}>
      <LineChart
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
        <ChartLegend verticalAlign="top" content={<ChartLegendContent />} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Line dataKey="desktop" type="natural" stroke="#1B4DFF" strokeWidth={2} dot={false} />
        <Line dataKey="mobile" type="natural" stroke="#ff3838" strokeWidth={2} dot={false} />
      </LineChart>
    </ChartContainer>
  )
}
  `,
}

export { DoubleLineChart, DoubleLineChartCode }
