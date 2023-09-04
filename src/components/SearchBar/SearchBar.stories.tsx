import type { Meta, StoryObj } from "@storybook/react";

export interface Book {
  id: number;
  name: string;
}
export const books: Book[] = [
  { id: 1, name: "To Kill a Mockingbird" },
  { id: 2, name: "Pride and Prejudice" },
  { id: 3, name: "1984" },
  { id: 4, name: "The Great Gatsby" },
  { id: 5, name: "Moby Dick" },
  { id: 6, name: "The Catcher in the Rye" },
  { id: 7, name: "Jane Eyre" },
  { id: 8, name: "The Lord of the Rings" },
  { id: 9, name: "To the Lighthouse" },
  { id: 10, name: "Brave New World" },
];

import {
  ArrowRight,
  Faders,
  MagnifyingGlass,
  MapPinLine,
} from "phosphor-react";
import { useState } from "react";
import { SearchBar } from ".";
import { Button } from "../Button";
import { Dropdown } from "../Dropdown";

const meta: Meta<typeof SearchBar> = {
  component: SearchBar,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["gray", "info", "error", "warning", "success"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "gray" },
      },
      description: "Input Field colors",
    },
    placeholder: {
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Placeholder" },
      },
      description: "Input Field Placeholder text",
    },

    addonPosition: {
      description: "Addon Position",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "left" },
      },
    },
    iconPosition: {
      description: "Icon Position",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "left" },
      },
    },
    size: {
      description: "Avaiable size for searchbar",
      control: "select",
      options: ["sm", "md", "lg"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "md" },
      },
    },
    icon: {
      description: "Search Bar Icon",
      control: {
        disable: true,
      },
    },
    addon: {
      description: "Search Bar Addon",
      control: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

const DefaultSearch = () => {
  const [data, setData] = useState<Book[]>([]);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    const results = books.filter((book) =>
      book.name.toLowerCase().includes(searchTerm)
    );

    if (searchTerm === "") {
      setData([]);
    } else {
      setData(results);
    }
  };

  return (
    <SearchBar
      placeholder="Search Anything"
      addon={<MagnifyingGlass size={20} color="#5E718D" />}
      addonPosition="left"
      handleOnChange={handleOnChange}
    >
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
  );
};
const SearchBarWithBothSideIcon = () => {
  const [data, setData] = useState<Book[]>([]);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    const results = books.filter((book) =>
      book.name.toLowerCase().includes(searchTerm)
    );

    if (searchTerm === "") {
      setData([]);
    } else {
      setData(results);
    }
  };

  return (
    <SearchBar
      placeholder="Search Anything"
      addon={<MagnifyingGlass size={20} color="#5E718D" />}
      addonPosition="left"
      icon={<ArrowRight size={20} color="#1B4DFF" />}
      iconPosition="right"
      handleOnChange={handleOnChange}
    >
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
  );
};
const SearchBarWithRightRideTwoIcon = () => {
  const [data, setData] = useState<Book[]>([]);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    const results = books.filter((book) =>
      book.name.toLowerCase().includes(searchTerm)
    );

    if (searchTerm === "") {
      setData([]);
    } else {
      setData(results);
    }
  };

  return (
    <SearchBar
      placeholder="Search Anything"
      addon={
        <Button type="primary">
          <MagnifyingGlass size={20} />
        </Button>
      }
      addonPosition="right"
      icon={<Faders size={20} color="#5E718D" />}
      iconPosition="right"
      handleOnChange={handleOnChange}
      size="lg"
    >
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
  );
};
const SearchBarWithRightSideIcon = () => {
  const [data, setData] = useState<Book[]>([]);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    const results = books.filter((book) =>
      book.name.toLowerCase().includes(searchTerm)
    );

    if (searchTerm === "") {
      setData([]);
    } else {
      setData(results);
    }
  };

  return (
    <SearchBar
      placeholder="Search Anything"
      addon={
        <Button type="primary" size="sm">
          Search
        </Button>
      }
      addonPosition="right"
      icon={
        <Button type="text" size="sm">
          <span className="mr-2">
            <MapPinLine size={24} color="#5E718D" />
          </span>
          Location
        </Button>
      }
      iconPosition="right"
      handleOnChange={handleOnChange}
      size="lg"
    >
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
  );
};
const SearchBarWithErrorColor = () => {
  const [data, setData] = useState<Book[]>([]);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    const results = books.filter((book) =>
      book.name.toLowerCase().includes(searchTerm)
    );

    if (searchTerm === "") {
      setData([]);
    } else {
      setData(results);
    }
  };

  return (
    <SearchBar
      placeholder="Search Anything"
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
      color="error"
    >
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
  );
};
const DisabledSearchBar = () => {
  return (
    <SearchBar
      placeholder="Search Anything"
      addon={<MagnifyingGlass size={20} color="#5E718D" />}
      addonPosition="left"
      disabled
    ></SearchBar>
  );
};

export const DefaultSearchBar: Story = {
  render: () => <DefaultSearch />,
};

export const SearchWithBothSideIcon: Story = {
  render: () => <SearchBarWithBothSideIcon />,
};
export const SearchBarWithRightSideTwoIcon: Story = {
  render: () => <SearchBarWithRightRideTwoIcon />,
};
export const SearchWithRightSideIcon: Story = {
  render: () => <SearchBarWithRightSideIcon />,
};
export const SearchBarWithError: Story = {
  render: () => <SearchBarWithErrorColor />,
};
export const DisableSearchBar: Story = {
  render: () => <DisabledSearchBar />,
};
