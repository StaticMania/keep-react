'use client'

import { LineChart } from '../../../../src'

export const LinechartData = [
  {
    name: '2',
    price: 340,
    sell: 140,
  },
  {
    name: '4',
    price: 300,
    sell: 200,
  },
  {
    name: '6',
    price: 170,
    sell: 120,
  },
  {
    name: '8',
    price: 190,
    sell: 130,
  },
  {
    name: '10',
    price: 450,
    sell: 120,
  },
  {
    name: '12',
    price: 400,
    sell: 213,
  },
  {
    name: '14',
    price: 250,
    sell: 180,
  },
  {
    name: '16',
    price: 320,
    sell: 150,
  },
  {
    name: '18',
    price: 280,
    sell: 160,
  },
  {
    name: '20',
    price: 390,
    sell: 110,
  },
]

const DefaultLineChart = () => {
  return <LineChart height={250} width={600} dataKey="price" chartData={LinechartData} active={true} activeIndex={5} />
}

const DefaultLineChartCode = `
"use client";
import { LineChart } from "keep-react";
const LinechartData = [
  {
    name: "2",
    price: 340,
    sell: 140,
  },
  {
    name: "4",
    price: 300,
    sell: 200,
  },
  {
    name: "6",
    price: 170,
    sell: 120,
  },
  {
    name: "8",
    price: 190,
    sell: 130,
  },
  {
    name: "10",
    price: 450,
    sell: 120,
  },
  {
    name: "12",
    price: 400,
    sell: 213,
  },
  {
    name: "14",
    price: 250,
    sell: 180,
  },
  {
    name: "16",
    price: 320,
    sell: 150,
  },
  {
    name: "18",
    price: 280,
    sell: 160,
  },
  {
    name: "20",
    price: 390,
    sell: 110,
  },
  {
    name: "22",
    price: 220,
    sell: 90,
  },
  {
    name: "24",
    price: 360,
    sell: 170,
  },
  {
    name: "26",
    price: 410,
    sell: 140,
  },
  {
    name: "28",
    price: 280,
    sell: 200,
  },
  {
    name: "30",
    price: 330,
    sell: 160,
  },
];

export const LineComponent = () => {
  return (
    <LineChart height={250} width={600} dataKey="price" chartData={LinechartData} active={true} activeIndex={5} />
  );
}
`

export { DefaultLineChart, DefaultLineChartCode }
