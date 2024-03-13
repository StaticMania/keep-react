'use client'
import { Button, Tooltip } from '../../../../src'

const TooltipPlacement = () => {
  return (
    <div className="my-8 flex flex-wrap items-end gap-2">
      <Tooltip content="Tooltips text here" trigger="hover" placement="top" animation="duration-300" style="dark">
        <Button size="sm">Tooltip Top</Button>
      </Tooltip>
      <Tooltip content="Tooltips text here" trigger="hover" placement="bottom" animation="duration-300" style="dark">
        <Button size="sm">Tooltip Bottom</Button>
      </Tooltip>
      <Tooltip content="Tooltips text here" trigger="hover" placement="left" animation="duration-300" style="dark">
        <Button size="sm">Tooltip Left</Button>
      </Tooltip>
      <Tooltip content="Tooltips text here" trigger="hover" placement="right" animation="duration-300" style="dark">
        <Button size="sm">Tooltip Right</Button>
      </Tooltip>
    </div>
  )
}

const TooltipPlacementCode = `
"use client";
import { Button,Tooltip } from "keep-react";

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
        <Button size="sm" >
          Tooltip Top
        </Button>
      </Tooltip>
      <Tooltip
        content="Tooltips text here"
        trigger="hover"
        placement="bottom"
        animation="duration-300"
        style="dark"
      >
        <Button size="sm" >
          Tooltip Bottom
        </Button>
      </Tooltip>
      <Tooltip
        content="Tooltips text here"
        trigger="hover"
        placement="left"
        animation="duration-300"
        style="dark"
      >
        <Button size="sm" >
          Tooltip Left
        </Button>
      </Tooltip>
      <Tooltip
        content="Tooltips text here"
        trigger="hover"
        placement="right"
        animation="duration-300"
        style="dark"
      >
        <Button size="sm" >
          Tooltip Right
        </Button>
      </Tooltip>
    </>
  );
}
`

export { TooltipPlacement, TooltipPlacementCode }
