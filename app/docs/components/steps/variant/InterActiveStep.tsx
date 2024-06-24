'use client'
import { useState } from 'react'
import {
  Button,
  StepContent,
  StepDescription,
  StepItem,
  StepPoint,
  StepPointLine,
  StepPointText,
  StepTitle,
  Steps,
} from '../../../../src'

const InterActiveStep = () => {
  const [step, setStep] = useState(0)
  return (
    <div className="my-20 p-6">
      <Steps>
        <StepItem active={step >= 1}>
          <StepPoint>
            <StepPointText>1</StepPointText>
            <StepPointLine />
          </StepPoint>
          <StepContent>
            <StepTitle>Visit Keep Design Site</StepTitle>
            <StepDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, accusamus?
            </StepDescription>
          </StepContent>
        </StepItem>
        <StepItem active={step >= 2}>
          <StepPoint>
            <StepPointText>2</StepPointText>
            <StepPointLine />
          </StepPoint>
          <StepContent>
            <StepTitle>Visit Keep Design Site</StepTitle>
            <StepDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, accusamus?
            </StepDescription>
          </StepContent>
        </StepItem>
        <StepItem active={step >= 3}>
          <StepPoint>
            <StepPointText>3</StepPointText>
            <StepPointLine />
          </StepPoint>
          <StepContent>
            <StepTitle>Visit Keep Design Site</StepTitle>
            <StepDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, accusamus?
            </StepDescription>
          </StepContent>
        </StepItem>
      </Steps>
      <div className="my-5 h-44 rounded-md  border-2 border-dashed border-metal-100"></div>
      <div className="mt-6 flex items-center justify-end">
        <Button
          size="sm"
          onClick={() => {
            setStep((prev) => prev + 1)
            if (step >= 3) {
              setStep(0)
            }
          }}>
          {step === 3 ? 'Reset' : 'Next Step'}
        </Button>
      </div>
    </div>
  )
}

const InterActiveStepCode = `
'use client'
import { useState } from 'react'
import {
  Button,
  StepContent,
  StepDescription,
  StepItem,
  StepPoint,
  StepPointLine,
  StepPointText,
  StepTitle,
  Steps,
} from 'keep-react'

export const StepComponent = () => {
  const [step, setStep] = useState(0)
  return (
    <>
      <Steps>
        <StepItem active={step >= 1}>
          <StepPoint>
            <StepPointText>1</StepPointText>
            <StepPointLine />
          </StepPoint>
          <StepContent>
            <StepTitle>Visit Keep Design Site</StepTitle>
            <StepDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, accusamus?
            </StepDescription>
          </StepContent>
        </StepItem>
        <StepItem active={step >= 2}>
          <StepPoint>
            <StepPointText>2</StepPointText>
            <StepPointLine />
          </StepPoint>
          <StepContent>
            <StepTitle>Visit Keep Design Site</StepTitle>
            <StepDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, accusamus?
            </StepDescription>
          </StepContent>
        </StepItem>
        <StepItem active={step >= 3}>
          <StepPoint>
            <StepPointText>3</StepPointText>
            <StepPointLine />
          </StepPoint>
          <StepContent>
            <StepTitle>Visit Keep Design Site</StepTitle>
            <StepDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, accusamus?
            </StepDescription>
          </StepContent>
        </StepItem>
      </Steps>
      <div className="my-5 h-44 rounded-md  border-2 border-dashed border-metal-100"></div>
      <div className="mt-6 flex items-center justify-end">
        <Button
          size="sm"
          onClick={() => {
            setStep((prev) => prev + 1)
            if (step >= 3) {
              setStep(0)
            }
          }}>
          {step === 3 ? 'Reset' : 'Next Step'}
        </Button>
      </div>
    </>
  )
}
`

export { InterActiveStep, InterActiveStepCode }
