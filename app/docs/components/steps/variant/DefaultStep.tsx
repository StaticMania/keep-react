import {
  StepContent,
  StepDescription,
  StepItem,
  StepPoint,
  StepPointLine,
  StepPointText,
  StepTitle,
  Steps,
} from '../../../../src'

const DefaultStep = () => {
  return (
    <div className="p-6">
      <Steps>
        <StepItem active>
          <StepPoint>
            <StepPointText />
            <StepPointLine />
          </StepPoint>
          <StepContent>
            <StepTitle>Visit Keep Design Site</StepTitle>
            <StepDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, accusamus?
            </StepDescription>
          </StepContent>
        </StepItem>
        <StepItem>
          <StepPoint>
            <StepPointText />
            <StepPointLine />
          </StepPoint>
          <StepContent>
            <StepTitle>Visit Keep Design Site</StepTitle>
            <StepDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, accusamus?
            </StepDescription>
          </StepContent>
        </StepItem>
        <StepItem>
          <StepPoint>
            <StepPointText />
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
    </div>
  )
}

const DefaultStepCode = `
import {
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
  return (
    <Steps>
      <StepItem active>
        <StepPoint>
          <StepPointText />
          <StepPointLine />
        </StepPoint>
        <StepContent>
          <StepTitle>Visit Keep Design Site</StepTitle>
          <StepDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, accusamus?</StepDescription>
        </StepContent>
      </StepItem>
      <StepItem>
        <StepPoint>
          <StepPointText />
          <StepPointLine />
        </StepPoint>
        <StepContent>
          <StepTitle>Visit Keep Design Site</StepTitle>
          <StepDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, accusamus?</StepDescription>
        </StepContent>
      </StepItem>
      <StepItem>
        <StepPoint>
          <StepPointText />
          <StepPointLine />
        </StepPoint>
        <StepContent>
          <StepTitle>Visit Keep Design Site</StepTitle>
          <StepDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, accusamus?</StepDescription>
        </StepContent>
      </StepItem>
    </Steps>
  )
}
`
export { DefaultStep, DefaultStepCode }
