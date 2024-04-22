'use client'
import { Tooltip } from '../../../../src'

const TooltipWithLargeText = () => {
  return (
    <div className="p-2.5">
      <Tooltip>
        <Tooltip.Action>Tooltip</Tooltip.Action>
        <Tooltip.Content className="px-4 py-3">
          <p className="mb-1 text-body-3 font-medium text-white">Tooltips - Title here</p>
          <p className="text-body-5 font-normal text-white/80">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </Tooltip.Content>
      </Tooltip>
    </div>
  )
}

const TooltipWithLargeTextCode = `
'use client'
import { Tooltip } from 'keep-react'

export const TooltipComponent = () => {
  return (
    <Tooltip>
      <Tooltip.Action>Tooltip</Tooltip.Action>
      <Tooltip.Content className="px-4 py-3">
        <p className="mb-1 text-body-3 font-medium text-white">Tooltips - Title here</p>
        <p className="text-body-5 font-normal text-white/80">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </Tooltip.Content>
    </Tooltip>
  )
}

`

export { TooltipWithLargeText, TooltipWithLargeTextCode }
