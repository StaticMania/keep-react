'use client'
import { CircleProgress, LineProgress } from '../../../../src'

const VariantOfProgress = () => {
  return (
    <div className="flex w-1/2 flex-col gap-5">
      <CircleProgress progress={55}>
        <CircleProgress.Text>55%</CircleProgress.Text>
      </CircleProgress>
      <LineProgress progress={55}>
        <LineProgress.Text>55%</LineProgress.Text>
      </LineProgress>
    </div>
  )
}

const VariantOfProgressCode = `
'use client'
import { CircleProgress, LineProgress } from 'keep-react'

export const ProgressComponent = () => {
  return (
    <>
      <CircleProgress progress={55}>
        <CircleProgress.Text>55%</CircleProgress.Text>
      </CircleProgress>
      <LineProgress progress={55}>
        <LineProgress.Text>55%</LineProgress.Text>
      </LineProgress>
    </>
  )
}
`

export { VariantOfProgress, VariantOfProgressCode }
