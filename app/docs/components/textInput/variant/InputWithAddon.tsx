"use client";

import { TextInput } from "@/src/components/FormControls/TextInput";
import { Envelope } from "phosphor-react";

const InputWithAddon = () => {
  return (
    <TextInput
      id="#id-fagdtg"
      placeholder="example@gmail.com"
      color="gray"
      sizing="md"
      addon={<Envelope size={20} color="#5E718D" />}
      addonPosition="left"
    />
  );
};

const InputWithAddonCode = `
"use client";
import { TextInput } from "keep-design";
import { Envelope } from "phosphor-react";

const InputWithAddon = () => {
  return (
    <TextInput
      id="#id-fagdtg"
      placeholder="example@gmail.com"
      color="gray"
      sizing="md"
      addon={<Envelope size={20} color="#5E718D" />}
      addonPosition="left"
    />
  );
};

export default InputWithAddon;

`;

export { InputWithAddon, InputWithAddonCode };