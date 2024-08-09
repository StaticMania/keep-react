'use client'
import { useState } from 'react'
import { Button, Skeleton, SkeletonLine, StepLine, StepPoint, Steps } from '../../../../src'

const DefaultStep = () => {
  const [active, setActive] = useState(1)
  return (
    <div className="space-y-6 p-6">
      <Steps>
        <StepPoint completed={active >= 1}>
          <p className="flex size-5 items-center justify-center rounded-full border text-body-5 font-medium">1</p>
          <p className="text-body-4 font-medium">general info</p>
        </StepPoint>
        <StepLine completed={active >= 1} />
        <StepPoint completed={active >= 2}>
          <p className="flex size-5 items-center justify-center rounded-full border text-body-5 font-medium">2</p>
          <p className="text-body-4 font-medium">payment details</p>
        </StepPoint>
        <StepLine completed={active >= 2} />
        <StepPoint completed={active >= 3}>
          <p className="flex size-5 items-center justify-center rounded-full border text-body-5 font-medium">3</p>
          <p className="text-body-4 font-medium">benefits & extras</p>
        </StepPoint>
      </Steps>
      <Skeleton animation={false} className="w-full space-y-2.5">
        <SkeletonLine className="h-4 w-11/12" />
        <SkeletonLine className="h-4 w-9/12" />
        <SkeletonLine className="h-4 w-10/12" />
        <SkeletonLine className="h-4 w-7/12" />
      </Skeleton>
      <div className="flex items-center justify-between">
        <Button disabled={active === 0} onClick={() => setActive(active - 1)}>
          Previous
        </Button>
        <Button disabled={active === 3} onClick={() => setActive(active + 1)}>
          Next Step
        </Button>
      </div>
    </div>
  )
}

const DefaultStepCode = {
  'StepComponent.tsx': `'use client'
import { useState } from 'react'
import { Button, Skeleton, SkeletonLine, StepLine, StepPoint, Steps } from 'keep-react'

export const StepComponent = () => {
  const [active, setActive] = useState(1)
  return (
    <div className="space-y-6">
      <Steps>
        <StepPoint completed={active >= 1}>
          <p className="flex size-5 items-center justify-center rounded-full border text-body-5 font-medium">1</p>
          <p className="text-body-4 font-medium">general info</p>
        </StepPoint>
        <StepLine completed={active >= 1} />
        <StepPoint completed={active >= 2}>
          <p className="flex size-5 items-center justify-center rounded-full border text-body-5 font-medium">2</p>
          <p className="text-body-4 font-medium">payment details</p>
        </StepPoint>
        <StepLine completed={active >= 2} />
        <StepPoint completed={active >= 3}>
          <p className="flex size-5 items-center justify-center rounded-full border text-body-5 font-medium">3</p>
          <p className="text-body-4 font-medium">benefits & extras</p>
        </StepPoint>
      </Steps>
      <Skeleton animation={false} className="w-full space-y-2.5">
        <SkeletonLine className="h-4 w-11/12" />
        <SkeletonLine className="h-4 w-9/12" />
        <SkeletonLine className="h-4 w-10/12" />
        <SkeletonLine className="h-4 w-7/12" />
      </Skeleton>
      <div className="flex items-center justify-between">
        <Button disabled={active === 0} onClick={() => setActive(active - 1)}>
          Previous
        </Button>
        <Button disabled={active === 3} onClick={() => setActive(active + 1)}>
          Next Step
        </Button>
      </div>
    </div>
  )
}
`,
}
export { DefaultStep, DefaultStepCode }
