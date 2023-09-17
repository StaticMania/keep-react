"use client";
import { WarningCircle } from "phosphor-react";
import { Label, TextInput } from "~/src";

const InputWithIcon = () => {
  return (
    <>
      <Label value="Label" />
      <TextInput
        id="#id-11"
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
import { Label ,TextInput} from "keep-react";

const InputWithIcon = () => {
  return (
    <>
      <Label value="Label" />
      <TextInput
        id="#id-11"
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
