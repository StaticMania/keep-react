'use client'
import { CaretLeft, CaretRight, DotsThree } from 'phosphor-react'
import { Pagination, PaginationGoTo, PaginationItem, PaginationList, PaginationNavigator } from '../../../../src'

const PaginationInput = () => {
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
      <PaginationGoTo>
        <span>/ Go to</span>
        <input
          type="number"
          className="h-9 w-[60px] rounded-md border border-metal-100 text-center text-metal-600 focus:outline-none dark:border-metal-800 dark:text-metal-300"
          defaultValue={20}
        />
        <span>of 200</span>
      </PaginationGoTo>
    </Pagination>
  )
}

const PaginationInputCode = {
  'Pagination.tsx': `
'use client'
import { CaretLeft, CaretRight, DotsThree } from 'phosphor-react'
import { Pagination, PaginationGoTo, PaginationItem, PaginationList, PaginationNavigator } from 'keep-react'

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
      <PaginationGoTo>
        <span>/ Go to</span>
         <input
          type="number"
          className="h-9 w-[60px] rounded-md border border-metal-100 text-center text-metal-600 focus:outline-none dark:border-metal-800 dark:text-metal-300"
          defaultValue={20}
        />
        <span>of 200</span>
      </PaginationGoTo>
    </Pagination>
  )
}
`,
}
export { PaginationInput, PaginationInputCode }
