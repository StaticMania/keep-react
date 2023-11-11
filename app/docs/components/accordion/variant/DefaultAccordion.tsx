'use client'
import { Accordion } from '~/src'

const DefaultAccordion = () => {
  return (
    <Accordion showIcon={true}>
      <Accordion.Panel>
        <Accordion.Title>What is the of the Keep React?</Accordion.Title>
        <Accordion.Content>
          <p>
            The Keep React is a collection of UI components, styles, and guidelines that ensure consistency and a
            unified user experience across our products. It simplifies the design and development process by providing
            ready-to-use components that can be easily customized and integrated into various applications.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  )
}

const DefaultAccordionCode = `
"use client";
import { Accordion } from "keep-react";

export const AccordionComponent = () => {
  return (
    <Accordion showIcon={true}>
      <Accordion.Panel>
        <Accordion.Title>What is the of the Keep React?</Accordion.Title>
        <Accordion.Content>
          <p>
            The Keep React is a collection of UI components, styles, and
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
`

export { DefaultAccordion, DefaultAccordionCode }
