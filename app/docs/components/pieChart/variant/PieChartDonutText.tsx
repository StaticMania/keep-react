'use client'
import { useMemo } from 'react'
import { Label, Pie, PieChart } from 'recharts'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '../../../../src'

const chartData = [
  { browser: 'chrome', visitors: 275, fill: '#3CAAFA' },
  { browser: 'safari', visitors: 200, fill: '#9631F5' },
  { browser: 'firefox', visitors: 187, fill: '#38D6EF' },
  { browser: 'edge', visitors: 173, fill: '#D638EE' },
  { browser: 'other', visitors: 90, fill: '#afbaca' },
]
const PieChartDonutText = () => {
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

  const totalVisitors = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <ChartContainer config={chartConfig} className="h-[300px]">
      <PieChart>
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Pie data={chartData} dataKey="visitors" nameKey="browser" innerRadius={60} strokeWidth={5}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                return (
                  <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                    <tspan x={viewBox.cx} y={viewBox.cy} className="fill-metal-900 text-3xl font-bold dark:fill-white">
                      {totalVisitors.toLocaleString()}
                    </tspan>
                    <tspan x={viewBox.cx} y={(viewBox.cy ?? 0) + 24} className="fill-metal-900 dark:fill-white">
                      Visitors
                    </tspan>
                  </text>
                )
              }
            }}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  )
}

const PieChartDonutTextCode = {
  'PieChart.tsx': `'use client'
import { useMemo } from 'react'
import { Label, Pie, PieChart } from 'recharts'
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

  const totalVisitors = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <ChartContainer config={chartConfig} className="h-[300px]">
      <PieChart>
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Pie data={chartData} dataKey="visitors" nameKey="browser" innerRadius={60} strokeWidth={5}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                return (
                  <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                    <tspan x={viewBox.cx} y={viewBox.cy} className="fill-metal-900 text-3xl font-bold dark:fill-white">
                      {totalVisitors.toLocaleString()}
                    </tspan>
                    <tspan x={viewBox.cx} y={(viewBox.cy ?? 0) + 24} className="fill-metal-900 dark:fill-white">
                      Visitors
                    </tspan>
                  </text>
                )
              }
            }}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  )
}`,
}

export { PieChartDonutText, PieChartDonutTextCode }
