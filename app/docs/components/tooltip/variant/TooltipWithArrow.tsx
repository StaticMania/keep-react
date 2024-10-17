import { Button, Tooltip, TooltipAction, TooltipArrow, TooltipContent, TooltipProvider } from '../../../../src'

const TooltipWithArrow = () => {
  return (
    <div className="flex h-44 items-center justify-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipAction asChild>
            <Button>Tooltip</Button>
          </TooltipAction>
          <TooltipContent>
            <TooltipArrow />
            <p className="text-body-5 font-medium text-white">Tooltip - Title here</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}

const TooltipWithArrowCode = {
  'TooltipComponent.tsx': `
import { Button, Tooltip, TooltipAction, TooltipArrow, TooltipContent, TooltipProvider } from 'keep-react'

export const TooltipComponent = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipAction asChild>
          <Button>Tooltip</Button>
        </TooltipAction>
        <TooltipContent>
          <TooltipArrow />
          <p className="text-body-5 font-medium text-white">Tooltip - Title here</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
`,
}

export { TooltipWithArrow, TooltipWithArrowCode }
