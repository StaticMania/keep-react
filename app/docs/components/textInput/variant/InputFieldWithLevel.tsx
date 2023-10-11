"use client";
import { Label, TextInput } from "~/src";

const InputFieldWithLevel = () => {
  return (
    <>
      <Label value="Label" />
      <TextInput id="#id-8" placeholder="Default Input Field" color="gray" />
    </>
  );
};

const InputFieldWithLevelCode = `
"use client";
import { Label,TextInput } from "keep-react";

const TextInputComponent = () => {
  return (
    <>
      <Label value="Label" />
      <TextInput
        id="#id-8"
        placeholder="Default Input Field"
        color="gray"
      />
    </>
  );
};

export default TextInputComponent;
`;

export { InputFieldWithLevel, InputFieldWithLevelCode };
