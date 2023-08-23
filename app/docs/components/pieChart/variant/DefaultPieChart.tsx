"use client";

import PieChart from "@/src/components/Chart/PieChart";

export const pieChartData = [
  {
    name: "Group A",
    price: 350,
  },
  {
    name: "Group B",
    price: 300,
  },
  {
    name: "Group C",
    price: 300,
  },
  {
    name: "Group D",
    price: 200,
  },
];

const DefaultPieChart = () => {
  return <PieChart chartData={pieChartData} dataKey="price" />;
};

const DefaultPieChartCode = `
"use client";
import PieChart from "keep-design";

const pieChartData = [
  {
    name: "Group A",
    price: 350,
  },
  {
    name: "Group B",
    price: 300,
  },
  {
    name: "Group C",
    price: 300,
  },
  {
    name: "Group D",
    price: 200,
  },
];

const DefaultPieChart = () => {
  return <PieChart chartData={pieChartData} dataKey="price" />;
};

export default DefaultPieChart;
`;

export { DefaultPieChart, DefaultPieChartCode };
