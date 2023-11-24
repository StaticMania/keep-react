'use client'
import { Button, Tooltip } from '~/src'

const TooltipTriggering = () => {
  return (
    <div className="flex flex-wrap items-end gap-2">
      <Tooltip content="Tooltips text here" trigger="hover" placement="top" animation="duration-300" style="dark">
        <Button size="sm" variant="primary">
          Tooltip Hover
        </Button>
      </Tooltip>
      <Tooltip content="Tooltips text here" trigger="click" placement="bottom" animation="duration-300" style="dark">
        <Button size="sm" variant="primary">
          Tooltip Click
        </Button>
      </Tooltip>
    </div>
  )
}

const TooltipTriggeringCode = `
"use client";
import {Tooltip,Button } from "keep-react";

export const TooltipComponent = () => {
  return (
    <>
      <Tooltip
        content="Tooltips text here"
        trigger="hover"
        placement="top"
        animation="duration-300"
        style="dark"
      >
        <Button size="sm" variant="primary">
          Tooltip Hover
        </Button>
      </Tooltip>
      <Tooltip
        content="Tooltips text here"
        trigger="click"
        placement="bottom"
        animation="duration-300"
        style="dark"
      >
        <Button size="sm" variant="primary">
          Tooltip Click
        </Button>
      </Tooltip>
    </>
  );
}
`

export { TooltipTriggering, TooltipTriggeringCode }
