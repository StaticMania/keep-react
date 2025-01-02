'use client'
import { CaretLeft, CaretRight, DotsThree } from 'phosphor-react'
import { Pagination, PaginationItem, PaginationList, PaginationNavigator } from '../../../../src'

const PaginationNavigatorText = () => {
  return (
    <div>
      <Pagination shape="rounded">
        <PaginationNavigator>
          <CaretLeft size={18} />
          Previous
        </PaginationNavigator>
        <PaginationList>
          <PaginationItem>1</PaginationItem>
          <PaginationItem active>2</PaginationItem>
          <PaginationItem>3</PaginationItem>
          <PaginationItem>4</PaginationItem>
          <PaginationItem>
            <DotsThree size={20} />
          </PaginationItem>
          <PaginationItem>10</PaginationItem>
        </PaginationList>
        <PaginationNavigator>
          Next
          <CaretRight size={18} />
        </PaginationNavigator>
      </Pagination>
    </div>
  )
}

const PaginationNavigatorTextCode = {
  'Pagination.tsx': `
'use client'
import { Pagination, PaginationItem, PaginationList, PaginationNavigator } from 'keep-react'
import { CaretLeft, CaretRight, DotsThree } from 'phosphor-react'

export const PaginationComponent = () => {
  return (
    <Pagination shape="rounded">
      <PaginationNavigator>
        <CaretLeft size={18} />
        Previous
      </PaginationNavigator>
      <PaginationList>
        <PaginationItem>1</PaginationItem>
        <PaginationItem active>2</PaginationItem>
        <PaginationItem>3</PaginationItem>
        <PaginationItem>4</PaginationItem>
        <PaginationItem>
          <DotsThree size={20} />
        </PaginationItem>
        <PaginationItem>10</PaginationItem>
      </PaginationList>
      <PaginationNavigator>
        Next
        <CaretRight size={18} />
      </PaginationNavigator>
    </Pagination>
  )
}
`,
}

export { PaginationNavigatorText, PaginationNavigatorTextCode }
