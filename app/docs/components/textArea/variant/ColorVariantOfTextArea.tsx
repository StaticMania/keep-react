"use client";
import { Textarea } from "~/src";

const ColorVariantOfTextArea = () => {
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
};

const ColorVariantOfTextAreaCode = `
"use client";
import { Textarea } from "keep-react";

const TextAreaComponent = () => {
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
};

export default TextAreaComponent;
`;

export { ColorVariantOfTextArea, ColorVariantOfTextAreaCode };
