import { Accordion, AccordionContainer, AccordionContent, AccordionPanel, AccordionTitle } from '../../../../src'

const DisabledAccordion = () => {
  return (
    <Accordion disabled={true}>
      <AccordionPanel>
        <AccordionContainer>
          <AccordionTitle>Q. What is keep Design?</AccordionTitle>
        </AccordionContainer>
        <AccordionContent>
          keep Design is an open-source library of interactive components built on top of Tailwind CSS including
          buttons, dropdowns, modals, navbar, and more.
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  )
}

const DisabledAccordionCode = `
import { Accordion, AccordionContainer, AccordionContent, AccordionPanel, AccordionTitle } from 'keep-react'

export const AccordionComponent = () => {
  return (
    <Accordion disabled={true}>
      <AccordionPanel>
        <AccordionContainer>
          <AccordionTitle>What is keep Design?</AccordionTitle>
        </AccordionContainer>
        <AccordionContent>
          keep Design is an open-source library of interactive components built on top of Tailwind CSS including
          buttons, dropdowns, modals, navbar, and more.
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  )
}
`

export { DisabledAccordion, DisabledAccordionCode }
