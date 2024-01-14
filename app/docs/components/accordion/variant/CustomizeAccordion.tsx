'use client'
import { Accordion } from '../../../../src'

const CustomizeAccordion = () => {
  return (
    <Accordion>
      <Accordion.Panel className="bg-metal-100">
        <Accordion.Container>
          <Accordion.Title className="text-metal-900">Q. What is the of the Keep React?</Accordion.Title>
          <Accordion.Icon />
        </Accordion.Container>
        <Accordion.Content className="text-metal-500">
          The Keep React is a collection of UI components, styles, and guidelines that ensure consistency and a unified
          user experience across our products. It simplifies the design and development process by providing
          ready-to-use components that can be easily customized and integrated into various applications.
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  )
}

const CustomizeAccordionCode = `
'use client'
import { Accordion } from 'keep-react'

export const AccordionComponent = () => {
  return (
    <Accordion>
      <Accordion.Panel className="bg-metal-100">
        <Accordion.Container>
          <Accordion.Title className="text-metal-900">Q. What is the of the Keep React?</Accordion.Title>
          <Accordion.Icon />
        </Accordion.Container>
        <Accordion.Content className="text-metal-500">
          The Keep React is a collection of UI components, styles, and guidelines that ensure consistency and a unified
          user experience across our products. It simplifies the design and development process by providing
          ready-to-use components that can be easily customized and integrated into various applications.
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  )
}
`

export { CustomizeAccordion, CustomizeAccordionCode }
