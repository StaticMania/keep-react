import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Carousel } from ".";
import Image from "next/image";

const meta: Meta<typeof Carousel> = {
  component: Carousel,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="h-56 w-full  sm:h-64 xl:h-80 2xl:h-96">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    children: {
      control: { disable: true },
      description: "Children is carousel Image item",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    indicators: {
      description: "Carousel indicators show or not?",
      control: "boolean",
      table: {
        type: { summary: "Boolean" },
        defaultValue: { summary: true },
      },
    },
    showControls: {
      description: "Carousel Control button show or not?",
      control: "boolean",
      table: {
        type: { summary: "Boolean" },
        defaultValue: { summary: true },
      },
    },
    leftControl: {
      control: { disable: true },
      description: "Carousel Left Control Icon",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    rightControl: {
      control: { disable: true },
      description: "Carousel Right Control Icon",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    slide: {
      description: "Carousel auto slide?",
      control: "boolean",
      table: {
        type: { summary: "Boolean" },
        defaultValue: { summary: true },
      },
    },
    slideInterval: {
      description: "Carousel Interval Time",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 5000 },
      },
    },
    indicatorsType: {
      description: "Carousel indocator Type",
      control: "select",
      options: ["dot", "ring", "bar", "square", "squareRing"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "dot" },
      },
    },
    indicatorsTypeColors: {
      description: "Carousel indocator color Type",
      control: "select",
      options: ["white", "slate"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "white" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

function renderImageMultipleTimes(): React.ReactElement[] {
  const images = [];
  for (let i = 0; i < 4; i++) {
    const item = (
      <Image
        src={`/images/banner/slider-${i + 1}.jpg`}
        alt={`slider-${i + 1}`}
        height={400}
        width={910}
      />
    );
    images.push(item);
  }
  return images;
}

function renderSlideMultipleTimes(): React.ReactElement[] {
  const slides = [];
  for (let i = 0; i < 5; i++) {
    const item = (
      <div className="flex h-full items-center justify-center bg-slate-400">
        Slide {i + 1}
      </div>
    );
    slides.push(item);
  }
  return slides;
}

export const DefaultCarousel: Story = {
  args: {
    slideInterval: 5000,
    showControls: true,
    indicators: true,
    indicatorsType: "dot",
    slide: true,
    indicatorsTypeColors: "white",
    children: renderImageMultipleTimes(),
  },
};

export const StaticCarousel: Story = {
  args: {
    ...DefaultCarousel.args,
    slide: false,
  },
};
export const CarouselWithRingIndicator: Story = {
  args: {
    ...DefaultCarousel.args,
    slide: true,
    indicatorsType: "ring",
  },
};
export const CarouselWithBarIndicator: Story = {
  args: {
    ...CarouselWithRingIndicator.args,
    indicatorsType: "bar",
  },
};
export const CarouselWithSquareIndicator: Story = {
  args: {
    ...CarouselWithRingIndicator.args,
    indicatorsType: "square",
  },
};
export const CarouselWithSquareRingIndicator: Story = {
  args: {
    ...CarouselWithRingIndicator.args,
    indicatorsType: "squareRing",
  },
};

export const CarouselWithoutIndicator: Story = {
  args: {
    ...CarouselWithRingIndicator.args,
    indicators: false,
  },
};
export const CarouselWithSlide: Story = {
  args: {
    children: renderSlideMultipleTimes(),
  },
};
