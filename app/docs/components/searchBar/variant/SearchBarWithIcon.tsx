"use client";
import { useState } from "react";
import { Book, books } from "./DefaultSearchBar";
import { SearchBar, Dropdown } from "~/src";
import { ArrowRight, MagnifyingGlass } from "phosphor-react";

const SearchBarWithIcon = () => {
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
      icon={<ArrowRight size={20} color="#5E718D" />}
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

const SearchBarWithIconCode = `
"use client";
import { useState } from "react";
import { SearchBar,Dropdown } from "keep-react";
import { ArrowRight, MagnifyingGlass } from "phosphor-react";

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

export const SearchBarComponent = () => {
    
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
      addon={<MagnifyingGlass size={20} color="#5E718D" />}
      addonPosition="left"
      icon={<ArrowRight size={20} color="#5E718D" />}
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
}
`;

export { SearchBarWithIcon, SearchBarWithIconCode };
