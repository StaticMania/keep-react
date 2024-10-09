import { Spinner } from '../../../../src'

const DefaultSpinner = () => {
  return (
    <div className="px-3 py-4">
      <Spinner />
    </div>
  )
}

const DefaultSpinnerCode = {
  'SpinnerComponent.tsx': `
import { Spinner } from 'keep-react'

export const SpinnerComponent = () => {
  return <Spinner />
}
`,
}

export { DefaultSpinner, DefaultSpinnerCode }
