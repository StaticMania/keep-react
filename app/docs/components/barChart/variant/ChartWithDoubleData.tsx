"use client";
import BarChart from "@/src/components/Chart/BarChart";
import { BarChartData } from "./DefaultBarChart";

const ChartWithDoubleData = () => {
  return (
    <BarChart
      height={250}
      width={700}
      active
      activeIndex={5}
      dataKey="price"
      chartData={BarChartData}
      barRadius={20}
      showLegend
      showBackGround
      showXaxis
      showYaxis
      showTooltip
      secondaryDataKey="sell"
    />
  );
};

const ChartWithDoubleDataCode = `
"use client";
import {BarChart} from "keep-react";
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

const ChartWithDoubleData = () => {
  return (
    <BarChart
      height={250}
      width={700}
      active
      activeIndex={5}
      dataKey="price"
      chartData={BarChartData}
      barRadius={20}
      showLegend
      showBackGround
      showXaxis
      showYaxis
      showTooltip
      secondaryDataKey="sell"
    />
  );
};

export default ChartWithDoubleData;
`;

export { ChartWithDoubleData, ChartWithDoubleDataCode };
