import { CircleProgress, CircleProgressLine, CircleProgressText } from '../../../../src'

const DefaultProgress = () => {
  return (
    <CircleProgress progress={45}>
      <CircleProgressLine />
      <CircleProgressText>45%</CircleProgressText>
    </CircleProgress>
  )
}

const DefaultProgressCode = `
import { CircleProgress, CircleProgressLine, CircleProgressText } from 'keep-react'

export const ProgressComponent = () => {
  return (
    <CircleProgress progress={45}>
      <CircleProgressLine />
      <CircleProgressText>45%</CircleProgressText>
    </CircleProgress>
  )
}
`

export { DefaultProgress, DefaultProgressCode }
