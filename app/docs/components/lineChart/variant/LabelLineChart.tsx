'use client'
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from 'recharts'
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '../../../../src'

const LabelLineChart = () => {
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
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          top: 20,
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
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
        <Line
          dataKey="desktop"
          type="natural"
          stroke="#1B4DFF"
          strokeWidth={2}
          dot={{
            fill: '#1B4DFF',
          }}
          activeDot={{
            r: 6,
          }}>
          <LabelList position="top" offset={12} className="fill-primary-500" fontSize={12} />
        </Line>
      </LineChart>
    </ChartContainer>
  )
}

const LabelLineChartCode = {
  'LineChartComponent.tsx': `
    'use client'
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from 'recharts'
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
    <ChartContainer config={chartConfig}>
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          top: 20,
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
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
        <Line
          dataKey="desktop"
          type="natural"
          stroke="#1B4DFF"
          strokeWidth={2}
          dot={{
            fill: '#1B4DFF',
          }}
          activeDot={{
            r: 6,
          }}>
          <LabelList position="top" offset={12} className="fill-primary-500" fontSize={12} />
        </Line>
      </LineChart>
    </ChartContainer>
  )
}

  `,
}

export { LabelLineChart, LabelLineChartCode }
