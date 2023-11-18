import type { Meta, StoryObj } from '@storybook/react'
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
} from 'phosphor-react'

import { Card, Badge, Button, PlayButton, Progress, Rating, Avatar } from '~/src'

import Image from 'next/image'
import { removeFragment } from '../../helpers/mergeDeep'

/**
 * Meta information for the Card component.
 *
 * @component
 * @tags autodocs
 *
 * @property {ReactNode} children - The content of the card.
 * @property {string} className - Custom class name for the card.
 * @property {boolean} border - Whether to show the card border or not.
 * @property {boolean} shadow - Whether to show the card shadow or not.
 * @property {boolean} horizontal - Whether the card direction is horizontal or not.
 * @property {string} href - The link address for the card.
 * @property {string} imgAlt - The alt text for the card image.
 * @property {string} imgSrc - The source for the card image.
 * @property {('sm' | 'md' | 'lg')} imgSize - The available size for the card image.
 *
 * @property {string} componentSubtitle - The Card component is a common UI element used to group related content together in a visually appealing way. It typically consists of a container with a header, body, and footer section, which can contain a variety of content such as text, images, and buttons.
 *
 * @property {Function} decorators - A function that wraps the story component with additional components to provide context for the story.
 */
const meta: Meta<typeof Card> = {
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: {
        disable: true,
      },
      table: {
        type: { summary: 'ReactNode' },
      },
      description: 'It is the content of card',
    },
    className: {
      description: 'Card Custom Class Name',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: 'p-6' },
      },
    },
    border: {
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      description: 'Card Border show or not?',
    },
    shadow: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      description: 'Toggle the border for the card',
    },
    horizontal: {
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      description: 'Card direction is horizontal or not?',
    },
    href: {
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      description: 'Card Link address, Like: www.example.com',
    },
    imgAlt: {
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      description: 'Card image alt text',
    },
    imgSrc: {
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      description: 'Card image source',
    },
    imgSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
      description: 'Card Image avaiable size',
    },
  },
  parameters: {
    componentSubtitle:
      'The Card component is a common UI element used to group related content together in a visually appealing way. It typically consists of a container with a header, body, and footer section, which can contain a variety of content such as text, images, and buttons.',
  },
  decorators: [
    (Story) => (
      <div className="mx-auto my-20 ">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Card>

export const DefaultCard: Story = {
  args: {
    children: removeFragment(
      <>
        <h5 className="text-body-1 font-bold tracking-tight text-metal-700">Keep React</h5>
        <p className="font-normal text-metal-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
          standard dummy text ever since the 1500s, when an unknown printer took.
        </p>
        <a href="/" className="flex items-center gap-1 text-primary-600">
          <span>Learn More</span>
          <CaretRight size={16} color="#1B4DFF" />
        </a>
      </>,
    ),
    className: 'p-6',
  },

  decorators: [
    (Story) => (
      <div className="mx-auto max-w-lg">
        <Story />
      </div>
    ),
  ],
}
export const CardWithIcon: Story = {
  args: {
    className: 'p-6',
    children: removeFragment(
      <>
        <div className="flex items-start gap-5">
          <div className="flex items-center justify-center rounded-full bg-gray-50 p-4">
            <ArchiveTray size={28} color="#3D4A5C" />
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="text-body-1 font-bold tracking-tight text-metal-700">Keep React</h5>
            <p className="font-normal text-metal-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              standard dummy text ever since the 1500s, when an unknown printer took.
            </p>
            <a href="/" className="flex items-center gap-1 text-primary-600">
              <span>Learn More</span>
              <CaretRight size={16} color="#1B4DFF" />
            </a>
          </div>
        </div>
      </>,
    ),
  },
}
export const CardWithListIcon: Story = {
  args: {
    className: 'p-6',
    children: removeFragment(
      <>
        <div className="flex gap-5">
          <div className="flex items-center gap-5">
            <div className="flex items-center justify-center rounded-full bg-gray-50 p-4">
              <ArchiveTray size={28} color="#3D4A5C" />
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="text-body-1 font-bold tracking-tight text-metal-700">Keep React</h5>
              <p className="font-normal text-metal-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                standard dummy text ever since the 1500s, when an unknown printer took.
              </p>
            </div>
          </div>
          <button className="flex items-start">
            <DotsThreeVertical size={28} color="#5E718D" className="flex items-start" />
          </button>
        </div>
      </>,
    ),
  },
  decorators: DefaultCard.decorators,
}
export const CardWithImage: Story = {
  args: {
    children: (
      <Card.Container className="flex items-start px-5 py-3">
        <Card.Container>
          <Card.Title>Keep React</Card.Title>
          <Card.Description>
            Component design systems can help developers to be more productive by providing them with a ready-made set
            of components to use.
          </Card.Description>
        </Card.Container>
        <Card.Container className="flex items-start">
          <DotsThreeVertical size={28} color="#5E718D" className="flex cursor-pointer items-start" />
        </Card.Container>
      </Card.Container>
    ),
    className: 'max-w-lg',
    horizontal: true,
    imgSrc: 'https://images.prismic.io/staticmania/b6fe0b6c-5c0d-46a1-8ac6-68fe59d418c8_blog2.jpg?auto=compress,format',
  },

  decorators: DefaultCard.decorators,
}
export const CardWithAvatar: Story = {
  args: {
    children: removeFragment(
      <>
        <Card.Description>
          Component design systems can help developers to be more productive by providing them with a ready-made set of
          components to use. This can save time and effort, and it can also help to reduce the risk of errors.
        </Card.Description>
        <Card.Container className="flex items-center">
          <Avatar size="lg" shape="circle" img="https://randomuser.me/api/portraits/men/11.jpg" />
          <Card.Container className="ml-3">
            <Card.Title className="text-body-4 font-semibold text-metal-800">Md Ariful Islam</Card.Title>
            <Card.Title className="text-body-6 font-medium text-metal-400">Product Designer</Card.Title>
          </Card.Container>
        </Card.Container>
      </>,
    ),
    className: 'max-w-lg p-6',
  },
  decorators: DefaultCard.decorators,
}
export const CardWithProfile: Story = {
  args: {
    className: 'max-w-sm',
    imgSrc: 'https://images.prismic.io/staticmania/821cee7b-6b44-48c4-ab95-8a525056489d_blog.jpg?auto=compress,format',
    children: removeFragment(
      <>
        <Card.Container className="flex items-center justify-between p-5">
          <Card.Container className="flex items-center ">
            <Avatar size="lg" shape="circle" img="https://randomuser.me/api/portraits/men/50.jpg" />
            <Card.Container className="ml-3">
              <Card.Title className="text-body-4 font-semibold text-metal-800">Khairul Islam</Card.Title>
              <Card.Title className="text-body-6 font-medium text-metal-400">UI/UX Designer</Card.Title>
            </Card.Container>
          </Card.Container>
          <Button size="sm" type="outlineGray">
            View Profile
          </Button>
        </Card.Container>
      </>,
    ),
  },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-sm ">
        <Story />
      </div>
    ),
  ],
}
export const CardWithProfileDetails: Story = {
  args: {
    imgSrc: 'https://images.prismic.io/staticmania/821cee7b-6b44-48c4-ab95-8a525056489d_blog.jpg?auto=compress,format',
    imgSize: 'md',
    children: removeFragment(
      <>
        <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-50/50">
          <Heart size={20} weight="bold" color="white" />
        </Card.Container>
        <Card.Container className="flex flex-col items-center justify-center">
          <Card.Container className="absolute top-32  rounded-full ring-4 ring-white ring-offset-0">
            <Avatar size="2xl" shape="circle" img="https://randomuser.me/api/portraits/men/50.jpg" />
          </Card.Container>
          <Card.Container className="mb-3 mt-10 text-center">
            <Card.Title className="text-body-4 font-semibold text-metal-800">Khairul Islam</Card.Title>
            <Card.Title className="text-body-6 font-medium text-metal-400">UI/UX Designer</Card.Title>
          </Card.Container>

          <Card.Container className="flex w-full justify-between border-t border-t-metal-50 px-5 py-3">
            <Card.Container className="text-center">
              <Card.Title className="text-body-5 text-metal-400">Post</Card.Title>
              <Card.Title className="text-description-4 font-semibold text-metal-800">254</Card.Title>
            </Card.Container>
            <Card.Container className="text-center">
              <Card.Title className="text-body-5 text-metal-400">Followers</Card.Title>
              <Card.Title className="text-description-4 font-semibold text-metal-800">12,45M</Card.Title>
            </Card.Container>
            <Card.Container className="text-center">
              <Card.Title className="text-body-5 text-metal-400">Following</Card.Title>
              <Card.Title className="text-description-4 font-semibold text-metal-800">58</Card.Title>
            </Card.Container>
          </Card.Container>
        </Card.Container>
      </>,
    ),
  },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-sm ">
        <Story />
      </div>
    ),
  ],
}
export const CardWithPostCard: Story = {
  args: {
    className: 'max-w-[280px] p-6',
    children: removeFragment(
      <>
        <Card.Container className="flex items-center justify-center">
          <PencilCircle size={80} color="#1B4DFF" />
        </Card.Container>
        <Card.Container className="text-center">
          <Card.Title>Keep React</Card.Title>
          <Card.Description className="text-body-5 font-normal text-metal-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Card.Description>
        </Card.Container>
        <Card.Container className="mt-3 flex items-center justify-center">
          <Button type="outlinePrimary">Check this</Button>
        </Card.Container>
      </>,
    ),
  },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-sm ">
        <Story />
      </div>
    ),
  ],
}
export const CardWithRating: Story = {
  args: {
    imgSrc: 'https://images.prismic.io/staticmania/821cee7b-6b44-48c4-ab95-8a525056489d_blog.jpg?auto=compress,format',
    imgSize: 'md',
    children: removeFragment(
      <>
        <Card.Container className="px-6 pb-2 pt-5">
          <Card.Title>Keep React</Card.Title>
          <Card.Description className="text-body-4 font-normal text-metal-500">
            Component design systems can help developers to be more productive by providing them.
          </Card.Description>
        </Card.Container>
        <Card.Container className="border-t border-t-metal-50 p-6">
          <Card.Title className="text-body-5 font-medium text-metal-700">From 850+ reviews</Card.Title>
          <Rating size={24}>
            <Rating.Star filledType="fill" />
            <Rating.Star filledType="fill" />
            <Rating.Star filledType="fill" />
            <Rating.Star filledType="fill" />
            <Rating.Star filledType="fill" starType="half" />
          </Rating>
        </Card.Container>
      </>,
    ),
  },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-[340px]">
        <Story />
      </div>
    ),
  ],
}
export const RecentPostsCard: Story = {
  args: {
    shadow: false,
    className: 'max-w-2xl border-none',
    children: (
      <Card.Container className="flex items-start border-none">
        <Card.Container>
          <Image
            height={600}
            width={200}
            src="https://images.prismic.io/staticmania/b6fe0b6c-5c0d-46a1-8ac6-68fe59d418c8_blog2.jpg?auto=compress,format"
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
          <Card.Title className="text-body-2 font-medium text-metal-700">Keep React</Card.Title>
          <Card.Description className="text-body-5 font-normal text-metal-500">
            Component design systems can help developers to be more productive by providing them with a ready-made set
            of components to use.
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
}
export const EcommerceProductCard: Story = {
  args: {
    className: 'max-w-xs overflow-hidden rounded-md',
    imgSrc:
      'https://images.prismic.io/staticmania/45ce2799-f29b-462f-a795-5d3d5d10c9ad_product-1.avif?auto=compress,format',
    imgSize: 'md',
    children: removeFragment(
      <>
        <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-50/50">
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
              This can save time and effort, and it can also help to reduce the risk of errors.
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
      </>,
    ),
  },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-2xl">
        <Story />
      </div>
    ),
  ],
}
export const ProductCard: Story = {
  args: {
    className: 'max-w-xs overflow-hidden rounded-md',
    imgSrc:
      'https://images.prismic.io/staticmania/56ae80e7-4d23-4bd9-a2f3-01bd6f923a8b_product-2.avif?auto=compress,format',
    imgSize: 'md',
    children: removeFragment(
      <>
        <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-50/50">
          <Heart size={20} weight="bold" color="white" />
        </Card.Container>
        <Card.Container className="space-y-4 p-6">
          <Card.Title className="flex items-center gap-2 text-body-2 font-medium text-metal-700">
            <MapPinLine size={20} color="#5E718D" />
            <span>Garden Street,Ring Road</span>
          </Card.Title>
          <Card.Container className="flex items-center justify-between">
            <Card.Title className="flex items-center gap-2 text-body-5 font-medium text-metal-500">
              <Bed size={20} color="#5E718D" />
              <span>3 Bed Room</span>
            </Card.Title>
            <Card.Title className="flex items-center gap-2 text-body-5 font-medium text-metal-500">
              <Shower size={20} color="#5E718D" />
              <span>1 Bath</span>
            </Card.Title>
          </Card.Container>
          <Card.Container className="flex items-center justify-between">
            <Card.Title className="flex items-center gap-2 text-body-5 font-medium text-metal-500">
              <ArrowsOutSimple size={20} color="#5E718D" />
              <span>1,032 sqft</span>
            </Card.Title>
            <Card.Title className="flex items-center gap-1 text-body-5 font-medium text-metal-500">
              <Users size={20} color="#5E718D" />
              <span>Family</span>
            </Card.Title>
          </Card.Container>
          <Card.Container className="my-3 flex items-center justify-between">
            <Button type="primary">Check Out</Button>
            <Card.Title className="text-body-1 font-semibold text-metal-700">$649,00</Card.Title>
          </Card.Container>
        </Card.Container>
      </>,
    ),
  },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-2xl">
        <Story />
      </div>
    ),
  ],
}
export const PodcastCard: Story = {
  args: {
    className: 'max-w-xs overflow-hidden rounded-md',
    imgSrc:
      'https://images.prismic.io/staticmania/cb1a34d1-50a8-4b9c-b5e2-020d1c67e993_product-3.avif?auto=compress,format',
    imgSize: 'md',
    children: (
      <Card.Container className="space-y-3 p-6">
        <Card.Container>
          <Card.Title className="text-body-2 font-semibold text-metal-700">Keep design podcast</Card.Title>
          <Card.Description className="text-body-5 font-medium text-metal-500">By Static Mania</Card.Description>
        </Card.Container>
        <Card.Container className="flex items-center justify-between">
          <Card.Title className="text-body-6 font-medium text-metal-500">4:05</Card.Title>
          <Card.Title className="text-body-6 font-medium text-metal-500">10:05</Card.Title>
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
            <PlayButton type="primary" circle={true} size="lg" icon={<Play size="21" />} />
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
}
export const PricingCard: Story = {
  args: {
    className: 'max-w-xs p-6',
    children: (
      <Card.Container>
        <Card.Container className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-primary-25 md:h-[60px] md:w-[60px]">
          <Image src="/images/icon/pricing.png" height={24} width={24} alt="card" />
        </Card.Container>
        <Card.Container>
          <Card.Title className="text-body-4 font-medium text-primary-500 md:text-body-2">Business</Card.Title>
          <Card.Title className="my-3 flex items-center">
            <span className="text-description-2 font-bold text-metal-800 md:text-heading-4">$79</span>
            <span className="ml-1 text-body-4 font-medium text-metal-400">/ mth</span>
          </Card.Title>
          <Card.Description className="text-body-5 text-metal-700 md:text-body-4">
            Until recently, the prevailing view assumed.
          </Card.Description>
        </Card.Container>
        <Card.Container tag="ul" className="my-4 space-y-5">
          <Card.List className="flex items-center gap-1.5">
            <CheckCircle size={24} color="#1B4DFF" />
            <span className="text-body-5 text-metal-700 md:text-body-4">One Month Free Access</span>
          </Card.List>
          <Card.List className="flex items-center gap-1.5">
            <CheckCircle size={24} color="#1B4DFF" />
            <span className="text-body-5 text-metal-700 md:text-body-4">All The Component Access</span>
          </Card.List>
          <Card.List className="flex items-center gap-1.5">
            <CheckCircle size={24} color="#1B4DFF" />
            <span className="text-body-5 text-metal-700 md:text-body-4">Access Html Component</span>
          </Card.List>
          <Card.List className="flex items-center gap-1.5">
            <CheckCircle size={24} color="#1B4DFF" />
            <span className="text-body-5 text-metal-700 md:text-body-4">Access React Component</span>
          </Card.List>
        </Card.Container>
        <Card.Container>
          <Button type="primary" width="full" className="hidden md:block">
            Pro Access
          </Button>
          <Button type="primary" width="full" size="xs" className="block md:hidden">
            Pro Access
          </Button>
        </Card.Container>
      </Card.Container>
    ),
  },
  decorators: [
    (Story) => (
      <div className="max-w-sm p-6">
        <Story />
      </div>
    ),
  ],
}
