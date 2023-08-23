"use client";
import { Label } from "@/src/components/FormControls/Label";
import { TextInput } from "@/src/components/FormControls/TextInput";

const InputFieldWithLevel = () => {
  return (
    <>
      <Label value="Label" />
      <TextInput
        id="#id-592mq8"
        placeholder="Default Input Field"
        color="gray"
      />
    </>
  );
};

const InputFieldWithLevelCode = `
"use client";

import { Label,TextInput } from "keep-design";

const InputFieldWithLevel = () => {
  return (
    <>
      <Label value="Label" />
      <TextInput
        id="#id-592mq8"
        placeholder="Default Input Field"
        color="gray"
      />
    </>
  );
};

export default InputFieldWithLevel;
`;

export { InputFieldWithLevel, InputFieldWithLevelCode };
