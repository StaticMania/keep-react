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

const LinearLineChart = () => {
  const chartData = [
    { month: 'January', sales: 186 },
    { month: 'February', sales: 305 },
    { month: 'March', sales: 237 },
    { month: 'April', sales: 73 },
    { month: 'May', sales: 209 },
    { month: 'June', sales: 214 },
  ]

  const chartConfig = {
    sales: {
      label: 'Sales',
      color: '#1B4DFF',
    },
  } satisfies ChartConfig
  return (
    <ChartContainer config={chartConfig} className="max-h-[300px] w-full">
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
        <Line dataKey="sales" type="linear" stroke="#1B4DFF" strokeWidth={2} dot={false} />
      </LineChart>
    </ChartContainer>
  )
}

const LinearLineChartCode = {
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
    { month: 'January', sales: 186 },
    { month: 'February', sales: 305 },
    { month: 'March', sales: 237 },
    { month: 'April', sales: 73 },
    { month: 'May', sales: 209 },
    { month: 'June', sales: 214 },
  ]

  const chartConfig = {
    sales: {
      label: 'Sales',
      color: '#1B4DFF',
    },
  } satisfies ChartConfig
  return (
    <ChartContainer config={chartConfig} className="max-h-[300px] w-full">
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
        <Line dataKey="sales" type="linear" stroke="#1B4DFF" strokeWidth={2} dot={false} />
      </LineChart>
    </ChartContainer>
  )
}
  `,
}

export { LinearLineChart, LinearLineChartCode }
