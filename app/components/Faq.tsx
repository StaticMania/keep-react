'use client'
import { Accordion, AccordionContainer, AccordionContent, AccordionIcon, AccordionPanel, AccordionTitle } from '../src'

const Faq = () => {
  const faqs = [
    {
      id: 1,
      question: 'Q. What is Keep React?',
      answer:
        'Keep React is an open-source component library built on React and Tailwind CSS. It offers a collection of pre-designed UI components and styles that you can easily integrate into your web applications.',
    },
    {
      id: 2,
      question: 'Q. How can I use Keep React components?',
      answer:
        'To use Keep React components, you can install the library via npm or yarn, import the components you need in your React application, and start using them in your code.',
    },
    {
      id: 3,
      question: 'Q. Is Keep React compatible with other React projects?',
      answer:
        'Yes, Keep React is designed to be compatible with other React projects. You can seamlessly integrate its components into your existing React applications.',
    },
    {
      id: 4,
      question: 'Q. What makes Keep React different from other component libraries?',
      answer:
        'Keep React combines the power of React with the flexibility and utility of Tailwind CSS. It provides a wide range of customizable components to help you build beautiful, responsive, and functional user interfaces.',
    },
    {
      id: 5,
      question: 'Q. Can I customize the styling of Keep React components?',
      answer:
        "Yes, Keep React components are highly customizable. You can use Tailwind CSS utility classes or even create your own styles to tailor the appearance of the components to your project's needs.",
    },
    {
      id: 6,
      question: 'Q. Is Keep React suitable for both small and large-scale applications?',
      answer:
        'Absolutely! Keep React is designed to be versatile, making it suitable for a wide range of projects, from small personal websites to large-scale applications. Its components and styles are designed to scale to your needs.',
    },
  ]
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 2xl:px-0">
        <div className="mx-auto mb-4 px-5 text-center md:max-w-[500px] md:px-0">
          <h3 className="text-body-1 !font-semibold text-black lg:text-heading-5">Frequently Asked Questions</h3>
        </div>
        <div className="mx-auto mt-12 grid grid-cols-1 items-start gap-5 lg:grid-cols-2">
          <div className="w-full lg:col-span-1">
            <Accordion className="space-y-3">
              {faqs.slice(0, 3).map((faq) => (
                <AccordionPanel key={faq.id}>
                  <AccordionContainer>
                    <AccordionTitle className="text-body-4 md:text-body-3">{faq.question}</AccordionTitle>
                    <AccordionIcon />
                  </AccordionContainer>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionPanel>
              ))}
            </Accordion>
          </div>
          <div className="w-full lg:col-span-1">
            <Accordion className="space-y-3">
              {faqs.slice(3).map((faq) => (
                <AccordionPanel key={faq.id}>
                  <AccordionContainer>
                    <AccordionTitle className="text-body-4 md:text-body-3">{faq.question}</AccordionTitle>
                    <AccordionIcon />
                  </AccordionContainer>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionPanel>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
