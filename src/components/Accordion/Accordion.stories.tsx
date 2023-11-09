import type { Meta, StoryObj } from '@storybook/react'
import { Accordion } from '.'
import { removeFragment } from '../../helpers/mergeDeep'

/**
 * Meta information for the Accordion component.
 */
const meta: Meta<typeof Accordion> = {
  /**
   * The tags associated with the Accordion component.
   */
  tags: ['autodocs'],

  /**
   * The Accordion component.
   */
  component: Accordion,

  /**
   * The arguments for the Accordion component.
   */
  argTypes: {
    /**
     * The content of the Accordion.
     */
    children: {
      description: 'Accordion content',
      control: { type: null },
    },
    /**
     * The icon to use when the Accordion is open.
     */
    openIcon: {
      description: 'Accordion content Open Icon',
      control: { type: null },
    },
    /**
     * The icon to use when the Accordion is closed.
     */
    closeIcon: {
      description: 'Accordion content Close Icon',
      control: { type: null },
    },
    /**
     * The position of the icon in the Accordion.
     */
    iconPosition: {
      description: 'Accordion icon position',
      control: { type: 'radio' },
      options: ['left', 'right'],
      table: {
        type: { summary: 'string' },
        defaultValue: {
          summary: 'right',
        },
      },
    },
    /**
     * Whether the Accordion should always be open or not.
     */
    alwaysOpen: {
      description: 'Accordion content always show or not',
      table: {
        type: { summary: 'boolean' },
        defaultValue: {
          summary: false,
        },
      },
    },
    /**
     * Whether the Accordion should be flush or not.
     */
    flush: {
      description: 'Accordion flush show or not',
      table: {
        type: { summary: 'boolean' },
        defaultValue: {
          summary: false,
        },
      },
    },
    /**
     * Whether all Accordion items should be collapsed or not.
     */
    collapseAll: {
      description: 'Accordion item collapseAll or not',
      table: {
        type: { summary: 'boolean' },
        defaultValue: {
          summary: false,
        },
      },
    },
    /**
     * Whether the Accordion item should be disabled or not.
     */
    disabled: {
      description: 'Accordion item disabled or not',
      table: {
        type: { summary: 'boolean' },
        defaultValue: {
          summary: false,
        },
      },
    },
    /**
     * The theme of the Accordion.
     */
    theme: {
      description: 'Accordion theme',
      control: { type: null },
      table: {
        type: { summary: 'Object' },
      },
    },
  },
}
export default meta
type Story = StoryObj<typeof Accordion>

/**
 * Default Accordion.
 * @param args The arguments for the Accordion.
 * @returns The Accordion.
 */

export const DefaultAccordion: Story = {
  args: {
    children: (
      <Accordion.Panel>
        <Accordion.Title>What does the free version include?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    ),
  },
}

/**
 * Accordion with multiple items, collapse all and flush.
 * @param args The arguments for the Accordion.
 * @returns The Accordion.
 */

export const AccordionWithCollapseAll: Story = {
  args: {
    children: removeFragment(
      <>
        <Accordion.Panel>
          <Accordion.Title>Is there a free version available?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <p>
              Check out this guide to learn how to and start developing websites even faster with components on top of
              Tailwind CSS.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Is there a Figma file available?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe officia laudantium est atque qui illum
              voluptatibus nam placeat, dolores eaque ut id quisquam. Veniam, nulla at quos rem laudantium ullam?
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam omnis voluptatibus, illo nostrum fugit
              inventore.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>What are the differences between Keep React and Tailwind UI?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The main difference is that the core components from Keep Design System are open source under the MIT
              license, whereas Tailwind UI is a paid product. Another difference is that keep Design relies on smaller
              and standalone components, whereas Tailwind UI offers sections of pages.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              However, we actually recommend using both keep Design, keep Design Pro, and even Tailwind UI as there is
              no technical reason stopping you from using the best of two worlds.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
              <li>
                <a href="https://keep Design.com/pro/" className="text-blue-600 hover:underline dark:text-blue-500">
                  keep Design Pro
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  className="text-blue-600 hover:underline dark:text-blue-500">
                  Tailwind UI
                </a>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
      </>,
    ),
    collapseAll: true,
  },
}

/**
 * Accordion with left side icon.
 * iconPosition: 'left'
 */

export const AccordionWithLeftSideIcon: Story = {
  args: {
    iconPosition: 'left',
    ...AccordionWithCollapseAll.args,
  },
}

/**
 * Open Accordion.
 * alwaysOpen: true,
 * collapseAll: false,
 * disabled: false,
 */

export const OpenAccordion: Story = {
  args: {
    ...AccordionWithCollapseAll.args,
    alwaysOpen: true,
    collapseAll: false,
  },
}

/**
 * Disabled Accordion.
 * disabled: true,
 */

export const DisabledAccordion: Story = {
  args: {
    ...AccordionWithCollapseAll.args,
    disabled: true,
  },
}
