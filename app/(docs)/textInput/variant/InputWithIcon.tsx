"use client";
import { Label } from "@/src/components/FormControls/Label";
import { TextInput } from "@/src/components/FormControls/TextInput";
import { WarningCircle } from "phosphor-react";

const InputWithIcon = () => {
  return (
    <>
      <Label value="Label" />
      <TextInput
        id="#id-v9grzf"
        placeholder="Default Input Field"
        color="gray"
        icon={<WarningCircle size={20} color="#5E718D" />}
        helperText="Info that helps a user with this field."
      />
    </>
  );
};

const InputWithIconCode = `
"use client";
import { Label ,TextInput} from "keep-design";

const InputWithIcon = () => {
  return (
    <>
      <Label value="Label" />
      <TextInput
        id="#id-v9grzf"
        placeholder="Default Input Field"
        color="gray"
        icon={<WarningCircle size={20} color="#5E718D" />}
        helperText="Info that helps a user with this field."
      />
    </>
  );
};

export default InputWithIcon;

`;

export { InputWithIcon, InputWithIconCode };
