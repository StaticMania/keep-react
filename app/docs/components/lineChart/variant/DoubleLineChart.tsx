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
        <Line dataKey="sales" type="natural" stroke="#1B4DFF" strokeWidth={2} dot={false} />
        <Line dataKey="profit" type="natural" stroke="#ff3838" strokeWidth={2} dot={false} />
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
        <Line dataKey="sales" type="natural" stroke="#1B4DFF" strokeWidth={2} dot={false} />
        <Line dataKey="profit" type="natural" stroke="#ff3838" strokeWidth={2} dot={false} />
      </LineChart>
    </ChartContainer>
  )
}
  `,
}

export { DoubleLineChart, DoubleLineChartCode }
