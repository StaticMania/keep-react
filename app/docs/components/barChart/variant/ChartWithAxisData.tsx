'use client'
import { BarChart } from '../../../../src'
import { BarChartData } from './DefaultBarChart'

const ChartWithAxisData = () => {
  return (
    <BarChart
      height={250}
      width={600}
      dataKey="price"
      chartData={BarChartData}
      showBg={true}
      activeIndex={5}
      showTooltip={true}
      showXAxis={true}
      showYAxis={true}
    />
  )
}

const ChartWithAxisDataCode = `
"use client";
import { BarChart } from "keep-react";
const BarChartData = [
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

export const BarComponent = () => {
  return (
    <BarChart
      height={250}
      width={600}
      dataKey="price"
      chartData={BarChartData}
      showBg={true}
      activeIndex={5}
      showTooltip={true}
      showXAxis={true}
      showYAxis={true}
    />
  )
}

`
export { ChartWithAxisData, ChartWithAxisDataCode }
