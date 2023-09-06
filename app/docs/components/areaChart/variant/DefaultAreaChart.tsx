"use client";
import { AreaChart } from "@/src/components";
export const chartData = [
  {
    name: "1",
    price: 0,
    sell: 0,
  },
  {
    name: "2",
    price: 300,
    sell: 200,
  },
  {
    name: "3",
    price: 170,
    sell: 120,
  },
  {
    name: "4",
    price: 190,
    sell: 130,
  },
  {
    name: "5",
    price: 220,
    sell: 120,
  },
  {
    name: "6",
    price: 400,
    sell: 213,
  },
  {
    name: "7",
    price: 420,
    sell: 325,
  },
  {
    name: "8",
    price: 450,
    sell: 250,
  },
  {
    name: "9",
    price: 400,
    sell: 300,
  },
  {
    name: "10",
    price: 500,
    sell: 400,
  },
];

const DefaultAreaChart = () => {
  return <AreaChart chartData={chartData} dataKey="price" />;
};

const DefaultAreaChartCode = `
"use client";
import AreaChart from "keep-react";
const chartData = [
  {
    name: "1",
    price: 0,
    sell: 0,
  },
  {
    name: "2",
    price: 300,
    sell: 200,
  },
  {
    name: "3",
    price: 170,
    sell: 120,
  },
  {
    name: "4",
    price: 190,
    sell: 130,
  },
  {
    name: "5",
    price: 220,
    sell: 120,
  },
  {
    name: "6",
    price: 400,
    sell: 213,
  },
  {
    name: "7",
    price: 420,
    sell: 325,
  },
  {
    name: "8",
    price: 450,
    sell: 250,
  },
  {
    name: "9",
    price: 400,
    sell: 300,
  },
  {
    name: "10",
    price: 500,
    sell: 400,
  },
];

const DefaultAreaChart = () => {
  return <AreaChart chartData={chartData} dataKey="price" />;
};

export default DefaultAreaChart;


`;

export { DefaultAreaChart, DefaultAreaChartCode };
