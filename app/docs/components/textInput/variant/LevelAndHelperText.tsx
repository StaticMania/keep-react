"use client";
import { Label, TextInput } from "~/src";

const LevelAndHelperText = () => {
  return (
    <>
      <Label value="Label" />
      <TextInput
        id="#id-17"
        placeholder="Default Input Field"
        color="gray"
        helperText="Info that helps a user with this field."
      />
    </>
  );
};

const LevelAndHelperTextCode = `
"use client";
import { Label ,TextInput} from "keep-react";

const TextInputComponent = () => {
  return (
    <>
      <Label value="Label" />
      <TextInput
        id="#id-17"
        placeholder="Default Input Field"
        color="gray"
        helperText="Info that helps a user with this field."
      />
    </>
  );
};

export default TextInputComponent;

`;

export { LevelAndHelperText, LevelAndHelperTextCode };
