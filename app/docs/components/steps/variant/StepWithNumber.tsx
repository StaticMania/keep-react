"use client";
import { Steps } from "~/src";

const StepWithNumber = () => {
  return (
    <Steps stepType="number">
      <Steps.Item
        numberOfSteps={1}
        completed
        title="Visit Keep Design Site"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <Steps.Item
        numberOfSteps={2}
        active
        title="Visit Keep Design Site"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <Steps.Item
        numberOfSteps={3}
        title="Visit Keep Design Site"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
    </Steps>
  );
};

const StepWithNumberCode = `
"use client";
import { Steps } from "keep-react";

const StepComponent = () => {
  return (
    <Steps stepType="number">
      <Steps.Item
        numberOfSteps={1}
        completed
        title="Visit Keep Design Site"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <Steps.Item
        numberOfSteps={2}
        active
        title="Visit Keep Design Site"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <Steps.Item
        numberOfSteps={3}
        title="Visit Keep Design Site"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
    </Steps>
  );
};

export default StepComponent;
`;

export { StepWithNumber, StepWithNumberCode };
