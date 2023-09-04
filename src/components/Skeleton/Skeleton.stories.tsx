import { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";
import { removeFragment } from "@/src/helpers/mergeDeep";

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  tags: ["autodocs"],
  parameters: {},
  decorators: [
    (Story) => (
      <div className="max-w-lg">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    animation: {
      description: "Skeletion animation show or not?",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
      },
    },
    children: {
      description: "Skeletion element",
      control: { type: null },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const DefaultSkeleton: Story = {
  args: {
    children: removeFragment(
      <>
        <div className="max-w-sm py-5">
          <Skeleton>
            <Skeleton.Line height="h-5" />
          </Skeleton>
        </div>
      </>
    ),
  },
};
export const SkeletonLayout: Story = {
  args: {
    children: removeFragment(
      <>
        <div className="max-w-lg py-5">
          <Skeleton>
            <Skeleton.Line height="h-5" />
            <div className="w-3/4">
              <Skeleton.Line height="h-[60px]" />
              <Skeleton.Line height="h-9" />
            </div>
            <Skeleton.Line height="h-5" />
          </Skeleton>
        </div>
      </>
    ),
  },
};
export const CommentLayout: Story = {
  args: {
    children: removeFragment(
      <>
        <div className="max-w-lg py-5">
          <Skeleton>
            <Skeleton.Line height="h-5" />
            <div className="grid grid-cols-4 items-center justify-center">
              <div className="col-span-1 flex  justify-center ">
                <Skeleton.Avatar />
              </div>
              <div className="col-span-3 flex items-center justify-center">
                <Skeleton.Line height="h-[60px]" />
              </div>
            </div>
          </Skeleton>
        </div>
      </>
    ),
  },
};
export const PostSkeleton: Story = {
  args: {
    children: removeFragment(
      <>
        <div className="max-w-3xl py-5">
          <Skeleton>
            <div className="w-11/12">
              <Skeleton.Line height="h-4" />
            </div>
            <div className="w-10/12">
              <Skeleton.Line height="h-4" />
            </div>
            <div className="w-8/12">
              <Skeleton.Line height="h-[350px]" />
            </div>
            <div className="w-11/12">
              <Skeleton.Line height="h-4" />
            </div>
            <div className="w-9/12">
              <Skeleton.Line height="h-4" />
            </div>
            <div className="w-10/12">
              <Skeleton.Line height="h-4" />
            </div>
            <div className="w-7/12">
              <Skeleton.Line height="h-4" />
            </div>
            <div className="w-3/12">
              <Skeleton.Line height="h-[46px]" />
            </div>
          </Skeleton>
        </div>
      </>
    ),
  },
};
export const ParagraphSkeleton: Story = {
  args: {
    children: removeFragment(
      <>
        <div className="max-w-xl py-5">
          <Skeleton animation={true}>
            <div className="w-11/12">
              <Skeleton.Line height="h-6" />
            </div>
            <div className="w-9/12">
              <Skeleton.Line height="h-4" />
            </div>
            <div className="w-10/12">
              <Skeleton.Line height="h-4" />
            </div>
            <div className="w-7/12">
              <Skeleton.Line height="h-4" />
            </div>
          </Skeleton>
        </div>
      </>
    ),
  },
};
export const SkeletonWithAnimation: Story = {
  args: {
    animation: true,
    children: removeFragment(
      <>
        <div className="max-w-3xl py-5">
          <Skeleton animation={true}>
            <div className="w-11/12">
              <Skeleton.Line height="h-4" />
            </div>
            <div className="w-10/12">
              <Skeleton.Line height="h-4" />
            </div>
            <div className="w-8/12">
              <Skeleton.Line height="h-[350px]" />
            </div>
            <div className="w-11/12">
              <Skeleton.Line height="h-4" />
            </div>
            <div className="w-9/12">
              <Skeleton.Line height="h-4" />
            </div>
            <div className="w-10/12">
              <Skeleton.Line height="h-4" />
            </div>
            <div className="w-7/12">
              <Skeleton.Line height="h-4" />
            </div>
            <div className="w-3/12">
              <Skeleton.Line height="h-[46px]" />
            </div>
          </Skeleton>
        </div>
      </>
    ),
  },
};
