import { FC } from "react";
import {
  Area,
  AreaChart as AreaChartCom,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CustomTooltip } from "./CustomTooltip";

interface AreaChartProps {
  showTooltip?: boolean;
  showGridLine?: boolean;
  chartType?: "natural" | "linear";
  showXaxis?: boolean;
  showYaxis?: boolean;
  dataKey: string;
  secondaryDataKey?: string;
  XAxisDataKey?: string;
  YAxisDataKey?: string;
  chartData?: unknown[];
}

export const AreaChart: FC<AreaChartProps> = ({
  showGridLine = false,
  showTooltip = false,
  chartType = "linear",
  showXaxis = false,
  showYaxis = false,
  secondaryDataKey,
  XAxisDataKey,
  dataKey,
  YAxisDataKey,
  chartData,
}) => {
  const RenderLineChart = (
    <ResponsiveContainer width="100%" height={350} className="mx-auto">
      <AreaChartCom
        data={chartData}
        margin={{
          top: 10,
          right: 10,
          left: 0,
          bottom: 10,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1B4DFF" stopOpacity={0.2} />
            <stop offset="100%" stopColor="#1B4DFF" stopOpacity={0} />
          </linearGradient>
          {secondaryDataKey && (
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1B4DFF" stopOpacity={0.1} />
              <stop offset="100%" stopColor="#1B4DFF" stopOpacity={0} />
            </linearGradient>
          )}
        </defs>
        {showXaxis && (
          <XAxis
            axisLine={false}
            dataKey={XAxisDataKey}
            strokeDasharray="4 4"
            tickSize={20}
            tickLine={false}
          />
        )}
        {showYaxis && (
          <YAxis
            axisLine={false}
            dataKey={YAxisDataKey}
            strokeDasharray="4 4"
            tickLine={false}
            tickSize={10}
          />
        )}
        {showGridLine && (
          <CartesianGrid
            strokeDasharray="4 4"
            fill="#E9EFF6"
            y={800}
            fillOpacity={0.6}
          />
        )}
        <Area
          type={chartType}
          dataKey={dataKey}
          stroke="#1B4DFF"
          fillOpacity={1}
          fill="url(#colorUv)"
        />

        {showTooltip && <Tooltip cursor={false} content={<CustomTooltip />} />}
        {secondaryDataKey && (
          <Area
            type={chartType}
            dataKey={secondaryDataKey}
            stroke="#94ABFF"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        )}
      </AreaChartCom>
    </ResponsiveContainer>
  );

  return <>{RenderLineChart}</>;
};
