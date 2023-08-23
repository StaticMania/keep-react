"use client";
import { Label } from "@/src/components/FormControls/Label";
import { TextInput } from "@/src/components/FormControls/TextInput";
import { EyeSlash, Lock } from "phosphor-react";

const InputWithAddonAndIcon = () => {
  return (
    <>
      <Label value="Password" />
      <TextInput
        id="#id-yml3mm"
        placeholder="example@gmail.com"
        color="gray"
        sizing="md"
        type="password"
        addon={<Lock size={20} color="#5E718D" />}
        addonPosition="left"
        icon={<EyeSlash size={20} color="#5E718D" />}
        iconPosition="right"
      />
    </>
  );
};

const InputWithAddonAndIconCode = `
"use client";
import { Label,TextInput } from "keep-design";
import { EyeSlash, Lock } from "phosphor-react";

const InputWithAddonAndIcon = () => {
  return (
    <>
      <Label value="Password" />
      <TextInput
        id="#id-yml3mm"
        placeholder="example@gmail.com"
        color="gray"
        sizing="md"
        type="password"
        addon={<Lock size={20} color="#5E718D" />}
        addonPosition="left"
        icon={<EyeSlash size={20} color="#5E718D" />}
        iconPosition="right"
      />
    </>
  );
};

export default InputWithAddonAndIcon;
`;

export { InputWithAddonAndIcon, InputWithAddonAndIconCode };
