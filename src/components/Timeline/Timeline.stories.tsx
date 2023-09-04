import type { Meta, StoryObj } from "@storybook/react";
import { ArrowRight, CalendarBlank } from "phosphor-react";
import { Timeline } from ".";
import { Button } from "../Button";
import { removeFragment } from "@/src/helpers/mergeDeep";

const meta: Meta<typeof Timeline> = {
  component: Timeline,
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "Children is timeline content",
      control: { disable: true },
      table: {
        type: { summary: "ReactNode" },
      },
    },
    className: {
      description: "Custom css class name",

      table: {
        type: { summary: "String" },
        defaultValue: { summary: "" },
      },
    },
    horizontal: {
      description: "Timeline show in horizontal or not?",

      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    gradientPoint: {
      description: "Timeline point color gradient or not?",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    timelineBarType: {
      description: "Timeline bar type dashed or solid?",
      table: {
        type: { summary: "dashed | solid" },
        defaultValue: { summary: "solid" },
      },
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
type Story = StoryObj<typeof Timeline>;

export const DefaultTimeline: Story = {
  args: {
    children: removeFragment(
      <>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>February 2023</Timeline.Time>
            <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
            <Timeline.Body>
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce & Marketing
              pages.
            </Timeline.Body>
            <Button type="primary" size="sm">
              Learn More
              <ArrowRight className="ml-2 h-3 w-3" />
            </Button>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>March 2023</Timeline.Time>
            <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
            <Timeline.Body>
              All of the pages and components are first designed in Figma and we
              keep a parity between the two versions even as we update the
              project.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>April 2023</Timeline.Time>
            <Timeline.Title>E-Commerce UI code in Tailwind CSS</Timeline.Title>
            <Timeline.Body>
              Get started with dozens of web components and interactive elements
              built on top of Tailwind CSS.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </>
    ),
  },
};

export const TimelineWithGradientPoint: Story = {
  args: {
    ...DefaultTimeline.args,
    gradientPoint: true,
  },
};
export const VerticalTimeline: Story = {
  args: {
    children: removeFragment(
      <>
        <Timeline.Item>
          <Timeline.Point icon={<CalendarBlank size={12} color="#ffffff" />} />
          <Timeline.Content>
            <Timeline.Time>February 2023</Timeline.Time>
            <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
            <Timeline.Body>
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce & Marketing
              pages.
            </Timeline.Body>
            <Button type="primary" size="sm">
              Learn More
              <ArrowRight className="ml-2 h-3 w-3" />
            </Button>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={<CalendarBlank size={12} color="#ffffff" />} />
          <Timeline.Content>
            <Timeline.Time>March 2023</Timeline.Time>
            <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
            <Timeline.Body>
              All of the pages and components are first designed in Figma and we
              keep a parity between the two versions even as we update the
              project.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={<CalendarBlank size={12} color="#ffffff" />} />
          <Timeline.Content>
            <Timeline.Time>April 2023</Timeline.Time>
            <Timeline.Title>E-Commerce UI code in Tailwind CSS</Timeline.Title>
            <Timeline.Body>
              Get started with dozens of web components and interactive elements
              built on top of Tailwind CSS.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </>
    ),
  },
};
export const StepperTimeline: Story = {
  args: {
    ...VerticalTimeline.args,
    horizontal: true,
  },
};
export const DashedBorderTimeline: Story = {
  args: {
    ...VerticalTimeline.args,
    timelineBarType: "dashed",
  },
};

export const TimelineWithImage: Story = {
  args: {
    gradientPoint: true,
    children: removeFragment(
      <>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>February 2023</Timeline.Time>
            <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
            <Timeline.Body>
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce & Marketing
              pages.
            </Timeline.Body>
            <img src="../assets/images/banner/timeline.png" alt="timeline" />
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>March 2023</Timeline.Time>
            <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
            <Timeline.Body>
              All of the pages and components are first designed in Figma and we
              keep a parity between the two versions even as we update the
              project.
            </Timeline.Body>
            <img
              className="rounded-lg"
              src="../assets/images/banner/banner.png"
              alt="timeline"
            />
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>April 2023</Timeline.Time>
            <Timeline.Title>E-Commerce UI code in Tailwind CSS</Timeline.Title>
            <Timeline.Body>
              Get started with dozens of web components and interactive elements
              built on top of Tailwind CSS.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </>
    ),
  },
};
