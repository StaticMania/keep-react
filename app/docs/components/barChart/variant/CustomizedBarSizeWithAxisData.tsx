'use client'
import { BarChart } from '../../../../src'
import { BarChartData } from './DefaultBarChart'

const CustomizedBarSizeWithAxisData = () => {
  return (
    <BarChart
      height={250}
      width={500}
      barSize={30}
      dataKey="price"
      secondaryDataKey="sell"
      barRadius={[4, 4, 0, 0]}
      chartData={BarChartData.slice(0, 5)}
      showBg={true}
      showLegend={true}
      showTooltip={true}
      showXaxis={true}
      showYaxis={true}
    />
  )
}

const CustomizedBarSizeWithAxisDataCode = `
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
  
];

export const BarComponent = () => {
  return (
    <BarChart
      height={250}
      width={500}
      barSize={30}
      barRadius={[4, 4, 0, 0]}
      dataKey="price"
      secondaryDataKey="sell"
      chartData={BarChartData}
      showBg={true}
      showLegend={true}
      showTooltip={true}
      showXaxis={true}
      showYaxis={true}
    />
  );
}
`

export { CustomizedBarSizeWithAxisData, CustomizedBarSizeWithAxisDataCode }
