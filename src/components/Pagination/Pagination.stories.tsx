import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from ".";

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const DefaultPagination: Story = {
  args: {
    currentPage: 3,
    totalPages: 30,
    iconWithText: false,
    iconWithOutText: false,
    paginateWithBorder: false,
    showGoToPaginate: false,
  },
};

export const PaginationWithBorder: Story = {
  args: {
    ...DefaultPagination.args,
    paginateWithBorder: true,
  },
};
export const PaginationWithPrevNextShape: Story = {
  args: {
    ...PaginationWithBorder.args,
    prevNextShape: "roundSquare",
    iconWithOutText: true,
  },
};
export const PaginationWithPrevNextText: Story = {
  args: {
    ...PaginationWithPrevNextShape.args,
    iconWithOutText: false,
    paginateWithBorder: true,
    iconWithText: true,
    showGoToPaginate: true,
  },
};
export const PaginationWithRounded: Story = {
  args: {
    ...PaginationWithPrevNextText.args,
    prevNextShape: "circle",
    goToShape: "circle",
    activeCurrentPageShape: "circle",
  },
};

export const PaginationWithRoundedIcon: Story = {
  args: {
    ...PaginationWithRounded.args,
    iconWithOutText: true,
    iconWithText: false,
  },
};
