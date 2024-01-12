'use client'
import { Button, Popover } from '~/app/src'
import { DotsThreeOutline, Pencil, Trash } from 'phosphor-react'

const TableActionBtn = () => {
  return (
    <Popover showDismissIcon={false} showArrow={false} className="w-48 border border-metal-100 p-1">
      <Popover.Container className="!mt-0 !block">
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
      </Popover.Container>
      <Popover.Action>
        <Button variant="outline" size="sm" shape="circle">
          <DotsThreeOutline size={15} />
        </Button>
      </Popover.Action>
    </Popover>
  )
}

export default TableActionBtn
