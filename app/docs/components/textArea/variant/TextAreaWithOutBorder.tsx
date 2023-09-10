"use client";
import { Textarea } from "~/src";

const TextAreaWithOutBorder = () => {
  return (
    <Textarea
      id="comment"
      placeholder="Leave a comment..."
      withBg={true}
      border={false}
      color="success"
      rows={4}
    />
  );
};

const TextAreaWithOutBorderCode = `
"use client";
import { Textarea } from "keep-react";

const TextAreaWithOutBorder = () => {
  return (
    <Textarea
      id="comment"
      placeholder="Leave a comment..."
      withBg={true}
      border={false}
      color="success"
      rows={4}
    />
  );
};

export default TextAreaWithOutBorder;
`;

export { TextAreaWithOutBorder, TextAreaWithOutBorderCode };
