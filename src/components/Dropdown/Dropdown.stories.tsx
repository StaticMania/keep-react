import type { Meta, StoryObj } from "@storybook/react";
import {
  CaretRight,
  Crown,
  FacebookLogo,
  Gear,
  GoogleLogo,
  LinkedinLogo,
  Money,
  SignOut,
  SquaresFour,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";
import { Dropdown } from ".";
import { CheckBox } from "../CheckBox";
import { TextInput } from "../FormControls/TextInput";
import { removeFragment } from "../../helpers/mergeDeep";
import { Avatar } from "../Avatar/Avatar";

const meta: Meta<typeof Dropdown> = {
  tags: ["autodocs"],
  component: Dropdown,
  decorators: [
    (Story) => (
      <div className="h-[50vh]">
        <Story />
      </div>
    ),
  ],

  argTypes: {
    label: {
      description: "Dropdown button text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Dropdown button" },
      },
    },
    type: {
      description: "Avaiable button type",
      control: {
        type: "select",
      },
      options: [
        "primary",
        "dashed",
        "text",
        "linkPrimary",
        "linkGray",
        "outlineGray",
        "outlinePrimary",
        "default",
      ],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      description: "Avaiable button size",
      control: {
        type: "select",
      },
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "sm" },
      },
    },

    children: {
      description: "Children is dropdown element",
      control: { type: null },
    },
    arrowIcon: {
      description: "Dropdown button arrow icon show or not?",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    dismissOnClick: {
      description: "Dropdown items select dismiss on click or not?",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
      },
    },
    floatingArrow: {
      description: "Dropdown floating arrow show or not?",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    theme: {
      description: "Dropdown theme",
      table: {
        type: { summary: "Object" },
      },
      control: { type: null },
    },
    trigger: {
      description: "Dropdown Item show hover or click",
      table: {
        type: { summary: "String" },
        defaultValue: { summary: "click" },
      },
      control: { type: "radio" },
    },
    color: {
      description: "Dropdown button avaiable color",
      table: {
        type: { summary: "String" },
        defaultValue: { summary: "info" },
      },
      control: { type: "select" },
      options: ["error", "info", "success", "warning"],
    },
    circle: {
      description: "Dropdown button circle or not",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    placement: {
      description: "Dropdown placement",
      table: {
        type: { summary: "String" },
        defaultValue: { summary: "bottom-start" },
      },
      control: { type: "select" },
    },
    width: {
      description: "Button width full or half?",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "full" },
      },
      control: { type: "radio" },
    },
    href: {
      description: "Href to navigate",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "/" },
      },
    },
    notificationLabel: {
      description: "Button notification label text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    pill: {
      description: "Button pill or not",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: { type: "radio" },
    },
    positionInGroup: {
      description: "Button position in button group",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "start" },
      },
      control: { type: null },
    },

    customClass: {
      description: "Custom class Name",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },

    onClick: {
      description: "Optional click handler",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const DefaultDropdown: Story = {
  args: {
    label: "Dropdown button",
    size: "sm",
    type: "primary",
    dismissOnClick: true,
    children: removeFragment(
      <>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
      </>
    ),
  },
};
export const DropdownItemLinkWithAngleIcon: Story = {
  args: {
    ...DefaultDropdown.args,
    children: removeFragment(
      <>
        <Dropdown.Item>
          Dashboard
          <span className="ml-auto">
            <CaretRight size={20} color="#5E718D" />
          </span>
        </Dropdown.Item>
        <Dropdown.Item>
          Settings
          <span className="ml-auto">
            <CaretRight size={20} color="#5E718D" />
          </span>
        </Dropdown.Item>
        <Dropdown.Item>
          Earnings
          <span className="ml-auto">
            <CaretRight size={20} color="#5E718D" />
          </span>
        </Dropdown.Item>
        <Dropdown.Item>
          Sign out
          <span className="ml-auto">
            <CaretRight size={20} color="#5E718D" />
          </span>
        </Dropdown.Item>
      </>
    ),
  },
};
export const DropdownItemWithAngleIcon: Story = {
  args: {
    ...DefaultDropdown.args,
    children: removeFragment(
      <>
        <Dropdown.Item>
          Dashboard
          <span className="ml-auto">
            <CaretRight size={20} color="#5E718D" />
          </span>
        </Dropdown.Item>
        <Dropdown.Item>
          Settings
          <span className="ml-auto">
            <CaretRight size={20} color="#5E718D" />
          </span>
        </Dropdown.Item>
        <Dropdown.Item>
          Earnings
          <span className="ml-auto">
            <CaretRight size={20} color="#5E718D" />
          </span>
        </Dropdown.Item>
        <Dropdown.Item>
          Sign out
          <span className="ml-auto">
            <CaretRight size={20} color="#5E718D" />
          </span>
        </Dropdown.Item>
      </>
    ),
  },
};

export const DropdownWithSearchBar: Story = {
  args: {
    ...DefaultDropdown.args,
    children: removeFragment(
      <>
        <Dropdown.Item className="border-none">
          <TextInput id="#id-z3rxdy" placeholder="Search" sizing="md" />
        </Dropdown.Item>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
      </>
    ),
  },
};
export const DropdownWithSearchBarAndIcon: Story = {
  args: {
    ...DefaultDropdown.args,
    children: removeFragment(
      <>
        <Dropdown.Item className="border-none">
          <TextInput id="#id-z3rxdy" placeholder="Search" sizing="md" />
        </Dropdown.Item>
        <Dropdown.Item>
          Dashboard
          <span className="ml-auto">
            <CaretRight size={20} color="#5E718D" />
          </span>
        </Dropdown.Item>
        <Dropdown.Item>
          Settings
          <span className="ml-auto">
            <CaretRight size={20} color="#5E718D" />
          </span>
        </Dropdown.Item>
        <Dropdown.Item>
          Earnings
          <span className="ml-auto">
            <CaretRight size={20} color="#5E718D" />
          </span>
        </Dropdown.Item>
        <Dropdown.Item>
          Sign out
          <span className="ml-auto">
            <CaretRight size={20} color="#5E718D" />
          </span>
        </Dropdown.Item>
      </>
    ),
  },
};
export const DropdownWithTitleAndDescription: Story = {
  args: {
    ...DefaultDropdown.args,
    children: removeFragment(
      <>
        <Dropdown.Item>
          <div className="flex flex-col items-start gap-1">
            <p className="text-base font-semibold text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex flex-col items-start gap-1">
            <p className="text-base font-semibold text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex flex-col items-start gap-1">
            <p className="text-base font-semibold text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex flex-col items-start gap-1">
            <p className="text-base font-semibold text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </Dropdown.Item>
      </>
    ),
  },
};
export const DropdownWithTitleDescritionSearchBarAndIcon: Story = {
  args: {
    ...DefaultDropdown.args,
    children: removeFragment(
      <>
        <Dropdown.Item className="border-none ">
          <div className="w-full">
            <TextInput id="#id-8yj95h" placeholder="Search" />
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex flex-col items-start gap-1">
            <p className="text-base font-semibold text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex flex-col items-start gap-1">
            <p className="text-base font-semibold text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex flex-col items-start gap-1">
            <p className="text-base font-semibold text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex flex-col items-start gap-1">
            <p className="text-base font-semibold text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </Dropdown.Item>
      </>
    ),
  },
};
export const DropdownWithCheckboxTitleDescriptionAndIcon: Story = {
  args: {
    ...DefaultDropdown.args,
    children: removeFragment(
      <>
        <Dropdown.Item className="border-none">
          <div className="w-full">
            <TextInput id="#id-8yj95h" placeholder="Search" />
          </div>
        </Dropdown.Item>
        <Dropdown.Item className="flex !items-start gap-2">
          <div className="flex flex-col items-start gap-1">
            <p className="text-base font-semibold text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div>
            <CaretRight size={20} color="#5E718D" />
          </div>
        </Dropdown.Item>
        <Dropdown.Item className="flex !items-start gap-2">
          <div className="flex flex-col items-start gap-1">
            <p className="text-base font-semibold text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div>
            <CaretRight size={20} color="#5E718D" />
          </div>
        </Dropdown.Item>
        <Dropdown.Item className="flex !items-start gap-2">
          <div className="flex flex-col items-start gap-1">
            <p className="text-base font-semibold text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div>
            <CaretRight size={20} color="#5E718D" />
          </div>
        </Dropdown.Item>
        <Dropdown.Item className="flex !items-start gap-2">
          <div className="flex flex-col items-start gap-1">
            <p className="text-base font-semibold text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div>
            <CaretRight size={20} color="#5E718D" />
          </div>
        </Dropdown.Item>
      </>
    ),
  },
};
export const DropdownItemWithIcon: Story = {
  args: {
    ...DefaultDropdown.args,
    children: removeFragment(
      <>
        <Dropdown.Item icon={<SquaresFour size={20} color="#5E718D" />}>
          Dashboard
        </Dropdown.Item>
        <Dropdown.Item icon={<Gear size={20} color="#5E718D" />}>
          Settings
        </Dropdown.Item>
        <Dropdown.Item icon={<Money size={20} color="#5E718D" />}>
          Earnings
        </Dropdown.Item>
        <Dropdown.Item icon={<SignOut size={20} color="#5E718D" />}>
          Sign out
        </Dropdown.Item>
      </>
    ),
  },
};
export const DropdownItemWithBothSideIcon: Story = {
  args: {
    ...DefaultDropdown.args,
    children: removeFragment(
      <>
        <Dropdown.Item icon={<SquaresFour size={20} color="#5E718D" />}>
          Dashboard
          <span className="ml-auto">
            <CaretRight size={20} color="#5E718D" />
          </span>
        </Dropdown.Item>
        <Dropdown.Item icon={<Gear size={20} color="#5E718D" />}>
          Settings
          <span className="ml-auto">
            <CaretRight size={20} color="#5E718D" />
          </span>
        </Dropdown.Item>
        <Dropdown.Item icon={<Money size={20} color="#5E718D" />}>
          Earnings
          <span className="ml-auto">
            <CaretRight size={20} color="#5E718D" />
          </span>
        </Dropdown.Item>
        <Dropdown.Item icon={<SignOut size={20} color="#5E718D" />}>
          Sign out
          <span className="ml-auto">
            <CaretRight size={20} color="#5E718D" />
          </span>
        </Dropdown.Item>
      </>
    ),
  },
};
export const DropdownItemWithSearchBarAndIcon: Story = {
  args: {
    ...DefaultDropdown.args,
    children: removeFragment(
      <>
        <Dropdown.Item className="border-none">
          <div className="w-full">
            <TextInput id="#id-8yj95h" placeholder="Search" />
          </div>
        </Dropdown.Item>
        <Dropdown.Item icon={<SquaresFour size={20} color="#5E718D" />}>
          Dashboard
        </Dropdown.Item>
        <Dropdown.Item icon={<Gear size={20} color="#5E718D" />}>
          Settings
        </Dropdown.Item>
        <Dropdown.Item icon={<Money size={20} color="#5E718D" />}>
          Earnings
        </Dropdown.Item>
        <Dropdown.Item icon={<SignOut size={20} color="#5E718D" />}>
          Sign out
        </Dropdown.Item>
      </>
    ),
  },
};
export const DropdownItemWithBothSideIconAndSearchBar: Story = {
  args: {
    ...DefaultDropdown.args,
    children: removeFragment(
      <>
        <Dropdown.Item className="border-none">
          <div className="w-full">
            <TextInput id="#id-8yj95h" placeholder="Search" />
          </div>
        </Dropdown.Item>
        <Dropdown.Item icon={<SquaresFour size={20} color="#5E718D" />}>
          Dashboard
          <span className="ml-auto">
            <CaretRight size={20} color="#5E718D" />
          </span>
        </Dropdown.Item>
        <Dropdown.Item icon={<Gear size={20} color="#5E718D" />}>
          Settings
          <span className="ml-auto">
            <CaretRight size={20} color="#5E718D" />
          </span>
        </Dropdown.Item>
        <Dropdown.Item icon={<Money size={20} color="#5E718D" />}>
          Earnings
          <span className="ml-auto">
            <CaretRight size={20} color="#5E718D" />
          </span>
        </Dropdown.Item>
        <Dropdown.Item icon={<SignOut size={20} color="#5E718D" />}>
          Sign out
        </Dropdown.Item>
      </>
    ),
  },
};
export const DropdownWithTitleDescriptionAndIcon: Story = {
  args: {
    ...DefaultDropdown.args,
    children: removeFragment(
      <>
        <Dropdown.Item>
          <div className="flex items-start gap-2">
            <span className="p-1">
              <Crown size={28} color="#5E718D" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="-mb-0.5 text-base font-semibold text-slate-700">
                Dropdown Title
              </p>
              <p className="max-w-xs text-sm font-normal text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-start gap-2">
            <span className="py-1">
              <Crown size={28} color="#5E718D" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="-mb-0.5 text-base font-semibold text-slate-700">
                Dropdown Title
              </p>
              <p className="max-w-xs text-sm font-normal text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-start gap-2">
            <span className="py-1">
              <Crown size={28} color="#5E718D" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="-mb-0.5 text-base font-semibold text-slate-700">
                Dropdown Title
              </p>
              <p className="max-w-xs text-sm font-normal text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-start gap-2">
            <span className="py-1">
              <Crown size={28} color="#5E718D" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="-mb-0.5 text-base font-semibold text-slate-700">
                Dropdown Title
              </p>
              <p className="max-w-xs text-sm font-normal text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </Dropdown.Item>
      </>
    ),
  },
};
export const DropdownItemWithTitleDescriptionAndIcon: Story = {
  args: {
    ...DefaultDropdown.args,
    children: removeFragment(
      <>
        <Dropdown.Item>
          <div className="flex items-start gap-2">
            <span className="py-1">
              <Crown size={28} color="#5E718D" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="-mb-0.5 text-base font-semibold text-slate-700">
                Dropdown Title
              </p>
              <p className="max-w-xs text-sm font-normal text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="my-auto flex items-center justify-center">
              <CaretRight size={20} color="#5E718D" />
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-start gap-2">
            <span className="py-1">
              <Crown size={28} color="#5E718D" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="-mb-0.5 text-base font-semibold text-slate-700">
                Dropdown Title
              </p>
              <p className="max-w-xs text-sm font-normal text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="my-auto flex items-center justify-center">
              <CaretRight size={20} color="#5E718D" />
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-start gap-2">
            <span className="py-1">
              <Crown size={28} color="#5E718D" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="-mb-0.5 text-base font-semibold text-slate-700">
                Dropdown Title
              </p>
              <p className="max-w-xs text-sm font-normal text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="my-auto flex items-center justify-center">
              <CaretRight size={20} color="#5E718D" />
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-start gap-2">
            <span className="py-1">
              <Crown size={28} color="#5E718D" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="-mb-0.5 text-base font-semibold text-slate-700">
                Dropdown Title
              </p>
              <p className="max-w-xs text-sm font-normal text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="my-auto flex items-center justify-center">
              <CaretRight size={20} color="#5E718D" />
            </div>
          </div>
        </Dropdown.Item>
      </>
    ),
  },
};
export const DropdownWithSearchBarTitleDescriptionAndIcon: Story = {
  args: {
    ...DefaultDropdown.args,
    children: removeFragment(
      <>
        <Dropdown.Item className="border-none">
          <div className="w-full">
            <TextInput id="#id-8yj95h" placeholder="Search" />
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-start gap-2">
            <span className="p-1">
              <Crown size={28} color="#5E718D" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="-mb-0.5 text-base font-semibold text-slate-700">
                Dropdown Title
              </p>
              <p className="max-w-xs text-sm font-normal text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-start gap-2">
            <span className="py-1">
              <Crown size={28} color="#5E718D" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="-mb-0.5 text-base font-semibold text-slate-700">
                Dropdown Title
              </p>
              <p className="max-w-xs text-sm font-normal text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-start gap-2">
            <span className="py-1">
              <Crown size={28} color="#5E718D" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="-mb-0.5 text-base font-semibold text-slate-700">
                Dropdown Title
              </p>
              <p className="max-w-xs text-sm font-normal text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-start gap-2">
            <span className="py-1">
              <Crown size={28} color="#5E718D" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="-mb-0.5 text-base font-semibold text-slate-700">
                Dropdown Title
              </p>
              <p className="max-w-xs text-sm font-normal text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </Dropdown.Item>
      </>
    ),
  },
};
export const DropdownWithTitleDescriptionIconAndSearchBar: Story = {
  args: {
    ...DefaultDropdown.args,
    children: removeFragment(
      <>
        <Dropdown.Item className="border-none">
          <div className="w-full">
            <TextInput id="#id-8yj95h" placeholder="Search" />
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-start gap-2">
            <span className="py-1">
              <Crown size={28} color="#5E718D" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="-mb-0.5 text-base font-semibold text-slate-700">
                Dropdown Title
              </p>
              <p className="max-w-xs text-sm font-normal text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="my-auto flex items-center justify-center">
              <CaretRight size={20} color="#5E718D" />
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-start gap-2">
            <span className="py-1">
              <Crown size={28} color="#5E718D" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="-mb-0.5 text-base font-semibold text-slate-700">
                Dropdown Title
              </p>
              <p className="max-w-xs text-sm font-normal text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="my-auto flex items-center justify-center">
              <CaretRight size={20} color="#5E718D" />
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-start gap-2">
            <span className="py-1">
              <Crown size={28} color="#5E718D" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="-mb-0.5 text-base font-semibold text-slate-700">
                Dropdown Title
              </p>
              <p className="max-w-xs text-sm font-normal text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="my-auto flex items-center justify-center">
              <CaretRight size={20} color="#5E718D" />
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-start gap-2">
            <span className="py-1">
              <Crown size={28} color="#5E718D" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="-mb-0.5 text-base font-semibold text-slate-700">
                Dropdown Title
              </p>
              <p className="max-w-xs text-sm font-normal text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="my-auto flex items-center justify-center">
              <CaretRight size={20} color="#5E718D" />
            </div>
          </div>
        </Dropdown.Item>
      </>
    ),
  },
};
export const DropdownItemWithLogo: Story = {
  args: {
    ...DefaultDropdown.args,
    children: removeFragment(
      <>
        <Dropdown.Item
          icon={<GoogleLogo size={20} color="#4285f4" weight="bold" />}
        >
          Google
        </Dropdown.Item>
        <Dropdown.Item
          icon={<FacebookLogo size={20} color="#3b5998" weight="fill" />}
        >
          Facebook
        </Dropdown.Item>
        <Dropdown.Item
          icon={<TwitterLogo size={20} color="#00acee" weight="fill" />}
        >
          Twitter
        </Dropdown.Item>
        <Dropdown.Item
          icon={<YoutubeLogo size={20} color="#c4302b" weight="fill" />}
        >
          Youtube
        </Dropdown.Item>
        <Dropdown.Item
          icon={<LinkedinLogo size={20} color="#0072b1" weight="fill" />}
        >
          Linkedin
        </Dropdown.Item>
      </>
    ),
  },
};
export const DropdownItemWithLogoAndIcon: Story = {
  args: {
    ...DefaultDropdown.args,
    children: removeFragment(
      <>
        <Dropdown.Item
          icon={<GoogleLogo size={20} color="#4285f4" weight="bold" />}
        >
          Google
          <span className="ml-auto">
            <CaretRight size={20} color="#5E718D" />
          </span>
        </Dropdown.Item>
        <Dropdown.Item
          icon={<FacebookLogo size={20} color="#3b5998" weight="fill" />}
        >
          Facebook
          <span className="ml-auto">
            <CaretRight size={20} color="#5E718D" />
          </span>
        </Dropdown.Item>
        <Dropdown.Item
          icon={<TwitterLogo size={20} color="#00acee" weight="fill" />}
        >
          Twitter
          <span className="ml-auto">
            <CaretRight size={20} color="#5E718D" />
          </span>
        </Dropdown.Item>
        <Dropdown.Item
          icon={<YoutubeLogo size={20} color="#c4302b" weight="fill" />}
        >
          Youtube
          <span className="ml-auto">
            <CaretRight size={20} color="#5E718D" />
          </span>
        </Dropdown.Item>
        <Dropdown.Item
          icon={<LinkedinLogo size={20} color="#0072b1" weight="fill" />}
        >
          Linkedin
          <span className="ml-auto">
            <CaretRight size={20} color="#5E718D" />
          </span>
        </Dropdown.Item>
      </>
    ),
  },
};
export const DropdownItemWithLogoSearchBarAndIcon: Story = {
  args: {
    ...DefaultDropdown.args,
    children: removeFragment(
      <>
        <Dropdown.Item className="border-none">
          <TextInput id="#id-z3rxdy" placeholder="Search" sizing="md" />
        </Dropdown.Item>
        <Dropdown.Item
          icon={<GoogleLogo size={20} color="#4285f4" weight="bold" />}
        >
          Google
        </Dropdown.Item>
        <Dropdown.Item
          icon={<FacebookLogo size={20} color="#3b5998" weight="fill" />}
        >
          Facebook
        </Dropdown.Item>
        <Dropdown.Item
          icon={<TwitterLogo size={20} color="#00acee" weight="fill" />}
        >
          Twitter
        </Dropdown.Item>
        <Dropdown.Item
          icon={<YoutubeLogo size={20} color="#c4302b" weight="fill" />}
        >
          Youtube
        </Dropdown.Item>
        <Dropdown.Item
          icon={<LinkedinLogo size={20} color="#0072b1" weight="fill" />}
        >
          Linkedin
        </Dropdown.Item>
      </>
    ),
  },
};
export const DropdownItemWithLogoAndSearchBar: Story = {
  args: {
    ...DefaultDropdown.args,
    children: removeFragment(
      <>
        <Dropdown.Item className="border-none">
          <TextInput id="#id-z3rxdy" placeholder="Search" sizing="md" />
        </Dropdown.Item>
        <Dropdown.Item
          icon={<GoogleLogo size={20} color="#4285f4" weight="bold" />}
        >
          Google
          <span className="ml-auto">
            <CaretRight size={20} color="#5E718D" />
          </span>
        </Dropdown.Item>
        <Dropdown.Item
          icon={<FacebookLogo size={20} color="#3b5998" weight="fill" />}
        >
          Facebook
          <span className="ml-auto">
            <CaretRight size={20} color="#5E718D" />
          </span>
        </Dropdown.Item>
        <Dropdown.Item
          icon={<TwitterLogo size={20} color="#00acee" weight="fill" />}
        >
          Twitter
          <span className="ml-auto">
            <CaretRight size={20} color="#5E718D" />
          </span>
        </Dropdown.Item>
        <Dropdown.Item
          icon={<YoutubeLogo size={20} color="#c4302b" weight="fill" />}
        >
          Youtube
          <span className="ml-auto">
            <CaretRight size={20} color="#5E718D" />
          </span>
        </Dropdown.Item>
        <Dropdown.Item
          icon={<LinkedinLogo size={20} color="#0072b1" weight="fill" />}
        >
          Linkedin
          <span className="ml-auto">
            <CaretRight size={20} color="#5E718D" />
          </span>
        </Dropdown.Item>
      </>
    ),
  },
};
export const DropdownWithTitleDescriptionAndLogo: Story = {
  args: {
    ...DefaultDropdown.args,
    children: removeFragment(
      <>
        <Dropdown.Item>
          <div className="flex items-start gap-2">
            <span>
              <GoogleLogo size={24} color="#4285f4" weight="bold" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="relative top-1 mb-2 text-base font-semibold leading-3 text-slate-700">
                Dropdown Title
              </p>
              <p className="max-w-xs text-sm font-normal text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-start gap-2">
            <span>
              <FacebookLogo size={24} color="#3b5998" weight="fill" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="relative top-1 mb-2 text-base font-semibold leading-3 text-slate-700">
                Dropdown Title
              </p>
              <p className="max-w-xs text-sm font-normal text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-start gap-2">
            <span>
              <TwitterLogo size={24} color="#00acee" weight="fill" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="relative top-1 mb-2 text-base font-semibold leading-3 text-slate-700">
                Dropdown Title
              </p>
              <p className="max-w-xs text-sm font-normal text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-start gap-2">
            <span>
              <YoutubeLogo size={24} color="#c4302b" weight="fill" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="relative top-1 mb-2 text-base font-semibold leading-3 text-slate-700">
                Dropdown Title
              </p>
              <p className="max-w-xs text-sm font-normal text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-start gap-2">
            <span>
              <LinkedinLogo size={24} color="#0072b1" weight="fill" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="relative top-1 mb-2 text-base font-semibold leading-3 text-slate-700">
                Dropdown Title
              </p>
              <p className="max-w-xs text-sm font-normal text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </Dropdown.Item>
      </>
    ),
  },
};
export const DropdownWithTitleDescriptionLogoAndIcon: Story = {
  args: {
    ...DefaultDropdown.args,
    children: removeFragment(
      <>
        <Dropdown.Item>
          <div className="flex items-start gap-2">
            <span>
              <GoogleLogo size={24} color="#4285f4" weight="bold" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="relative top-1 mb-2 text-base font-semibold leading-3 text-slate-700">
                Dropdown Title
              </p>
              <p className="max-w-xs text-sm font-normal text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <CaretRight size={20} color="#5E718D" />
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-start gap-2">
            <span>
              <FacebookLogo size={24} color="#3b5998" weight="fill" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="relative top-1 mb-2 text-base font-semibold leading-3 text-slate-700">
                Dropdown Title
              </p>
              <p className="max-w-xs text-sm font-normal text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <CaretRight size={20} color="#5E718D" />
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-start gap-2">
            <span>
              <TwitterLogo size={24} color="#00acee" weight="fill" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="relative top-1 mb-2 text-base font-semibold leading-3 text-slate-700">
                Dropdown Title
              </p>
              <p className="max-w-xs text-sm font-normal text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <CaretRight size={20} color="#5E718D" />
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-start gap-2">
            <span>
              <YoutubeLogo size={24} color="#c4302b" weight="fill" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="relative top-1 mb-2 text-base font-semibold leading-3 text-slate-700">
                Dropdown Title
              </p>
              <p className="max-w-xs text-sm font-normal text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <CaretRight size={20} color="#5E718D" />
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-start gap-2">
            <span>
              <LinkedinLogo size={24} color="#0072b1" weight="fill" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="relative top-1 mb-2 text-base font-semibold leading-3 text-slate-700">
                Dropdown Title
              </p>
              <p className="max-w-xs text-sm font-normal text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <CaretRight size={20} color="#5E718D" />
            </div>
          </div>
        </Dropdown.Item>
      </>
    ),
  },
};
export const DropdownWithTitleDescriptionLogoAndSearchBar: Story = {
  args: {
    ...DefaultDropdown.args,
    children: removeFragment(
      <>
        <Dropdown.Item className="border-none">
          <div className="w-full">
            <TextInput id="#id-z3rxdy" placeholder="Search" sizing="md" />
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-start gap-2">
            <span>
              <GoogleLogo size={24} color="#4285f4" weight="bold" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="relative top-1 mb-2 text-base font-semibold leading-3 text-slate-700">
                Dropdown Title
              </p>
              <p className="max-w-xs text-sm font-normal text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-start gap-2">
            <span>
              <FacebookLogo size={24} color="#3b5998" weight="fill" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="relative top-1 mb-2 text-base font-semibold leading-3 text-slate-700">
                Dropdown Title
              </p>
              <p className="max-w-xs text-sm font-normal text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-start gap-2">
            <span>
              <TwitterLogo size={24} color="#00acee" weight="fill" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="relative top-1 mb-2 text-base font-semibold leading-3 text-slate-700">
                Dropdown Title
              </p>
              <p className="max-w-xs text-sm font-normal text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-start gap-2">
            <span>
              <YoutubeLogo size={24} color="#c4302b" weight="fill" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="relative top-1 mb-2 text-base font-semibold leading-3 text-slate-700">
                Dropdown Title
              </p>
              <p className="max-w-xs text-sm font-normal text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-start gap-2">
            <span>
              <LinkedinLogo size={24} color="#0072b1" weight="fill" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="relative top-1 mb-2 text-base font-semibold leading-3 text-slate-700">
                Dropdown Title
              </p>
              <p className="max-w-xs text-sm font-normal text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </Dropdown.Item>
      </>
    ),
  },
};
export const DropdownWithTitleDescriptionLogoIconAndSearchBar: Story = {
  args: {
    ...DefaultDropdown.args,
    children: removeFragment(
      <>
        <Dropdown.Item className="border-none">
          <div className="w-full">
            <TextInput id="#id-z3rxdy" placeholder="Search" sizing="md" />
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-start gap-2">
            <span>
              <GoogleLogo size={24} color="#4285f4" weight="bold" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="relative top-1 mb-2 text-base font-semibold leading-3 text-slate-700">
                Dropdown Title
              </p>
              <p className="max-w-xs text-sm font-normal text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <CaretRight size={20} color="#5E718D" />
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-start gap-2">
            <span>
              <FacebookLogo size={24} color="#3b5998" weight="fill" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="relative top-1 mb-2 text-base font-semibold leading-3 text-slate-700">
                Dropdown Title
              </p>
              <p className="max-w-xs text-sm font-normal text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <CaretRight size={20} color="#5E718D" />
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-start gap-2">
            <span>
              <TwitterLogo size={24} color="#00acee" weight="fill" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="relative top-1 mb-2 text-base font-semibold leading-3 text-slate-700">
                Dropdown Title
              </p>
              <p className="max-w-xs text-sm font-normal text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <CaretRight size={20} color="#5E718D" />
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-start gap-2">
            <span>
              <YoutubeLogo size={24} color="#c4302b" weight="fill" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="relative top-1 mb-2 text-base font-semibold leading-3 text-slate-700">
                Dropdown Title
              </p>
              <p className="max-w-xs text-sm font-normal text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <CaretRight size={20} color="#5E718D" />
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-start gap-2">
            <span>
              <LinkedinLogo size={24} color="#0072b1" weight="fill" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="relative top-1 mb-2 text-base font-semibold leading-3 text-slate-700">
                Dropdown Title
              </p>
              <p className="max-w-xs text-sm font-normal text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <CaretRight size={20} color="#5E718D" />
            </div>
          </div>
        </Dropdown.Item>
      </>
    ),
  },
};
export const DropdownWithAvatar: Story = {
  args: {
    ...DefaultDropdown.args,
    children: removeFragment(
      <>
        <Dropdown.Item>
          <div className="flex items-center gap-3">
            <Avatar
              shape="circle"
              img="/images/avatar/avatar-1.png"
              size="md"
            />
            <p className="text-sm font-medium text-slate-700">Guy Hawkins</p>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-center gap-3">
            <Avatar
              shape="circle"
              img="/images/avatar/avatar-2.png"
              size="md"
            />
            <p className="text-sm font-medium text-slate-700">James Mary</p>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-center gap-3">
            <Avatar
              shape="circle"
              img="/images/avatar/avatar-3.png"
              size="md"
            />
            <p className="text-sm font-medium text-slate-700">
              Bellanca Sherringham
            </p>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-center gap-3">
            <Avatar
              shape="circle"
              img="/images/avatar/avatar-4.png"
              size="md"
            />
            <p className="text-sm font-medium text-slate-700">Carlin Tebb</p>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-center gap-3">
            <Avatar
              shape="circle"
              img="/images/avatar/avatar-5.png"
              size="md"
            />
            <p className="text-sm font-medium text-slate-700">Mar Segrave</p>
          </div>
        </Dropdown.Item>
      </>
    ),
  },
};
export const DropdownWithAvatarAndIcon: Story = {
  args: {
    ...DefaultDropdown.args,
    children: removeFragment(
      <>
        <Dropdown.Item>
          <div className="flex w-full items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <Avatar
                shape="circle"
                img="/images/avatar/avatar-4.png"
                size="md"
              />
              <p className="text-sm font-medium text-slate-700">Guy Hawkins</p>
            </div>
            <span>
              <CaretRight size={18} color="#5E718D" />
            </span>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex w-full items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <Avatar
                shape="circle"
                img="/images/avatar/avatar-5.png"
                size="md"
              />
              <p className="text-sm font-medium text-slate-700">James Mary</p>
            </div>
            <span>
              <CaretRight size={18} color="#5E718D" />
            </span>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex w-full items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <Avatar
                shape="circle"
                img="/images/avatar/avatar-3.png"
                size="md"
              />
              <p className="text-sm font-medium text-slate-700">
                Bellanca Sherringham
              </p>
            </div>
            <span>
              <CaretRight size={18} color="#5E718D" />
            </span>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex w-full items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <Avatar
                shape="circle"
                img="/images/avatar/avatar-2.png"
                size="md"
              />
              <p className="text-sm font-medium text-slate-700">Carlin Tebb</p>
            </div>
            <span>
              <CaretRight size={18} color="#5E718D" />
            </span>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex w-full items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <Avatar
                shape="circle"
                img="/images/avatar/avatar-1.png"
                size="md"
              />
              <p className="text-sm font-medium text-slate-700">Mar Segrave</p>
            </div>
            <span>
              <CaretRight size={18} color="#5E718D" />
            </span>
          </div>
        </Dropdown.Item>
      </>
    ),
  },
};
export const DropdownWithAvatarAndSearchBar: Story = {
  args: {
    ...DefaultDropdown.args,
    children: removeFragment(
      <>
        <Dropdown.Item className="border-none">
          <div className="w-full">
            <TextInput id="#id-z3rxdy" placeholder="Search" sizing="md" />
          </div>
        </Dropdown.Item>

        <Dropdown.Item>
          <div className="flex w-full items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <Avatar
                shape="circle"
                img="/images/avatar/avatar-4.png"
                size="md"
              />
              <p className="text-sm font-medium text-slate-700">Guy Hawkins</p>
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex w-full items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <Avatar
                shape="circle"
                img="/images/avatar/avatar-5.png"
                size="md"
              />
              <p className="text-sm font-medium text-slate-700">James Mary</p>
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex w-full items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <Avatar
                shape="circle"
                img="/images/avatar/avatar-3.png"
                size="md"
              />
              <p className="text-sm font-medium text-slate-700">
                Bellanca Sherringham
              </p>
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex w-full items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <Avatar
                shape="circle"
                img="/images/avatar/avatar-2.png"
                size="md"
              />
              <p className="text-sm font-medium text-slate-700">Carlin Tebb</p>
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex w-full items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <Avatar
                shape="circle"
                img="/images/avatar/avatar-1.png"
                size="md"
              />
              <p className="text-sm font-medium text-slate-700">Mar Segrave</p>
            </div>
          </div>
        </Dropdown.Item>
      </>
    ),
  },
};
export const DropdownWithAvatarIconAndSearchBar: Story = {
  args: {
    ...DefaultDropdown.args,
    children: removeFragment(
      <>
        <Dropdown.Item className="border-none">
          <div className="w-full">
            <TextInput id="#id-z3rxdy" placeholder="Search" sizing="md" />
          </div>
        </Dropdown.Item>

        <Dropdown.Item>
          <div className="flex w-full items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <Avatar
                shape="circle"
                img="/images/avatar/avatar-4.png"
                size="md"
              />
              <p className="text-sm font-medium text-slate-700">Guy Hawkins</p>
            </div>
            <span>
              <CaretRight size={18} color="#5E718D" />
            </span>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex w-full items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <Avatar
                shape="circle"
                img="/images/avatar/avatar-5.png"
                size="md"
              />
              <p className="text-sm font-medium text-slate-700">James Mary</p>
            </div>
            <span>
              <CaretRight size={18} color="#5E718D" />
            </span>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex w-full items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <Avatar
                shape="circle"
                img="/images/avatar/avatar-3.png"
                size="md"
              />
              <p className="text-sm font-medium text-slate-700">
                Bellanca Sherringham
              </p>
            </div>
            <span>
              <CaretRight size={18} color="#5E718D" />
            </span>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex w-full items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <Avatar
                shape="circle"
                img="/images/avatar/avatar-2.png"
                size="md"
              />
              <p className="text-sm font-medium text-slate-700">Carlin Tebb</p>
            </div>
            <span>
              <CaretRight size={18} color="#5E718D" />
            </span>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex w-full items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <Avatar
                shape="circle"
                img="/images/avatar/avatar-1.png"
                size="md"
              />
              <p className="text-sm font-medium text-slate-700">Mar Segrave</p>
            </div>
            <span>
              <CaretRight size={18} color="#5E718D" />
            </span>
          </div>
        </Dropdown.Item>
      </>
    ),
  },
};
export const DropdownWithAvatarAndName: Story = {
  args: {
    ...DefaultDropdown.args,
    children: removeFragment(
      <>
        <Dropdown.Item>
          <div className="flex items-center gap-3">
            <Avatar
              shape="circle"
              img="/images/avatar/avatar-1.png"
              size="md"
            />
            <div>
              <p className="-mb-1 text-sm font-medium text-slate-700">
                Guy Hawkins
              </p>
              <p className="text-xs font-normal text-slate-500">
                Product Designer
              </p>
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-center gap-3">
            <Avatar
              shape="circle"
              img="/images/avatar/avatar-2.png"
              size="md"
            />
            <div>
              <p className="-mb-1 text-sm font-medium text-slate-700">
                Bellanca Sherringham
              </p>
              <p className="text-xs font-normal text-slate-500">
                VP Accounting
              </p>
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-center gap-3">
            <Avatar
              shape="circle"
              img="/images/avatar/avatar-3.png"
              size="md"
            />
            <div>
              <p className="-mb-1 text-sm font-medium text-slate-700">
                Carlin Tebb
              </p>
              <p className="text-xs font-normal text-slate-500">
                Clinical Specialist
              </p>
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-center gap-3">
            <Avatar
              shape="circle"
              img="/images/avatar/avatar-4.png"
              size="md"
            />
            <div>
              <p className="-mb-1 text-sm font-medium text-slate-700">
                Lorena Gregg
              </p>
              <p className="text-xs font-normal text-slate-500">
                Research Nurse
              </p>
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-center gap-3">
            <Avatar
              shape="circle"
              img="/images/avatar/avatar-5.png"
              size="md"
            />
            <div>
              <p className="-mb-1 text-sm font-medium text-slate-700">
                Geoffry Kingman
              </p>
              <p className="text-xs font-normal text-slate-500">
                Speech Pathologist
              </p>
            </div>
          </div>
        </Dropdown.Item>
      </>
    ),
  },
};
export const DropdownWithAvatarNameTitleAndIcon: Story = {
  args: {
    ...DefaultDropdown.args,
    children: removeFragment(
      <>
        <Dropdown.Item>
          <div className="flex w-full items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <Avatar
                shape="circle"
                img="/images/avatar/avatar-2.png"
                size="md"
              />
              <div>
                <p className="-mb-1 text-sm font-medium text-slate-700">
                  Guy Hawkins
                </p>
                <p className="text-xs font-normal text-slate-500">
                  Product Designer
                </p>
              </div>
            </div>
            <span>
              <CaretRight size={18} color="#5E718D" />
            </span>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex w-full items-center justify-between gap-5 ">
            <div className="flex items-center gap-3">
              <Avatar
                shape="circle"
                img="/images/avatar/avatar-1.png"
                size="md"
              />
              <div>
                <p className="-mb-1 text-sm font-medium text-slate-700">
                  Bellanca Sherringham
                </p>
                <p className="text-xs font-normal text-slate-500">
                  VP Accounting
                </p>
              </div>
            </div>
            <div className="justify-self-end">
              <CaretRight size={18} color="#5E718D" />
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex w-full items-center justify-between gap-5 ">
            <div className="flex items-center gap-3">
              <Avatar
                shape="circle"
                img="/images/avatar/avatar-3.png"
                size="md"
              />
              <div>
                <p className="-mb-1 text-sm font-medium text-slate-700">
                  Carlin Tebb
                </p>
                <p className="text-xs font-normal text-slate-500">
                  Clinical Specialist
                </p>
              </div>
            </div>
            <div className="justify-self-end">
              <CaretRight size={18} color="#5E718D" />
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex w-full items-center justify-between gap-5 ">
            <div className="flex items-center gap-3">
              <Avatar
                shape="circle"
                img="/images/avatar/avatar-4.png"
                size="md"
              />
              <div>
                <p className="-mb-1 text-sm font-medium text-slate-700">
                  Lorena Gregg
                </p>
                <p className="text-xs font-normal text-slate-500">
                  Research Nurse
                </p>
              </div>
            </div>
            <div className="justify-self-end">
              <CaretRight size={18} color="#5E718D" />
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex w-full items-center justify-between gap-5 ">
            <div className="flex items-center gap-3">
              <Avatar
                shape="circle"
                img="/images/avatar/avatar-5.png"
                size="md"
              />
              <div>
                <p className="-mb-1 text-sm font-medium text-slate-700">
                  Geoffry Kingman
                </p>
                <p className="text-xs font-normal text-slate-500">
                  Speech Pathologist
                </p>
              </div>
            </div>
            <div className="justify-self-end">
              <CaretRight size={18} color="#5E718D" />
            </div>
          </div>
        </Dropdown.Item>
      </>
    ),
  },
};
export const DropdownWithAvatarNameAndSearchBar: Story = {
  args: {
    ...DefaultDropdown.args,
    children: removeFragment(
      <>
        <Dropdown.Item className="border-none">
          <div className="w-full">
            <TextInput id="#id-z3rxdy" placeholder="Search" sizing="md" />
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-center gap-3">
            <Avatar
              shape="circle"
              img="/images/avatar/avatar-1.png"
              size="md"
            />
            <div>
              <p className="-mb-1 text-sm font-medium text-slate-700">
                Guy Hawkins
              </p>
              <p className="text-xs font-normal text-slate-500">
                Product Designer
              </p>
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-center gap-3">
            <Avatar
              shape="circle"
              img="/images/avatar/avatar-2.png"
              size="md"
            />
            <div>
              <p className="-mb-1 text-sm font-medium text-slate-700">
                Bellanca Sherringham
              </p>
              <p className="text-xs font-normal text-slate-500">
                VP Accounting
              </p>
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-center gap-3">
            <Avatar
              shape="circle"
              img="/images/avatar/avatar-3.png"
              size="md"
            />
            <div>
              <p className="-mb-1 text-sm font-medium text-slate-700">
                Carlin Tebb
              </p>
              <p className="text-xs font-normal text-slate-500">
                Clinical Specialist
              </p>
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-center gap-3">
            <Avatar
              shape="circle"
              img="/images/avatar/avatar-4.png"
              size="md"
            />
            <div>
              <p className="-mb-1 text-sm font-medium text-slate-700">
                Lorena Gregg
              </p>
              <p className="text-xs font-normal text-slate-500">
                Research Nurse
              </p>
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-center gap-3">
            <Avatar
              shape="circle"
              img="/images/avatar/avatar-5.png"
              size="md"
            />
            <div>
              <p className="-mb-1 text-sm font-medium text-slate-700">
                Geoffry Kingman
              </p>
              <p className="text-xs font-normal text-slate-500">
                Speech Pathologist
              </p>
            </div>
          </div>
        </Dropdown.Item>
      </>
    ),
  },
};
export const DropdownWithAvatarNameTitleIconAndSearchBar: Story = {
  args: {
    ...DefaultDropdown.args,
    children: removeFragment(
      <>
        <Dropdown.Item className="border-none">
          <div className="w-full">
            <TextInput id="#id-z3rxdy" placeholder="Search" sizing="md" />
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex w-full items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <Avatar
                shape="circle"
                img="/images/avatar/avatar-2.png"
                size="md"
              />
              <div>
                <p className="-mb-1 text-sm font-medium text-slate-700">
                  Guy Hawkins
                </p>
                <p className="text-xs font-normal text-slate-500">
                  Product Designer
                </p>
              </div>
            </div>
            <span>
              <CaretRight size={18} color="#5E718D" />
            </span>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex w-full items-center justify-between gap-5 ">
            <div className="flex items-center gap-3">
              <Avatar
                shape="circle"
                img="/images/avatar/avatar-1.png"
                size="md"
              />
              <div>
                <p className="-mb-1 text-sm font-medium text-slate-700">
                  Bellanca Sherringham
                </p>
                <p className="text-xs font-normal text-slate-500">
                  VP Accounting
                </p>
              </div>
            </div>
            <div className="justify-self-end">
              <CaretRight size={18} color="#5E718D" />
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex w-full items-center justify-between gap-5 ">
            <div className="flex items-center gap-3">
              <Avatar
                shape="circle"
                img="/images/avatar/avatar-3.png"
                size="md"
              />
              <div>
                <p className="-mb-1 text-sm font-medium text-slate-700">
                  Carlin Tebb
                </p>
                <p className="text-xs font-normal text-slate-500">
                  Clinical Specialist
                </p>
              </div>
            </div>
            <div className="justify-self-end">
              <CaretRight size={18} color="#5E718D" />
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex w-full items-center justify-between gap-5 ">
            <div className="flex items-center gap-3">
              <Avatar
                shape="circle"
                img="/images/avatar/avatar-4.png"
                size="md"
              />
              <div>
                <p className="-mb-1 text-sm font-medium text-slate-700">
                  Lorena Gregg
                </p>
                <p className="text-xs font-normal text-slate-500">
                  Research Nurse
                </p>
              </div>
            </div>
            <div className="justify-self-end">
              <CaretRight size={18} color="#5E718D" />
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex w-full items-center justify-between gap-5 ">
            <div className="flex items-center gap-3">
              <Avatar
                shape="circle"
                img="/images/avatar/avatar-5.png"
                size="md"
              />
              <div>
                <p className="-mb-1 text-sm font-medium text-slate-700">
                  Geoffry Kingman
                </p>
                <p className="text-xs font-normal text-slate-500">
                  Speech Pathologist
                </p>
              </div>
            </div>
            <div className="justify-self-end">
              <CaretRight size={18} color="#5E718D" />
            </div>
          </div>
        </Dropdown.Item>
      </>
    ),
  },
};
export const DropdownWithCheckbox: Story = {
  args: {
    ...DefaultDropdown.args,
    children: removeFragment(
      <>
        <Dropdown.Item>
          <div className="flex items-center">
            <CheckBox
              size="sm"
              label="Dropdown Title"
              id="#id1"
              name="countries"
              value="USA"
            />
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-center">
            <CheckBox
              size="sm"
              label="Application Setting"
              id="#id2"
              name="countries"
              value="USA"
            />
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-center">
            <CheckBox
              size="sm"
              label="Your Profile"
              id="#id3"
              name="countries"
              value="USA"
            />
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-center">
            <CheckBox
              size="sm"
              label="Privacy & Policy"
              id="#id4"
              name="countries"
              value="USA"
            />
          </div>
        </Dropdown.Item>
      </>
    ),
  },
};
export const DropdownWithCheckboxAndIcon: Story = {
  args: {
    ...DefaultDropdown.args,
    children: removeFragment(
      <>
        <Dropdown.Item className="gap-5">
          <div className="flex items-center">
            <CheckBox
              size="sm"
              label="Dropdown Title"
              id="#id5"
              name="countries"
              value="USA"
            />
          </div>
          <span className="ml-auto">
            <CaretRight size={20} color="#5E718D" />
          </span>
        </Dropdown.Item>
        <Dropdown.Item className="gap-5">
          <div className="flex items-center">
            <CheckBox
              size="sm"
              label="Application Setting"
              id="#id6"
              name="countries"
              value="USA"
            />
          </div>
          <span className="ml-auto">
            <CaretRight size={20} color="#5E718D" />
          </span>
        </Dropdown.Item>
        <Dropdown.Item className="gap-5">
          <div className="flex items-center">
            <CheckBox
              size="sm"
              label="Your Profile"
              id="#id7"
              name="countries"
              value="USA"
            />
          </div>
          <span className="ml-auto">
            <CaretRight size={20} color="#5E718D" />
          </span>
        </Dropdown.Item>
        <Dropdown.Item className="gap-5">
          <div className="flex items-center">
            <CheckBox
              size="sm"
              label="Privacy & Policy"
              id="#id8"
              name="countries"
              value="USA"
            />
          </div>
          <span className="ml-auto">
            <CaretRight size={20} color="#5E718D" />
          </span>
        </Dropdown.Item>
      </>
    ),
  },
};
export const DropdownWithCheckboxAndSearchBar: Story = {
  args: {
    ...DefaultDropdown.args,
    children: removeFragment(
      <>
        <Dropdown.Item className="border-none">
          <div className="w-full">
            <TextInput id="#id-z3rxdy" placeholder="Search" sizing="md" />
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-center">
            <CheckBox
              size="sm"
              label="Dropdown Title"
              id="#id10"
              name="countries"
              value="USA"
            />
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-center">
            <CheckBox
              size="sm"
              label="Application Setting"
              id="#id21212"
              name="countries"
              value="USA"
            />
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-center">
            <CheckBox
              size="sm"
              label="Your Profile"
              id="#id13"
              name="countries"
              value="USA"
            />
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex items-center">
            <CheckBox
              size="sm"
              label="Privacy & Policy"
              id="#id41"
              name="countries"
              value="USA"
            />
          </div>
        </Dropdown.Item>
      </>
    ),
  },
};
export const DropdownWithCheckboxIconAndSearchBar: Story = {
  args: {
    ...DefaultDropdown.args,
    children: removeFragment(
      <>
        <Dropdown.Item className="border-none">
          <div className="w-full">
            <TextInput id="#id-z3rxdy" placeholder="Search" sizing="md" />
          </div>
        </Dropdown.Item>
        <Dropdown.Item className="gap-5">
          <div className="flex items-center">
            <CheckBox
              size="sm"
              label="Dropdown Title"
              id="#id211"
              name="countries"
              value="USA"
            />
          </div>
          <span className="ml-auto">
            <CaretRight size={20} color="#5E718D" />
          </span>
        </Dropdown.Item>
        <Dropdown.Item className="gap-5">
          <div className="flex items-center">
            <CheckBox
              size="sm"
              label="Application Setting"
              id="#i12d2"
              name="countries"
              value="USA"
            />
          </div>
          <span className="ml-auto">
            <CaretRight size={20} color="#5E718D" />
          </span>
        </Dropdown.Item>
        <Dropdown.Item className="gap-5">
          <div className="flex items-center">
            <CheckBox
              size="sm"
              label="Your Profile"
              id="12#id3"
              name="countries"
              value="USA"
            />
          </div>
          <span className="ml-auto">
            <CaretRight size={20} color="#5E718D" />
          </span>
        </Dropdown.Item>
        <Dropdown.Item className="gap-5">
          <div className="flex items-center">
            <CheckBox
              size="sm"
              label="Privacy & Policy"
              id="1#1id4"
              name="countries"
              value="USA"
            />
          </div>
          <span className="ml-auto">
            <CaretRight size={20} color="#5E718D" />
          </span>
        </Dropdown.Item>
      </>
    ),
  },
};
export const DropdownWithCheckboxTitleDescription: Story = {
  args: {
    ...DefaultDropdown.args,
    children: removeFragment(
      <>
        <Dropdown.Item className="flex !items-start gap-2">
          <div>
            <CheckBox
              size="sm"
              label=""
              id="#id101"
              name="countries"
              value="USA"
            />
          </div>
          <label htmlFor="#id101" className="cursor-pointer select-none">
            <p className="mb-2 text-base font-semibold leading-3 text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </label>
        </Dropdown.Item>
        <Dropdown.Item className="flex !items-start gap-2">
          <div>
            <CheckBox
              size="sm"
              label=""
              id="#id102"
              name="countries"
              value="USA"
            />
          </div>
          <label htmlFor="#id102" className="cursor-pointer select-none">
            <p className="mb-2 text-base font-semibold leading-3 text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </label>
        </Dropdown.Item>
        <Dropdown.Item className="flex !items-start gap-2">
          <div>
            <CheckBox
              size="sm"
              label=""
              id="#id103"
              name="countries"
              value="USA"
            />
          </div>
          <label htmlFor="#id103" className="cursor-pointer select-none">
            <p className="mb-2 text-base font-semibold leading-3 text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </label>
        </Dropdown.Item>
        <Dropdown.Item className="flex !items-start gap-2">
          <div>
            <CheckBox
              size="sm"
              label=""
              id="#id104"
              name="countries"
              value="USA"
            />
          </div>
          <label htmlFor="#id104" className="cursor-pointer select-none">
            <p className="mb-2 text-base font-semibold leading-3 text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </label>
        </Dropdown.Item>
      </>
    ),
  },
};
export const DropdownItemWithCheckboxTitleDescriptionAndIcon: Story = {
  args: {
    ...DefaultDropdown.args,
    children: removeFragment(
      <>
        <Dropdown.Item className="flex !items-start gap-2">
          <div>
            <CheckBox
              size="sm"
              label=""
              id="#id1010"
              name="countries"
              value="USA"
            />
          </div>
          <label htmlFor="#id1010" className="cursor-pointer select-none">
            <p className="mb-2 text-base font-semibold leading-3 text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </label>
          <div>
            <CaretRight size={20} color="#5E718D" />
          </div>
        </Dropdown.Item>
        <Dropdown.Item className="flex !items-start gap-2">
          <div>
            <CheckBox
              size="sm"
              label=""
              id="#id1020"
              name="countries"
              value="USA"
            />
          </div>
          <label htmlFor="#id1020" className="cursor-pointer select-none">
            <p className="mb-2 text-base font-semibold leading-3 text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </label>
          <div>
            <CaretRight size={20} color="#5E718D" />
          </div>
        </Dropdown.Item>
        <Dropdown.Item className="flex !items-start gap-2">
          <div>
            <CheckBox
              size="sm"
              label=""
              id="#id1030"
              name="countries"
              value="USA"
            />
          </div>
          <label htmlFor="#id1030" className="cursor-pointer select-none">
            <p className="mb-2 text-base font-semibold leading-3 text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </label>
          <div>
            <CaretRight size={20} color="#5E718D" />
          </div>
        </Dropdown.Item>
        <Dropdown.Item className="flex !items-start gap-2">
          <div>
            <CheckBox
              size="sm"
              label=""
              id="#id1040"
              name="countries"
              value="USA"
            />
          </div>
          <label htmlFor="#id1040" className="cursor-pointer select-none">
            <p className="mb-2 text-base font-semibold leading-3 text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </label>
          <div>
            <CaretRight size={20} color="#5E718D" />
          </div>
        </Dropdown.Item>
      </>
    ),
  },
};
export const DropdownWithCheckboxTitleDescriptionAndSearchBar: Story = {
  args: {
    ...DefaultDropdown.args,
    children: removeFragment(
      <>
        <Dropdown.Item className="border-none">
          <div className="w-full">
            <TextInput id="#id-z3rxdy" placeholder="Search" sizing="md" />
          </div>
        </Dropdown.Item>
        <Dropdown.Item className="flex !items-start gap-2">
          <div>
            <CheckBox
              size="sm"
              label=""
              id="#id-z3rxdy1"
              name="countries"
              value="USA"
            />
          </div>
          <label htmlFor="#id-z3rxdy1" className="cursor-pointer select-none">
            <p className="mb-2 text-base font-semibold leading-3 text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </label>
        </Dropdown.Item>
        <Dropdown.Item className="flex !items-start gap-2">
          <div>
            <CheckBox
              size="sm"
              label=""
              id="#id-z3rxdy12"
              name="countries"
              value="USA"
            />
          </div>
          <label htmlFor="#id-z3rxdy12" className="cursor-pointer select-none">
            <p className="mb-2 text-base font-semibold leading-3 text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </label>
        </Dropdown.Item>
        <Dropdown.Item className="flex !items-start gap-2">
          <div>
            <CheckBox
              size="sm"
              label=""
              id="#id-z3rxdy123"
              name="countries"
              value="USA"
            />
          </div>
          <label htmlFor="#id-z3rxdy123" className="cursor-pointer select-none">
            <p className="mb-2 text-base font-semibold leading-3 text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </label>
        </Dropdown.Item>
        <Dropdown.Item className="flex !items-start gap-2">
          <div>
            <CheckBox
              size="sm"
              label=""
              id="#id-z3rxdy1122"
              name="countries"
              value="USA"
            />
          </div>
          <label
            htmlFor="#id-z3rxdy1122"
            className="cursor-pointer select-none"
          >
            <p className="mb-2 text-base font-semibold leading-3 text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </label>
        </Dropdown.Item>
      </>
    ),
  },
};
export const DropdownWithCheckboxTitleDescriptionIconAndSearchBar: Story = {
  args: {
    ...DefaultDropdown.args,
    children: removeFragment(
      <>
        <Dropdown.Item className="border-none">
          <div className="w-full">
            <TextInput id="#id-z3rxdy" placeholder="Search" sizing="md" />
          </div>
        </Dropdown.Item>
        <Dropdown.Item className="flex !items-start gap-2">
          <div>
            <CheckBox
              size="sm"
              label=""
              id="#id-z3rxdy312"
              name="countries"
              value="USA"
            />
          </div>
          <label htmlFor="#id-z3rxdy312" className="cursor-pointer select-none">
            <p className="mb-2 text-base font-semibold leading-3 text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </label>
          <div>
            <CaretRight size={20} color="#5E718D" />
          </div>
        </Dropdown.Item>
        <Dropdown.Item className="flex !items-start gap-2">
          <div>
            <CheckBox
              size="sm"
              label=""
              id="#id-z3rxdyee"
              name="countries"
              value="USA"
            />
          </div>
          <label htmlFor="#id-z3rxdyee" className="cursor-pointer select-none">
            <p className="mb-2 text-base font-semibold leading-3 text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </label>
          <div>
            <CaretRight size={20} color="#5E718D" />
          </div>
        </Dropdown.Item>
        <Dropdown.Item className="flex !items-start gap-2">
          <div>
            <CheckBox
              size="sm"
              label=""
              id="#id-z3rxdyxs"
              name="countries"
              value="USA"
            />
          </div>
          <label htmlFor="#id-z3rxdyxs" className="cursor-pointer select-none">
            <p className="mb-2 text-base font-semibold leading-3 text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </label>
          <div>
            <CaretRight size={20} color="#5E718D" />
          </div>
        </Dropdown.Item>
        <Dropdown.Item className="flex !items-start gap-2">
          <div>
            <CheckBox
              size="sm"
              label=""
              id="#id-z3rxdyfr"
              name="countries"
              value="USA"
            />
          </div>
          <label htmlFor="#id-z3rxdyfr" className="cursor-pointer select-none">
            <p className="mb-2 text-base font-semibold leading-3 text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </label>
          <div>
            <CaretRight size={20} color="#5E718D" />
          </div>
        </Dropdown.Item>
      </>
    ),
  },
};
