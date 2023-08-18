import { FC } from "react";
import { Pie, PieChart as PieChartCom } from "recharts";

interface PieChartProps {
  chartType?: "fill" | "normal";
  chartData: unknown[];
  dataKey: string;
  color?: string;
  innerRadius?: number;
  outerRadius?: number;
  height?: number;
  width?: number;
  paddingAngle?: number;
  showLavel?: boolean;
}

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: {
  cx: any;
  cy: any;
  midAngle: any;
  innerRadius: any;
  outerRadius: any;
  percent: any;
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChart: FC<PieChartProps> = ({
  chartData,
  dataKey,
  color = "#1B4DFF",
  innerRadius = 60,
  outerRadius = 90,
  showLavel = false,
  height = 300,
  width = 300,
  chartType,
  paddingAngle = 0,
}) => {
  return (
    <PieChartCom width={width} height={height}>
      {chartType === "fill" ? (
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill={color}
          dataKey={dataKey}
          paddingAngle={paddingAngle}
        ></Pie>
      ) : (
        <Pie
          data={chartData}
          dataKey={dataKey}
          cx="50%"
          cy="50%"
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          fill={color}
          label={showLavel}
          paddingAngle={paddingAngle}
        />
      )}
    </PieChartCom>
  );
};

export default PieChart;
