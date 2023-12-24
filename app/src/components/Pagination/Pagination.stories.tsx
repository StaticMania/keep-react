import type { Meta, StoryObj } from '@storybook/react'
import { Pagination } from '.'

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      description: 'Current page number.',
      table: {
        defaultValue: { summary: 3 },
      },
    },
    totalPages: {
      description: 'Total number of pages.',
      table: {
        defaultValue: { summary: 30 },
      },
    },
    showGoToPaginate: {
      control: { type: 'boolean' },
      description: 'Whether to show the go-to page input field.',
    },
    paginateWithBorder: {
      control: { type: 'boolean' },
      description: 'Whether to add borders to pagination elements',
      table: {
        defaultValue: { summary: false },
      },
    },
    iconWithOutText: {
      control: { type: 'boolean' },
      description: 'Whether to display icons without text.',
      table: {
        defaultValue: { summary: false },
      },
    },
    iconWithText: {
      control: { type: 'boolean' },
      description: 'Whether to display icons with text',
      table: {
        defaultValue: { summary: false },
      },
    },
    prevNextShape: {
      control: 'select',
      description: 'Shape of the previous and next buttonsShape of the previous and next buttons',
      options: ['circle', 'round', 'roundSquare', 'none'],
      table: {
        defaultValue: { summary: 'none' },
      },
    },
    goToShape: {
      control: 'select',
      description: 'Shape of the go-to page input field.',
      options: ['circle', 'round', 'roundSquare', 'none'],
      table: {
        defaultValue: { summary: 'none' },
      },
    },
    activeCurrentPageShape: {
      control: 'select',
      description: 'Shape of the active/current page number.',
      options: ['circle', 'roundSquare'],
      table: {
        defaultValue: { summary: 'roundSquare' },
      },
    },
    onPageChange: {
      control: 'function',
      description: 'Function to be called when a page is changed',
      table: {
        defaultValue: { summary: 'function' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Pagination>

export const DefaultPagination: Story = {
  args: {
    currentPage: 3,
    totalPages: 30,
    iconWithText: false,
    iconWithOutText: false,
    paginateWithBorder: false,
    showGoToPaginate: false,
  },
}

export const PaginationWithBorder: Story = {
  args: {
    ...DefaultPagination.args,
    paginateWithBorder: true,
  },
}
export const PaginationWithPrevNextShape: Story = {
  args: {
    ...PaginationWithBorder.args,
    prevNextShape: 'roundSquare',
    iconWithOutText: true,
  },
}
export const PaginationWithPrevNextText: Story = {
  args: {
    ...PaginationWithPrevNextShape.args,
    iconWithOutText: false,
    paginateWithBorder: true,
    iconWithText: true,
    showGoToPaginate: true,
  },
}
export const PaginationWithRounded: Story = {
  args: {
    ...PaginationWithPrevNextText.args,
    prevNextShape: 'circle',
    goToShape: 'circle',
    activeCurrentPageShape: 'circle',
  },
}
export const PaginationWithRoundedIcon: Story = {
  args: {
    ...PaginationWithRounded.args,
    iconWithOutText: true,
    iconWithText: false,
  },
}
