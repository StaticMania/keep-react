'use client'
import { Button } from '../../../../src'

const KeepButtonSize = () => {
  return (
    <div className="flex flex-wrap items-end gap-2">
      <Button size="xs" variant="primary">
        Extra Small
      </Button>
      <Button size="sm" variant="primary">
        Small Button
      </Button>
      <Button size="md" variant="primary">
        Medium Button
      </Button>
      <Button size="lg" variant="primary">
        Large Button
      </Button>
      <Button size="xl" variant="primary">
        Extra Large
      </Button>
      <Button size="2xl" variant="primary">
        Button of 2xl
      </Button>
    </div>
  )
}

const KeepButtonSizeCode = `
"use client";
import { Button } from "keep-react;

export const ButtonComponent = () => {
  return (
    <>
      <Button size="xs" variant="primary">Extra Small</Button>
      <Button size="sm" variant="primary">Small Button</Button>
      <Button size="md" variant="primary">Medium Button</Button>
      <Button size="lg" variant="primary">Large Button</Button>
      <Button size="xl" variant="primary">Extra Large</Button>
      <Button size="2xl" variant="primary">Button of 2xl</Button>
    </>
  );
};
`

export { KeepButtonSize, KeepButtonSizeCode }
