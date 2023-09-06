"use client";
import { Label, TextInput } from "@/src/components";

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

import { Label,TextInput } from "keep-react";

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
