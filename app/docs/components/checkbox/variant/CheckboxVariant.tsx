"use client";
import { CheckBox } from "~/src";

const CheckboxVariant = () => {
  const handleChecked = (value: boolean) => {
    console.log(value);
  };
  return (
    <div className="flex flex-row gap-3">
      <CheckBox
        size="md"
        variant="square"
        label="Square"
        id="square"
        name="countries"
        color="info"
        handleChecked={handleChecked}
      />
      <CheckBox
        size="md"
        variant="circle"
        label="Circle"
        id="circle"
        name="countries"
        color="info"
        handleChecked={handleChecked}
      />
    </div>
  );
};

const CheckboxVariantCode = `
"use client";
import { CheckBox } from "keep-react";

const CheckboxVariant = () => {
  
  const handleChecked = (value) => {
    console.log(value);
  };

  return (
    <div className="flex flex-row gap-3">
      <CheckBox
        size="md"
        variant="square"
        label="Square"
        id="square"
        name="countries"
        color="info"
        handleChecked={handleChecked}
      />
      <CheckBox
        size="md"
        variant="circle"
        label="Circle"
        id="circle"
        name="countries"
        color="info"
        handleChecked={handleChecked}
      />
    </div>
  );
};


export default CheckboxVariant;

`;

export { CheckboxVariant, CheckboxVariantCode };
