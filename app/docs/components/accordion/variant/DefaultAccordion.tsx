"use client";
import { Accordion } from "~/src";

const DefaultAccordion = () => {
  return (
    <Accordion showIcon>
      <Accordion.Panel>
        <Accordion.Title>
          What is the of the Keep Design System?
        </Accordion.Title>
        <Accordion.Content>
          <p>
            The Keep Design System is a collection of UI components, styles, and
            guidelines that ensure consistency and a unified user experience
            across our products. It simplifies the design and development
            process by providing ready-to-use components that can be easily
            customized and integrated into various applications.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

const DefaultAccordionCode = `

"use client";
import { Accordion } from "keep-react";
const DefaultAccordion = () => {
  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>Is there a free version available?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <p>
            Check out this guide to learn how to and start developing websites
            even faster with components on top of Tailwind CSS.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default DefaultAccordion;
`;

export { DefaultAccordion, DefaultAccordionCode };
