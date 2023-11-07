import type { Meta, StoryObj } from '@storybook/react'

import { Empty } from './'
import Image from 'next/image'

const meta: Meta<typeof Empty> = {
  tags: ['autodocs'],
  component: Empty,
  argTypes: {
    title: {
      description: 'Empty Page Title',
      table: {
        type: {
          summary: 'String',
        },
        defaultValue: {
          summary: '',
        },
      },
    },
    content: {
      description: 'Empty Page Content',
      table: {
        type: {
          summary: 'String',
        },
        defaultValue: {
          summary: '',
        },
      },
    },
    buttonText: {
      description: 'Empty Page Button Text',
      table: {
        type: {
          summary: 'String',
        },
        defaultValue: {
          summary: 'Go to home page',
        },
      },
    },
    redirectUrl: {
      description: 'Page Url for redirect',
      table: {
        type: {
          summary: 'String',
        },
        defaultValue: {
          summary: '/home',
        },
      },
    },
    image: {
      description: 'Empty Page Image',
      control: { type: null },
      table: {
        type: {
          summary: 'ReactNode',
        },
        defaultValue: {
          summary: '',
        },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Empty>

export const DefaultEmptyPage: Story = {
  args: {
    title: 'Oops! You seem to be lost',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
    buttonText: 'Go To Home Page',
    redirectBtnSize: 'md',
    redirectUrl: '/',
    image: (
      <Image
        src="https://staticmania.cdn.prismic.io/staticmania/499b23f3-41ed-4bc9-a9eb-43d13779d2f8_Property+1%3DSad+screen_+Property+2%3DSm.svg"
        height={234}
        width={350}
        alt="404"
      />
    ),
  },
}

export const EmptyFolder: Story = {
  args: {
    title: 'This folder has gone missing',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
    redirectUrl: '/',
    image: (
      <Image
        src="https://staticmania.cdn.prismic.io/staticmania/7c82d76e-be06-41ca-a6ef-3db9009e6231_Property+1%3DFolder_+Property+2%3DSm.svg"
        height={234}
        width={350}
        alt="404"
      />
    ),
  },
}
export const NoDataFound: Story = {
  args: {
    title: 'No Data Found',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
    redirectUrl: '/',
    image: (
      <Image
        src="https://staticmania.cdn.prismic.io/staticmania/16994ca5-ac01-4868-8ade-1b9e276ccdb3_Property+1%3DFolder_+Property+2%3DLg.svg"
        height={234}
        width={350}
        alt="404"
      />
    ),
    buttonText: 'Go Back',
  },
}
export const NoResultPage: Story = {
  args: {
    title: 'Sorry, no result found!',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
    redirectUrl: '/',
    image: (
      <Image
        src="https://staticmania.cdn.prismic.io/staticmania/a8befbc0-90ae-4835-bf37-8cd1096f450f_Property+1%3DSearch_+Property+2%3DSm.svg"
        height={234}
        width={350}
        alt="404"
      />
    ),
  },
}
export const NotFoundPage: Story = {
  args: {
    title: '404 Not Found',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
    redirectUrl: '/',
    image: (
      <Image
        src="https://staticmania.cdn.prismic.io/staticmania/ed90f683-c1df-4bad-afa4-65ce4c65287e_Property+1%3DSpaceship_+Property+2%3DMd.svg"
        height={234}
        width={350}
        alt="404"
      />
    ),
  },
}
export const PageNotAvailable: Story = {
  args: {
    title: "This page isn't available right now",
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
    redirectUrl: '/',
    image: (
      <Image
        src="https://staticmania.cdn.prismic.io/staticmania/aa469681-b2d1-4384-a990-91906711a24d_Property+1%3DNight+sky_+Property+2%3DSm.svg"
        height={234}
        width={350}
        alt="404"
      />
    ),
  },
}
