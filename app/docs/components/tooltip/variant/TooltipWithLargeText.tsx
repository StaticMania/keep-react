import { Tooltip, TooltipAction, TooltipContent } from '../../../../src'

const TooltipWithLargeText = () => {
  return (
    <div className="flex h-52 items-center justify-center gap-5">
      <Tooltip>
        <TooltipAction>Tooltip</TooltipAction>
        <TooltipContent className="px-4 py-3">
          <p className="text-body-4 font-medium text-white">Tooltips - Title here</p>
          <p className="text-body-5 font-normal text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}

const TooltipWithLargeTextCode = {
  'TooltipComponent.tsx': `
import { Tooltip, TooltipAction, TooltipContent } from 'keep-react'

export const TooltipComponent = () => {
  return (
    <Tooltip>
      <TooltipAction>Tooltip</TooltipAction>
      <TooltipContent className="px-4 py-3">
        <p className="text-body-4 font-medium text-white">Tooltips - Title here</p>
        <p className="text-body-5 font-normal text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </TooltipContent>
    </Tooltip>
  )
}
`,
}

export { TooltipWithLargeText, TooltipWithLargeTextCode }
