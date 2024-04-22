'use client'
import { Tooltip } from '../../../../src'

const DefaultTooltip = () => {
  return (
    <div className="p-2.5">
      <Tooltip>
        <Tooltip.Action>Tooltip</Tooltip.Action>
        <Tooltip.Content>
          <p className="text-body-5 font-medium text-white">Tooltips - Title here</p>
        </Tooltip.Content>
      </Tooltip>
    </div>
  )
}

const DefaultTooltipCode = `
'use client'
import { Tooltip } from 'keep-react'

export const TooltipComponent = () => {
  return (
    <Tooltip>
      <Tooltip.Action>Tooltip</Tooltip.Action>
      <Tooltip.Content>
        <p className="text-body-5 font-medium text-white">Tooltips - Title here</p>
      </Tooltip.Content>
    </Tooltip>
  )
}

`

export { DefaultTooltip, DefaultTooltipCode }
