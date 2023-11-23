'use client'
import { Button } from '~/src'

const KeepButtonSize = () => {
  return (
    <div className="flex flex-wrap items-end gap-2">
      <Button size="xs" buttonType="primary">
        Extra Small
      </Button>
      <Button size="sm" buttonType="primary">
        Small Button
      </Button>
      <Button size="md" buttonType="primary">
        Medium Button
      </Button>
      <Button size="lg" buttonType="primary">
        Large Button
      </Button>
      <Button size="xl" buttonType="primary">
        Extra Large
      </Button>
      <Button size="2xl" buttonType="primary">
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
      <Button size="xs" buttonType="primary">Extra Small</Button>
      <Button size="sm" buttonType="primary">Small Button</Button>
      <Button size="md" buttonType="primary">Medium Button</Button>
      <Button size="lg" buttonType="primary">Large Button</Button>
      <Button size="xl" buttonType="primary">Extra Large</Button>
      <Button size="2xl" buttonType="primary">Button of 2xl</Button>
    </>
  );
};
`

export { KeepButtonSize, KeepButtonSizeCode }
