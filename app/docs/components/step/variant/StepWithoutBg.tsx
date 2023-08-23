"use client";
import { Step } from "@/src/components/Step";

const StepWithoutBg = () => {
  return (
    <Step withRing={true} withBg={false}>
      <Step.Item>
        <Step.Point>1</Step.Point>
        <Step.Title>Step Title 1</Step.Title>
        <Step.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Step.Content>
      </Step.Item>
      <Step.Item>
        <Step.Point>2</Step.Point>
        <Step.Title>Step Title 2</Step.Title>
        <Step.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Step.Content>
      </Step.Item>
      <Step.Item>
        <Step.Point>3</Step.Point>
        <Step.Title>Step Title 3</Step.Title>
        <Step.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Step.Content>
      </Step.Item>
      <Step.Item>
        <Step.Point>4</Step.Point>
        <Step.Title>Step Title 4</Step.Title>
        <Step.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Step.Content>
      </Step.Item>
    </Step>
  );
};

const StepWithoutBgCode = `
"use client";
import { Step } from "keep-design";
const StepWithoutBg = () => {
  return (
    <Step withRing={true} withBg={false}>
      <Step.Item>
        <Step.Point>1</Step.Point>
        <Step.Title>Step Title 1</Step.Title>
        <Step.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Step.Content>
      </Step.Item>
      <Step.Item>
        <Step.Point>2</Step.Point>
        <Step.Title>Step Title 2</Step.Title>
        <Step.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Step.Content>
      </Step.Item>
      <Step.Item>
        <Step.Point>3</Step.Point>
        <Step.Title>Step Title 3</Step.Title>
        <Step.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Step.Content>
      </Step.Item>
      <Step.Item>
        <Step.Point>4</Step.Point>
        <Step.Title>Step Title 4</Step.Title>
        <Step.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Step.Content>
      </Step.Item>
    </Step>
  );
};

export default StepWithoutBg;

`;

export { StepWithoutBg, StepWithoutBgCode };
