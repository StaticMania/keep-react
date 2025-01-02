'use client'
import { Pie, PieChart } from 'recharts'
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '../../../../src'

const PieChartLegend = () => {
  const chartData = [
    { browser: 'chrome', visitors: 275, fill: '#3CAAFA' },
    { browser: 'safari', visitors: 200, fill: '#9631F5' },
    { browser: 'firefox', visitors: 187, fill: '#38D6EF' },
    { browser: 'edge', visitors: 173, fill: '#D638EE' },
    { browser: 'other', visitors: 90, fill: '#afbaca' },
  ]
  const chartConfig = {
    visitors: {
      label: 'Visitors',
    },
    chrome: {
      label: 'Chrome',
      color: '#3CAAFA',
    },
    safari: {
      label: 'Safari',
      color: '#9631F5',
    },
    firefox: {
      label: 'Firefox',
      color: '#38D6EF',
    },
    edge: {
      label: 'Edge',
      color: '#D638EE',
    },
    other: {
      label: 'Other',
      color: '#afbaca',
    },
  } satisfies ChartConfig

  return (
    <ChartContainer config={chartConfig} className="h-[300px]">
      <PieChart>
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Pie data={chartData} dataKey="visitors" nameKey="browser"></Pie>
        <ChartLegend
          content={<ChartLegendContent nameKey="browser" />}
          className="-translate-y-2 flex-wrap justify-center gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
        />
      </PieChart>
    </ChartContainer>
  )
}

const PieChartLegendCode = {
  'PieChart.tsx': `'use client'
import { Pie, PieChart } from 'recharts'
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from 'keep-react'

const PieChartLegend = () => {
  const chartData = [
    { browser: 'chrome', visitors: 275, fill: '#3CAAFA' },
    { browser: 'safari', visitors: 200, fill: '#9631F5' },
    { browser: 'firefox', visitors: 187, fill: '#38D6EF' },
    { browser: 'edge', visitors: 173, fill: '#D638EE' },
    { browser: 'other', visitors: 90, fill: '#afbaca' },
  ]
  const chartConfig = {
    visitors: {
      label: 'Visitors',
    },
    chrome: {
      label: 'Chrome',
      color: '#3CAAFA',
    },
    safari: {
      label: 'Safari',
      color: '#9631F5',
    },
    firefox: {
      label: 'Firefox',
      color: '#38D6EF',
    },
    edge: {
      label: 'Edge',
      color: '#D638EE',
    },
    other: {
      label: 'Other',
      color: '#afbaca',
    },
  } satisfies ChartConfig

  return (
    <ChartContainer config={chartConfig} className="h-[300px]">
      <PieChart>
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Pie data={chartData} dataKey="visitors" nameKey="browser"></Pie>
        <ChartLegend
          content={<ChartLegendContent nameKey="browser" />}
          className="-translate-y-2 flex-wrap justify-center gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
        />
      </PieChart>
    </ChartContainer>
  )
}`,
}

export { PieChartLegend, PieChartLegendCode }
