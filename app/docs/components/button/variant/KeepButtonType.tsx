'use client'
import { Button } from '~/src'

const KeepButtonType = () => {
  return (
    <div className="flex h-32 flex-wrap items-center gap-2 p-4">
      <Button size="md" buttonType="default">
        Default
      </Button>
      <Button size="md" buttonType="primary">
        Primary
      </Button>
      <Button size="md" buttonType="outlinePrimary">
        Outline Primary
      </Button>
      <Button size="md" buttonType="outlineGray">
        Outline Gray
      </Button>
      <Button size="md" buttonType="dashed">
        Dashed Button
      </Button>
      <Button size="md" buttonType="linkPrimary">
        Link Primary
      </Button>
      <Button size="md" buttonType="linkGray">
        Link Gray
      </Button>
      <Button size="md" buttonType="text">
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
      <Button size="md" buttonType="default">Default</Button>
      <Button size="md" buttonType="primary">Primary</Button>
      <Button size="md" buttonType="outlinePrimary">Outline Primary</Button>
      <Button size="md" buttonType="outlineGray">Outline Gray</Button>
      <Button size="md" buttonType="dashed">Dashed Button</Button>
      <Button size="md" buttonType="linkPrimary">Link Primary</Button>
      <Button size="md" buttonType="linkGray">Link Gray</Button>
      <Button size="md" buttonType="text">Text Button</Button>
    </>
  );
};
`

export { KeepButtonTypeCode, KeepButtonType }
