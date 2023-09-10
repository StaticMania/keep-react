"use client";
import { useState } from "react";
import { Book, books } from "./DefaultSearchBar";
import { ArrowRight, MapPinLine } from "phosphor-react";
import { SearchBar, Dropdown, Button } from "~/src";

const SearchBarWithColorVariant = () => {
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
      color="error"
    >
      <ul>
        {data.map((book) => (
          <Dropdown.Item key={book?.id} style={{ backgroundColor: "#FFF5F4" }}>
            {book?.name}
            <span className="ml-auto">
              <ArrowRight size={20} color="#ff0000" />
            </span>
          </Dropdown.Item>
        ))}
      </ul>
    </SearchBar>
  );
};

const SearchBarWithColorVariantCode = `
"use client";

import { useState } from "react";
import { SearchBar,Button,Dropdown } from "keep-react";
import { ArrowRight, MapPinLine } from "phosphor-react";

const books = [
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

const SearchBarWithColorVariant = () => {
  const [data, setData] = useState([]);
  const handleOnChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
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
      color="error"
    >
      <ul>
        {data.map((book) => (
          <Dropdown.Item key={book?.id} style={{ backgroundColor: "#FFF5F4" }}>
            {book?.name}
            <span className="ml-auto">
              <ArrowRight size={20} color="#ff0000" />
            </span>
          </Dropdown.Item>
        ))}
      </ul>
    </SearchBar>
  );
};

export default SearchBarWithColorVariant;
`;

export { SearchBarWithColorVariant, SearchBarWithColorVariantCode };
