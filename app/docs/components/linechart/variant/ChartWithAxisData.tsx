'use client'
import { LineChart } from '../../../../src'
import { LinechartData } from './DefaultLineChart'

const ChartWithAxisData = () => {
  return (
    <LineChart
      width={850}
      dataKey="price"
      chartData={LinechartData}
      showTooltip={true}
      showXAxis={true}
      showYAxis={true}
    />
  )
}

const ChartWithAxisDataCode = `
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
];

export const LineChartComponent = () => {
  return (
    <LineChart
      width={850}
      dataKey="price"
      chartData={LinechartData}
      showTooltip={true}
      showXAxis={true}
      showYAxis={true}
    />
  )
}

`
export { ChartWithAxisData, ChartWithAxisDataCode }
