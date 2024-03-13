'use client'
import { CircleProgress } from '../../../../src'

const SizesOfProgress = () => {
  return (
    <div className="flex items-end gap-x-5">
      <CircleProgress progress={55} size="sm">
        <CircleProgress.Text>55%</CircleProgress.Text>
      </CircleProgress>
      <CircleProgress progress={55} size="md">
        <CircleProgress.Text>55%</CircleProgress.Text>
      </CircleProgress>
      <CircleProgress progress={55} size="lg">
        <CircleProgress.Text>55%</CircleProgress.Text>
      </CircleProgress>
      <CircleProgress progress={55} size="xl">
        <CircleProgress.Text>55%</CircleProgress.Text>
      </CircleProgress>
      <CircleProgress progress={55} size="2xl">
        <CircleProgress.Text>55%</CircleProgress.Text>
      </CircleProgress>
    </div>
  )
}

const SizesOfProgressCode = `
"use client"
import { CircleProgress } from "keep-react"

export const ProgressComponent = () => {
  return (
    <CircleProgress progress={55} size="md">
      <CircleProgress.Text>55%</CircleProgress.Text>
    </CircleProgress>
  )
}
`

export { SizesOfProgress, SizesOfProgressCode }
