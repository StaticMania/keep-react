"use client";
import { Step } from "~/src";

const DashedBorderStep = () => {
  return (
    <Step borderType="dashed" withBg={true} color="info">
      <Step.Item completed>
        <Step.Point completed>1</Step.Point>
        <Step.Title>Step Title 1</Step.Title>
        <Step.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Step.Content>
      </Step.Item>
      <Step.Item completed>
        <Step.Point completed>2</Step.Point>
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

const DashedBorderStepCode = `
"use client";
import { Step } from "keep-react";

const DashedBorderStep = () => {
  return (
    <Step withBorder={true} borderType="dashed" withBg={true}>
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

export default DashedBorderStep;

`;

export { DashedBorderStep, DashedBorderStepCode };
