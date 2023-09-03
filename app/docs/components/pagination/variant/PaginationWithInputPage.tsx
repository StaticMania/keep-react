"use client";
import { Pagination } from "@/src/components/Pagination";
import React, { useState } from "react";

const PaginationWithInputPage = () => {
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
        showGoToPaginate={true}
      />
      <Pagination
        currentPage={currentPage2}
        onPageChange={setCurrentPage2}
        totalPages={30}
        iconWithOutText={true}
        prevNextShape="none"
        showGoToPaginate={true}
      />
      <Pagination
        currentPage={currentPage3}
        onPageChange={setCurrentPage3}
        totalPages={30}
        iconWithText={true}
        prevNextShape="roundSquare"
        showGoToPaginate={true}
      />
    </div>
  );
};
const PaginationWithInputPageCode = `
"use client";
import { Pagination } from "keep-design";
import React, { useState } from "react";

const PaginationWithInputPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
      <Pagination
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        totalPages={30}
        iconWithOutText={true}
        prevNextShape="none"
        showGoToPaginate={true}
      />
  );
};
export default PaginationWithInputPage;
`;
export { PaginationWithInputPage, PaginationWithInputPageCode };
