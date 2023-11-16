'use client'
import { Textarea } from '~/src'

const TextAreaWithHelperText = () => {
  return (
    <Textarea
      id="comment"
      placeholder="Leave a comment..."
      withBg={true}
      border={false}
      color="info"
      rows={4}
      helperText={<span className="text-metal-500 font-medium">Info that helps a user with this field!</span>}
    />
  )
}

const TextAreaWithHelperTextCode = `
"use client";
import { Textarea } from "keep-react";

export const TextAreaComponent = () => {
  return (
    <Textarea
      id="comment"
      placeholder="Leave a comment..."
      withBg={true}
      border={false}
      color="info"
      rows={4}
      helperText={
        <span className="font-medium text-metal-500">
          Info that helps a user with this field!
        </span>
      }
    />
  );
}
`

export { TextAreaWithHelperText, TextAreaWithHelperTextCode }
