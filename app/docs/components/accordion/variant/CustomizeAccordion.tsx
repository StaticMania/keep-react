'use client'
import { Plus } from 'phosphor-react'
import { Accordion } from '~/src'

const CustomizeAccordion = () => {
  return (
    <Accordion>
      <Accordion.Panel className="bg-metal-900">
        <Accordion.Container className="bg-metal-900 text-white group-hover:bg-metal-800">
          <Accordion.Title className="text-white">What is the of the Keep React?</Accordion.Title>
          <Accordion.Icon>
            <Plus size={24} color="#fff" />
          </Accordion.Icon>
        </Accordion.Container>
        <Accordion.Content className="text-white">
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
import { Plus } from 'phosphor-react'
import { Accordion } from 'keep-react'

export const AccordionComponent = () => {
  return (
    <Accordion>
      <Accordion.Panel className="bg-metal-900">
        <Accordion.Container className="bg-metal-900 text-white group-hover:bg-metal-800">
          <Accordion.Title className="text-white">What is the of the Keep React?</Accordion.Title>
          <Accordion.Icon>
            <Plus size={24} color="#fff" />
          </Accordion.Icon>
        </Accordion.Container>
        <Accordion.Content className="text-white">
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
