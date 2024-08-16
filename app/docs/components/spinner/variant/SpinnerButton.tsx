import { Button, Spinner } from '../../../../src'

const SpinnerButton = () => {
  return (
    <div className="flex w-full items-end gap-3">
      <Button>
        <span className="pr-2">
          <Spinner color="gray" size="sm" />
        </span>
        Loading
      </Button>
      <Button variant="outline">
        <span className="pr-2">
          <Spinner color="gray" size="sm" />
        </span>
        Loading
      </Button>
    </div>
  )
}

const SpinnerButtonCode = {
  'SpinnerComponent.tsx': `
import { Button, Spinner } from 'keep-react'

export const SpinnerComponent = () => {
  return (
    <>
      <Button>
        <span className="pr-2">
          <Spinner color="gray" size="sm" />
        </span>
        Loading
      </Button>
      <Button variant="outline">
        <span className="pr-2">
          <Spinner color="gray" size="sm" />
        </span>
        Loading
      </Button>
    </>
  )
}
`,
}

export { SpinnerButton, SpinnerButtonCode }
