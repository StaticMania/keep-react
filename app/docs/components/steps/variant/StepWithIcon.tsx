'use client'
import { Gear, Hourglass, Package, Recycle } from 'phosphor-react'
import { useState } from 'react'
import { Button, Skeleton, SkeletonLine, StepLine, StepPoint, Steps } from '../../../../src'

const StepWithIcon = () => {
  const [active, setActive] = useState(1)
  return (
    <div className="space-y-6 p-6">
      <Steps>
        <StepPoint variant="icon" completed={active >= 1}>
          <Hourglass size={20} />
        </StepPoint>
        <StepLine completed={active >= 2} />
        <StepPoint variant="icon" completed={active >= 2}>
          <Recycle size={20} />
        </StepPoint>
        <StepLine completed={active >= 3} />
        <StepPoint variant="icon" completed={active >= 3}>
          <Gear size={20} />
        </StepPoint>
        <StepLine completed={active >= 4} />
        <StepPoint variant="icon" completed={active >= 4}>
          <Package size={20} />
        </StepPoint>
      </Steps>
      <Skeleton animation={false} className="w-full space-y-2.5">
        <SkeletonLine className="h-4 w-11/12" />
        <SkeletonLine className="h-4 w-9/12" />
        <SkeletonLine className="h-4 w-10/12" />
        <SkeletonLine className="h-4 w-7/12" />
      </Skeleton>
      <div className="flex items-center justify-between">
        <Button disabled={active === 1} onClick={() => setActive(active - 1)}>
          Previous
        </Button>
        <Button disabled={active === 4} onClick={() => setActive(active + 1)}>
          Next Step
        </Button>
      </div>
    </div>
  )
}

const StepWithIconCode = {
  'StepComponent.tsx': `'use client'
  import { useState } from 'react'
import { Gear, Hourglass, Package, Recycle } from 'phosphor-react'
import { Button, Skeleton, SkeletonLine, StepLine, StepPoint, Steps } from 'keep-react'

export const StepComponent = () => {
  const [active, setActive] = useState(1)
  return (
    <div className="space-y-6">
      <Steps>
        <StepPoint variant="icon" completed={active >= 1}>
          <Hourglass size={20} />
        </StepPoint>
        <StepLine completed={active >= 2} />
        <StepPoint variant="icon" completed={active >= 2}>
          <Recycle size={20} />
        </StepPoint>
        <StepLine completed={active >= 3} />
        <StepPoint variant="icon" completed={active >= 3}>
          <Gear size={20} />
        </StepPoint>
        <StepLine completed={active >= 4} />
        <StepPoint variant="icon" completed={active >= 4}>
          <Package size={20} />
        </StepPoint>
      </Steps>
      <Skeleton animation={false} className="w-full space-y-2.5">
        <SkeletonLine className="h-4 w-11/12" />
        <SkeletonLine className="h-4 w-9/12" />
        <SkeletonLine className="h-4 w-10/12" />
        <SkeletonLine className="h-4 w-7/12" />
      </Skeleton>
      <div className="flex items-center justify-between">
        <Button disabled={active === 1} onClick={() => setActive(active - 1)}>
          Previous
        </Button>
        <Button disabled={active === 4} onClick={() => setActive(active + 1)}>
          Next Step
        </Button>
      </div>
    </div>
  )
}`,
}

export { StepWithIcon, StepWithIconCode }
