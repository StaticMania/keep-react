'use client'
import { LabelList, Pie, PieChart } from 'recharts'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '../../../../src'

const PieChartCustomLabel = () => {
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
    <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
      <PieChart>
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Pie data={chartData} dataKey="visitors" label nameKey="browser">
          <LabelList
            dataKey="browser"
            className="fill-white"
            stroke="none"
            fontSize={12}
            formatter={(value: keyof typeof chartConfig) => chartConfig[value]?.label}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  )
}

const PieChartCustomLabelCode = {
  'PieChart.tsx': `'use client'
import { LabelList, Pie, PieChart } from 'recharts'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from 'keep-react'

export const PieChartComponent = () => {
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
    <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
      <PieChart>
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Pie data={chartData} dataKey="visitors" label nameKey="browser">
          <LabelList
            dataKey="browser"
            className="fill-white"
            stroke="none"
            fontSize={12}
            formatter={(value: keyof typeof chartConfig) => chartConfig[value]?.label}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  )
}
`,
}

export { PieChartCustomLabel, PieChartCustomLabelCode }
