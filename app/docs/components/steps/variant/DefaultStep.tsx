'use client'
import { Steps } from '../../../../src'

const DefaultStep = () => {
  return (
    <Steps>
      <Steps.Item
        completed
        title="Visit Keep Design Site"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <Steps.Item
        active
        title="Visit Keep Design Site"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <Steps.Item
        title="Visit Keep Design Site"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
    </Steps>
  )
}

const DefaultStepCode = `
"use client";
import { Steps } from "keep-react";

export const StepComponent = () => {
  return (
    <Steps>
      <Steps.Item
        completed
        title="Visit Keep Design Site"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <Steps.Item
        active
        title="Visit Keep Design Site"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <Steps.Item
        title="Visit Keep Design Site"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
    </Steps>
  );
}
`
export { DefaultStep, DefaultStepCode }
