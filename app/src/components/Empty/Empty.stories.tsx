import type { Meta, StoryObj } from '@storybook/react'

import Image from 'next/image'
import { Button } from '../Button'
import { Empty } from './'

const meta: Meta<typeof Empty> = {
  tags: ['autodocs'],
  component: Empty,
  argTypes: {
    children: {
      description: 'Children is Empty element',
      control: { type: null },
    },
    className: {
      description: 'The class name of the Empty.',
      control: { type: null },
    },
  },
}

export default meta
type Story = StoryObj<typeof Empty>

export const DefaultEmptyPage: Story = {
  args: {
    children: (
      <>
        <Empty.Image>
          <Image
            src="https://staticmania.cdn.prismic.io/staticmania/499b23f3-41ed-4bc9-a9eb-43d13779d2f8_Property+1%3DSad+screen_+Property+2%3DSm.svg"
            height={234}
            width={350}
            alt="404"
          />
        </Empty.Image>
        <Empty.Title>Oops! You seem to be lost</Empty.Title>
        <Empty.Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
        </Empty.Description>
        <Button variant="outline">Go to home</Button>
      </>
    ),
  },
}

export const EmptyFolder: Story = {
  args: {
    children: (
      <>
        <Empty.Image>
          <Image
            src="https://staticmania.cdn.prismic.io/staticmania/7c82d76e-be06-41ca-a6ef-3db9009e6231_Property+1%3DFolder_+Property+2%3DSm.svg"
            height={234}
            width={350}
            alt="404"
          />
        </Empty.Image>
        <Empty.Title>This folder has gone missing</Empty.Title>
        <Empty.Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
        </Empty.Description>
        <Button variant="outline">Go to home</Button>
      </>
    ),
  },
}

export const NoDataFound: Story = {
  args: {
    children: (
      <>
        <Empty.Image>
          <Image
            src="https://staticmania.cdn.prismic.io/staticmania/16994ca5-ac01-4868-8ade-1b9e276ccdb3_Property+1%3DFolder_+Property+2%3DLg.svg"
            height={234}
            width={350}
            alt="404"
          />
        </Empty.Image>
        <Empty.Title>No Data Found</Empty.Title>
        <Empty.Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
        </Empty.Description>
        <Button variant="outline">Go to home</Button>
      </>
    ),
  },
}

export const NoResultPage: Story = {
  args: {
    children: (
      <>
        <Empty.Image>
          <Image
            src="https://staticmania.cdn.prismic.io/staticmania/a8befbc0-90ae-4835-bf37-8cd1096f450f_Property+1%3DSearch_+Property+2%3DSm.svg"
            height={234}
            width={350}
            alt="404"
          />
        </Empty.Image>
        <Empty.Title>Sorry, no result found!</Empty.Title>
        <Empty.Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
        </Empty.Description>
        <Button variant="outline">Go to home</Button>
      </>
    ),
  },
}

export const NotFoundPage: Story = {
  args: {
    children: (
      <>
        <Empty.Image>
          <Image
            src="https://staticmania.cdn.prismic.io/staticmania/ed90f683-c1df-4bad-afa4-65ce4c65287e_Property+1%3DSpaceship_+Property+2%3DMd.svg"
            height={234}
            width={350}
            alt="404"
          />
        </Empty.Image>
        <Empty.Title>404 Not Found</Empty.Title>
        <Empty.Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
        </Empty.Description>
        <Button variant="outline">Go to home</Button>
      </>
    ),
  },
}

export const PageNotAvailable: Story = {
  args: {
    children: (
      <>
        <Empty.Image>
          <Image
            src="https://staticmania.cdn.prismic.io/staticmania/aa469681-b2d1-4384-a990-91906711a24d_Property+1%3DNight+sky_+Property+2%3DSm.svg"
            height={234}
            width={350}
            alt="404"
          />
        </Empty.Image>
        <Empty.Title>This page is not available right now</Empty.Title>
        <Empty.Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
        </Empty.Description>
        <Button variant="outline">Go to home</Button>
      </>
    ),
  },
}
