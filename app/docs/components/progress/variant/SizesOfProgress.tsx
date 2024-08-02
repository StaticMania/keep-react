import { CircleProgress, CircleProgressLine, CircleProgressText } from '../../../../src'

const SizesOfProgress = () => {
  return (
    <div className="flex items-end gap-x-5">
      {['sm', 'md', 'lg', 'xl', '2xl'].map((size) => (
        <CircleProgress key={size} progress={55} size={size as 'sm' | 'md' | 'lg' | 'xl' | '2xl'}>
          <CircleProgressLine />
          <CircleProgressText>55%</CircleProgressText>
        </CircleProgress>
      ))}
    </div>
  )
}

const SizesOfProgressCode = {
  'ProgressComponent.tsx': `
import { CircleProgress, CircleProgressLine, CircleProgressText }  from 'keep-react'

export const ProgressComponent = () => {
  return (
    <CircleProgress progress={55} size="md">
      <CircleProgressLine />
      <CircleProgressText>55%</CircleProgressText>
    </CircleProgress>
  )
}
`,
}

export { SizesOfProgress, SizesOfProgressCode }
