"use client";
import { Pagination } from "@/src/components/Pagination";
import { useState } from "react";

const PaginationWithBorder = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPage2, setCurrentPage2] = useState(1);
  const [currentPage3, setCurrentPage3] = useState(1);
  return (
    <div className="flex flex-col gap-4">
      <Pagination
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        totalPages={30}
        iconWithOutText={true}
        prevNextShape="none"
        paginateWithBorder={true}
      />
      <Pagination
        currentPage={currentPage2}
        onPageChange={setCurrentPage2}
        totalPages={30}
        iconWithOutText={true}
        paginateWithBorder={true}
        prevNextShape="circle"
      />
      <Pagination
        currentPage={currentPage3}
        onPageChange={setCurrentPage3}
        totalPages={30}
        iconWithText={true}
        prevNextShape="roundSquare"
        paginateWithBorder={true}
      />
    </div>
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
