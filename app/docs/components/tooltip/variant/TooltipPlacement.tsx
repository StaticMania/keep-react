import { Button, Tooltip, TooltipAction, TooltipContent, TooltipProvider } from '../../../../src'

const TooltipPlacement = () => {
  return (
    <div className="flex h-44 items-center justify-center gap-5">
      <TooltipProvider>
        <Tooltip>
          <TooltipAction asChild>
            <Button>Bottom</Button>
          </TooltipAction>
          <TooltipContent side="bottom">
            <p className="text-body-5 font-medium text-white">Tooltip - Title here</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipAction asChild>
            <Button>Top</Button>
          </TooltipAction>
          <TooltipContent side="top">
            <p className="text-body-5 font-medium text-white">Tooltip - Title here</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipAction asChild>
            <Button>Left</Button>
          </TooltipAction>
          <TooltipContent side="left">
            <p className="text-body-5 font-medium text-white">Tooltip - Title here</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipAction asChild>
            <Button>Right</Button>
          </TooltipAction>
          <TooltipContent side="right">
            <p className="text-body-5 font-medium text-white">Tooltip - Title here</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}

const TooltipPlacementCode = {
  'TooltipComponent.tsx': `
import { Button, Tooltip, TooltipAction, TooltipContent, TooltipProvider }  from 'keep-react'

export const TooltipComponent = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipAction asChild>
          <Button>Tooltip</Button>
        </TooltipAction>
        <TooltipContent side="top">
          <p className="text-body-5 font-medium text-white">Tooltip - Title here</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
`,
}

export { TooltipPlacement, TooltipPlacementCode }
