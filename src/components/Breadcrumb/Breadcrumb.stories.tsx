import { Breadcrumb } from '.'
import type { Meta, StoryObj } from '@storybook/react'
import { removeFragment } from '../../helpers/mergeDeep'
import { CaretLeft, CaretRight, House } from 'phosphor-react'

const meta: Meta<typeof Breadcrumb> = {
  component: Breadcrumb,
  tags: ['autodocs'],
  argTypes: {
    separatorIcon: {
      control: {
        disable: true,
      },
      description: 'It will separate breadcrumb with an icon',
    },
    children: {
      control: {
        disable: true,
      },
      description: 'It is breadcrumb item itself',
    },
    breadCrumbWithBorder: {
      table: {
        type: { summary: 'boolean' },
      },
      defaultValue: false,
      description: 'Breadcrumb border show or not?',
    },
  },
}

export default meta
type Story = StoryObj<typeof Breadcrumb>

export const DefaultBreadcrumb: Story = {
  args: {
    children: removeFragment(
      <>
        <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
        <Breadcrumb.Item href="#">.....</Breadcrumb.Item>
        <Breadcrumb.Item active="base" href="#">
          Product
        </Breadcrumb.Item>
      </>,
    ),
    separatorIcon: <CaretRight size={20} color="#AFBACA" />,
  },
}

export const BreadcrumbWithBorder: Story = {
  args: {
    ...DefaultBreadcrumb.args,
    breadCrumbWithBorder: true,
  },
}

export const BreadcrumbWithItemBase: Story = {
  args: {
    children: removeFragment(
      <>
        <Breadcrumb breadCrumbWithBorder separatorIcon={<CaretRight color="#AFBACA" size={20} />}>
          <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
          <Breadcrumb.Item href="#">.....</Breadcrumb.Item>
          <Breadcrumb.Item active="base" href="#">
            Product
          </Breadcrumb.Item>
        </Breadcrumb>
      </>,
    ),
    separatorIcon: <CaretRight size={20} weight="bold" color="#5E718D" />,
  },
}

export const BreadcrumbWithItemBar: Story = {
  args: {
    children: removeFragment(
      <>
        <Breadcrumb breadCrumbWithBorder separatorIcon={<CaretRight color="#AFBACA" size={20} />}>
          <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
          <Breadcrumb.Item href="#">.....</Breadcrumb.Item>
          <Breadcrumb.Item active="bar" href="#">
            Product
          </Breadcrumb.Item>
        </Breadcrumb>
      </>,
    ),
    separatorIcon: <CaretRight size={20} weight="bold" color="#5E718D" />,
  },
}

export const BreadcrumbWithItemBorder: Story = {
  args: {
    children: removeFragment(
      <>
        <Breadcrumb breadCrumbWithBorder separatorIcon={<CaretRight color="#AFBACA" size={20} />}>
          <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
          <Breadcrumb.Item href="#">.....</Breadcrumb.Item>
          <Breadcrumb.Item active="border" href="#">
            Product
          </Breadcrumb.Item>
        </Breadcrumb>
      </>,
    ),
    separatorIcon: <CaretRight size={20} weight="bold" color="#5E718D" />,
  },
}

export const BreadcrumbWithPageIcon: Story = {
  args: {
    children: removeFragment(
      <>
        <Breadcrumb breadCrumbWithBorder={true} separatorIcon={<CaretRight size={20} weight="bold" color="#5E718D" />}>
          <Breadcrumb.Item href="#" icon={<House color="#AFBACA" size={20} />}>
            Products
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
          <Breadcrumb.Item href="#">.....</Breadcrumb.Item>
          <Breadcrumb.Item active="border" href="#">
            Product
          </Breadcrumb.Item>
        </Breadcrumb>
      </>,
    ),
  },
}

export const BreadcrumbWithCustomSeparetorIcon: Story = {
  args: {
    children: removeFragment(
      <>
        <Breadcrumb breadCrumbWithBorder={true} separatorIcon={<CaretLeft size={20} weight="bold" color="#5E718D" />}>
          <Breadcrumb.Item href="#" icon={<House color="#AFBACA" size={20} />}>
            Products
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
          <Breadcrumb.Item href="#">.....</Breadcrumb.Item>
          <Breadcrumb.Item active="border" href="#">
            Product
          </Breadcrumb.Item>
        </Breadcrumb>
      </>,
    ),
  },
}

export const BreadcrumbWithNumberItems: Story = {
  args: {
    breadCrumbWithBorder: true,
    separatorIcon: <CaretRight size={20} color="#AFBACA" />,
    children: removeFragment(
      <>
        <Breadcrumb.Item href="#" icon={<House size={20} color="#5E718D" />}>
          01
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">02</Breadcrumb.Item>
        <Breadcrumb.Item href="#">03</Breadcrumb.Item>
        <Breadcrumb.Item href="#">......</Breadcrumb.Item>
        <Breadcrumb.Item href="#" active="base">
          08
        </Breadcrumb.Item>
      </>,
    ),
  },
}
