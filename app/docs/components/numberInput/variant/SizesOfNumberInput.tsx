"use client";

import { NumberInput } from "@/src/components/FormControls/NumberInput";
import { useState } from "react";

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
import { NumberInput } from "keep-design";
import { useState } from "react";

const SizesOfNumberInput = () => {
  const [value, setValue] = useState(100);
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-xl font-bold text-slate-900 mb-3">Small Input</h1>
        <NumberInput sizing="sm" value={value} setValue={setValue} />;
      </div>
      <div>
        <h1 className="text-xl font-bold text-slate-900 mb-3">Medium Input</h1>
        <NumberInput sizing="md" value={value} setValue={setValue} />;
      </div>
      <div>
        <h1 className="text-xl font-bold text-slate-900 mb-3">Large Input</h1>
        <NumberInput sizing="lg" value={value} setValue={setValue} />;
      </div>
    </div>
  );
};

export default SizesOfNumberInput;

`;

export { SizesOfNumberInput, SizesOfNumberInputCode };
