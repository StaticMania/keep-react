'use client'
import { LineProgress } from '../../../../src'

const DefaultLineProgress = () => {
  return (
    <div className="w-1/2">
      <LineProgress progress={55}>
        <LineProgress.Text>55%</LineProgress.Text>
      </LineProgress>
    </div>
  )
}

const DefaultLineProgressCode = `
'use client'
import { LineProgress } from 'keep-react'

export const ProgressComponent = () => {
  return (
    <LineProgress progress={55}>
      <LineProgress.Text>55%</LineProgress.Text>
    </LineProgress>
  )
}
`

export { DefaultLineProgress, DefaultLineProgressCode }
