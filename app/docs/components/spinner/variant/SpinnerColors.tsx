import { Spinner } from '../../../../src'

const SpinnerColors = () => {
  return (
    <div className="flex items-center gap-x-3 px-3 py-4">
      <Spinner color="primary" />
      <Spinner color="secondary" />
      <Spinner color="success" />
      <Spinner color="error" />
      <Spinner color="warning" />
    </div>
  )
}

const SpinnerColorsCode = {
  'SpinnerComponent.tsx': `
import { Spinner } from "keep-react";

export const SpinnerComponent = () => {
  return (
    <>
      <Spinner color="primary" />
      <Spinner color="secondary" />
      <Spinner color="success" />
      <Spinner color="error" />
      <Spinner color="warning" />
    </>
  );
}
`,
}

export { SpinnerColors, SpinnerColorsCode }
