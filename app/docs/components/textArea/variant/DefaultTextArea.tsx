import { Textarea } from '../../../../src'

const DefaultTextArea = () => {
  return (
    <div className="w-full">
      <Textarea placeholder="Write your message here." rows={8} />
    </div>
  )
}

const DefaultTextAreaCode = {
  'TextAreaComponent.tsx': `
import { Textarea } from 'keep-react'

export const TextAreaComponent = () => {
  return (
     <Textarea placeholder="Write your message here." rows={8} />
  )
}
`,
}

export { DefaultTextArea, DefaultTextAreaCode }
