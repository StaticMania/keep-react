import { Tooltip, TooltipAction, TooltipContent } from '../../../../src'

const TooltipPlacement = () => {
  return (
    <div className="flex items-center gap-5 p-2.5">
      {['top', 'bottom', 'left', 'right'].map((position) => (
        <Tooltip placement={position as 'bottom' | 'top' | 'left' | 'right'} key={position}>
          <TooltipAction>Tooltip</TooltipAction>
          <TooltipContent>
            <p className="text-body-5 font-medium text-white dark:text-metal-900">Tooltips - Title here</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  )
}

const TooltipPlacementCode = `
import { Tooltip, TooltipAction, TooltipContent } from 'keep-react'

export const TooltipComponent = () => {
  return (
    <>
      {['top', 'bottom', 'left', 'right'].map((position) => (
        <Tooltip placement={position} key={position}>
          <TooltipAction>Tooltip</TooltipAction>
          <TooltipContent>
            <p className="text-body-5 font-medium text-white dark:text-metal-900">Tooltips - Title here</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </>
  )
}

`

export { TooltipPlacement, TooltipPlacementCode }
