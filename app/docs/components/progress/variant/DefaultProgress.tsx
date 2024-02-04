'use client'
import { CircleProgress } from '../../../../src'

const DefaultProgress = () => {
  return (
    <CircleProgress progress={55}>
      <CircleProgress.Text>55%</CircleProgress.Text>
    </CircleProgress>
  )
}

const DefaultProgressCode = `
'use client'
import { CircleProgress } from 'keep-react'

export const ProgressComponent = () => {
  return (
    <CircleProgress progress={55}>
      <CircleProgress.Text>55%</CircleProgress.Text>
    </CircleProgress>
  )
}
`

export { DefaultProgress, DefaultProgressCode }
