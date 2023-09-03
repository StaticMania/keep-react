import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { DatePicker } from ".";
import { rangePicker } from "./DatePickerContext";

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  tags: ["autodocs"],
  argTypes: {
    showTwoMonth: {
      description: "Two month calendar show or not?",
      control: {
        type: "radio",
      },
    },
    rangeDate: {
      description: "Date picker range date function",
      table: {
        type: { summary: "SetState" },
      },
    },
    singleDatePicker: {
      description: "Date picker single date function",
      table: {
        type: { summary: "SetState" },
      },
    },
    monthPicker: {
      description: "Month picker function",
      table: {
        type: { summary: "SetState" },
      },
    },
    yearPicker: {
      description: "Year picker function",
      table: {
        type: { summary: "SetState" },
      },
    },
    timePicker: {
      description: "Time picker function",
      table: {
        type: { summary: "SetState" },
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="mb-96">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

const DefaultDatePickerComponent = () => {
  const [date, setDate] = useState<Date | null>(null);
  console.log(date);
  return (
    <div className="w-2/6">
      <DatePicker singleDatePicker={setDate}>
        <DatePicker.SingleDate />
      </DatePicker>
    </div>
  );
};
const DatePickerWithTwoMonthComponent = () => {
  const [date, setDate] = useState<Date | null>(null);
  console.log(date);
  return (
    <div className="w-2/6">
      <DatePicker showTwoMonth singleDatePicker={setDate}>
        <DatePicker.SingleDate />
      </DatePicker>
    </div>
  );
};
const DateRangePickerComponent = () => {
  const [rangeDate, setRangeDate] = useState<rangePicker>();
  console.log(rangeDate);
  return (
    <div className="w-2/6">
      <DatePicker rangeDate={setRangeDate}>
        <DatePicker.Range />
      </DatePicker>
    </div>
  );
};
const DateRangePickerWithTwoMonthComponent = () => {
  const [rangeDate, setRangeDate] = useState<rangePicker>();
  console.log(rangeDate);
  return (
    <div className="w-2/6">
      <DatePicker showTwoMonth rangeDate={setRangeDate}>
        <DatePicker.Range />
      </DatePicker>
    </div>
  );
};
const MonthPickerComponent = () => {
  const [monthPicker, setMonthPicker] = useState<Date | null | string>();
  console.log({ monthPicker });
  return (
    <div className="w-2/6">
      <DatePicker monthPicker={setMonthPicker}>
        <DatePicker.Month />
      </DatePicker>
    </div>
  );
};
const YearPickerComponent = () => {
  const [yearPicker, setYearPicker] = useState<number | Date | null>();
  console.log({ yearPicker });
  return (
    <div className="w-2/6">
      <DatePicker yearPicker={setYearPicker}>
        <DatePicker.Year />
      </DatePicker>
    </div>
  );
};
const TimePickerComponent = () => {
  const [time, setTime] = useState<string | null | Date>();
  console.log({ time });
  return (
    <div className="w-2/6">
      <DatePicker timePicker={setTime}>
        <DatePicker.Time />
      </DatePicker>
    </div>
  );
};

export const DefaultDatePicker: Story = {
  render: () => <DefaultDatePickerComponent />,
};
export const DatePickerWithTwoMonth: Story = {
  render: () => <DatePickerWithTwoMonthComponent />,
};
export const DateRangePicker: Story = {
  render: () => <DateRangePickerComponent />,
};
export const DateRangePickerWithTwoMonth: Story = {
  render: () => <DateRangePickerWithTwoMonthComponent />,
};
export const MonthPicker: Story = {
  render: () => <MonthPickerComponent />,
};
export const YearPicker: Story = {
  render: () => <YearPickerComponent />,
};
export const TimePicker: Story = {
  render: () => <TimePickerComponent />,
};
