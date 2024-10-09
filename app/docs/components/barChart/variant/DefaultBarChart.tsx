'use client'
import { Bar, BarChart, CartesianGrid, Rectangle, XAxis } from 'recharts'
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '../../../../src'

const DefaultBarChart = () => {
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
    <ChartContainer config={chartConfig} className="mx-auto min-h-[200px] w-full max-w-[600px]">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend verticalAlign="top" align="right" content={<ChartLegendContent />} />
        <Bar
          dataKey="desktop"
          activeIndex={2}
          activeBar={({ ...props }) => {
            return <Rectangle {...props} fill="#1B4DFF" fillOpacity={1} />
          }}
          fill="#1B4DFF"
          fillOpacity={0.2}
          radius={[100, 100, 0, 0]}
          barSize={15}
        />
      </BarChart>
    </ChartContainer>
  )
}

const DefaultBarChartCode = {
  'BarChartComponent.tsx': `
    'use client'
import { Bar, BarChart, CartesianGrid, Rectangle, XAxis } from 'recharts'
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
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend verticalAlign="top" align="right" content={<ChartLegendContent />} />
        <Bar
          dataKey="desktop"
          activeIndex={2}
          activeBar={({ ...props }) => {
            return <Rectangle {...props} fill="#1B4DFF" fillOpacity={1} />
          }}
          fill="#1B4DFF"
          fillOpacity={0.2}
          radius={[100, 100, 0, 0]}
          barSize={15}
        />
      </BarChart>
    </ChartContainer>
  )
}

    `,
}

export { DefaultBarChart, DefaultBarChartCode }
