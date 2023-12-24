'use client'
import { Button, Steps } from '../../../../src'
import { useState } from 'react'
import { Club, DownloadSimple, Globe } from 'phosphor-react'

const InterActiveStep = () => {
  const [step, setStep] = useState(0)
  return (
    <div className="my-20">
      <Steps stepType="icon">
        <Steps.Item
          active={step === 0}
          completed={step >= 1}
          icon={<Globe size={20} />}
          title="Visit Keep Design Site"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <Steps.Item
          completed={step >= 2}
          active={step === 1}
          icon={<DownloadSimple size={20} />}
          title="Visit Keep Design Site"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <Steps.Item
          completed={step === 3}
          active={step === 2}
          icon={<Club size={20} />}
          title="Visit Keep Design Site"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
      </Steps>

      <div className="my-5 h-44 rounded-md  border-2 border-dashed border-metal-100"></div>
      <div className="mt-6 flex items-center justify-end">
        <Button size="sm" type="primary" disabled={step === 3} onClick={() => setStep((prev) => prev + 1)}>
          {step === 3 ? 'Completed' : 'Next Step'}
        </Button>
      </div>
    </div>
  )
}

const InterActiveStepCode = `
"use client";
import { useState } from "react";
import { Button, Steps } from "keep-react";
import { Club, DownloadSimple, Globe } from "phosphor-react";

export const StepComponent = () => {
  const [step, setStep] = useState(0);
  return (
    <>
      <Steps stepType="icon">
        <Steps.Item
          active={step === 0}
          completed={step >= 1}
          icon={<Globe size={20} />}
          title="Visit Keep Design Site"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <Steps.Item
          completed={step >= 2}
          active={step === 1}
          icon={<DownloadSimple size={20} />}
          title="Visit Keep Design Site"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <Steps.Item
          completed={step === 3}
          active={step === 2}
          icon={<Club size={20} />}
          title="Visit Keep Design Site"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
      </Steps>
      <div className="flex items-center justify-center mt-6">
        <Button
          size="sm"
          type="primary"
          disabled={step === 3}
          onClick={() => setStep((prev) => prev + 1)}
        >
         {step === 3 ? "Completed" : "Next Step"}
        </Button>
      </div>
    </>
  );
}
`

export { InterActiveStep, InterActiveStepCode }
