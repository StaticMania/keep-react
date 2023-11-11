'use client'
import { Steps } from '~/src'
import { Club, DownloadSimple, Globe } from 'phosphor-react'

const StepWithDashedBorder = () => {
  return (
    <Steps stepType="icon" borderType="dashed">
      <Steps.Item
        completed
        icon={<Globe size={20} />}
        title="Visit Keep Design Site"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <Steps.Item
        active
        icon={<DownloadSimple size={20} />}
        title="Visit Keep Design Site"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <Steps.Item
        icon={<Club size={20} />}
        title="Visit Keep Design Site"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
    </Steps>
  )
}

const StepWithDashedBorderCode = `
"use client";
import { Step } from "keep-react";
import { Club, DownloadSimple, Globe } from "phosphor-react";

export const StepComponent = () => {
  return (
    <Steps stepType="icon" borderType="dashed">
      <Steps.Item
        completed
        icon={<Globe size={20} />}
        title="Visit Keep Design Site"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <Steps.Item
        active
        icon={<DownloadSimple size={20} />}
        title="Visit Keep Design Site"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <Steps.Item
        icon={<Club size={20} />}
        title="Visit Keep Design Site"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
    </Steps>
  );
}
`

export { StepWithDashedBorder, StepWithDashedBorderCode }
