'use client'
import { Plus } from 'phosphor-react'
import { Accordion } from '../src'

const page = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="max-w-md">
          <Accordion className="">
            <Accordion.Panel>
              <Accordion.Container>
                <Accordion.Title className="w-[95%]">
                  How do I customize the color scheme of components?
                </Accordion.Title>
                <Accordion.Icon className="w-[5%]" />
              </Accordion.Container>
              <Accordion.Content>
                The Keep React is a collection of UI components, styles, and guidelines that ensure consistency and a
                unified user experience across our products. It simplifies the design and development process by
                providing ready-to-use components that can be easily customized and integrated into various
                applications.
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Container>
                <Accordion.Title>How do I customize the color scheme of components?</Accordion.Title>
                <Accordion.Icon />
              </Accordion.Container>
              <Accordion.Content>
                The Keep React offers a range of color variants for components. To customize the color scheme, you can
                use the available color options such as gray,info,error,warning and success. Simply set the desired
                color variant as a prop when using the component, and it will reflect the chosen color.
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Container>
                <Accordion.Title>Can I add additional content to notifications?</Accordion.Title>
                <Accordion.Icon />
              </Accordion.Container>
              <Accordion.Content>
                Yes, the Notification component in the Keep React allows you to include extra content alongside the
                primary message. The additionalContent prop can be used to display supplementary information, such as
                buttons, links, or icons, within the notification to provide users with more context and options.
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
          <button className="flex items-center rounded-xl bg-white px-6 py-2.5">
            <span className="w-[95%] text-left">How do I customize the color scheme of components?</span>
            <span className="w-[5%]">
              <Plus size={20} />
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default page
