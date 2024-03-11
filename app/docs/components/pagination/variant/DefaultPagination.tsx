'use client'
import { DotsThree } from 'phosphor-react'
import { Pagination } from '../../../../src'

const DefaultPagination = () => {
  return (
    <Pagination>
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
    </Pagination>
  )
}

const DefaultPaginationCode = `
'use client'
import { DotsThree } from 'phosphor-react'
import { Pagination } from 'keep-react'

export const PaginationComponent = () => {
  return (
    <Pagination>
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
    </Pagination>
  )
}
`

export { DefaultPagination, DefaultPaginationCode }
