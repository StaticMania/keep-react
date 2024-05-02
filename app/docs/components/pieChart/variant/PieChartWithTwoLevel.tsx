import { ChartTooltip, Pie, PieChart, ResponsiveContainer } from '../../../../src'

const PieChartWithTwoLevel = () => {
  const data01 = [
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
  const data02 = [
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
        <Pie
          cx="50%"
          cy="50%"
          outerRadius={80}
          labelLine={false}
          data={data01}
          dataKey="value"
          nameKey="name"
          innerRadius={40}
          fill="#1C222B"></Pie>
        <Pie
          cx={500}
          cy={200}
          outerRadius={80}
          labelLine={false}
          data={data02}
          dataKey="value"
          nameKey="name"
          innerRadius={40}
          fill="#1B4DFF"></Pie>

        <ChartTooltip
          contentStyle={{
            fontSize: '12px',
            textTransform: 'capitalize',
            border: '1px solid #E9EFF6',
            borderRadius: '10px',
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

const PieChartWithTwoLevelCode = `

import { Pie, PieChart, ResponsiveContainer } from 'keep-react'

export const PieChartComponent = () => {
  const data01 = [
    {
      value: 400,
      name: 'June'
    },
    {
      value: 130,
      name: 'March'
    },
    {
      value: 100,
      name: 'April'
    },
    {
      value: 200,
      name: 'May'
    },
  ]
  const data02 = [
    {
      value: 400,
      name: 'June',
    },
    {
      value: 130,
      name: 'March'
    },
    {
      value: 100,
      name: 'April'
    },
    {
      value: 200,
      name: 'May'
    },
  ]
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          cx="50%"
          cy="50%"
          outerRadius={80}
          labelLine={false}
          data={data01}
          dataKey="value"
          nameKey="name"
          innerRadius={40}
          fill="#1C222B"></Pie>
        <Pie
          cx={500}
          cy={200}
          outerRadius={80}
          labelLine={false}
          data={data02}
          dataKey="value"
          nameKey="name"
          innerRadius={40}
          fill="#1B4DFF"></Pie>

        <ChartTooltip
          contentStyle={{
            fontSize: '12px',
            textTransform: 'capitalize',
            border: '1px solid #E9EFF6',
            borderRadius: '10px',
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

`

export { PieChartWithTwoLevel, PieChartWithTwoLevelCode }
