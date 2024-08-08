import {
  CircleProgress,
  CircleProgressLine,
  CircleProgressText,
  LineProgress,
  LineProgressBar,
  LineProgressText,
} from '../../../../src'

const VariantOfProgress = () => {
  return (
    <div className="mx-auto flex max-w-lg flex-col gap-5">
      <CircleProgress progress={55}>
        <CircleProgressLine />
        <CircleProgressText>55%</CircleProgressText>
      </CircleProgress>
      <LineProgress progress={55}>
        <LineProgressBar />
        <LineProgressText>55%</LineProgressText>
      </LineProgress>
    </div>
  )
}

const VariantOfProgressCode = {
  'ProgressComponent.tsx': `
import {
  CircleProgress,
  CircleProgressLine,
  CircleProgressText,
  LineProgress,
  LineProgressBar,
  LineProgressText,
} from 'keep-react'

export const ProgressComponent = () => {
  return (
    <div className="flex flex-col gap-5">
      <CircleProgress progress={55}>
        <CircleProgressLine />
        <CircleProgressText>55%</CircleProgressText>
      </CircleProgress>
      <LineProgress progress={55}>
        <LineProgressBar />
        <LineProgressText>55%</LineProgressText>
      </LineProgress>
    </div>
  )
}
`,
}

export { VariantOfProgress, VariantOfProgressCode }
