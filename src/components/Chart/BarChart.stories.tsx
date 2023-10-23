import type { Meta, StoryObj } from "@storybook/react";
import { BarChart } from "./BarChart";
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
const meta: Meta<typeof BarChart> = {
  component: BarChart,
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
    XAxisDataKey: {
      description: "Chart X Axis data key",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    YAxisDataKey: {
      description: "Chart X Axis data key",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
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
    showBg: {
      description: "Chart bar background color show or not?",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    showLegend: {
      description: "Chart bar legend show or not?",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    active: {
      description: "Chart bar active bar show or not?",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    barSize: {
      description: "Chart bar size",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 6 },
      },
    },
    barRadius: {
      description: "Chart bar Border Radius",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 0 },
      },
    },
    height: {
      description: "Chart height",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 300 },
      },
    },
    width: {
      description: "Chart width",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 600 },
      },
    },

    activeColor: {
      description: "Chart bar active bar color",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    inActiveColor: {
      description: "Chart bar inactive bar color",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    secondaryBarBg: {
      description: "Chart secondary background color",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "#D7FFEB" },
      },
    },
    barColor: {
      description: "Chart bar color",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "#1B4DFF" },
      },
    },
    secondaryBarColor: {
      description: "Chart secondary bar color",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "#1DB469" },
      },
    },
    activeIndex: {
      description: "Chart bar active index",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 4 },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BarChart>;

export const DefaultBarChart: Story = {
  args: {
    chartData: BarChartData,
    dataKey: "price",
    secondaryDataKey: "",
    barSize: 6,
    barRadius: 0,
    height: 300,
    width: 600,
    showTooltip: false,
    showXaxis: false,
    showYaxis: false,
    showGridLine: false,
    showBg: false,
    secondaryBarBg: "",
    barColor: "#1B4DFF",
    secondaryBarColor: "#1DB469",
    showLegend: false,
    active: false,
    activeColor: "",
    inActiveColor: "",
    activeIndex: 4,
    XAxisDataKey: "",
    YAxisDataKey: "",
  },
};

export const ChartWithTooltip: Story = {
  args: {
    ...DefaultBarChart.args,
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
    ...DefaultBarChart.args,
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
export const CustomizedChartBarSize: Story = {
  args: {
    height: 250,
    width: 500,
    dataKey: "price",
    chartData: BarChartData.slice(0, 10),
    barSize: 20,
  },
};
export const CustomizedBarSizeAndBackgroundColorAndLegend: Story = {
  args: {
    ...CustomizedChartBarSize.args,
    showBg: true,
    showLegend: true,
  },
};
export const CustomizedBarSizeAndTooltip: Story = {
  args: {
    ...CustomizedBarSizeAndBackgroundColorAndLegend.args,
    showTooltip: true,
  },
};
export const CustomizedBarSizeAndXaxisData: Story = {
  args: {
    ...CustomizedBarSizeAndTooltip.args,
    showXaxis: true,
  },
};
export const CustomizedBarSizeAndXYAxisData: Story = {
  args: {
    ...CustomizedBarSizeAndXaxisData.args,
    showYaxis: true,
  },
};
export const CustomizedBarSizeAndGridLine: Story = {
  args: {
    ...CustomizedBarSizeAndXYAxisData.args,
    showGridLine: true,
  },
};
export const CustomizedBarSizeWithDoubleData: Story = {
  args: {
    ...CustomizedBarSizeAndGridLine.args,
    secondaryDataKey: "sell",
  },
};
export const DoubleSeriesData: Story = {
  args: {
    height: 250,
    width: 500,
    dataKey: "price",
    chartData: BarChartData.slice(0, 6),
    barSize: 30,
    secondaryDataKey: "sell",
    barRadius: 5,
  },
};
export const DoubleSeriesWithLegendAndTooltip: Story = {
  args: {
    ...DoubleSeriesData.args,
    showLegend: true,
    showTooltip: true,
  },
};
export const DoubleSeriesWithBackgroundColor: Story = {
  args: {
    ...DoubleSeriesWithLegendAndTooltip.args,
    showBg: true,
  },
};
export const DoubleSeriesWithXYAxisData: Story = {
  args: {
    ...DoubleSeriesWithBackgroundColor.args,
    showXaxis: true,
    showYaxis: true,
  },
};
export const DoubleSeriesWithGridLine: Story = {
  args: {
    ...DoubleSeriesWithXYAxisData.args,
    showGridLine: true,
  },
};
