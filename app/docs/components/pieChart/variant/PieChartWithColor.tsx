import { Cell, ChartTooltip, CustomTooltip, Pie, PieChart, ResponsiveContainer } from '../../../../src'

const PieChartWithColor = () => {
  const data = [
    {
      value: 400,
      name: 'June',
      color: '#1C222B',
    },
    {
      value: 130,
      name: 'March',
      color: '#B4C4FF',
    },
    {
      value: 100,
      name: 'April',
      color: '#7DFEB9',
    },
    {
      value: 200,
      name: 'May',
      color: '#FFA19B',
    },
  ]
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie cx="50%" cy="50%" labelLine={false} data={data} dataKey="value" nameKey="name" fill="#1C222B">
          {data.map((item, index) => (
            <Cell key={`cell-${index}`} fill={item.color} />
          ))}
        </Pie>
        <ChartTooltip content={<CustomTooltip />} />
      </PieChart>
    </ResponsiveContainer>
  )
}

const PieChartWithColorCode = `
import { Cell, ChartTooltip, Pie, PieChart, ResponsiveContainer, CustomTooltip } from 'keep-react'

export const PieChartComponent = () => {
  const data = [
    {
      value: 400,
      name: 'June',
      color: '#1C222B',
    },
    {
      value: 130,
      name: 'March',
      color: '#B4C4FF',
    },
    {
      value: 100,
      name: 'April',
      color: '#7DFEB9',
    },
    {
      value: 200,
      name: 'May',
      color: '#FFA19B',
    },
  ]
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie cx="50%" cy="50%" labelLine={false} data={data} dataKey="value" nameKey="name" fill="#1C222B">
          {data.map((item, index) => (
            <Cell key={index} fill={item.color} />
          ))}
        </Pie>
        <ChartTooltip content={<CustomTooltip />} />
      </PieChart>
    </ResponsiveContainer>
  )
}
`

export { PieChartWithColor, PieChartWithColorCode }
