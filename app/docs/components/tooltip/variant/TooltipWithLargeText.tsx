'use client'
import { Button, Tooltip } from '~/src'

const TooltipWithLargeText = () => {
  return (
    <div className=" flex flex-wrap items-end gap-2">
      <Tooltip
        title="Tooltip Title here"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, alias."
        trigger="hover"
        placement="top"
        animation="duration-300"
        style="dark">
        <Button size="sm" type="primary">
          Tooltip Content
        </Button>
      </Tooltip>
      <Tooltip
        title="Tooltip Title here"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, alias."
        trigger="hover"
        placement="bottom"
        animation="duration-300"
        style="light">
        <Button size="sm" type="primary">
          Tooltip Content
        </Button>
      </Tooltip>
    </div>
  )
}

const TooltipWithLargeTextCode = `
"use client";
import { Tooltip,Button } from "keep-react";

export const TooltipComponent = () => {
  return (
    <>
      <Tooltip
        title="Tooltip Title here"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, alias."
        trigger="hover"
        placement="top"
        animation="duration-300"
        style="dark"
      >
        <Button size="sm" type="primary">
          Tooltip Content
        </Button>
      </Tooltip>
      <Tooltip
        title="Tooltip Title here"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, alias."
        trigger="hover"
        placement="bottom"
        animation="duration-300"
        style="light"
      >
        <Button size="sm" type="primary">
          Tooltip Content
        </Button>
      </Tooltip>
    </>
  );
}
`

export { TooltipWithLargeText, TooltipWithLargeTextCode }
