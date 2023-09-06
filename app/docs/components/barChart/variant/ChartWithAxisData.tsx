"use client";
import { BarChart } from "@/src/components";
import { BarChartData } from "./DefaultBarChart";

const ChartWithAxisData = () => {
  return (
    <BarChart
      height={250}
      width={500}
      dataKey="price"
      chartData={BarChartData}
      barRadius={20}
      showLegend={true}
      showBackGround={true}
      showXaxis={true}
      showYaxis={true}
      active={true}
      activeIndex={5}
      activeColor="#1B4DFF"
      inActiveColor="#94ABFF"
      showTooltip={true}
    />
  );
};

const ChartWithAxisDataCode = `
"use client";
import BarChart from "keep-react";
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

const ChartWithAxisData = () => {
  return (
    <BarChart
      height={250}
      width={500}
      dataKey="price"
      chartData={BarChartData}
      barRadius={20}
      showLegend={true}
      showBackGround={true}
      showXaxis={true}
      showYaxis={true}
      active={true}
      activeIndex={5}
      activeColor="#1B4DFF"
      inActiveColor="#94ABFF"
      showTooltip={true}
    />
  );
};

export default ChartWithAxisData;
`;
export { ChartWithAxisData, ChartWithAxisDataCode };
