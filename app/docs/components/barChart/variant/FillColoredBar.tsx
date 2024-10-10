'use client'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '../../../../src'

const FillColoredBar = () => {
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
        <YAxis dataKey="desktop" tickLine={false} tickMargin={24} axisLine={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend verticalAlign="top" align="right" content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="#1B4DFF" radius={0} barSize={20} />
      </BarChart>
    </ChartContainer>
  )
}

const FillColoredBarCode = {
  'BarChartComponent.tsx': `
    'use client'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'
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
        <YAxis dataKey="desktop" tickLine={false} tickMargin={24} axisLine={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend verticalAlign="top" align="right" content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="#1B4DFF" radius={0} barSize={20} />
      </BarChart>
    </ChartContainer>
  )
}
`,
}

export { FillColoredBar, FillColoredBarCode }
