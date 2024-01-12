import type { Meta, StoryObj } from '@storybook/react'
import { Plus } from 'phosphor-react'
import { Accordion } from '.'
import { removeFragment } from '../../helpers/mergeDeep'

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Accordion content',
      control: { type: 'null' },
    },
    flush: {
      description: 'Accordion flush show or not',
      control: { type: 'boolean' },
    },
    openFirstPanel: {
      description: 'Accordion first panel open',
      control: { type: 'boolean' },
    },
    disabled: {
      description: 'Accordion item disabled or not',
      control: { type: 'boolean' },
    },
  },
}
export default meta
type Story = StoryObj<typeof Accordion>

export const DefaultAccordion: Story = {
  args: {
    children: (
      <Accordion.Panel>
        <Accordion.Container>
          <Accordion.Title>What is the of the Keep React?</Accordion.Title>
        </Accordion.Container>
        <Accordion.Content>
          The Keep React is a collection of UI components, styles, and guidelines that ensure consistency and a unified
          user experience across our products. It simplifies the design and development process by providing
          ready-to-use components that can be easily customized and integrated into various applications.
        </Accordion.Content>
      </Accordion.Panel>
    ),
  },
}
export const FlushAccordion: Story = {
  args: {
    flush: true,
    children: removeFragment(
      <>
        <Accordion.Panel>
          <Accordion.Container>
            <Accordion.Title>What is the purpose of the Keep React?</Accordion.Title>
          </Accordion.Container>
          <Accordion.Content>
            The Keep React is a collection of UI components, styles, and guidelines that ensure consistency and a
            unified user experience across our products. It simplifies the design and development process by providing
            ready-to-use components that can be easily customized and integrated into various applications.
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Container>
            <Accordion.Title>How do I customize the color scheme of components?</Accordion.Title>
          </Accordion.Container>
          <Accordion.Content>
            The Keep React offers a range of color variants for components. To customize the color scheme, you can use
            the available color options such as gray,info,error,warning and success. Simply set the desired color
            variant as a prop when using the component, and it will reflect the chosen color.
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Container>
            <Accordion.Title>Can I add additional content to notifications?</Accordion.Title>
          </Accordion.Container>
          <Accordion.Content>
            Yes, the Notification component in the Keep React allows you to include extra content alongside the primary
            message. The additionalContent prop can be used to display supplementary information, such as buttons,
            links, or icons, within the notification to provide users with more context and options.
          </Accordion.Content>
        </Accordion.Panel>
      </>,
    ),
  },
}
export const AccordionFirstPanelOpen: Story = {
  args: {
    ...FlushAccordion.args,
    openFirstPanel: true,
  },
}
export const AccordionWithIcon: Story = {
  args: {
    children: removeFragment(
      <>
        <Accordion.Panel>
          <Accordion.Container>
            <Accordion.Title>What is the purpose of the Keep React?</Accordion.Title>
            <Accordion.Icon>
              <Plus size={24} color="#444" />
            </Accordion.Icon>
          </Accordion.Container>
          <Accordion.Content>
            The Keep React is a collection of UI components, styles, and guidelines that ensure consistency and a
            unified user experience across our products. It simplifies the design and development process by providing
            ready-to-use components that can be easily customized and integrated into various applications.
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Container>
            <Accordion.Title>How do I customize the color scheme of components?</Accordion.Title>
            <Accordion.Icon>
              <Plus size={24} color="#444" />
            </Accordion.Icon>
          </Accordion.Container>
          <Accordion.Content>
            The Keep React offers a range of color variants for components. To customize the color scheme, you can use
            the available color options such as gray,info,error,warning and success. Simply set the desired color
            variant as a prop when using the component, and it will reflect the chosen color.
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Container>
            <Accordion.Title>Can I add additional content to notifications?</Accordion.Title>
            <Accordion.Icon>
              <Plus size={24} color="#444" />
            </Accordion.Icon>
          </Accordion.Container>
          <Accordion.Content>
            Yes, the Notification component in the Keep React allows you to include extra content alongside the primary
            message. The additionalContent prop can be used to display supplementary information, such as buttons,
            links, or icons, within the notification to provide users with more context and options.
          </Accordion.Content>
        </Accordion.Panel>
      </>,
    ),
  },
}
export const DisabledAccordion: Story = {
  args: {
    ...DefaultAccordion.args,
    disabled: true,
  },
}
export const CustomizeAccordion: Story = {
  args: {
    children: removeFragment(
      <>
        <Accordion.Panel className="bg-metal-900">
          <Accordion.Container className="bg-metal-900 text-white group-hover:bg-metal-800">
            <Accordion.Title className="text-white">What is the of the Keep React?</Accordion.Title>
            <Accordion.Icon>
              <Plus size={24} color="#fff" />
            </Accordion.Icon>
          </Accordion.Container>
          <Accordion.Content className="text-white">
            The Keep React is a collection of UI components, styles, and guidelines that ensure consistency and a
            unified user experience across our products. It simplifies the design and development process by providing
            ready-to-use components that can be easily customized and integrated into various applications.
          </Accordion.Content>
        </Accordion.Panel>
      </>,
    ),
  },
}
