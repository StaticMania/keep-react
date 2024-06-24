'use client'
import { Club, DownloadSimple, Globe } from 'phosphor-react'
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

const StepWithIcon = () => {
  return (
    <div className="p-6">
      <Steps>
        <StepItem active>
          <StepPoint>
            <StepPointText>
              <Globe size={20} />
            </StepPointText>
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
            <StepPointText>
              <DownloadSimple size={20} />
            </StepPointText>
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
            <StepPointText>
              <Club size={20} />
            </StepPointText>
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

const StepWithIconCode = `
'use client'
import { Club, DownloadSimple, Globe } from 'phosphor-react'
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
          <StepPointText>
            <Globe size={20} />
          </StepPointText>
          <StepPointLine />
        </StepPoint>
        <StepContent>
          <StepTitle>Visit Keep Design Site</StepTitle>
          <StepDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, accusamus?</StepDescription>
        </StepContent>
      </StepItem>
      <StepItem>
        <StepPoint>
          <StepPointText>
            <DownloadSimple size={20} />
          </StepPointText>
          <StepPointLine />
        </StepPoint>
        <StepContent>
          <StepTitle>Visit Keep Design Site</StepTitle>
          <StepDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, accusamus?</StepDescription>
        </StepContent>
      </StepItem>
      <StepItem>
        <StepPoint>
          <StepPointText>
            <Club size={20} />
          </StepPointText>
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

export { StepWithIcon, StepWithIconCode }
