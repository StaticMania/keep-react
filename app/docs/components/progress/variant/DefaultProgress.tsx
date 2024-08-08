import { CircleProgress, CircleProgressLine, CircleProgressText } from '../../../../src'

const DefaultProgress = () => {
  return (
    <div className="flex items-center justify-center">
      <CircleProgress progress={45}>
        <CircleProgressLine />
        <CircleProgressText>45%</CircleProgressText>
      </CircleProgress>
    </div>
  )
}

const DefaultProgressCode = {
  'ProgressComponent.tsx': `
import { CircleProgress, CircleProgressLine, CircleProgressText } from 'keep-react'

export const ProgressComponent = () => {
  return (
    <CircleProgress progress={45}>
      <CircleProgressLine />
      <CircleProgressText>45%</CircleProgressText>
    </CircleProgress>
  )
}
`,
}

export { DefaultProgress, DefaultProgressCode }
