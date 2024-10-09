import {
  Accordion,
  AccordionAction,
  AccordionContent,
  AccordionIcon,
  AccordionItem,
  AccordionTitle,
} from '../../../../src'

const DisabledAccordion = () => {
  return (
    <Accordion type="single" collapsible disabled>
      <AccordionItem value="item-1">
        <AccordionAction>
          <AccordionTitle className="first-letter:text-primary-500">Q. What is keep Design?</AccordionTitle>
          <AccordionIcon />
        </AccordionAction>
        <AccordionContent>
          keep Design is an open-source library of interactive components built on top of Tailwind CSS including
          buttons, dropdowns, modals, navbar, and more.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

const DisabledAccordionCode = {
  'AccordionComponent.tsx': `
import {
  Accordion,
  AccordionAction,
  AccordionContent,
  AccordionIcon,
  AccordionItem,
  AccordionTitle,
} from 'keep-react'

export const AccordionComponent = () => {
  return (
    <Accordion type="single" collapsible disabled>
      <AccordionItem value="item-1">
        <AccordionAction>
          <AccordionTitle className="first-letter:text-primary-500">Q. What is keep Design?</AccordionTitle>
          <AccordionIcon />
        </AccordionAction>
        <AccordionContent>
          keep Design is an open-source library of interactive components built on top of Tailwind CSS including
          buttons, dropdowns, modals, navbar, and more.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
`,
}

export { DisabledAccordion, DisabledAccordionCode }
