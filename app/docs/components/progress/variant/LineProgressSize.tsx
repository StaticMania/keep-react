'use client'
import { LineProgress } from '../../../../src'

const SizesOfLineProgress = () => {
  return (
    <div className="flex w-3/4 flex-col gap-y-5">
      <LineProgress progress={50} size="sm">
        <LineProgress.Text>50%</LineProgress.Text>
      </LineProgress>
      <LineProgress progress={60} size="md">
        <LineProgress.Text>60%</LineProgress.Text>
      </LineProgress>
      <LineProgress progress={70} size="lg">
        <LineProgress.Text>70%</LineProgress.Text>
      </LineProgress>
      <LineProgress progress={80} size="xl">
        <LineProgress.Text>80%</LineProgress.Text>
      </LineProgress>
      <LineProgress progress={90} size="2xl">
        <LineProgress.Text>90%</LineProgress.Text>
      </LineProgress>
    </div>
  )
}

const SizesOfLineProgressCode = `
"use client"
import { CircleProgress } from "keep-react"

export const ProgressComponent = () => {
  return (
    <LineProgress progress={55} size="md">
       <LineProgress.Text>55%</LineProgress.Text>
    </LineProgress>
  )
}
`

export { SizesOfLineProgress, SizesOfLineProgressCode }
