import { Bar, BarChart, ResponsiveContainer } from '../../../../src'

const DefaultBarChart = () => {
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
      price: 250,
      sell: 120,
    },
    {
      name: 'D',
      price: 200,
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
    {
      name: 'G',
      price: 340,
      sell: 140,
    },
    {
      name: 'H',
      price: 300,
      sell: 200,
    },
    {
      name: 'I',
      price: 250,
      sell: 120,
    },
    {
      name: 'J',
      price: 200,
      sell: 130,
    },
  ]
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <Bar
          radius={[8, 8, 0, 0]}
          barSize={32}
          dataKey="price"
          fill="#1C222B"
          background={{ fill: '#F0F3F9', radius: 6 }}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

const DefaultBarChartCode = `
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
      <BarChart data={data}>
        <Bar
          radius={[8,8, 0, 0]}
          barSize={32}
          dataKey="price"
          fill="#1C222B"
          background={{ fill: '#F0F3F9', radius: 6 }}
        />
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

export { DefaultBarChart, DefaultBarChartCode }
