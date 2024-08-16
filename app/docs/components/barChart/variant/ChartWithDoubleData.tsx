import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from '../../../../src'

const ChartWithDoubleData = () => {
  const data = [
    {
      name: 'A',
      price: 340,
      sell: 140,
    },
    {
      name: 'B',
      price: 300,
      sell: 200,
    },
    {
      name: 'C',
      price: 170,
      sell: 120,
    },
    {
      name: 'D',
      price: 190,
      sell: 130,
    },
    {
      name: 'E',
      price: 450,
      sell: 120,
    },
    {
      name: 'F',
      price: 400,
      sell: 213,
    },
  ]
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} barGap={10}>
        <Bar radius={[8, 8, 0, 0]} barSize={40} dataKey="price" className="fill-primary-500 dark:fill-primary-600" />
        <Bar radius={[8, 8, 0, 0]} barSize={40} dataKey="sell" className="fill-primary-100 dark:fill-primary-100" />
        <XAxis
          className="text-body-4 font-medium text-metal-600"
          dataKey="name"
          stroke="#afbaca"
          tickSize={10}
          tickLine={false}
          strokeWidth={0.5}
        />
        <YAxis
          className="text-body-4 font-medium text-metal-600"
          tickSize={10}
          dataKey="price"
          stroke="#afbaca"
          tickLine={false}
          strokeWidth={0.5}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

const ChartWithDoubleDataCode = {
  'ChartComponent.tsx': `
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'keep-react'

export const BarChartComponent = () => {
  const data = [
    {
      name: 'A',
      price: 340,
      sell: 140,
    },
    {
      name: 'B',
      price: 300,
      sell: 200,
    },
    {
      name: 'C',
      price: 170,
      sell: 120,
    },
    {
      name: 'D',
      price: 190,
      sell: 130,
    },
    {
      name: 'E',
      price: 450,
      sell: 120,
    },
    {
      name: 'F',
      price: 400,
      sell: 213,
    },
  ]
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} barGap={10}>
        <Bar radius={[8, 8, 0, 0]} barSize={40} dataKey="price" className="fill-primary-500 dark:fill-primary-600" />
        <Bar radius={[8, 8, 0, 0]} barSize={40} dataKey="sell" className="fill-primary-100 dark:fill-primary-100" />
        <XAxis
          className="text-body-4 font-medium text-metal-600"
          dataKey="name"
          stroke="#afbaca"
          tickSize={10}
          tickLine={false}
          strokeWidth={0.5}
        />
        <YAxis
          className="text-body-4 font-medium text-metal-600"
          tickSize={10}
          dataKey="price"
          stroke="#afbaca"
          tickLine={false}
          strokeWidth={0.5}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
`,
}

export { ChartWithDoubleData, ChartWithDoubleDataCode }
