import { Spinner } from '../../../../src'

const SpinnerSizes = () => {
  return (
    <div className="my-3 flex items-end gap-3">
      <Spinner color="info" size="xs" />
      <Spinner color="info" size="sm" />
      <Spinner color="info" size="md" />
      <Spinner color="info" size="lg" />
      <Spinner color="info" size="xl" />
    </div>
  )
}

const SpinnerSizesCode = {
  'SpinnerComponent.tsx': `
import { Spinner } from 'keep-react'

export const SpinnerComponent = () => {
  return (
    <>
      <Spinner color="info" size="xs" />
      <Spinner color="info" size="sm" />
      <Spinner color="info" size="md" />
      <Spinner color="info" size="lg" />
      <Spinner color="info" size="xl" />
    </>
  );
}
`,
}

export { SpinnerSizes, SpinnerSizesCode }
