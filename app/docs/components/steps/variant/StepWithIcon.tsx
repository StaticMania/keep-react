'use client'
import { Check } from 'phosphor-react'
import { Steps, StepsContent, StepsDescription, StepsItem, StepsPoint, StepsTitle } from '../../../../src'

const StepWithIcon = () => {
  const data = [
    {
      id: 1,
      title: 'Personal Information',
      description: 'Enter your personal details to create an account.',
      isComplete: true,
    },
    {
      id: 2,
      title: 'Verify Email',
      description: 'Check email for a verification link to confirm your account.',
      isComplete: false,
    },
    {
      id: 3,
      title: 'Setup Profile',
      description: 'Complete your profile by adding a profile picture and bio.',
      isComplete: false,
    },
  ]
  return (
    <div className="space-y-6 p-6">
      <Steps>
        {data.map((step) => (
          <StepsItem key={step.id}>
            <StepsPoint
              className="data-[completed=true]:bg-primary-500 data-[completed=true]:text-white"
              isComplete={step.isComplete}>
              <Check />
            </StepsPoint>
            <StepsContent>
              <StepsTitle>{step.title}</StepsTitle>
              <StepsDescription>{step.description}</StepsDescription>
            </StepsContent>
          </StepsItem>
        ))}
      </Steps>
    </div>
  )
}

const StepWithIconCode = {
  'StepComponent.tsx': `'use client'
import { Check } from 'phosphor-react'
import { Steps, StepsContent, StepsDescription, StepsItem, StepsPoint, StepsTitle } from 'keep-react'

const StepWithIcon = () => {
  const data = [
    {
      id: 1,
      title: 'Personal Information',
      description: 'Enter your personal details to create an account.',
      isComplete: true,
    },
    {
      id: 2,
      title: 'Verify Email',
      description: 'Check email for a verification link to confirm your account.',
      isComplete: false,
    },
    {
      id: 3,
      title: 'Setup Profile',
      description: 'Complete your profile by adding a profile picture and bio.',
      isComplete: false,
    },
  ]
  return (
    <Steps>
      {data.map((step) => (
        <StepsItem key={step.id}>
          <StepsPoint
            className="data-[completed=true]:bg-primary-500 data-[completed=true]:text-white"
            isComplete={step.isComplete}>
            <Check />
          </StepsPoint>
          <StepsContent>
            <StepsTitle>{step.title}</StepsTitle>
            <StepsDescription>{step.description}</StepsDescription>
          </StepsContent>
        </StepsItem>
      ))}
    </Steps>
  )
}
`,
}

export { StepWithIcon, StepWithIconCode }
