import type { Meta, StoryObj } from '@storybook/react'

/**
 * Represents a book.
 */
export interface Book {
  id: number
  name: string
}
/**
 * Array of books.
 * @typedef {Object} Book
 * @property {number} id - The ID of the book.
 * @property {string} name - The name of the book.
 */

/**
 * Array of books.
 * @type {Book[]}
 */
export const books: Book[] = [
  { id: 1, name: 'To Kill a Mockingbird' },
  { id: 2, name: 'Pride and Prejudice' },
  { id: 3, name: '1984' },
  { id: 4, name: 'The Great Gatsby' },
  { id: 5, name: 'Moby Dick' },
  { id: 6, name: 'The Catcher in the Rye' },
  { id: 7, name: 'Jane Eyre' },
  { id: 8, name: 'The Lord of the Rings' },
  { id: 9, name: 'To the Lighthouse' },
  { id: 10, name: 'Brave New World' },
]

import { ArrowRight, MagnifyingGlass, MapPinLine } from 'phosphor-react'
import { useState } from 'react'
import { SearchBar } from '.'
import { Button } from '../Button/Button'
import { Dropdown } from '../Dropdown'

/**
 * Meta information for the SearchBar component.
 */
const meta: Meta<typeof SearchBar> = {
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    /**
     * Specifies the color variant of the search input component.
     */
    color: {
      control: 'select',
      options: ['gray', 'info', 'error', 'warning', 'success'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'gray' },
      },
      description: 'Specifies the color variant of the search input component.',
    },
    /**
     * Input Field Placeholder text.
     */
    placeholder: {
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Placeholder' },
      },
      description: 'Input Field Placeholder text',
    },

    /**
     * Addon Position.
     */
    addonPosition: {
      description: 'Addon Position',
      control: 'radio',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'left' },
      },
    },
    /**
     * Icon Position.
     */
    iconPosition: {
      description: 'Icon Position',
      control: 'radio',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'left' },
      },
    },
    /**
     * Available size for searchbar.
     */
    size: {
      description: 'Avaiable size for searchbar',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    /**
     * Disables interactions with the search input component.
     */
    disabled: {
      control: 'boolean',
      description: 'Disables interactions with the search input component',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    /**
     * Displays a border around the search input component.
     */
    bordered: {
      control: 'boolean',
      description: 'Displays a border around the search input component',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    /**
     * Applies a background style to the search input component.
     */
    withBg: {
      control: 'boolean',
      description: 'Applies a background style to the search input component.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    /**
     * Search Bar Icon.
     */
    icon: {
      description: 'Search Bar Icon',
      control: {
        disable: true,
      },
    },
    /**
     * Search Bar Addon.
     */
    addon: {
      description: 'Search Bar Addon',
      control: {
        disable: true,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof SearchBar>

/**
 * Renders a default search bar component.
 * @returns The JSX element representing the default search bar.
 */
const DefaultSearch = () => {
  const [data, setData] = useState<Book[]>([])
  const handleOnChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase()
    const results = books.filter((book) => book.name.toLowerCase().includes(searchTerm))

    if (searchTerm === '') {
      setData([])
    } else {
      setData(results)
    }
  }

  return (
    <SearchBar
      placeholder="Search Anything"
      addon={<MagnifyingGlass size={20} color="#5E718D" />}
      addonPosition="left"
      handleOnChange={handleOnChange2}>
      <ul>
        {data.map((book) => (
          <Dropdown.Item key={book?.id}>
            {book?.name}
            <span className="ml-auto">
              <ArrowRight size={20} color="#5E718D" />
            </span>
          </Dropdown.Item>
        ))}
      </ul>
    </SearchBar>
  )
}

/**
 * Renders a SearchBar component with color variant.
 */
const SearchBarWithColorVariantCom = () => {
  const [data, setData] = useState<Book[]>([])
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase()
    const results = books.filter((book) => book.name.toLowerCase().includes(searchTerm))

    if (searchTerm === '') {
      setData([])
    } else {
      setData(results)
    }
  }
  return (
    <SearchBar
      placeholder="Search Anything"
      withBg
      bordered={false}
      addon={
        <Button type="primary" color="error" size="sm">
          Search
        </Button>
      }
      addonPosition="right"
      icon={
        <Button type="text" color="error" size="sm">
          <span className="mr-2">
            <MapPinLine size={24} color="#ff0000" />
          </span>
          Location
        </Button>
      }
      iconPosition="right"
      handleOnChange={handleOnChange}
      size="lg"
      color="error">
      <ul>
        {data.map((book) => (
          <Dropdown.Item key={book?.id} style={{ backgroundColor: '#FFF5F4' }}>
            {book?.name}
            <span className="ml-auto">
              <ArrowRight size={20} color="#ff0000" />
            </span>
          </Dropdown.Item>
        ))}
      </ul>
    </SearchBar>
  )
}
/**
 * Renders a SearchBar component with an icon and displays a list of books based on the search term.
 */
const SearchBarWithIconCom = () => {
  const [data, setData] = useState<Book[]>([])
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase()
    const results = books.filter((book) => book.name.toLowerCase().includes(searchTerm))

    if (searchTerm === '') {
      setData([])
    } else {
      setData(results)
    }
  }
  return (
    <SearchBar
      placeholder="Search Anything"
      addon={<MagnifyingGlass size={20} color="#5E718D" />}
      addonPosition="left"
      icon={<ArrowRight size={20} color="#5E718D" />}
      iconPosition="right"
      handleOnChange={handleOnChange}>
      <ul>
        {data.map((book) => (
          <Dropdown.Item key={book?.id}>
            {book?.name}
            <span className="ml-auto">
              <ArrowRight size={20} color="#5E718D" />
            </span>
          </Dropdown.Item>
        ))}
      </ul>
    </SearchBar>
  )
}

/**
 * Renders a disabled search bar component.
 *
 * @returns The disabled search bar component.
 */
const DisabledSearchBar = () => {
  return (
    <SearchBar
      placeholder="Search Anything"
      addon={<MagnifyingGlass size={20} color="#5E718D" />}
      addonPosition="left"
      disabled></SearchBar>
  )
}

/**
 * DefaultSearchBar story.
 */
export const DefaultSearchBar: Story = {
  render: () => <DefaultSearch />,
}

/**
 * Story configuration for SearchBarWithColorVariant.
 */
export const SearchBarWithColorVariant: Story = {
  render: () => <SearchBarWithColorVariantCom />,
}
/**
 * Renders a SearchBar component with an icon.
 */
export const SearchBarWithIcon: Story = {
  render: () => <SearchBarWithIconCom />,
}
/**
 * Story for rendering a disabled search bar.
 */
export const DisableSearchBar: Story = {
  render: () => <DisabledSearchBar />,
}
