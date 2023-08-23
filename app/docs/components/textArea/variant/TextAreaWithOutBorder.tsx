"use client";
import { Textarea } from "@/src/components/FormControls/Textarea";

const TextAreaWithOutBorder = () => {
  return (
    <Textarea
      id="comment"
      placeholder="Leave a comment..."
      withBg={true}
      border={false}
      color="gray"
      rows={4}
    />
  );
};

const TextAreaWithOutBorderCode = `
"use client";
import { Textarea } from "keep-design";

const TextAreaWithOutBorder = () => {
  return (
    <Textarea
      id="comment"
      placeholder="Leave a comment..."
      withBg={true}
      border={false}
      color="gray"
      rows={4}
    />
  );
};

export default TextAreaWithOutBorder;
`;

export { TextAreaWithOutBorder, TextAreaWithOutBorderCode };
