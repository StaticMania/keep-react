import { Area, AreaChart, ChartTooltip, CustomTooltip, ResponsiveContainer, XAxis, YAxis } from '../../../../src'

const AreaChartType = () => {
  const data = [
    {
      name: 'Jan',
      price: 340,
      amount: 200,
    },
    {
      name: 'Feb',
      price: 300,
      amount: 180,
    },
    {
      name: 'Mar',
      price: 170,
      amount: 300,
    },
    {
      name: 'Apr',
      price: 190,
      amount: 230,
    },
    {
      name: 'May',
      price: 450,
      amount: 100,
    },
    {
      name: 'Jun',
      price: 400,
      amount: 200,
    },
    {
      name: 'Jul',
      price: 250,
      amount: 220,
    },
    {
      name: 'Aug',
      price: 320,
      amount: 240,
    },
    {
      name: 'Sep',
      price: 280,
      amount: 70,
    },
  ]
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="price" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#1B4DFF" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#1B4DFF" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="amount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#1B4DFF" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#1B4DFF" stopOpacity={0} />
          </linearGradient>
        </defs>

        <Area type="linear" dataKey="price" stroke="#1B4DFF" fillOpacity={1} fill="url(#price)" />
        <Area type="linear" dataKey="amount" stroke="#1B4DFF" fillOpacity={1} fill="url(#amount)" />

        <XAxis
          className="text-body-4 font-medium text-metal-600"
          dataKey="name"
          stroke="#8897AE"
          strokeWidth={0.5}
          dy={12}
        />
        <YAxis
          className="text-body-4 font-medium text-metal-600"
          dx={-12}
          dataKey="price"
          stroke="#8897AE"
          strokeWidth={0.5}
        />
        <ChartTooltip content={<CustomTooltip />} />
      </AreaChart>
    </ResponsiveContainer>
  )
}

const AreaChartTypeCode = {
  'ChartComponent.tsx': `
import { Area, AreaChart, ChartTooltip, CustomTooltip, ResponsiveContainer, XAxis, YAxis } from 'keep-react'

export const AreaChartComponent = () => {
  const data = [
    {
      name: 'Jan',
      price: 340,
      amount: 200,
    },
    {
      name: 'Feb',
      price: 300,
      amount: 180,
    },
    {
      name: 'Mar',
      price: 170,
      amount: 300,
    },
    {
      name: 'Apr',
      price: 190,
      amount: 230,
    },
    {
      name: 'May',
      price: 450,
      amount: 100,
    },
    {
      name: 'Jun',
      price: 400,
      amount: 200,
    },
    {
      name: 'Jul',
      price: 250,
      amount: 220,
    },
    {
      name: 'Aug',
      price: 320,
      amount: 240,
    },
    {
      name: 'Sep',
      price: 280,
      amount: 70,
    },
  ]
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="price" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#1B4DFF" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#1B4DFF" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="amount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#1B4DFF" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#1B4DFF" stopOpacity={0} />
          </linearGradient>
        </defs>

        <Area type="linear" dataKey="price" stroke="#1B4DFF" fillOpacity={1} fill="url(#price)" />
        <Area type="linear" dataKey="amount" stroke="#1B4DFF" fillOpacity={1} fill="url(#amount)" />

        <XAxis
          className="text-body-4 font-medium text-metal-600"
          dataKey="name"
          stroke="#8897AE"
          strokeWidth={0.5}
          dy={12}
        />
        <YAxis
          className="text-body-4 font-medium text-metal-600"
          dx={-12}
          dataKey="price"
          stroke="#8897AE"
          strokeWidth={0.5}
        />
        <ChartTooltip content={<CustomTooltip />} />
      </AreaChart>
    </ResponsiveContainer>
  )
}
`,
}

export { AreaChartType, AreaChartTypeCode }
