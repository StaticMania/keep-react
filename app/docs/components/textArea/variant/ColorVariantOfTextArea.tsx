"use client";
import { Textarea } from "~/src";

const ColorVariantOfTextArea = () => {
  return (
    <Textarea
      id="comment"
      placeholder="Leave a comment..."
      withBg={true}
      color="success"
      border={true}
      rows={4}
    />
  );
};

const ColorVariantOfTextAreaCode = `
"use client";
import { Textarea } from "keep-react";

const ColorVariantOfTextArea = () => {
  return (
    <Textarea
      id="comment"
      placeholder="Leave a comment..."
      withBg={true}
      color="success"
      border={true}
      rows={4}
    />
  );
};

export default ColorVariantOfTextArea;
`;

export { ColorVariantOfTextArea, ColorVariantOfTextAreaCode };
