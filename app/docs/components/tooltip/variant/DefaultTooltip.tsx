import { Tooltip, TooltipAction, TooltipContent } from '../../../../src'

const DefaultTooltip = () => {
  return (
    <div className="p-2.5">
      <Tooltip>
        <TooltipAction>Tooltip</TooltipAction>
        <TooltipContent>
          <p className="text-body-5 font-medium text-white dark:text-metal-900">Tooltips - Title here</p>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}

const DefaultTooltipCode = `
import { Tooltip, TooltipAction, TooltipContent } from 'keep-react'

export const TooltipComponent = () => {
  return (
    <Tooltip>
      <TooltipAction>Tooltip</TooltipAction>
      <TooltipContent>
        <p className="text-body-5 font-medium text-white dark:text-metal-900">Tooltips - Title here</p>
      </TooltipContent>
    </Tooltip>
  )
}

`

export { DefaultTooltip, DefaultTooltipCode }
