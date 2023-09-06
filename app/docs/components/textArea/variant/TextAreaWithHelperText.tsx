"use client";
import { Textarea } from "@/src/components";

const TextAreaWithHelperText = () => {
  return (
    <Textarea
      id="comment"
      placeholder="Leave a comment..."
      withBg={true}
      border={false}
      color="success"
      rows={4}
      helperText={
        <span className="font-medium text-slate-500">
          Info that helps a user with this field!
        </span>
      }
    />
  );
};

const TextAreaWithHelperTextCode = `
"use client";
import { Textarea } from "keep-react";

const TextAreaWithHelperText = () => {
  return (
    <Textarea
      id="comment"
      placeholder="Leave a comment..."
      withBg={true}
      border={false}
      color="success"
      rows={4}
      helperText={
        <span className="font-medium text-slate-500">
          Info that helps a user with this field!
        </span>
      }
    />
  );
};

export default TextAreaWithHelperText;
`;

export { TextAreaWithHelperText, TextAreaWithHelperTextCode };
