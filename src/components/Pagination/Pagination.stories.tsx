import type { Meta, StoryObj } from '@storybook/react'
import { Pagination } from '.'

/**
 * Metadata for the Pagination component.
 */
const meta: Meta<typeof Pagination> = {
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    /**
     * Current page number. Default value is 3.
     */
    currentPage: {
      description: 'Current page number.',
      table: {
        defaultValue: { summary: 3 },
      },
    },
    /**
     * Total number of pages. Default value is 30.
     */
    totalPages: {
      description: 'Total number of pages.',
      table: {
        defaultValue: { summary: 30 },
      },
    },
    /**
     * Whether to show the go-to page input field. Default value is false.
     */
    showGoToPaginate: {
      control: 'boolean',
      description: 'Whether to show the go-to page input field.',
      table: {
        defaultValue: { summary: false },
      },
    },
    /**
     * Whether to add borders to pagination elements. Default value is false.
     */
    paginateWithBorder: {
      control: 'boolean',
      description: 'Whether to add borders to pagination elements',
      table: {
        defaultValue: { summary: false },
      },
    },
    /**
     * Whether to display icons without text. Default value is false.
     */
    iconWithOutText: {
      control: 'boolean',
      description: 'Whether to display icons without text.',
      table: {
        defaultValue: { summary: false },
      },
    },
    /**
     * Whether to display icons with text. Default value is false.
     */
    iconWithText: {
      control: 'boolean',
      description: 'Whether to display icons with text',
      table: {
        defaultValue: { summary: false },
      },
    },
    /**
     * Represents a story configuration for Pagination component with previous and next buttons in a specific shape.
     */
    prevNextShape: {
      control: 'select',
      description: 'Shape of the previous and next buttonsShape of the previous and next buttons',
      options: ['circle', 'round', 'roundSquare', 'none'],
      table: {
        defaultValue: { summary: 'none' },
      },
    },
    /**
     * Shape of the go-to page input field. Options are 'circle', 'round', 'roundSquare', 'none'. Default value is 'none'.
     */
    goToShape: {
      control: 'select',
      description: 'Shape of the go-to page input field.',
      options: ['circle', 'round', 'roundSquare', 'none'],
      table: {
        defaultValue: { summary: 'none' },
      },
    },
    /**
     * Shape of the active/current page number. Options are 'circle', 'roundSquare'. Default value is 'roundSquare'.
     */
    activeCurrentPageShape: {
      control: 'select',
      description: 'Shape of the active/current page number.',
      options: ['circle', 'roundSquare'],
      table: {
        defaultValue: { summary: 'roundSquare' },
      },
    },
    /**
     * Function to be called when a page is changed. Default value is 'function'.
     */
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

/**
 * DefaultPagination story configuration.
 * @typedef {Object} DefaultPagination
 * @property {number} currentPage - The current page number.
 * @property {number} totalPages - The total number of pages.
 * @property {boolean} iconWithText - Whether to display icons with text.
 * @property {boolean} iconWithOutText - Whether to display icons without text.
 * @property {boolean} paginateWithBorder - Whether to paginate with border.
 * @property {boolean} showGoToPaginate - Whether to show the "Go to" pagination option.
 */
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

/**
 * PaginationWithBorder story configuration.
 *
 * @typedef {Story} PaginationWithBorder
 * @property {object} args - The arguments for the Pagination component.
 * @property {boolean} args.paginateWithBorder - Whether to display the pagination with a border.
 */
export const PaginationWithBorder: Story = {
  args: {
    ...DefaultPagination.args,
    paginateWithBorder: true,
  },
}
/**
 * Represents a story configuration for Pagination component with previous and next buttons in a specific shape.
 *
 * @typedef {Story} PaginationWithPrevNextShape
 * @property {object} args - The arguments for the story.
 * @property {boolean} args.prevNextShape - The shape of the previous and next buttons. Possible values: 'roundSquare'.
 * @property {boolean} args.iconWithOutText - Indicates whether the buttons should display icons without text.
 */
export const PaginationWithPrevNextShape: Story = {
  args: {
    ...PaginationWithBorder.args,
    prevNextShape: 'roundSquare',
    iconWithOutText: true,
  },
}
/**
 * Represents a story configuration for Pagination component with previous and next text.
 *
 * @typedef {Story} PaginationWithPrevNextText
 * @property {object} args - The arguments for the story.
 * @property {boolean} args.iconWithOutText - Indicates whether the buttons should display icons without text.
 * @property {boolean} args.paginateWithBorder - Indicates whether the pagination should display with a border.
 * @property {boolean} args.iconWithText - Indicates whether the buttons should display icons with text.
 * @property {boolean} args.showGoToPaginate - Indicates whether the pagination should display the "Go to" option.
 */
export const PaginationWithPrevNextText: Story = {
  args: {
    ...PaginationWithPrevNextShape.args,
    iconWithOutText: false,
    paginateWithBorder: true,
    iconWithText: true,
    showGoToPaginate: true,
  },
}
/**
 * PaginationWithRounded is a story for rendering a pagination component with rounded shapes.
 * It extends the PaginationWithPrevNextText story and sets the shape of the previous/next buttons,
 * go to page input, and active current page indicator to be circular.
 */
export const PaginationWithRounded: Story = {
  args: {
    ...PaginationWithPrevNextText.args,
    prevNextShape: 'circle',
    goToShape: 'circle',
    activeCurrentPageShape: 'circle',
  },
}

/**
 * Represents a story for PaginationWithRoundedIcon component.
 * @type {Story}
 */
export const PaginationWithRoundedIcon: Story = {
  args: {
    ...PaginationWithRounded.args,
    iconWithOutText: true,
    iconWithText: false,
  },
}
