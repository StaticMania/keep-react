'use client'
import { DotsThreeOutline, Pencil, Trash } from 'phosphor-react'
import { Button, Popover, PopoverContent, PopoverTrigger } from '~/app/src'

const TableActionBtn = () => {
  return (
    <Popover>
      <PopoverContent className="!mt-0 !block">
        <ul>
          <li className="rounded px-2 py-1 hover:bg-metal-100">
            <button className="flex w-full items-center justify-between text-body-5 font-normal text-metal-600">
              <span>Delete</span>
              <span>
                <Trash />
              </span>
            </button>
          </li>
          <li className="rounded px-2 py-1 hover:bg-metal-100">
            <button className="flex w-full items-center justify-between text-body-5 font-normal text-metal-600">
              <span>Edit</span>
              <span>
                <Pencil />
              </span>
            </button>
          </li>
        </ul>
      </PopoverContent>
      <PopoverTrigger>
        <Button variant="outline" size="sm" shape="circle">
          <DotsThreeOutline size={15} />
        </Button>
      </PopoverTrigger>
    </Popover>
  )
}

export default TableActionBtn
