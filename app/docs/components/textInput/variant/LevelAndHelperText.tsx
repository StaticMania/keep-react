"use client";
import { Label } from "@/src/components/FormControls/Label";
import { TextInput } from "@/src/components/FormControls/TextInput";

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
import { Label ,TextInput} from "keep-design";

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
