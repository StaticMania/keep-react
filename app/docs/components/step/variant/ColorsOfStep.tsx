"use client";
import { Step } from "~/src";
import { DownloadSimple } from "phosphor-react";

const ColorsOfStep = () => {
  return (
    <Step color="error">
      <Step.Item completed={true}>
        <Step.Point completed={true}>1</Step.Point>
        <Step.Title>Step Title 1</Step.Title>
        <Step.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Step.Content>
      </Step.Item>
      <Step.Item completed={true}>
        <Step.Point completed={true}>2</Step.Point>
        <Step.Title>Step Title 2</Step.Title>
        <Step.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Step.Content>
      </Step.Item>
      <Step.Item active={true}>
        <Step.Point
          completed={true}
          icon={<DownloadSimple size={20} color="#fff" />}
        />
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

const ColorsOfStepCode = `
"use client";
import { Step } from "keep-react";
import { DownloadSimple } from "phosphor-react";

const ColorsOfStep = () => {
  return (
    <Step>
      <Step.Item completed={true}>
        <Step.Point completed={true}>1</Step.Point>
        <Step.Title>Step Title 1</Step.Title>
        <Step.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Step.Content>
      </Step.Item>
      <Step.Item completed={true}>
        <Step.Point completed={true}>2</Step.Point>
        <Step.Title>Step Title 2</Step.Title>
        <Step.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Step.Content>
      </Step.Item>
      <Step.Item active={true}>
        <Step.Point
          completed={true}
          icon={<DownloadSimple size={20} color="#fff" />}
        />
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

export default ColorsOfStep;
`;

export { ColorsOfStep, ColorsOfStepCode };
