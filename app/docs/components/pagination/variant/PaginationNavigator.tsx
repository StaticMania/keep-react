'use client'
import { CaretLeft, CaretRight, DotsThree } from 'phosphor-react'
import { Pagination, PaginationItem, PaginationList, PaginationNavigator } from '../../../../src'

const PaginationNavigatorComponent = () => {
  return (
    <Pagination shape="circle">
      <PaginationNavigator shape="circle">
        <CaretLeft size={18} />
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
      <PaginationNavigator shape="circle">
        <CaretRight size={18} />
      </PaginationNavigator>
    </Pagination>
  )
}

const PaginationNavigatorCode = `
'use client'
import { CaretLeft, CaretRight, DotsThree } from 'phosphor-react'
import { Pagination, PaginationItem, PaginationList, PaginationNavigator } from 'keep-react'

export const PaginationComponent = () => {
  return (
    <Pagination shape="circle">
      <PaginationNavigator shape="circle">
        <CaretLeft size={18} />
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
      <PaginationNavigator shape="circle">
        <CaretRight size={18} />
      </PaginationNavigator>
    </Pagination>
  )
}
`

export { PaginationNavigatorCode, PaginationNavigatorComponent }
