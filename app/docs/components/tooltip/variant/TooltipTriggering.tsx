import { Tooltip, TooltipAction, TooltipContent } from '../../../../src'

const TooltipTriggering = () => {
  return (
    <div className="flex h-44 items-center justify-center gap-5">
      {['click', 'hover', 'focus'].map((trigger) => (
        <Tooltip trigger={trigger as 'click' | 'hover' | 'focus'} key={trigger}>
          <TooltipAction>{trigger}</TooltipAction>
          <TooltipContent>
            <p className="text-body-5 font-medium text-white dark:text-metal-900">Tooltips - Title here</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  )
}

const TooltipTriggeringCode = `
import { Tooltip, TooltipAction, TooltipContent } from 'keep-react'

export const TooltipComponent = () => {
  return (
    <>
      {['click', 'hover', 'focus'].map((trigger) => (
        <Tooltip trigger={trigger} key={trigger}>
          <TooltipAction>{trigger}</TooltipAction>
          <TooltipContent>
            <p className="text-body-5 font-medium text-white dark:text-metal-900">Tooltips - Title here</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </>
  )
}
`

export { TooltipTriggering, TooltipTriggeringCode }
