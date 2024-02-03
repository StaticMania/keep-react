'use client'
import { Textarea } from '../../../../src'

const ColorVariantOfTextArea = () => {
  return <Textarea id="comment" placeholder="Leave a comment..." withBg={true} color="info" border={true} rows={4} />
}

const ColorVariantOfTextAreaCode = `
"use client";
import { Textarea } from "keep-react";

export const TextAreaComponent = () => {
  return (
    <Textarea
      id="comment"
      placeholder="Leave a comment..."
      withBg={true}
      color="info"
      border={true}
      rows={4}
    />
  );
}
`

export { ColorVariantOfTextArea, ColorVariantOfTextAreaCode }
