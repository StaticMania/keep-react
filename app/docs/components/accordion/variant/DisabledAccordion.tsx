'use client'
import { Accordion } from '../../../../src'

const DisabledAccordion = () => {
  return (
    <Accordion disabled={true}>
      <Accordion.Panel>
        <Accordion.Container>
          <Accordion.Title>Q. What is keep Design?</Accordion.Title>
        </Accordion.Container>
        <Accordion.Content>
          keep Design is an open-source library of interactive components built on top of Tailwind CSS including
          buttons, dropdowns, modals, navbar, and more.
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
          keep Design is an open-source library of interactive components built on top of Tailwind CSS including
          buttons, dropdowns, modals, navbar, and more.
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  )
}
`

export { DisabledAccordion, DisabledAccordionCode }
