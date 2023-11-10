'use client'
import { Textarea } from '~/src'

const DefaultTextArea = () => {
  return <Textarea id="comment" placeholder="Leave a comment..." withBg={true} color="gray" border={true} rows={4} />
}

const DefaultTextAreaCode = `
"use client";
import { Textarea } from "keep-react";

export const TextAreaComponent = () => {
  return (
    <Textarea
      id="comment"
      placeholder="Leave a comment..."
      withBg={true}
      color="gray"
      border={true}
      rows={4}
    />
  );
}
`

export { DefaultTextArea, DefaultTextAreaCode }
