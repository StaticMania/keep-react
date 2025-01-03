import { Textarea } from '../../../../src'

const DisabledTextArea = () => {
  return (
    <div className="w-full">
      <Textarea disabled={true} placeholder="Write your message here" rows={8} />
    </div>
  )
}

const DisabledTextAreaCode = {
  'TextAreaComponent.tsx': `
import { Textarea } from 'keep-react'

export const TextAreaComponent = () => {
  return <Textarea disabled={true} placeholder="Write your message here" rows={8} />
}
`,
}

export { DisabledTextArea, DisabledTextAreaCode }
