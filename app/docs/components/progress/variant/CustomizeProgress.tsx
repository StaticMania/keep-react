import {
  CircleProgress,
  CircleProgressLine,
  CircleProgressText,
  LineProgress,
  LineProgressBar,
  LineProgressText,
} from '../../../../src'

const CustomizeProgress = () => {
  return (
    <div className="mx-auto w-full max-w-xl space-y-4">
      <CircleProgress progress={45}>
        <CircleProgressLine className="stroke-error-50" strokeColor="stroke-error-500" />
        <CircleProgressText className="text-error-500">45%</CircleProgressText>
      </CircleProgress>
      <LineProgress progress={55}>
        <LineProgressBar lineBackground="bg-error-50" className="bg-error-500" />
        <LineProgressText className="text-error-500">55%</LineProgressText>
      </LineProgress>
    </div>
  )
}

const CustomizeProgressCode = {
  'ProgressComponent.tsx': `
import {
  CircleProgress,
  CircleProgressLine,
  CircleProgressText,
  LineProgress,
  LineProgressBar,
  LineProgressText,
} from from 'keep-react'

export const ProgressComponent = () => {
  return (
    <div className="space-y-4">
      <CircleProgress progress={45}>
        <CircleProgressLine className="text-error-50" strokeColor="text-error-500" />
        <CircleProgressText className="text-error-500">45%</CircleProgressText>
      </CircleProgress>
      <LineProgress progress={55}>
        <LineProgressBar lineBackground="bg-error-50" className="bg-error-500" />
        <LineProgressText className="text-error-500">55%</LineProgressText>
      </LineProgress>
    </div>
  )
}
`,
}

export { CustomizeProgress, CustomizeProgressCode }
