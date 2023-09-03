import type { Meta, StoryObj } from "@storybook/react";

import { Empty } from "./";

const meta: Meta<typeof Empty> = {
  tags: ["autodocs"],
  component: Empty,
  argTypes: {
    title: {
      description: "Empty Page Title",
      table: {
        type: {
          summary: "String",
        },
        defaultValue: {
          summary: "",
        },
      },
    },
    content: {
      description: "Empty Page Content",
      table: {
        type: {
          summary: "String",
        },
        defaultValue: {
          summary: "",
        },
      },
    },
    buttonText: {
      description: "Empty Page Button Text",
      table: {
        type: {
          summary: "String",
        },
        defaultValue: {
          summary: "Go to home page",
        },
      },
    },
    redirectUrl: {
      description: "Page Url for redirect",
      table: {
        type: {
          summary: "String",
        },
        defaultValue: {
          summary: "/home",
        },
      },
    },
    iconType: {
      description: "Empty Page Icon Type",
      control: "radio",
      table: {
        type: {
          summary: "String",
        },
        defaultValue: {
          summary: "empty_data_1",
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Empty>;

export const EmptyPage: Story = {
  args: {
    title: "Oops! You seem to be lost",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
  },
};
