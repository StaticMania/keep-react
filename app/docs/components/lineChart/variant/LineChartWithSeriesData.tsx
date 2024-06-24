import {
  CartesianGrid,
  ChartTooltip,
  CustomTooltip,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from '../../../../src'

const LineChartWithSeriesData = () => {
  const data = [
    {
      name: 'A',
      price: 0,
      sell: 0,
    },
    {
      name: 'B',
      price: 120,
      sell: 200,
    },
    {
      name: 'C',
      price: 300,
      sell: 240,
    },
    {
      name: 'D',
      price: 500,
      sell: 230,
    },
    {
      name: 'E',
      price: 130,
      sell: 200,
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
        <CartesianGrid stroke="#F0F3F9" strokeDasharray="2" />
        <Line type="natural" dataKey="price" stroke="#8897AE" />
        <Line type="natural" dataKey="sell" stroke="#8897AE" />
        <ChartTooltip content={<CustomTooltip />} />
      </LineChart>
    </ResponsiveContainer>
  )
}

const LineChartWithSeriesDataCode = `
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis , ChartTooltip, CustomTooltip} from 'keep-react'

export const LineChartComponent = () => {
  const data = [
    {
      name: 'A',
      price: 0,
      sell: 0,
    },
    {
      name: 'B',
      price: 120,
      sell: 200,
    },
    {
      name: 'C',
      price: 300,
      sell: 240,
    },
    {
      name: 'D',
      price: 500,
      sell: 230,
    },
    {
      name: 'E',
      price: 130,
      sell: 200,
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
        <CartesianGrid stroke="#F0F3F9" strokeDasharray="2" />
        <Line type="natural" dataKey="price" stroke="#8897AE" />
        <Line type="natural" dataKey="sell" stroke="#8897AE" />
        <ChartTooltip content={<CustomTooltip />} />
      </LineChart>
    </ResponsiveContainer>
  )
}


`

export { LineChartWithSeriesData, LineChartWithSeriesDataCode }
