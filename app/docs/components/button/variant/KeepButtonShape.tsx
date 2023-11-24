'use client'
import { Button } from '~/src'
import { ShoppingCart } from 'phosphor-react'

const KeepButtonShape = () => {
  return (
    <div className="flex flex-wrap items-end gap-2 px-2 py-3">
      <Button size="md" variant="primary" pill={true}>
        Default
      </Button>
      <Button size="md" variant="primary" circle={true}>
        <span>
          <ShoppingCart size={24} />
        </span>
      </Button>
    </div>
  )
}

const KeepButtonShapeCode = `
"use client";
import { Button } from "keep-react";
import { ShoppingCart } from "phosphor-react";

export const ButtonComponent = () => {
  return (
    <>
      <Button size="md" variant="primary" pill={true}>Default</Button>
      <Button size="md" variant="primary" circle={true}>
        <span>
          <ShoppingCart size={24} />
        </span>
      </Button>
    </>
  );
};
`

export { KeepButtonShape, KeepButtonShapeCode }
