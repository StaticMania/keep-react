"use client";
import { useState } from "react";
import { Pagination } from "~/src";

const PaginationWithRoundedPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      totalPages={30}
      iconWithOutText={true}
      activeCurrentPageShape="circle"
      prevNextShape="none"
    />
  );
};

const PaginationWithRoundedPageCode = `
"use client";
import { useState } from "react";
import { Pagination } from "keep-react";

const PaginationWithRoundedPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
      <Pagination
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        totalPages={30}
        activeCurrentPageShape="circle"
        iconWithOutText={true}
        prevNextShape="none"
      />
  );
};

export default PaginationWithRoundedPage;
`;

export { PaginationWithRoundedPage, PaginationWithRoundedPageCode };
