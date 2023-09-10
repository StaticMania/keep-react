import type { Meta, StoryObj } from "@storybook/react";
import { Flag } from "phosphor-react";
import { Select } from "./Select";
import { removeFragment } from "../../helpers/mergeDeep";

const meta: Meta<typeof Select> = {
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    sizing: {
      control: "select",
      options: ["sm", "md", "lg"],
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      description: "Select avaiable size",
    },

    color: {
      control: "select",
      options: ["gray", "info", "error", "warning", "success"],
      description: "Avaiable color for Select",
      table: {
        type: { summary: "gray | info | error | warning | success" },
        defaultValue: { summary: "gray" },
      },
    },
    shadow: {
      description: "Shadow show or not?",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    helperText: {
      control: { disable: true },
      description: "Select helper text",
      table: {
        type: { summary: "String" },
        defaultValue: { summary: "" },
      },
    },
    addon: {
      control: { disable: true },
      description: "Select with addon",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    icon: {
      control: { disable: true },
      description: "Select with Icon",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    children: {
      control: {
        disable: true,
      },
      table: {
        type: { summary: "ReactNode" },
      },
      description: "Children is select option item",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const DefaultSelect: Story = {
  args: {
    sizing: "md",
    color: "gray",
    shadow: false,
    children: removeFragment(
      <>
        <option>United States</option>
        <option>Canada</option>
        <option>France</option>
        <option>Germany</option>
      </>
    ),
  },
};
export const SelectWtihAddon: Story = {
  args: {
    ...DefaultSelect.args,
    addon: <Flag size={20} color="#1d0202" />,
  },
};

export const SelectWtihIcon: Story = {
  args: {
    ...DefaultSelect.args,
    icon: <Flag size={20} color="#1d0202" />,
  },
};

export const SelectWtihHelperText: Story = {
  args: {
    ...DefaultSelect.args,
    helperText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
};
export const SmallSelect: Story = {
  args: {
    ...DefaultSelect.args,
    sizing: "sm",
  },
};
export const MediumSelect: Story = {
  args: {
    ...DefaultSelect.args,
    sizing: "md",
  },
};
export const LargeSelect: Story = {
  args: {
    ...DefaultSelect.args,
    sizing: "lg",
  },
};
export const InfoColorSelect: Story = {
  args: {
    ...DefaultSelect.args,
    color: "info",
  },
};
export const ErrorColorSelect: Story = {
  args: {
    ...DefaultSelect.args,
    color: "error",
  },
};
export const WarningColorSelect: Story = {
  args: {
    ...DefaultSelect.args,
    color: "warning",
  },
};
export const SuccessColorSelect: Story = {
  args: {
    ...DefaultSelect.args,
    color: "success",
  },
};
