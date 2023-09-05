import type { Meta, StoryObj } from "@storybook/react";
import {
  ArchiveTray,
  ArrowsOutSimple,
  Bed,
  CaretRight,
  CheckCircle,
  DotsThreeVertical,
  Heart,
  MapPinLine,
  PencilCircle,
  Play,
  Rows,
  ShoppingCart,
  Shower,
  SkipBack,
  SkipForward,
  SpeakerHigh,
  Users,
  XCircle,
} from "phosphor-react";
import { Card } from ".";
import { Badge } from "../Badge";
import { Button } from "../Button";
import PlayButton from "../PlayButton";
import { Progress } from "../Progress";
import { Rating } from "../Rating";
import { removeFragment } from "@/src/helpers/mergeDeep";
import { Avatar } from "../Avatar/Avatar";

const meta: Meta<typeof Card> = {
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: {
        disable: true,
      },
      table: {
        type: { summary: "ReactNode" },
      },
      description: "It is the content of card",
    },
    className: {
      description: "Card Custom Class Name",
      table: {
        type: { summary: "text" },
        defaultValue: { summary: "p-6" },
      },
    },
    border: {
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
      },
      description: "Card Border show or not?",
    },
    shadow: {
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
      },
      description: "Toggle the border for the card",
    },
    horizontal: {
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      description: "Card direction is horizontal or not?",
    },
    href: {
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
      description: "Card Link address, Like: www.example.com",
    },
    imgAlt: {
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
      description: "Card image alt text",
    },
    imgSrc: {
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
      description: "Card image source",
    },
    imgSize: {
      control: "select",
      options: ["sm", "md", "lg"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "md" },
      },
      description: "Card Image avaiable size",
    },
  },
  parameters: {
    componentSubtitle:
      "The Card component is a common UI element used to group related content together in a visually appealing way. It typically consists of a container with a header, body, and footer section, which can contain a variety of content such as text, images, and buttons.",
  },
  decorators: [
    (Story) => (
      <div className="mx-auto my-20 ">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const DefaultCard: Story = {
  args: {
    children: removeFragment(
      <>
        <h5 className="text-2xl font-bold tracking-tight text-slate-700">
          Keep design system
        </h5>
        <p className="font-normal text-slate-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took.
        </p>
        <a href="/" className="flex items-center gap-1 text-primary-600">
          <span>Learn More</span>
          <CaretRight size={16} color="#1B4DFF" />
        </a>
      </>
    ),
    className: "p-6",
  },

  decorators: [
    (Story) => (
      <div className="mx-auto max-w-lg">
        <Story />
      </div>
    ),
  ],
};
export const CardWithIcon: Story = {
  args: {
    className: "p-6",
    children: removeFragment(
      <>
        <div className="flex items-start gap-5">
          <div className="flex items-center justify-center rounded-full bg-gray-50 p-4">
            <ArchiveTray size={28} color="#3D4A5C" />
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="text-2xl font-bold tracking-tight text-slate-700">
              Keep design system
            </h5>
            <p className="font-normal text-slate-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took.
            </p>
            <a href="/" className="flex items-center gap-1 text-primary-600">
              <span>Learn More</span>
              <CaretRight size={16} color="#1B4DFF" />
            </a>
          </div>
        </div>
      </>
    ),
  },
};
export const CardWithListIcon: Story = {
  args: {
    className: "p-6",
    children: removeFragment(
      <>
        <div className="flex gap-5">
          <div className="flex items-center gap-5">
            <div className="flex items-center justify-center rounded-full bg-gray-50 p-4">
              <ArchiveTray size={28} color="#3D4A5C" />
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="text-2xl font-bold tracking-tight text-slate-700">
                Keep design system
              </h5>
              <p className="font-normal text-slate-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took.
              </p>
            </div>
          </div>
          <button className="flex items-start">
            <DotsThreeVertical
              size={28}
              color="#5E718D"
              className="flex items-start"
            />
          </button>
        </div>
      </>
    ),
  },
  decorators: DefaultCard.decorators,
};
export const CardWithImage: Story = {
  args: {
    children: (
      <Card.Container className="flex items-start py-3 px-5">
        <Card.Container>
          <Card.Title>Keep design system</Card.Title>
          <Card.Description>
            Component design systems can help developers to be more productive
            by providing them with a ready-made set of components to use.
          </Card.Description>
        </Card.Container>
        <Card.Container className="flex items-start">
          <DotsThreeVertical
            size={28}
            color="#5E718D"
            className="flex cursor-pointer items-start"
          />
        </Card.Container>
      </Card.Container>
    ),
    className: "max-w-lg",
    horizontal: true,
    imgSrc:
      "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },

  decorators: DefaultCard.decorators,
};
export const CardWithAvatar: Story = {
  args: {
    children: removeFragment(
      <>
        <Card.Description>
          Component design systems can help developers to be more productive by
          providing them with a ready-made set of components to use. This can
          save time and effort, and it can also help to reduce the risk of
          errors.
        </Card.Description>
        <Card.Container className="flex items-center">
          <Avatar
            size="lg"
            shape="round"
            img="https://randomuser.me/api/portraits/men/11.jpg"
          />
          <Card.Container className="ml-3">
            <Card.Title className="text-base font-semibold text-slate-800">
              Md Ariful Islam
            </Card.Title>
            <Card.Title className="text-xs font-medium text-slate-400">
              Product Designer
            </Card.Title>
          </Card.Container>
        </Card.Container>
      </>
    ),
    className: "max-w-lg p-6",
  },
  decorators: DefaultCard.decorators,
};
export const CardWithProfile: Story = {
  args: {
    className: "max-w-sm",
    imgSrc:
      "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    children: removeFragment(
      <>
        <Card.Container className="flex items-center justify-between p-5">
          <Card.Container className="flex items-center ">
            <Avatar
              size="lg"
              shape="round"
              img="https://randomuser.me/api/portraits/men/50.jpg"
            />
            <Card.Container className="ml-3">
              <Card.Title className="text-base font-semibold text-slate-800">
                Khairul Islam
              </Card.Title>
              <Card.Title className="text-xs font-medium text-slate-400">
                UI/UX Designer
              </Card.Title>
            </Card.Container>
          </Card.Container>
          <Button size="sm" type="outlineGray">
            View Profile
          </Button>
        </Card.Container>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-sm ">
        <Story />
      </div>
    ),
  ],
};
export const CardWithProfileDetails: Story = {
  args: {
    imgSrc:
      "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    imgSize: "md",
    children: removeFragment(
      <>
        <Card.Container className="absolute top-3.5 right-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-50/50">
          <Heart size={20} weight="bold" color="white" />
        </Card.Container>
        <Card.Container className="flex flex-col items-center justify-center">
          <Card.Container className="absolute top-32  rounded-full ring-4 ring-white ring-offset-0">
            <Avatar
              size="2xl"
              shape="round"
              img="https://randomuser.me/api/portraits/men/50.jpg"
            />
          </Card.Container>
          <Card.Container className="mt-10 mb-3 text-center">
            <Card.Title className="text-base font-semibold text-slate-800">
              Khairul Islam
            </Card.Title>
            <Card.Title className="text-xs font-medium text-slate-400">
              UI/UX Designer
            </Card.Title>
          </Card.Container>

          <Card.Container className="flex w-full justify-between border-t border-t-slate-50 py-3 px-5">
            <Card.Container className="text-center">
              <Card.Title className="text-sm text-slate-400">Post</Card.Title>
              <Card.Title className="text-3xl font-semibold text-slate-800">
                254
              </Card.Title>
            </Card.Container>
            <Card.Container className="text-center">
              <Card.Title className="text-sm text-slate-400">
                Followers
              </Card.Title>
              <Card.Title className="text-3xl font-semibold text-slate-800">
                12,45M
              </Card.Title>
            </Card.Container>
            <Card.Container className="text-center">
              <Card.Title className="text-sm text-slate-400">
                Following
              </Card.Title>
              <Card.Title className="text-3xl font-semibold text-slate-800">
                58
              </Card.Title>
            </Card.Container>
          </Card.Container>
        </Card.Container>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-sm ">
        <Story />
      </div>
    ),
  ],
};
export const CardWithPostCard: Story = {
  args: {
    className: "max-w-[280px] p-6",
    children: removeFragment(
      <>
        <Card.Container className="flex items-center justify-center">
          <PencilCircle size={80} color="#1B4DFF" />
        </Card.Container>
        <Card.Container className="text-center">
          <Card.Title>Keep design system</Card.Title>
          <Card.Description className="text-sm font-normal text-slate-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Card.Description>
        </Card.Container>
        <Card.Container className="mt-3 flex items-center justify-center">
          <Button type="outlinePrimary">Check this</Button>
        </Card.Container>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-sm ">
        <Story />
      </div>
    ),
  ],
};
export const CardWithRating: Story = {
  args: {
    imgSrc: "https://finder.createx.studio/img/city-guide/home/new-1.jpg",
    imgSize: "md",
    children: removeFragment(
      <>
        <Card.Container className="px-6 pt-5 pb-2">
          <Card.Title>Keep design system</Card.Title>
          <Card.Description className="text-base font-normal text-slate-500">
            Component design systems can help developers to be more productive
            by providing them.
          </Card.Description>
        </Card.Container>
        <Card.Container className="border-t border-t-slate-50 p-6">
          <Card.Title className="text-sm font-medium text-slate-700">
            From 850+ reviews
          </Card.Title>
          <Rating size={24}>
            <Rating.Star filledType="fill" />
            <Rating.Star filledType="fill" />
            <Rating.Star filledType="fill" />
            <Rating.Star filledType="fill" />
            <Rating.Star filledType="fill" starType="half" />
          </Rating>
        </Card.Container>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-[340px]">
        <Story />
      </div>
    ),
  ],
};
export const RecentPostsCard: Story = {
  args: {
    shadow: false,
    className: "max-w-2xl border-none",
    children: (
      <Card.Container className="flex items-start border-none">
        <Card.Container>
          <img
            src="https://finder.createx.studio/img/real-estate/blog/th02.jpg"
            alt="blog"
            className="rounded-xl"
          />
        </Card.Container>

        <Card.Container className="px-6">
          <Card.Container className="inline-block">
            <Badge colorType="light" color="info">
              Tips & Advice
            </Badge>
          </Card.Container>
          <Card.Title className="text-xl font-medium text-slate-700">
            Keep design system
          </Card.Title>
          <Card.Description className="text-sm font-normal text-slate-500">
            Component design systems can help developers to be more productive
            by providing them with a ready-made set of components to use.
          </Card.Description>
        </Card.Container>
      </Card.Container>
    ),
  },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-2xl">
        <Story />
      </div>
    ),
  ],
};
export const EcommerceProductCard: Story = {
  args: {
    className: "max-w-xs overflow-hidden rounded-md",
    imgSrc:
      "https://images.unsplash.com/photo-1584590069631-1c180f90a54c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    imgSize: "md",
    children: removeFragment(
      <>
        <Card.Container className="absolute top-3.5 right-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-50/50">
          <Heart size={20} weight="bold" color="white" />
        </Card.Container>
        <Card.Container className="p-6">
          <Card.Container className="flex items-center justify-between">
            <Badge size="sm" colorType="light" color="gray">
              For Sale
            </Badge>
            <Card.Title>$9.99</Card.Title>
          </Card.Container>
          <Card.Container className="my-3">
            <Card.Title>NIKE FREE SHOE</Card.Title>
            <Card.Description>
              This can save time and effort, and it can also help to reduce the
              risk of errors.
            </Card.Description>
          </Card.Container>
          <Card.Container className="flex items-center justify-start gap-5">
            <Button size="sm" type="outlineGray">
              <span className="pr-2">
                <ShoppingCart size={24} />
              </span>
              Add To Cart
            </Button>
          </Card.Container>
        </Card.Container>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-2xl">
        <Story />
      </div>
    ),
  ],
};
export const ProductCard: Story = {
  args: {
    className: "max-w-xs overflow-hidden rounded-md",
    imgSrc:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    imgSize: "md",
    children: removeFragment(
      <>
        <Card.Container className="absolute top-3.5 right-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-50/50">
          <Heart size={20} weight="bold" color="white" />
        </Card.Container>
        <Card.Container className="space-y-4 p-6">
          <Card.Title className="flex items-center gap-2 text-xl font-medium text-slate-700">
            <MapPinLine size={20} color="#5E718D" />
            <span>Garden Street,Ring Road</span>
          </Card.Title>
          <Card.Container className="flex items-center justify-between">
            <Card.Title className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <Bed size={20} color="#5E718D" />
              <span>3 Bed Room</span>
            </Card.Title>
            <Card.Title className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <Shower size={20} color="#5E718D" />
              <span>1 Bath</span>
            </Card.Title>
          </Card.Container>
          <Card.Container className="flex items-center justify-between">
            <Card.Title className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <ArrowsOutSimple size={20} color="#5E718D" />
              <span>1,032 sqft</span>
            </Card.Title>
            <Card.Title className="flex items-center gap-1 text-sm font-medium text-slate-500">
              <Users size={20} color="#5E718D" />
              <span>Family</span>
            </Card.Title>
          </Card.Container>
          <Card.Container className="my-3 flex items-center justify-between">
            <Button type="primary">Check Out</Button>
            <Card.Title className="text-2xl font-semibold text-slate-700">
              $649,00
            </Card.Title>
          </Card.Container>
        </Card.Container>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-2xl">
        <Story />
      </div>
    ),
  ],
};
export const PodcastCard: Story = {
  args: {
    className: "max-w-xs overflow-hidden rounded-md",
    imgSrc:
      "https://images.unsplash.com/photo-1590602846989-e99596d2a6ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    imgSize: "md",
    children: (
      <Card.Container className="space-y-3 p-6">
        <Card.Container>
          <Card.Title className="text-xl font-semibold text-slate-700">
            Keep design podcast
          </Card.Title>
          <Card.Description className="text-sm font-medium text-slate-500">
            By Static Mania
          </Card.Description>
        </Card.Container>
        <Card.Container className="flex items-center justify-between">
          <Card.Title className="text-xs font-medium text-slate-500">
            4:05
          </Card.Title>
          <Card.Title className="text-xs font-medium text-slate-500">
            10:05
          </Card.Title>
        </Card.Container>
        <Progress progress={45} color="info" rounded={true} />
        <Card.Container className="flex items-center justify-between">
          <Button type="text" circle>
            <Rows size={20} color="#5E718D" />
          </Button>
          <Card.Container className="flex items-center justify-between py-2">
            <Button type="text" circle>
              <SkipBack size={24} color="#5E718D" weight="bold" />
            </Button>
            <PlayButton
              type="primary"
              circle={true}
              size="lg"
              icon={<Play size="21" />}
            />
            <Button type="text" circle>
              <SkipForward size={24} color="#5E718D" weight="bold" />
            </Button>
          </Card.Container>
          <Button type="text" circle>
            <SpeakerHigh size={20} color="#5E718D" />
          </Button>
        </Card.Container>
      </Card.Container>
    ),
  },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-2xl">
        <Story />
      </div>
    ),
  ],
};
export const PricingCard: Story = {
  args: {
    className: "max-w-xs p-6",
    children: (
      <Card.Container>
        <Card.Container className="border-b border-b-slate-50">
          <Card.Title className="text-base font-medium text-slate-500">
            Basic
          </Card.Title>
          <Card.Title className="flex items-center">
            <span className="text-7xl font-bold text-slate-800">$599</span>
            <span className="ml-1 text-base font-medium text-slate-400">
              / Month
            </span>
          </Card.Title>
        </Card.Container>
        <Card.Container tag="ul" className="my-4 space-y-5">
          <Card.List className="flex items-center gap-1.5">
            <CheckCircle size={24} color="#02542B" weight="fill" />
            <span>One Month Free Access</span>
          </Card.List>
          <Card.List className="flex items-center gap-1.5">
            <CheckCircle size={24} color="#02542B" weight="fill" />
            <span>All The Component Access</span>
          </Card.List>
          <Card.List className="flex items-center gap-1.5">
            <CheckCircle size={24} color="#02542B" weight="fill" />
            <span>Access Html Component</span>
          </Card.List>
          <Card.List className="flex items-center gap-1.5">
            <CheckCircle size={24} color="#02542B" weight="fill" />
            <span>Access React Component</span>
          </Card.List>
          <Card.List className="flex items-center gap-1.5">
            <XCircle size={24} color="#AB0A00" weight="fill" />
            <span>Access Angular Component</span>
          </Card.List>

          <Card.List className="flex items-center gap-1.5">
            <XCircle size={24} color="#AB0A00" weight="fill" />
            <span>Access Lifetime</span>
          </Card.List>
        </Card.Container>
        <Card.Container>
          <Button type="primary" width="full">
            Pro Access
          </Button>

          <Card.Description className="mt-3 text-base font-normal text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            doloribus minus alias molestias delectus eum.
          </Card.Description>
        </Card.Container>
      </Card.Container>
    ),
  },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-2xl">
        <Story />
      </div>
    ),
  ],
};
