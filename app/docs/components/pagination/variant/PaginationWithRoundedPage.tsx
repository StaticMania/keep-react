"use client";
import { useState } from "react";
import { Pagination } from "~/src";

const PaginationWithRoundedPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPage2, setCurrentPage2] = useState(1);
  const [currentPage3, setCurrentPage3] = useState(1);
  return (
    <div className="flex flex-col gap-4">
      <Pagination
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        totalPages={30}
        activeCurrentPageShape="circle"
        iconWithOutText={true}
        prevNextShape="none"
      />
      <Pagination
        currentPage={currentPage2}
        onPageChange={setCurrentPage2}
        totalPages={30}
        iconWithOutText={true}
        activeCurrentPageShape="circle"
        prevNextShape="none"
      />
      <Pagination
        currentPage={currentPage3}
        onPageChange={setCurrentPage3}
        totalPages={30}
        iconWithText={true}
        prevNextShape="circle"
        activeCurrentPageShape="circle"
      />
    </div>
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
