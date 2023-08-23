"use client";

import { NumberInput } from "@/src/components/FormControls/NumberInput";
import { useState } from "react";

const DefaultNumberInput = () => {
  const [value, setValue] = useState(100);
  return <NumberInput sizing="md" value={value} setValue={setValue} />;
};

const DefaultNumberInputCode = `
"use client";
import { NumberInput } from "keep-design";
import { useState } from "react";

const DefaultNumberInput = () => {
  const [value, setValue] = useState(100);
  return <NumberInput sizing="md" value={95} setValue={setValue} />;
};

export default DefaultNumberInput;
`;

export { DefaultNumberInput, DefaultNumberInputCode };
