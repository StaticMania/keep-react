import type { Meta, StoryObj } from '@storybook/react'

export interface Book {
  id: number
  name: string
}
export const BooksArray: Book[] = [
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
import { ChangeEvent, useState } from 'react'
import { SearchBar } from '.'
import { Button } from '../Button/Button'
import { Dropdown } from '../Dropdown'

const meta: Meta<typeof SearchBar> = {
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['gray', 'info', 'error', 'warning', 'success'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'gray' },
      },
      description: 'Specifies the color variant of the search input component.',
    },
    placeholder: {
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Placeholder' },
      },
      description: 'Input Field Placeholder text',
    },
    addonPosition: {
      description: 'Addon Position',
      control: 'radio',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'left' },
      },
    },
    iconPosition: {
      description: 'Icon Position',
      control: 'radio',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'left' },
      },
    },
    size: {
      description: 'Available size for searchbar',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      description: 'Disables interactions with the search input component',
      control: { type: 'boolean' },
    },
    bordered: {
      description: 'Displays a border around the search input component',
      control: { type: 'boolean' },
    },
    withBg: {
      description: 'Applies a background style to the search input component.',
      control: { type: 'boolean' },
    },
    icon: {
      description: 'Search Bar Icon',
      control: {
        disable: true,
      },
    },
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

const DefaultSearch = () => {
  const [data, setData] = useState<Book[]>([])
  const handleOnChange2 = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase()
    const results = BooksArray.filter((book) => book.name.toLowerCase().includes(searchTerm))

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

const SearchBarWithColorVariantCom = () => {
  const [data, setData] = useState<Book[]>([])
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase()
    const results = BooksArray.filter((book) => book.name.toLowerCase().includes(searchTerm))

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
        <Button variant="primary" color="error" size="sm">
          Search
        </Button>
      }
      addonPosition="right"
      icon={
        <Button variant="text" color="error" size="sm">
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
const SearchBarWithIconCom = () => {
  const [data, setData] = useState<Book[]>([])
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase()
    const results = BooksArray.filter((book) => book.name.toLowerCase().includes(searchTerm))

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

const DisabledSearchBar = () => {
  return (
    <SearchBar
      placeholder="Search Anything"
      addon={<MagnifyingGlass size={20} color="#5E718D" />}
      addonPosition="left"
      disabled></SearchBar>
  )
}

export const DefaultSearchBar: Story = {
  render: () => <DefaultSearch />,
}

export const SearchBarWithColorVariant: Story = {
  render: () => <SearchBarWithColorVariantCom />,
}
export const SearchBarWithIcon: Story = {
  render: () => <SearchBarWithIconCom />,
}
export const DisableSearchBar: Story = {
  render: () => <DisabledSearchBar />,
}
