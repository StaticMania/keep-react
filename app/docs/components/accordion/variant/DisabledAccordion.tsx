'use client'
import { Accordion } from '../../../../src'

const DisabledAccordion = () => {
  return (
    <Accordion disabled={true}>
      <Accordion.Panel>
        <Accordion.Container>
          <Accordion.Title>What is keep Design?</Accordion.Title>
        </Accordion.Container>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            keep Design is an open-source library of interactive components built on top of Tailwind CSS including
            buttons, dropdowns, modals, navbar, and more.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to and start developing websites even faster with components on top of
            Tailwind CSS.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  )
}

const DisabledAccordionCode = `
'use client'
import { Accordion } from 'keep-react'

export const AccordionComponent = () => {
  return (
    <Accordion disabled={true}>
      <Accordion.Panel>
        <Accordion.Container>
          <Accordion.Title>What is keep Design?</Accordion.Title>
        </Accordion.Container>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            keep Design is an open-source library of interactive components built on top of Tailwind CSS including
            buttons, dropdowns, modals, navbar, and more.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to and start developing websites even faster with components on top of
            Tailwind CSS.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  )
}
`

export { DisabledAccordion, DisabledAccordionCode }
