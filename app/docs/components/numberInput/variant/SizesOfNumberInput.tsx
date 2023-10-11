"use client";
import { useState } from "react";
import { NumberInput } from "~/src";

const SizesOfNumberInput = () => {
  const [value, setValue] = useState(100);
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-xl font-bold text-slate-900 mb-3">Small Input</h1>
        <NumberInput sizing="sm" value={value} setValue={setValue} />
      </div>
      <div>
        <h1 className="text-xl font-bold text-slate-900 mb-3">Medium Input</h1>
        <NumberInput sizing="md" value={value} setValue={setValue} />
      </div>
      <div>
        <h1 className="text-xl font-bold text-slate-900 mb-3">Large Input</h1>
        <NumberInput sizing="lg" value={value} setValue={setValue} />
      </div>
    </div>
  );
};

const SizesOfNumberInputCode = `
"use client";
import { useState } from "react";
import { NumberInput } from "keep-react";

const NumberInputComponent = () => {
  const [value, setValue] = useState(100);
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-xl font-bold text-slate-900 mb-3">Small Input</h1>
        <NumberInput sizing="sm" value={value} setValue={setValue} />
      </div>
      <div>
        <h1 className="text-xl font-bold text-slate-900 mb-3">Medium Input</h1>
        <NumberInput sizing="md" value={value} setValue={setValue} />
      </div>
      <div>
        <h1 className="text-xl font-bold text-slate-900 mb-3">Large Input</h1>
        <NumberInput sizing="lg" value={value} setValue={setValue} />
      </div>
    </div>
  );
};

export default NumberInputComponent;
`;

export { SizesOfNumberInput, SizesOfNumberInputCode };
