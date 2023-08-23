"use client";
import { Textarea } from "@/src/components/FormControls/Textarea";

const TextAreaWithHelperText = () => {
  return (
    <Textarea
      id="comment"
      placeholder="Leave a comment..."
      withBg={true}
      border={false}
      color="gray"
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
import { Textarea } from "keep-design";

const TextAreaWithHelperText = () => {
  return (
    <Textarea
      id="comment"
      placeholder="Leave a comment..."
      withBg={true}
      border={false}
      color="gray"
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
