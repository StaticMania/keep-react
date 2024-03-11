'use client'
import { CaretLeft, CaretRight, DotsThree } from 'phosphor-react'
import { Pagination, Typography } from '../../../../src'

const PaginationInput = () => {
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
      <Pagination.GoTo>
        <Typography variant="span">/ Go to</Typography>
        <input
          type="number"
          className="h-9 w-[60px] rounded-md border border-metal-100 text-center text-metal-500 focus:outline-none"
          defaultValue={20}
        />
        <Typography variant="span">of 200</Typography>
      </Pagination.GoTo>
    </Pagination>
  )
}

const PaginationInputCode = `
'use client'
import { Pagination, Typography } from 'keep-react'
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
      <Pagination.GoTo>
        <Typography variant="span">/ Go to</Typography>
        <input
          type="number"
          className="h-9 w-[60px] rounded-md border border-metal-100 text-center text-metal-500 focus:outline-none"
          defaultValue={20}
        />
        <Typography variant="span">of 200</Typography>
      </Pagination.GoTo>
    </Pagination>
  )
}
`
export { PaginationInput, PaginationInputCode }
