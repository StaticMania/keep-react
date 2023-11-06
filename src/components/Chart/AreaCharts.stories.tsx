import type { Meta, StoryObj } from "@storybook/react";
import { AreaChart } from "./AreaChart";

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

const meta: Meta<typeof AreaChart> = {
  component: AreaChart,
  tags: ["autodocs"],
  argTypes: {
    chartData: {
      description:
        "Chart data is an array of object. Where every object has three property. name,price and sell. Price and sell is our data key. You can choose your data key from your choosen array of object.",
      table: {
        type: { summary: "Array" },
      },
      control: { type: null },
    },
    dataKey: {
      description: "Chart data key",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "price" },
      },
    },
    secondaryDataKey: {
      description:
        "Chart secondary data key, If you want to show two chart,then you need to pass your secondary data key.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "sell" },
      },
    },
    chartType: {
      description: "Available chart type",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "linear" },
      },
      control: { type: "radio" },
      options: ["linear", "natural"],
    },
    showTooltip: {
      description: "Chart tooltip show or not?",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    showXaxis: {
      description: "Chart X Axis data show or not?",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    showYaxis: {
      description: "Chart Y Axis data show or not?",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    showGridLine: {
      description: "Chart grid line show or not?",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AreaChart>;

export const DefaultAreaChart: Story = {
  args: {
    chartData: chartData,
    dataKey: "price",
    secondaryDataKey: "",
    chartType: "linear",
    showTooltip: false,
    showXaxis: false,
    showYaxis: false,
    showGridLine: false,
  },
};

export const ChartWithTooltip: Story = {
  args: {
    ...DefaultAreaChart.args,
    showTooltip: true,
  },
};
export const ChartWithGraphLine: Story = {
  args: {
    ...ChartWithTooltip.args,
    showXaxis: true,
    showYaxis: true,
  },
};
export const ChartWithGridAndGraphLine: Story = {
  args: {
    ...ChartWithGraphLine.args,
    showGridLine: true,
  },
};

export const ChartWithDoubleSeries: Story = {
  args: {
    ...ChartWithTooltip.args,
    secondaryDataKey: "sell",
  },
};
export const ChartWithDoubleSeriesAndGraphLine: Story = {
  args: {
    ...ChartWithDoubleSeries.args,
    showXaxis: true,
    showYaxis: true,
  },
};

export const ChartWithGridlineAndGraphline: Story = {
  args: {
    ...ChartWithDoubleSeries.args,
    showGridLine: true,
    showXaxis: true,
    showYaxis: true,
  },
};

export const ChartWithSmoothline: Story = {
  args: {
    ...DefaultAreaChart.args,
    chartType: "natural",
  },
};
export const ChartWithSmoothlineWithTooltip: Story = {
  args: {
    ...ChartWithSmoothline.args,
    showTooltip: true,
  },
};
export const ChartWithSmoothlineWithGraphLine: Story = {
  args: {
    ...ChartWithSmoothlineWithTooltip.args,
    showXaxis: true,
    showYaxis: true,
  },
};
export const ChartWithSmoothlineWithGraphLineAndGridLine: Story = {
  args: {
    ...ChartWithSmoothlineWithGraphLine.args,
    showGridLine: true,
  },
};

export const ChartWithSmoothlineDoubleSeries: Story = {
  args: {
    ...ChartWithSmoothlineWithTooltip.args,
    secondaryDataKey: "sell",
  },
};
export const ChartWithSmoothlineDoubleSeriesAndGraphLine: Story = {
  args: {
    ...ChartWithSmoothlineDoubleSeries.args,
    showXaxis: true,
    showYaxis: true,
  },
};
export const ChartWithSmoothlineDoubleSeriesAndGridLine: Story = {
  args: {
    ...ChartWithSmoothlineDoubleSeriesAndGraphLine.args,
    showGridLine: true,
  },
};
