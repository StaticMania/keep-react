'use client'
import { Button } from '../../../../src'

const KeepButtonType = () => {
  return (
    <div className="flex h-32 flex-wrap items-center gap-2 p-4">
      <Button size="md" variant="default">
        Default
      </Button>
      <Button size="md" variant="primary">
        Primary
      </Button>
      <Button size="md" variant="outlinePrimary">
        Outline Primary
      </Button>
      <Button size="md" variant="outlineGray">
        Outline Gray
      </Button>
      <Button size="md" variant="dashed">
        Dashed Button
      </Button>
      <Button size="md" variant="linkPrimary">
        Link Primary
      </Button>
      <Button size="md" variant="linkGray">
        Link Gray
      </Button>
      <Button size="md" variant="text">
        Text Button
      </Button>
    </div>
  )
}

const KeepButtonTypeCode = `
"use client";
import { Button } from "keep-react";

export const ButtonComponent = () => {
  return (
    <>
      <Button size="md" variant="default">Default</Button>
      <Button size="md" variant="primary">Primary</Button>
      <Button size="md" variant="outlinePrimary">Outline Primary</Button>
      <Button size="md" variant="outlineGray">Outline Gray</Button>
      <Button size="md" variant="dashed">Dashed Button</Button>
      <Button size="md" variant="linkPrimary">Link Primary</Button>
      <Button size="md" variant="linkGray">Link Gray</Button>
      <Button size="md" variant="text">Text Button</Button>
    </>
  );
};
`

export { KeepButtonTypeCode, KeepButtonType }
