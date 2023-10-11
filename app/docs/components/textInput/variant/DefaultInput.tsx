"use client";
import { TextInput } from "~/src";

const DefaultInput = () => {
  return (
    <TextInput id="#id-6" placeholder="Default Input Field" color="gray" />
  );
};

const DefaultInputCode = `
"use client";
import { TextInput } from "keep-react";

const TextInputComponent = () => {
  return (
    <TextInput id="#id-6" placeholder="Default Input Field" color="gray" />
  );
};

export default TextInputComponent;
`;

export { DefaultInputCode, DefaultInput };
