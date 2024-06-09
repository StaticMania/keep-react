import { Textarea } from '../../../../src'

const DefaultTextArea = () => {
  return (
    <div className="p-2">
      <Textarea placeholder="Write your message here." rows={8} />
    </div>
  )
}

const DefaultTextAreaCode = `
import { Textarea } from 'keep-react'

export const TextAreaComponent = () => {
  return (
     <Textarea placeholder="Write your message here." rows={8} />
  )
}
`

export { DefaultTextArea, DefaultTextAreaCode }
