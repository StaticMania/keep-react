"use client";
import { useState } from "react";
import { Pagination } from "~/src";

const PaginationWithBorder = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      totalPages={30}
      iconWithText={true}
      prevNextShape="roundSquare"
      paginateWithBorder={true}
    />
  );
};

const PaginationWithBorderCode = `
"use client";
import { useState } from "react";
import { Pagination } from "keep-react";

const PaginationWithBorder = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
      <Pagination
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        totalPages={30}
        iconWithOutText={true}
        prevNextShape="none"
        paginateWithBorder={true}
      />
  );
};

export default PaginationWithBorder;

`;

export { PaginationWithBorder, PaginationWithBorderCode };
