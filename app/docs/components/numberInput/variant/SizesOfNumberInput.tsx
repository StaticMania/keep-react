"use client";
import { useState } from "react";
import { NumberInput } from "~/src";

const SizesOfNumberInput = () => {
  const [value, setValue] = useState(100);
  return (
    <div className="flex flex-col gap-5">
      <NumberInput sizing="sm" value={value} setValue={setValue} />
      <NumberInput sizing="md" value={value} setValue={setValue} />
      <NumberInput sizing="lg" value={value} setValue={setValue} />
    </div>
  );
};

const SizesOfNumberInputCode = `
"use client";
import { useState } from "react";
import { NumberInput } from "keep-react";

export const NumberInputComponent = () => {
  const [value, setValue] = useState(100);
  return (
    <>
      <NumberInput size="sm" value={value} setValue={setValue} />
      <NumberInput size="md" value={value} setValue={setValue} />
      <NumberInput size="lg" value={value} setValue={setValue} />
    </>
  );
}
`;

export { SizesOfNumberInput, SizesOfNumberInputCode };
