import { Pie, PieChart, ResponsiveContainer } from '../../../../src'

const DefaultPie = () => {
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
        <Pie cx="50%" cy="50%" labelLine={false} data={data} dataKey="value" nameKey="name" fill="#1b4dff"></Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

const DefaultPieCode = {
  'ChartComponent.tsx': `
import { Pie, PieChart, ResponsiveContainer, CustomTooltip } from 'keep-react'

export const PieChartComponent = () => {
  const data = [
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
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie cx="50%" cy="50%" labelLine={false} data={data} dataKey="value" nameKey="name" fill="#1b4dff"></Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}
`,
}

export { DefaultPie, DefaultPieCode }
