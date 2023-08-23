"use client";
import { Textarea } from "@/src/components/FormControls/Textarea";

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
import { Textarea } from "keep-design";

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

export default DefaultTextArea;
`;

export { DefaultTextArea, DefaultTextAreaCode };
