'use client'
import { CaretLeft, CaretRight, DotsThree } from 'phosphor-react'
import { Pagination } from '../../../../src'

const PaginationNavigatorText = () => {
  return (
    <Pagination shape="rounded">
      <Pagination.Navigator>
        <CaretLeft size={18} />
        Previous
      </Pagination.Navigator>
      <Pagination.List>
        <Pagination.Item>1</Pagination.Item>
        <Pagination.Item active>2</Pagination.Item>
        <Pagination.Item>3</Pagination.Item>
        <Pagination.Item>4</Pagination.Item>
        <Pagination.Item>
          <DotsThree size={20} />
        </Pagination.Item>
        <Pagination.Item>10</Pagination.Item>
      </Pagination.List>
      <Pagination.Navigator>
        Next
        <CaretRight size={18} />
      </Pagination.Navigator>
    </Pagination>
  )
}

const PaginationNavigatorTextCode = `
'use client'
import { Pagination } from 'keep-react'
import { CaretLeft, CaretRight, DotsThree } from 'phosphor-react'

export const PaginationComponent = () => {
  return (
    <Pagination shape="rounded">
      <Pagination.Navigator>
        <CaretLeft size={18} />
        Previous
      </Pagination.Navigator>
      <Pagination.List>
        <Pagination.Item>1</Pagination.Item>
        <Pagination.Item active>2</Pagination.Item>
        <Pagination.Item>3</Pagination.Item>
        <Pagination.Item>4</Pagination.Item>
        <Pagination.Item>
          <DotsThree size={20} />
        </Pagination.Item>
        <Pagination.Item>10</Pagination.Item>
      </Pagination.List>
      <Pagination.Navigator>
        Next
        <CaretRight size={18} />
      </Pagination.Navigator>
    </Pagination>
  )
}
`

export { PaginationNavigatorText, PaginationNavigatorTextCode }
