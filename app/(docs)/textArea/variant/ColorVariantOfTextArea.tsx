"use client";
import { Textarea } from "@/src/components/FormControls/Textarea";

const ColorVariantOfTextArea = () => {
  return (
    <Textarea
      id="comment"
      placeholder="Leave a comment..."
      withBg={true}
      color="error"
      border={true}
      rows={4}
    />
  );
};

const ColorVariantOfTextAreaCode = `
"use client";
import { Textarea } from "keep-design";

const ColorVariantOfTextArea = () => {
  return (
    <Textarea
      id="comment"
      placeholder="Leave a comment..."
      withBg={true}
      color="error"
      border={true}
      rows={4}
    />
  );
};

export default ColorVariantOfTextArea;
`;

export { ColorVariantOfTextArea, ColorVariantOfTextAreaCode };
