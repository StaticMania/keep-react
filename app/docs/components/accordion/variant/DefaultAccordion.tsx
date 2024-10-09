import {
  Accordion,
  AccordionAction,
  AccordionContent,
  AccordionIcon,
  AccordionItem,
  AccordionTitle,
} from '../../../../src'

const DefaultAccordion = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="accordion">
        <AccordionAction>
          <AccordionTitle className="first-letter:text-primary-500">
            Q. What is the purpose of the Keep React?
          </AccordionTitle>
          <AccordionIcon />
        </AccordionAction>
        <AccordionContent>
          The Keep React is a collection of UI components, styles, and guidelines that ensure consistency and a unified
          user experience across our products. It simplifies the design and development process by providing
          ready-to-use components that can be easily customized and integrated into various applications.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

const DefaultAccordionCode = {
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
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionAction>
          <AccordionTitle className="first-letter:text-primary-500">
            Q. What is the purpose of the Keep React?
          </AccordionTitle>
          <AccordionIcon />
        </AccordionAction>
        <AccordionContent>
          The Keep React is a collection of UI components, styles, and guidelines that ensure consistency and a unified
          user experience across our products. It simplifies the design and development process by providing
          ready-to-use components that can be easily customized and integrated into various applications.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
`,
}

export { DefaultAccordion, DefaultAccordionCode }
