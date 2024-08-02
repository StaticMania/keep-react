import { LineProgress, LineProgressBar, LineProgressText } from '../../../../src'

const SizesOfLineProgress = () => {
  return (
    <div className="flex w-3/4 flex-col gap-y-5">
      {['sm', 'md', 'lg', 'xl', '2xl'].map((size) => (
        <LineProgress key={size} progress={55} size={size as 'sm' | 'md' | 'lg' | 'xl' | '2xl'}>
          <LineProgressBar />
          <LineProgressText>55%</LineProgressText>
        </LineProgress>
      ))}
    </div>
  )
}

const SizesOfLineProgressCode = {
  'ProgressComponent.tsx': `
import { LineProgress, LineProgressBar, LineProgressText } from 'keep-react'

export const ProgressComponent = () => {
  return (
    <LineProgress progress={55} size="md">
      <LineProgressBar />
      <LineProgressText>55%</LineProgressText>
    </LineProgress>
  )
}
`,
}

export { SizesOfLineProgress, SizesOfLineProgressCode }
