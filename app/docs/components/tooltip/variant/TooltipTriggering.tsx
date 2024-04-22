'use client'
import { Tooltip } from '../../../../src'

const TooltipTriggering = () => {
  return (
    <div className="flex items-center gap-5 p-2.5">
      {['click', 'hover', 'focus'].map((trigger) => (
        <Tooltip trigger={trigger as 'click' | 'hover' | 'focus'} key={trigger}>
          <Tooltip.Action>{trigger}</Tooltip.Action>
          <Tooltip.Content>
            <p className="text-body-5 font-medium text-white">Tooltips - Title here</p>
          </Tooltip.Content>
        </Tooltip>
      ))}
    </div>
  )
}

const TooltipTriggeringCode = `
'use client'
import { Tooltip } from 'keep-react'

export const TooltipComponent = () => {
  return (
    <>
      {['click', 'hover', 'focus'].map((trigger) => (
        <Tooltip trigger={trigger} key={trigger}>
          <Tooltip.Action>{trigger}</Tooltip.Action>
          <Tooltip.Content>
            <p className="text-body-5 font-medium text-white">Tooltips - Title here</p>
          </Tooltip.Content>
        </Tooltip>
      ))}
    </>
  )
}
`

export { TooltipTriggering, TooltipTriggeringCode }
