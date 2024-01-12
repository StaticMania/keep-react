'use client'
import { Button, Spinner } from '../../../../src'

const SpinnerButton = () => {
  return (
    <div className="flex w-full items-end gap-3">
      <Button size="md">
        <span className="pr-2">
          <Spinner color="info" size="md" />
        </span>
        Loading...
      </Button>
      <Button variant="outline">
        <span className="pr-2">
          <Spinner color="info" size="md" />
        </span>
        Loading...
      </Button>
    </div>
  )
}

const SpinnerButtonCode = `
"use client";
import { Button,Spinner } from "keep-react";

export const SpinnerButtonComponent = () => {
  return (
    <>
      <Button  size="md">
        <span className="pr-2">
          <Spinner color="info" size="md" />
        </span>
        Loading...
      </Button>
      <Button variant="outline" size="md">
        <span className="pr-2">
          <Spinner color="info" size="md" />
        </span>
        Loading...
      </Button>
    </>
  );
}
`

export { SpinnerButton, SpinnerButtonCode }
