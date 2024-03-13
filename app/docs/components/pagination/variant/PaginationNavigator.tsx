'use client'
import { CaretLeft, CaretRight, DotsThree } from 'phosphor-react'
import { Pagination } from '../../../../src'

const PaginationNavigator = () => {
  return (
    <Pagination shape="circle">
      <Pagination.Navigator shape="circle">
        <CaretLeft size={18} />
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
      <Pagination.Navigator shape="circle">
        <CaretRight size={18} />
      </Pagination.Navigator>
    </Pagination>
  )
}

const PaginationNavigatorCode = `
'use client'
import { Pagination } from 'keep-react'
import { CaretLeft, CaretRight, DotsThree } from 'phosphor-react'

export const PaginationComponent = () => {
  return (
    <Pagination shape="circle">
      <Pagination.Navigator shape="circle">
        <CaretLeft size={18} />
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
      <Pagination.Navigator shape="circle">
        <CaretRight size={18} />
      </Pagination.Navigator>
    </Pagination>
  )
}
`

export { PaginationNavigator, PaginationNavigatorCode }
