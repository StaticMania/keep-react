import { Meta, StoryObj } from "@storybook/react";
import { Rating } from ".";
import { removeFragment } from "../../helpers/mergeDeep";

const meta: Meta<typeof Rating> = {
  component: Rating,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle:
      "A rating component is a user interface element that allows users to rate or score something, typically on a scale of 1 to 5 stars. It is often used in applications that require user feedback, such as product reviews or movie ratings.",
  },

  argTypes: {
    children: {
      control: { disable: true },
      description: "Children is Star Icon with props",
    },
    size: {
      description: "Size means star font size",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 30 },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const DefaultRating: Story = {
  args: {
    children: removeFragment(
      <>
        <Rating.Star filledType="fill" />
        <Rating.Star filledType="fill" />
        <Rating.Star filledType="fill" />
        <Rating.Star filledType="fill" />
        <Rating.Star filledType="fill" />
      </>
    ),
  },
};
export const RegularRating: Story = {
  args: {
    children: removeFragment(
      <>
        <Rating.Star filledType="regular" />
        <Rating.Star filledType="regular" />
        <Rating.Star filledType="regular" />
        <Rating.Star filledType="regular" />
        <Rating.Star filledType="regular" />
      </>
    ),
  },
};
export const RatingWithFillStar: Story = {
  args: {
    children: removeFragment(
      <>
        <Rating.Star filledType="fill" />
        <Rating.Star filledType="fill" />
        <Rating.Star filledType="fill" />
        <Rating.Star filledType="fill" />
        <Rating.Star filledType="fill" />
      </>
    ),
  },
};
export const RatingWithDuotoneStar: Story = {
  args: {
    children: removeFragment(
      <>
        <Rating.Star filledType="duotone" />
        <Rating.Star filledType="duotone" />
        <Rating.Star filledType="duotone" />
        <Rating.Star filledType="duotone" />
        <Rating.Star filledType="duotone" />
      </>
    ),
  },
};

export const BoldRating: Story = {
  args: {
    children: removeFragment(
      <>
        <Rating.Star filledType="bold" />
        <Rating.Star filledType="bold" />
        <Rating.Star filledType="bold" />
        <Rating.Star filledType="bold" />
        <Rating.Star filledType="bold" />
      </>
    ),
  },
};

export const LightRating: Story = {
  args: {
    children: removeFragment(
      <>
        <Rating.Star filledType="light" />
        <Rating.Star filledType="light" />
        <Rating.Star filledType="light" />
        <Rating.Star filledType="light" />
        <Rating.Star filledType="light" />
      </>
    ),
  },
};
export const ThinRating: Story = {
  args: {
    children: removeFragment(
      <>
        <Rating.Star filledType="thin" />
        <Rating.Star filledType="thin" />
        <Rating.Star filledType="thin" />
        <Rating.Star filledType="thin" />
        <Rating.Star filledType="thin" />
      </>
    ),
  },
};
export const HalfStarRating: Story = {
  args: {
    children: removeFragment(
      <>
        <Rating.Star filledType="fill" starType="half" />
        <Rating.Star filledType="fill" starType="half" />
        <Rating.Star filledType="fill" starType="half" />
        <Rating.Star filledType="fill" starType="half" />
        <Rating.Star filledType="fill" starType="half" />
      </>
    ),
  },
};
export const AdvanceRating: Story = {
  args: {
    children: (
      <div className="my-5 ml-5 flex w-full flex-col gap-2">
        <Rating.Advanced percentFilled={70}>5 star</Rating.Advanced>
        <Rating.Advanced percentFilled={17}>4 star</Rating.Advanced>
        <Rating.Advanced percentFilled={8}>3 star</Rating.Advanced>
        <Rating.Advanced percentFilled={4}>2 star</Rating.Advanced>
        <Rating.Advanced percentFilled={1}>1 star</Rating.Advanced>
      </div>
    ),
  },
};
