"use client";
import { Textarea } from "~/src";

const DefaultTextArea = () => {
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
};

const DefaultTextAreaCode = `
"use client";
import { Textarea } from "keep-react";

const TextAreaComponent = () => {
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
};

export default TextAreaComponent;
`;

export { DefaultTextArea, DefaultTextAreaCode };
