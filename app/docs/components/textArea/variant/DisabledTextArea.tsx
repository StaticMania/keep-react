import { Textarea } from '../../../../src'

const DisabledTextArea = () => {
  return (
    <div className="p-2">
      <Textarea disabled={true} placeholder="Write your message here" />
    </div>
  )
}

const DisabledTextAreaCode = `
import { Textarea } from 'keep-react'

export const TextAreaComponent = () => {
  return <Textarea disabled={true} placeholder="Write your message here" />
}
`

export { DisabledTextArea, DisabledTextAreaCode }
