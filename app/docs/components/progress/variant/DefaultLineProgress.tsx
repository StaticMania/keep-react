import { LineProgress, LineProgressBar, LineProgressText } from '../../../../src'

const DefaultLineProgress = () => {
  return (
    <div className="mx-auto max-w-lg">
      <LineProgress progress={55}>
        <LineProgressBar />
        <LineProgressText>55%</LineProgressText>
      </LineProgress>
    </div>
  )
}

const DefaultLineProgressCode = {
  'ProgressComponent.tsx': `
import { LineProgress, LineProgressBar, LineProgressText }  from 'keep-react'

export const ProgressComponent = () => {
  return (
    <LineProgress progress={55}>
      <LineProgressBar />
      <LineProgressText>55%</LineProgressText>
    </LineProgress>
  )
}
`,
}

export { DefaultLineProgress, DefaultLineProgressCode }
