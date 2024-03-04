'use client'
import { CircleProgress, LineProgress } from '../../../../src'

const CustomizeProgress = () => {
  return (
    <div className="w-3/4">
      <CircleProgress progress={45} strokeBgColor="text-error-50" strokeColor="text-error-500">
        <CircleProgress.Text className="text-error-500">45%</CircleProgress.Text>
      </CircleProgress>
      <LineProgress progress={65} lineBg="bg-error-50" className="bg-error-500">
        <LineProgress.Text className="text-error-500">65%</LineProgress.Text>
      </LineProgress>
    </div>
  )
}

const CustomizeProgressCode = `
'use client'
import { CircleProgress, LineProgress } from 'keep-react'

export const ProgressComponent = () => {
  return (
    <>
      <CircleProgress progress={45} strokeBgColor="text-error-50" strokeColor="text-error-500">
        <CircleProgress.Text className="text-error-500">45%</CircleProgress.Text>
      </CircleProgress>
      <LineProgress progress={65} lineBg="bg-error-50" className="bg-error-500">
        <LineProgress.Text className="text-error-500">65%</LineProgress.Text>
      </LineProgress>
    </>
  )
}
`

export { CustomizeProgress, CustomizeProgressCode }
