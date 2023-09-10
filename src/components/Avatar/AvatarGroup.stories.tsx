import type { Meta, StoryObj } from "@storybook/react";

import { AvatarGroup } from "./AvatarGroup";
import { mergeChildren, removeFragment } from "../../helpers/mergeDeep";
import { Avatar } from "./Avatar";
const meta: Meta<typeof AvatarGroup> = {
  component: AvatarGroup,
  tags: ["autodocs"],
  args: {},

  argTypes: {
    children: {
      description: "It will be the Avatar component itself",
      control: { disable: true },
    },
  },
  parameters: {
    componentSubtitle:
      "Displays an image that represents a user or organization",
  },
};

export default meta;
type Story = StoryObj<typeof AvatarGroup>;

export const DefaultAvatarGroup: Story = {
  args: {
    children: removeFragment(
      <>
        <Avatar
          shape="round"
          size="md"
          stacked={true}
          img="https://randomuser.me/api/portraits/men/11.jpg"
        />
        <Avatar
          shape="round"
          size="md"
          stacked={true}
          img="https://randomuser.me/api/portraits/men/12.jpg"
        />
        <Avatar
          shape="round"
          size="md"
          stacked={true}
          img="https://randomuser.me/api/portraits/men/13.jpg"
        />
        <Avatar
          shape="round"
          size="md"
          stacked={true}
          img="https://randomuser.me/api/portraits/men/14.jpg"
        />
        <Avatar
          shape="round"
          size="md"
          stacked={true}
          img="https://randomuser.me/api/portraits/men/15.jpg"
        />
        <Avatar shape="round" size="md" stacked={true} />
        <Avatar shape="round" size="md" stacked={true} />
      </>
    ),
  },
};
export const AvatarWithAddIcon: Story = {
  args: {
    children: mergeChildren(
      DefaultAvatarGroup?.args?.children,
      <Avatar.Add
        icon="/images/icon/plus.png"
        bg="#444D61"
        size="md"
        ringColor="ring-slate-200"
        iconColor="text-white"
      />
    ),
  },
};
export const AvatarWithNotification: Story = {
  args: {
    children: mergeChildren(
      DefaultAvatarGroup?.args?.children,
      <Avatar.Counter size="md" total={99} href="/" />
    ),
  },
};
export const AvatarWithNotificationAndAddIcon: Story = {
  args: {
    children: mergeChildren(
      AvatarWithNotification?.args?.children,
      <Avatar.Add
        icon="/images/icon/plus.png"
        bg="#444D61"
        size="md"
        ringColor="ring-[#444D61]"
        iconColor="text-white"
      />
    ),
  },
};
