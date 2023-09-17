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

const DefaultInput = () => {
  return (
    <TextInput id="#id-6" placeholder="Default Input Field" color="gray" />
  );
};

export default DefaultInput;

`;

export { DefaultInputCode, DefaultInput };
