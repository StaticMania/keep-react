import { Meta, StoryObj } from "@storybook/react";
import { CheckCircle, Info, WarningCircle, XCircle } from "phosphor-react";
import { Alert } from ".";
import { removeFragment } from "@/src/helpers/mergeDeep";
import Link from "next/link";

const meta: Meta<typeof Alert> = {
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["error", "gray", "info", "success", "warning"],
      table: {
        type: { summary: "error | gray | info | success | warning" },
        defaultValue: { summary: "gray" },
      },
      description: "What background color to use like",
    },

    withBorder: Boolean,
    withBorderAccent: Boolean,
    withBorderAccentPosition: {
      control: "select",
      options: ["left", "right", "top", "bottom"],
      description: "What is the border accent position color to use like",
      table: {
        type: { summary: "left | right | top | bottom" },
        defaultValue: { summary: "left" },
      },
    },
    children: {
      control: { disable: true },
    },
    icon: {
      control: { disable: true },
    },
    additionalContent: {
      control: { disable: true },
    },
    onDismiss: {
      control: { disable: true },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const DefaultAlert: Story = {
  args: {
    color: "info",
    rounded: false,
    withBorder: false,
    withBorderAccent: false,
    withBorderAccentPosition: "left",
    dismiss: false,
    children: (
      <p className="md:text-lg text-base font-semibold text-blue-600">
        Default message - make it short
      </p>
    ),
    icon: <Info size={24} color="#0F3CD9" />,
    additionalContent: removeFragment(
      <>
        <div className="mt-1 text-sm text-slate-500">
          Default message - Lorem Ipsum is simply dummy text of the printing and
          typesetting industry
          <Link href="/" className="ml-2 text-blue-600 underline">
            Link style
          </Link>
        </div>
      </>
    ),
  },
};
export const RoundedAlert: Story = {
  args: {
    ...DefaultAlert.args,
    rounded: true,
  },
};
export const AlertWithBorder: Story = {
  args: {
    ...DefaultAlert.args,
    rounded: true,
    withBorder: true,
  },
};
export const AlertWithAccentBorder: Story = {
  args: {
    ...DefaultAlert.args,
    withBorderAccent: true,
  },
};

export const InfoAlert: Story = {
  args: {
    ...DefaultAlert.args,
  },
};
export const GrayAlert: Story = {
  args: {
    ...DefaultAlert.args,
    color: "gray",
    additionalContent: removeFragment(
      <>
        <div className="mt-1 text-sm text-slate-500">
          Default message - Lorem Ipsum is simply dummy text of the printing and
          typesetting industry
          <Link href="/" className="ml-2 text-primary-500 underline">
            Link style
          </Link>
        </div>
      </>
    ),
    icon: <Info size={24} color="gray" />,
    children: (
      <p className="md:text-lg text-base font-semibold text-slate-900">
        Default message - make it short
      </p>
    ),
  },
};
export const ErrorAlert: Story = {
  args: {
    ...DefaultAlert.args,
    color: "error",
    icon: <XCircle size={24} color="#E92215" />,
    children: (
      <p className="md:text-lg text-base font-semibold text-error-500">
        Default message - make it short
      </p>
    ),
    additionalContent: removeFragment(
      <>
        <div className="mt-1 text-sm text-slate-500">
          Default message - Lorem Ipsum is simply dummy text of the printing and
          typesetting industry
          <Link href="/" className="ml-2 text-primary-500 underline">
            Link style
          </Link>
        </div>
      </>
    ),
  },
};
export const SuccessAlert: Story = {
  args: {
    ...DefaultAlert.args,
    color: "success",
    additionalContent: removeFragment(
      <>
        <div className="mt-1 text-sm text-slate-500">
          Default message - Lorem Ipsum is simply dummy text of the printing and
          typesetting industry
          <Link href="/" className="ml-2 text-primary-500 underline">
            Link style
          </Link>
        </div>
      </>
    ),
    icon: <CheckCircle size={24} color="#0A9952" />,
    children: (
      <p className="md:text-lg text-base font-semibold text-green-600">
        Default message - make it short
      </p>
    ),
  },
};
export const WarningAlert: Story = {
  args: {
    ...DefaultAlert.args,
    color: "warning",
    additionalContent: removeFragment(
      <>
        <div className="mt-1 text-sm text-slate-500">
          Default message - Lorem Ipsum is simply dummy text of the printing and
          typesetting industry
          <Link href="/" className="ml-2 text-primary-500 underline">
            Link style
          </Link>
        </div>
      </>
    ),
    icon: <WarningCircle size={24} color="#D8A800" />,
    children: (
      <p className="md:text-lg text-base font-semibold text-yellow-600">
        Default message - make it short
      </p>
    ),
  },
};
