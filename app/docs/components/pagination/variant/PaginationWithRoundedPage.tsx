'use client'
import { useState } from 'react'
import { Pagination } from '../../../../src'

const PaginationWithRoundedPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      totalPages={30}
      iconWithText={true}
      prevNextShape="circle"
      activeCurrentPageShape="circle"
    />
  )
}

const PaginationWithRoundedPageCode = `
"use client";
import { useState } from "react";
import { Pagination } from "keep-react";

export const PaginationComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      totalPages={30}
      iconWithText={true}
      prevNextShape="circle"
      activeCurrentPageShape="circle"
    />
  );
}
`

export { PaginationWithRoundedPage, PaginationWithRoundedPageCode }
