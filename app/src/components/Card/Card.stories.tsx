import type { Meta, StoryObj } from '@storybook/react'
import Image from 'next/image'
import {
  ArchiveTray,
  ArrowsOutSimple,
  Bed,
  CaretRight,
  CheckCircle,
  DotsThreeVertical,
  FacebookLogo,
  Heart,
  LinkedinLogo,
  MapPinLine,
  PencilCircle,
  Play,
  Rows,
  ShoppingCart,
  Shower,
  SkipBack,
  SkipForward,
  SpeakerHigh,
  TwitterLogo,
  Users,
} from 'phosphor-react'
import { removeFragment } from '../../helpers/mergeDeep'
import { Avatar } from '../Avatar/Avatar'
import { Badge } from '../Badge'
import { Button } from '../Button/Button'
import { LineProgress } from '../Progress/LineProgress'
import { Card } from './Card'

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
      control: { type: 'boolean' },
      description: 'Card Border show or not?',
    },
    shadow: {
      control: { type: 'boolean' },
      description: 'Toggle the border for the card',
    },
    horizontal: {
      control: { type: 'boolean' },
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
      description: 'Card Image available size',
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
        <Card.Title>Keep design system</Card.Title>
        <Card.Description>
          Component design systems can help developers to be more productive by providing them with a ready-made set of
          components to use.
        </Card.Description>
        <Card.Link href="/" icon={<CaretRight size={16} color="#1B4DFF" />} iconPosition="left">
          Learn More
        </Card.Link>
      </>,
    ),
    className: 'max-w-lg p-5 md:p-6',
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
    className: 'max-w-xl p-6',
    children: removeFragment(
      <>
        <Card.Container className="flex items-start gap-3.5 md:gap-5">
          <Card.Container className="flex items-center justify-center rounded-full bg-metal-50 p-2.5 md:p-4">
            <ArchiveTray size={28} color="#3D4A5C" />
          </Card.Container>
          <Card.Container className="flex flex-col gap-2">
            <Card.Title>Keep React</Card.Title>
            <Card.Description>
              Component design systems can help developers to be more productive by providing them with a ready-made set
              of components to use.
            </Card.Description>
            <Card.Link href="/" icon={<CaretRight size={16} color="#1B4DFF" />} iconPosition="left">
              Learn More
            </Card.Link>
          </Card.Container>
        </Card.Container>
      </>,
    ),
  },
}
export const CardWithListIcon: Story = {
  args: {
    className: 'max-w-xl p-6',
    children: removeFragment(
      <>
        <Card.Container className="flex gap-5">
          <Card.Container className="flex items-start gap-5">
            <Card.Container className="flex items-center justify-start rounded-full bg-metal-50 p-2.5 md:p-4">
              <ArchiveTray size={28} color="#3D4A5C" />
            </Card.Container>
            <Card.Container className="flex flex-col gap-2">
              <Card.Title>Keep React</Card.Title>
              <Card.Description>
                Component design systems can help developers to be more productive by providing them with a ready-made
                set of components to use.
              </Card.Description>
            </Card.Container>
          </Card.Container>
          <Card.Container className="hidden items-start md:flex">
            <DotsThreeVertical size={24} color="#5E718D" />
          </Card.Container>
        </Card.Container>
      </>,
    ),
  },
  decorators: DefaultCard.decorators,
}
export const CardWithAvatar: Story = {
  args: {
    children: removeFragment(
      <>
        <Card.Container className="flex items-center justify-center">
          <Avatar shape="circle" img="https://randomuser.me/api/portraits/men/50.jpg" size="2xl" />
        </Card.Container>
        <Card.Container className="text-center">
          <Card.Title className="text-body-5 font-semibold text-metal-800 md:text-body-4">
            Khairul Islam Ridoy
          </Card.Title>
          <Card.Title className="!text-body-5 font-normal text-metal-400 md:text-body-5">UI/UX Designer</Card.Title>
        </Card.Container>
        <Card.Container className="circled mx-auto flex max-w-[220px] items-center justify-center divide-x divide-metal-200 rounded-md border border-metal-200 p-1 md:p-2">
          <Card.Link
            className="flex items-center justify-center px-3 py-1"
            icon={<LinkedinLogo size={24} color="#0072b1" weight="fill" />}
            href="#"
          />
          <Card.Link
            className="flex items-center justify-center px-3 py-1"
            icon={<FacebookLogo size={24} color="#0C63D4" weight="fill" />}
            href="#"
          />
          <Card.Link
            className="flex items-center justify-center px-3 py-1"
            icon={<TwitterLogo size={24} color="#0C8BD9" weight="fill" />}
            href="#"
          />
        </Card.Container>
      </>,
    ),
    className: 'max-w-[250px] p-6',
  },
  decorators: DefaultCard.decorators,
}
export const CardWithProfileDetails: Story = {
  args: {
    imgSrc: 'https://images.prismic.io/staticmania/821cee7b-6b44-48c4-ab95-8a525056489d_blog.jpg?auto=compress,format',
    imgSize: 'md',
    children: removeFragment(
      <>
        <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-200">
          <Heart size={20} weight="bold" color="white" />
        </Card.Container>
        <Card.Container className="flex flex-col items-center justify-center">
          <Card.Container className="absolute top-32  rounded-full ring-4 ring-white ring-offset-0">
            <Avatar size="2xl" shape="circle" img="/images/avatar/avatar-4.png" />
          </Card.Container>
          <Card.Container className="mb-3 mt-10 text-center">
            <Card.Title className="text-body-5 font-semibold text-metal-800 md:text-body-4">Khairul Islam</Card.Title>
            <Card.Title className="!text-body-5 font-normal text-metal-400 md:text-body-5">UI/UX Designer</Card.Title>
          </Card.Container>
          <Card.Container className="flex w-full justify-between border-t border-t-metal-50 px-5 py-3">
            <Card.Container className="text-center">
              <Card.Title className="text-body-5 !font-normal text-metal-400 md:text-body-5 md:!font-medium">
                Post
              </Card.Title>
              <Card.Title className="!text-body-1 !font-semibold text-metal-800">254</Card.Title>
            </Card.Container>
            <Card.Container className="text-center">
              <Card.Title className="text-body-5 !font-normal text-metal-400 md:text-body-5 md:!font-medium">
                Followers
              </Card.Title>
              <Card.Title className="!text-body-1 !font-semibold text-metal-800">1245M</Card.Title>
            </Card.Container>
            <Card.Container className="text-center">
              <Card.Title className="text-body-5 !font-normal text-metal-400 md:text-body-5 md:!font-medium">
                Following
              </Card.Title>
              <Card.Title className="!text-body-1 !font-semibold text-metal-800">58</Card.Title>
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
          <Button variant="outline">Check this</Button>
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
            <Badge>Tips & Advice</Badge>
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
            <Badge size="sm">For Sale</Badge>
            <Card.Title>$9.99</Card.Title>
          </Card.Container>
          <Card.Container className="my-3">
            <Card.Title>NIKE FREE SHOE</Card.Title>
            <Card.Description>
              This can save time and effort, and it can also help to reduce the risk of errors.
            </Card.Description>
          </Card.Container>
          <Card.Container className="flex items-center justify-start gap-5">
            <Button size="sm" variant="outline">
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
          <Card.Title className="flex items-center gap-2 text-body-5 font-medium text-metal-500 md:!text-body-4">
            <MapPinLine size={20} color="#5E718D" />
            <span>Garden Street,Ring Road</span>
          </Card.Title>
          <Card.Container className="flex items-center justify-between">
            <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
              <Bed size={20} color="#5E718D" />
              <span>3 Bed Room</span>
            </Card.Title>
            <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
              <Shower size={20} color="#5E718D" />
              <span>1 Bath</span>
            </Card.Title>
          </Card.Container>
          <Card.Container className="flex items-center justify-between">
            <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
              <ArrowsOutSimple size={20} color="#5E718D" />
              <span>1,032 sqft</span>
            </Card.Title>
            <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
              <Users size={20} color="#5E718D" />
              <span>Family</span>
            </Card.Title>
          </Card.Container>
          <Card.Container className="my-3 flex items-center justify-between">
            <Button size="sm">Check Out</Button>
            <Card.Title className="text-body-3 font-medium text-metal-500">$649,00</Card.Title>
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
          <Card.Title className="text-body-5 font-medium text-metal-500">4:05</Card.Title>
          <Card.Title className="text-body-5 font-medium text-metal-500">10:05</Card.Title>
        </Card.Container>
        <LineProgress progress={45} />
        <Card.Container className="flex items-center justify-between">
          <Button variant="link" circle>
            <Rows size={20} color="#5E718D" />
          </Button>
          <Card.Container className="flex items-center justify-between py-2">
            <Button variant="link" circle>
              <SkipBack size={24} color="#5E718D" weight="bold" />
            </Button>
            <Button size="lg" color="primary">
              <Play size="20" />
            </Button>
            <Button variant="link" circle>
              <SkipForward size={24} color="#5E718D" weight="bold" />
            </Button>
          </Card.Container>
          <Button variant="link" circle>
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
            <span className="text-heading-6 font-bold text-metal-800 md:text-heading-3">$79</span>
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
          <Button width="full" className="hidden md:block">
            Pro Access
          </Button>
          <Button width="full" size="xs" className="block md:hidden">
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
