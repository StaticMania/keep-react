import { Steps, StepsContent, StepsDescription, StepsItem, StepsPoint, StepsTitle } from '../../../../src'

const StepsWithNumber = () => {
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
            <StepsPoint isComplete={step.isComplete}>{step.id}</StepsPoint>
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

const StepsWithNumberCode = {
  'StepComponent.tsx': `
import { Steps, StepsContent, StepsDescription, StepsItem, StepsPoint, StepsTitle } from 'keep-react'

export const StepsComponent = () => {
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
          <StepsPoint isComplete={step.isComplete}>{step.id}</StepsPoint>
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
export { StepsWithNumber, StepsWithNumberCode }
