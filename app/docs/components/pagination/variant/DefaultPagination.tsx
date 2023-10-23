"use client";
import { useState } from "react";
import { Pagination } from "~/src";

const DefaultPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      totalPages={30}
      iconWithOutText={true}
      prevNextShape="roundSquare"
    />
  );
};

const DefaultPaginationCode = `
"use client";
import { Pagination } from "keep-react";
import { useState } from "react";

export const PaginationComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={(val) => setCurrentPage(val)}
      totalPages={30}
      iconWithOutText
      prevNextShape="roundSquare"
    />
  );
}
`;

export { DefaultPagination, DefaultPaginationCode };
