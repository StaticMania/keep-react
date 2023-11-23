'use client'
import { Accordion } from './accordion'
import { Plus } from 'phosphor-react'

const AccordionComponent = () => {
  return (
    <section className="py-20">
      <div className="container max-w-4xl">
        <Accordion>
          <Accordion.Panel>
            <Accordion.Container>
              <Accordion.Title>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Accordion.Title>
              <Accordion.Icon>
                <Plus size={24} color="#444" />
              </Accordion.Icon>
            </Accordion.Container>
            <Accordion.Content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, accusamus. Odio impedit commodi,
              repellat omnis fuga fugit numquam culpa architecto.
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Container>
              <Accordion.Title>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Accordion.Title>
              <Accordion.Icon>
                <Plus size={24} color="#444" />
              </Accordion.Icon>
            </Accordion.Container>
            <Accordion.Content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, accusamus. Odio impedit commodi,
              repellat omnis fuga fugit numquam culpa architecto.
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Container>
              <Accordion.Title>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Accordion.Title>
              <Accordion.Icon>
                <Plus size={24} color="#444" />
              </Accordion.Icon>
            </Accordion.Container>
            <Accordion.Content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, accusamus. Odio impedit commodi,
              repellat omnis fuga fugit numquam culpa architecto.
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </section>
  )
}

export default AccordionComponent
