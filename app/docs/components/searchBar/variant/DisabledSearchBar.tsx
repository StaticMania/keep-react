"use client";
import { SearchBar } from "@/src/components";
import { MagnifyingGlass } from "phosphor-react";

const DisabledSearchBar = () => {
  return (
    <SearchBar
      placeholder="Search Anything"
      addon={<MagnifyingGlass size={20} color="#5E718D" />}
      addonPosition="left"
      disabled={true}
    />
  );
};

const DisabledSearchBarCode = `
"use client";
import { SearchBar } from "keep-react";
import { MagnifyingGlass } from "phosphor-react";

const DisabledSearchBar = () => {
  return (
    <SearchBar
      placeholder="Search Anything"
      addon={<MagnifyingGlass size={20} color="#5E718D" />}
      addonPosition="left"
      disabled={true}
    />
  );
};

export default DisabledSearchBar;
`;

export { DisabledSearchBar, DisabledSearchBarCode };
