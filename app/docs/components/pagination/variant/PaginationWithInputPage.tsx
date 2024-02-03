'use client'
import { useState } from 'react'
import { Pagination } from '../../../../src'

const PaginationWithInputPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      totalPages={30}
      iconWithOutText={true}
      prevNextShape="none"
      showGoToPaginate={true}
    />
  )
}

const PaginationWithInputPageCode = `
"use client";
import { Pagination } from "keep-react";
import React, { useState } from "react";

export const PaginationComponent = () => {
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
}
`
export { PaginationWithInputPage, PaginationWithInputPageCode }
