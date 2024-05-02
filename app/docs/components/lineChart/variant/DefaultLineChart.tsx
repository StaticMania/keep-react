import { CartesianGrid, ChartTooltip, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from '../../../../src'

const DefaultLineChart = () => {
  const data = [
    {
      name: 'A',
      price: 0,
    },
    {
      name: 'B',
      price: 120,
    },
    {
      name: 'C',
      price: 300,
    },
    {
      name: 'D',
      price: 500,
    },
    {
      name: 'E',
      price: 130,
    },
  ]
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis
          className="text-body-4 font-medium text-metal-600"
          dataKey="name"
          stroke="#8897AE"
          strokeWidth={0.5}
          tickSize={10}
        />
        <YAxis
          className="text-body-4 font-medium text-metal-600"
          tickSize={10}
          dataKey="price"
          stroke="#8897AE"
          strokeWidth={0.5}
        />
        <ChartTooltip
          contentStyle={{
            fontSize: '12px',
            textTransform: 'capitalize',
            border: '1px solid #E9EFF6',
            borderRadius: '10px',
          }}
        />
        <CartesianGrid stroke="#F0F3F9" strokeDasharray="2" />
        <Line type="natural" dataKey="price" stroke="#8897AE" />
      </LineChart>
    </ResponsiveContainer>
  )
}

const DefaultLineChartCode = `
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis, ChartTooltip } from 'keep-react'

export const LineChartComponent = () => {
  const data = [
    {
      name: 'A',
      price: 0,
    },
    {
      name: 'B',
      price: 120,
    },
    {
      name: 'C',
      price: 300,
    },
    {
      name: 'D',
      price: 500,
    },
    {
      name: 'E',
      price: 130,
    },
  ]
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis
          className="text-body-4 font-medium text-metal-600"
          dataKey="name"
          stroke="#8897AE"
          strokeWidth={0.5}
          tickSize={10}
        />
        <YAxis
          className="text-body-4 font-medium text-metal-600"
          tickSize={10}
          dataKey="price"
          stroke="#8897AE"
          strokeWidth={0.5}
        />
        <ChartTooltip
          contentStyle={{
            fontSize: '12px',
            textTransform: 'capitalize',
            border: '1px solid #E9EFF6',
            borderRadius: '10px',
          }}
        />
        <CartesianGrid stroke="#F0F3F9" strokeDasharray="2" />
        <Line type="natural" dataKey="price" stroke="#8897AE" />
      </LineChart>
    </ResponsiveContainer>
  )
}

`

export { DefaultLineChart, DefaultLineChartCode }
