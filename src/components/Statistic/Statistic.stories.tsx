import type { Meta, StoryObj } from "@storybook/react";
import { ArrowUp, Users } from "phosphor-react";
import { Statistic } from ".";
import { removeFragment } from "../../helpers/mergeDeep";

const meta: Meta<typeof Statistic> = {
  component: Statistic,
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "Statistic Items",
      control: { type: null },
      table: {
        type: { summary: "React Node" },
      },
    },
    showDollar: {
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      description: "Dollar Sign Show or Not?",
    },
    showFilter: {
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      description: "Filter Button Show or Not?",
    },
    iconBg: {
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "primary" },
      },
      description: "Avaiable icon background color",
    },
  },
  decorators: [
    (Story) => (
      <div className="p-5">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Statistic>;

export const DefaultStatistic: Story = {
  args: {
    children: removeFragment(
      <>
        <Statistic.Title>Memebers</Statistic.Title>
        <Statistic.Amount>{1212122}</Statistic.Amount>
      </>
    ),
  },
};
export const StatisticWithProgressRate: Story = {
  args: {
    children: removeFragment(
      <>
        <Statistic.Title>Memebers</Statistic.Title>
        <div className="flex items-center gap-2">
          <Statistic.Amount>{1212122}</Statistic.Amount>
          <Statistic.Rate>1.5</Statistic.Rate>
        </div>
      </>
    ),
  },
};
export const StatisticWithDollarSign: Story = {
  args: {
    ...StatisticWithProgressRate.args,
    showDollar: true,
  },
};

export const StatisticWithFilterButton: Story = {
  args: {
    children: removeFragment(
      <>
        <div>
          <Statistic.Title>Memebers</Statistic.Title>
        </div>
        <div className="flex items-center gap-2">
          <Statistic.Amount>{1212122}</Statistic.Amount>
          <Statistic.Rate>1.5</Statistic.Rate>
        </div>
      </>
    ),
    showFilter: true,
    showDollar: true,
  },
};
export const StatisticWithAvatarImage: Story = {
  args: {
    children: removeFragment(
      <>
        <div className="flex items-center gap-4">
          <Statistic.Img img="/images/avatar/avatar-4.png"></Statistic.Img>
          <div>
            <div className="flex items-center gap-2">
              <Statistic.Amount>{1212122}</Statistic.Amount>
              <Statistic.Rate>1.5</Statistic.Rate>
            </div>
            <Statistic.Title>Memebers</Statistic.Title>
          </div>
        </div>
      </>
    ),
    showFilter: true,
    showDollar: true,
  },
};
export const StatisticWithIcon: Story = {
  args: {
    children: removeFragment(
      <>
        <div className="flex items-center gap-4">
          <Statistic.Icon
            icon={<ArrowUp size={32} color="#fff" />}
          ></Statistic.Icon>
          <div>
            <div className="flex items-center gap-2">
              <Statistic.Amount>{1212122}</Statistic.Amount>
              <Statistic.Rate>1.5</Statistic.Rate>
            </div>
            <Statistic.Title>Memebers</Statistic.Title>
          </div>
        </div>
      </>
    ),
    showFilter: true,
    showDollar: true,
  },
};
export const StatisticWithSuccessIcon: Story = {
  args: {
    ...StatisticWithIcon.args,
    iconBg: "success",
  },
};

export const StatisticWithUsersIcon: Story = {
  args: {
    children: removeFragment(
      <>
        <div className="flex items-center gap-4">
          <Statistic.Icon
            icon={<Users size={32} color="#fff" />}
          ></Statistic.Icon>
          <div>
            <div className="flex items-center gap-2">
              <Statistic.Amount>{1212122}</Statistic.Amount>
              <Statistic.Rate>3.5</Statistic.Rate>
            </div>
            <Statistic.Title>Memebers</Statistic.Title>
          </div>
        </div>
      </>
    ),
    showFilter: true,
    showDollar: true,
  },
};
