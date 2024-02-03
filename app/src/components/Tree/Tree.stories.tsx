import type { Meta, StoryObj } from '@storybook/react'
import { File, FolderNotchOpen } from 'phosphor-react'
import { Tree } from '.'
const nodes = [
  {
    id: 1,
    title: 'Home Page',
    children: [
      {
        id: 2,
        title: 'Hero Section',
        children: [
          {
            id: 2.1,
            title: 'Hero Image',
            children: [
              {
                id: 2.2,
                title: 'Hero',
                children: [
                  { id: 2.3, title: 'Heading' },
                  { id: 2.4, title: 'Sub Heading' },
                  { id: 2.5, title: 'Description' },
                ],
              },
            ],
          },
          {
            id: 2.6,
            title: 'Contact',
            children: [
              {
                id: 2.7,
                title: 'Social Media',
                children: [{ id: 2.8, title: 'Facebook' }],
              },
            ],
          },
        ],
      },
      {
        id: 4.3,
        title: 'Blog',
        children: [{ id: 412, title: 'Category' }],
      },
    ],
  },
  {
    id: 123,
    title: 'Footer Component',
    children: [
      { id: 1231, title: 'Footer Logo' },
      { id: 1232, title: 'Quick Links' },
    ],
  },
]
const meta: Meta<typeof Tree> = {
  component: Tree,
  tags: ['autodocs'],
  argTypes: {
    nodes: {
      description:
        'Nodes is an array of object, object must have id,title property, you can add nested object with children property',
      control: { type: null },
    },
    showIcon: {
      description: 'Icon show or not?',
      control: { type: 'boolean' },
    },
    showItemsNumber: {
      description: 'Items number show or not?',
      control: { type: 'boolean' },
    },
    showBorder: {
      description: 'Items Border show or not?',
      control: { type: 'boolean' },
    },
    showCheckbox: {
      description: 'Checkbox show or not?',
      control: { type: 'boolean' },
    },
    ParentIcon: {
      description: 'Items Parent Icon',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    ChildIcon: {
      description: 'Items Child Icon',
      control: { type: null },
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Tree>

export const DefaultTree: Story = {
  args: {
    nodes: nodes,
    showIcon: false,
    showItemsNumber: false,
    showBorder: false,
    showCheckbox: false,
  },
}
export const TreeWithItemsNumber: Story = {
  args: {
    ...DefaultTree.args,
    showItemsNumber: true,
  },
}
export const TreeWithCheckbox: Story = {
  args: {
    ...DefaultTree.args,
    showCheckbox: true,
  },
}
export const TreeWithCheckboxAndItemsNumber: Story = {
  args: {
    ...TreeWithCheckbox.args,
    showItemsNumber: true,
  },
}
export const TreeWithCheckboxItemsNumberAndBorder: Story = {
  args: {
    ...TreeWithCheckboxAndItemsNumber.args,
    showBorder: true,
  },
}
export const TreeWithItemsNumberAndBorder: Story = {
  args: {
    ...DefaultTree.args,
    showItemsNumber: true,
    showBorder: true,
  },
}
export const TreeWithItemsFolderIcon: Story = {
  args: {
    ...DefaultTree.args,
    showIcon: true,
    ParentIcon: <FolderNotchOpen size={20} color="#3D4A5C" />,
    ChildIcon: <File size={20} color="#3D4A5C" />,
  },
}
export const TreeWithItemsNumberAndIcon: Story = {
  args: {
    ...TreeWithItemsFolderIcon.args,
    showItemsNumber: true,
  },
}
export const TreeWithItemsBorderNumberAndFolderIcon: Story = {
  args: {
    ...TreeWithItemsNumberAndIcon.args,
    showBorder: true,
  },
}
export const TreeWithItemsBorderNumberFolderIconAndCheckbox: Story = {
  args: {
    ...TreeWithItemsBorderNumberAndFolderIcon.args,
    showCheckbox: true,
  },
}
