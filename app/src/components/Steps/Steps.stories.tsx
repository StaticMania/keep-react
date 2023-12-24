import type { Meta, StoryObj } from '@storybook/react'
import { Steps } from '.'
import { removeFragment } from '../../helpers/mergeDeep'
import { Club, DownloadSimple, Globe } from 'phosphor-react'

const meta: Meta<typeof Steps> = {
  component: Steps,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Step contents',
      control: { type: null },
    },
    stepType: {
      description: 'Step Available type?',
      control: 'select',
      options: ['point', 'icon', 'number'],
      table: {
        type: { summary: 'string' },
        defaultValue: {
          summary: 'point',
        },
      },
    },
    borderType: {
      description: 'Step Available border type?',
      control: 'select',
      options: ['solid', 'dashed', 'none'],
      table: {
        type: { summary: 'string' },
        defaultValue: {
          summary: 'solid',
        },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Steps>

export const DefaultSteps: Story = {
  args: {
    children: removeFragment(
      <>
        <Steps.Item
          completed
          title="Visit Keep Design Site"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <Steps.Item
          active
          title="Visit Keep Design Site"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <Steps.Item
          title="Visit Keep Design Site"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
      </>,
    ),
  },
}
export const StepsWithNumber: Story = {
  args: {
    ...DefaultSteps.args,
    stepType: 'number',
  },
}
export const StepsWithIcon: Story = {
  args: {
    stepType: 'icon',
    children: removeFragment(
      <>
        <Steps.Item
          completed
          icon={<Globe size={20} />}
          title="Visit Keep Design Site"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <Steps.Item
          active
          icon={<DownloadSimple size={20} />}
          title="Visit Keep Design Site"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <Steps.Item
          icon={<Club size={20} />}
          title="Visit Keep Design Site"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
      </>,
    ),
  },
}
export const StepsWithDashedBorder: Story = {
  args: {
    ...StepsWithIcon.args,
    stepType: 'icon',
    borderType: 'dashed',
  },
}
