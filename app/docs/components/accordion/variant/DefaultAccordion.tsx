import {
  Accordion,
  AccordionContainer,
  AccordionContent,
  AccordionIcon,
  AccordionPanel,
  AccordionTitle,
} from '../../../../src'

const DefaultAccordion = () => {
  return (
    <Accordion>
      <AccordionPanel>
        <AccordionContainer>
          <AccordionTitle>Q. What is the purpose of the Keep React?</AccordionTitle>
          <AccordionIcon />
        </AccordionContainer>
        <AccordionContent>
          The Keep React is a collection of UI components, styles, and guidelines that ensure consistency and a unified
          user experience across our products. It simplifies the design and development process by providing
          ready-to-use components that can be easily customized and integrated into various applications.
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  )
}

const DefaultAccordionCode = {
  'AccordionComponent.tsx': `
import {
  Accordion,
  AccordionContainer,
  AccordionContent,
  AccordionIcon,
  AccordionPanel,
  AccordionTitle,
} from 'keep-react'

export const AccordionComponent = () => {
  return (
    <Accordion>
      <AccordionPanel>
        <AccordionContainer>
          <AccordionTitle>Q. What is the purpose of the Keep React?</AccordionTitle>
          <AccordionIcon />
        </AccordionContainer>
        <AccordionContent>
          The Keep React is a collection of UI components, styles, and guidelines that ensure consistency and a unified
          user experience across our products. It simplifies the design and development process by providing
          ready-to-use components that can be easily customized and integrated into various applications.
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  )
}
`,
}

export { DefaultAccordion, DefaultAccordionCode }
