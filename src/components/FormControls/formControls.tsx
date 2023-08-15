import type { keepCheckBoxTheme } from "./Checkbox";
import type { keepHelperTextTheme } from "./HelperText";
import type { keepLavelTheme } from "./Label";
import type { keepNumberInputTheme } from "./NumberInput";
import type { keepRadioTheme } from "./Radio";
import type { keepSelectTheme } from "./Select";
import type { keepTextAreaTheme } from "./Textarea";
import type {
  keepTextInputTheme,
  TextInputColors,
  TextInputSizes,
} from "./TextInput";

export interface keepFormControlTheme {
  helperText: keepHelperTextTheme;
  label: keepLavelTheme;
  radio: keepRadioTheme;
  checkbox: keepCheckBoxTheme;
  numberInput: keepNumberInputTheme;
  textInput: keepTextInputTheme;
  fileInput: {
    base: string;
    field: {
      base: string;
      input: {
        base: string;
        sizes: TextInputSizes;
        colors: TextInputColors;
      };
    };
  };
  textarea: keepTextAreaTheme;
  select: keepSelectTheme;
}
