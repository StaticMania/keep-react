"use client";
import { Label, TextInput } from "~/src";

const LevelAndHelperText = () => {
  return (
    <>
      <Label value="Label" />
      <TextInput
        id="#id-ozg0w1"
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

const LevelAndHelperText = () => {
  return (
    <>
      <Label value="Label" />
      <TextInput
        id="#id-ozg0w1"
        placeholder="Default Input Field"
        color="gray"
        helperText="Info that helps a user with this field."
      />
    </>
  );
};

export default LevelAndHelperText;

`;

export { LevelAndHelperText, LevelAndHelperTextCode };
