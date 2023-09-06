"use client";
import { useState } from "react";
import { Pagination } from "@/src/components";

const DefaultPagination = () => {
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
        prevNextShape="roundSquare"
      />
      <Pagination
        currentPage={currentPage2}
        onPageChange={setCurrentPage2}
        totalPages={30}
        iconWithOutText={true}
        prevNextShape="circle"
      />
      <Pagination
        currentPage={currentPage3}
        onPageChange={setCurrentPage3}
        totalPages={30}
        iconWithText={true}
        prevNextShape="roundSquare"
      />
    </div>
  );
};

const DefaultPaginationCode = `
"use client";
import { Pagination } from "keep-react";
import { useState } from "react";

const DefaultPagination = () => {
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
};

export default DefaultPagination;
`;

export { DefaultPagination, DefaultPaginationCode };
