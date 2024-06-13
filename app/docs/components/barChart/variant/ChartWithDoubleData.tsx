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
        <Bar radius={[8, 8, 0, 0]} barSize={45} dataKey="price" fill="#0a9952" background={{ fill: '#d7f8e9' }} />
        <Bar radius={[8, 8, 0, 0]} barSize={45} dataKey="sell" fill="#1db469" background={{ fill: '#d7f8e9' }} />
        <XAxis
          className="text-body-4 font-medium text-metal-600"
          dataKey="name"
          stroke="#8897AE"
          tickSize={10}
          tickLine={false}
          strokeWidth={0.5}
        />
        <YAxis
          className="text-body-4 font-medium text-metal-600"
          tickSize={10}
          dataKey="price"
          stroke="#8897AE"
          tickLine={false}
          strokeWidth={0.5}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

const ChartWithDoubleDataCode = `
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
        <Bar radius={[8, 8, 0, 0]} barSize={45} dataKey="price" fill="#0a9952" background={{ fill: '#d7f8e9' }} />
        <Bar radius={[8, 8, 0, 0]} barSize={45} dataKey="sell" fill="#1db469" background={{ fill: '#d7f8e9' }} />
        <XAxis
          className="text-body-4 font-medium text-metal-600"
          dataKey="name"
          stroke="#8897AE"
          tickSize={10}
          tickLine={false}
          strokeWidth={0.5}
        />
        <YAxis
          className="text-body-4 font-medium text-metal-600"
          tickSize={10}
          dataKey="price"
          stroke="#8897AE"
          tickLine={false}
          strokeWidth={0.5}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
`

export { ChartWithDoubleData, ChartWithDoubleDataCode }
