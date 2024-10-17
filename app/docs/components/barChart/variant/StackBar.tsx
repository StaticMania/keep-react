'use client'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '../../../../src'

const StackBar = () => {
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
      color: '#1b4dff33',
    },
  } satisfies ChartConfig

  return (
    <ChartContainer config={chartConfig} className="mx-auto min-h-[200px] w-[600px]">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <ChartLegend verticalAlign="top" content={<ChartLegendContent />} />
        <Bar radius={[0, 0, 0, 0]} barSize={50} dataKey="desktop" stackId="a" fill="#1B4DFF" />
        <Bar radius={[8, 8, 0, 0]} barSize={50} dataKey="mobile" stackId="a" fill="#1b4dff33" />
      </BarChart>
    </ChartContainer>
  )
}

const StackBarCode = {
  'BarChartComponent.tsx': `
    'use client'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from 'keep-react'

export const BarChartComponent = () => {
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
      color: '#1b4dff33',
    },
  } satisfies ChartConfig

  return (
    <ChartContainer config={chartConfig} className="mx-auto min-h-[200px] w-[600px]">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <ChartLegend verticalAlign="top" content={<ChartLegendContent />} />
       <Bar radius={[0, 0, 0, 0]} barSize={50} dataKey="desktop" stackId="a" fill="#1B4DFF" />
        <Bar radius={[8, 8, 0, 0]} barSize={50} dataKey="mobile" stackId="a" fill="#1b4dff33" />
      </BarChart>
    </ChartContainer>
  )
} `,
}

export { StackBar, StackBarCode }
