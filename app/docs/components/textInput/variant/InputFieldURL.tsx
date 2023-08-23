"use client";

import { Label } from "@/src/components/FormControls/Label";
import { TextInput } from "@/src/components/FormControls/TextInput";
import { WarningCircle } from "phosphor-react";

const InputFieldURL = () => {
  return (
    <>
      <Label value="Enter URL" color="error" />
      <TextInput
        id="#id-cefnh3"
        placeholder="Enter your URL"
        color="error"
        sizing="md"
        type="text"
        withBg={true}
        addon={<span>http://</span>}
        addonPosition="left"
        icon={<WarningCircle size={20} color="#FF574D" />}
        iconPosition="right"
      />
    </>
  );
};

const InputFieldURLCode = `
"use client";

import { Label,TextInput } from "keep-design";
import { WarningCircle } from "phosphor-react";

const InputFieldURL = () => {
  return (
    <>
      <Label value="Enter URL" color="error" />
      <TextInput
        id="#id-cefnh3"
        placeholder="Enter your URL"
        color="error"
        sizing="md"
        type="text"
        withBg={true}
        addon={<span>http://</span>}
        addonPosition="left"
        icon={<WarningCircle size={20} color="#FF574D" />}
        iconPosition="right"
      />
    </>
  );
};

export default InputFieldURL;

`;

export { InputFieldURL, InputFieldURLCode };
