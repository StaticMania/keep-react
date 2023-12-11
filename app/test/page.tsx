'use client'

import { Button } from '~/src'
import { Popover } from './Popover'

const page = () => {
  return (
    <main>
      <div className="container py-5">
        <h1 className="text-center text-heading-4 font-medium">Button Component Re-Structure</h1>
        <hr className="my-10 block" />
        <div className="">
          <Popover>
            <Popover.Title>Popover Title here</Popover.Title>
            <Popover.Description>
              Tk 50 a kilogram nearly after a year, straining further the buying capacity of low-income people, who are
              already struggling to make ends meet amid higher inflation.
            </Popover.Description>
            <Popover.Container>
              <Button size="xs">Action</Button>
              <Button size="xs">Action2</Button>
            </Popover.Container>

            <Popover.Action>
              <Button size="xs">Action</Button>
            </Popover.Action>
          </Popover>
        </div>
      </div>
    </main>
  )
}

export default page
