import type { Meta, StoryObj } from "@storybook/react";
import { Cookie, DownloadSimple, FigmaLogo } from "phosphor-react";
import { Notification } from ".";
import { Button } from "../Button";
import { Avatar } from "../Avatar/Avatar";

const meta: Meta<typeof Notification> = {
  component: Notification,
  tags: ["autodocs"],
  args: {},
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
    additionalContent: {
      control: {
        disable: true,
      },
    },
    onDismiss: {
      control: {
        disable: true,
      },
    },
  },
  parameters: {
    componentSubtitle:
      "Displays an image that represents a user or organization",
  },
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const DefaultNotification: Story = {
  args: {
    dismiss: false,
    additionalContent: (
      <div className="mt-2.5 text-base font-normal text-slate-500">
        Default message - Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.
        <div className="mt-6 flex">
          <Button size="xs" type="primary" color="info">
            Accept
          </Button>
          <Button size="xs" type="outlineGray" color="info" customClass="ml-3">
            Review
          </Button>
        </div>
      </div>
    ),
    children: (
      <h3 className="text-xl font-medium text-slate-700">
        Can we store cookies?
      </h3>
    ),
  },
};
export const NotificationWithIcon: Story = {
  args: {
    dismiss: false,
    infoIcon: (
      <Button type="default" circle={true} size="xs">
        <span>
          <Cookie size={24} weight="bold" color="#3D4A5C" />
        </span>
      </Button>
    ),
    additionalContent: (
      <div className="mt-2.5 text-base font-normal text-slate-500">
        Default message - Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.
        <div className="mt-6 flex">
          <Button size="xs" type="primary" color="info">
            Accept
          </Button>
          <Button size="xs" type="outlineGray" color="info" customClass="ml-3">
            Review
          </Button>
        </div>
      </div>
    ),
    children: (
      <h3 className="text-xl font-medium text-slate-700">
        Can we store cookies?
      </h3>
    ),
  },
};

export const NotificationWithAvatar: Story = {
  args: {
    dismiss: false,
    infoIcon: (
      <div className="h-10 w-10">
        <Avatar shape="round" img="/images/avatar/avatar-1.png" />
      </div>
    ),
    additionalContent: (
      <div className="mt-2.5 text-base font-normal text-slate-500">
        Default message - Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.
        <div className="mt-6 flex">
          <Button size="xs" type="primary" color="info">
            Accept
          </Button>
          <Button size="xs" type="outlineGray" color="info" customClass="ml-3">
            View Profile
          </Button>
        </div>
      </div>
    ),
    children: (
      <h3 className="text-xl font-medium text-slate-700">
        Rono Pixel
        <span className="pl-2 text-sm font-medium text-slate-400">
          Product Designer
        </span>
      </h3>
    ),
  },
};

export const NotificationWithCard: Story = {
  args: {
    dismiss: false,

    headerBannerSrc: "../assets/images/banner/banner.png",
    additionalContent: (
      <div className="mt-2.5 text-base font-normal text-slate-500">
        Default message - Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.
        <div className="mt-6 flex">
          <Button size="xs" type="primary" color="info" width="half">
            Download
          </Button>
          <Button
            size="xs"
            type="outlineGray"
            color="info"
            customClass="ml-3"
            width="half"
          >
            View Figma File
          </Button>
        </div>
      </div>
    ),
    children: (
      <h3 className="text-xl font-medium text-slate-700">
        Welcome Keep Design
      </h3>
    ),
  },
};
export const NotificationCardWithFullButton: Story = {
  args: {
    dismiss: false,
    headerBannerSrc: "../assets/images/banner/banner.png",
    additionalContent: (
      <div className="mt-2.5 text-base font-normal text-slate-500">
        Default message - Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.
        <div className="mt-6 flex flex-wrap">
          <Button size="xs" type="primary" color="info" width="full">
            Download
          </Button>
          <Button
            size="xs"
            type="outlineGray"
            color="info"
            customClass="mt-4"
            width="full"
          >
            View Figma File
          </Button>
        </div>
      </div>
    ),
    children: (
      <h3 className="text-xl font-medium text-slate-700">
        Welcome Keep Design
      </h3>
    ),
  },
};

export const NotificationCardWithButtonIcon: Story = {
  args: {
    dismiss: false,
    additionalContent: (
      <div className="mt-2.5 text-base font-normal text-slate-500">
        <div className="mt-6 flex gap-5">
          <Button size="xs" type="primary" color="info">
            <span className="pr-2">
              <DownloadSimple size={24} />
            </span>
            Download
          </Button>
          <Button size="xs" type="primary" color="info">
            <span className="pr-2">
              <FigmaLogo size={24} />
            </span>
            View Figma File
          </Button>
        </div>
      </div>
    ),
    children: (
      <>
        <h3 className="text-4xl  text-slate-700">Welcome Keep Design</h3>
        <p className="my-3 text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <img
          src="../assets/images/banner/banner.png"
          alt="header img"
          className="rounded-lg"
        />
      </>
    ),
  },
};
