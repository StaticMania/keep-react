"use client";
import { Label } from "@/src/components/FormControls/Label";
import { Radio } from "@/src/components/FormControls/Radio";
import React, { useState } from "react";

const SizesOfRadio = () => {
  const [selected, setSelected] = useState("");
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };
  return (
    <fieldset className="ml-5 flex flex-col gap-3" id="radio">
      <legend className="mb-3">Choose your favorite Framework</legend>
      <div className="flex items-center gap-2">
        <Radio
          checkedIcon={true}
          sizing="sm"
          id="NextJs"
          name="framework"
          value="NextJs"
          selected={selected}
          onOptionChange={handleOptionChange}
        />
        <Label htmlFor="NextJs">NextJs</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          checkedIcon={true}
          sizing="md"
          id="Nuxt Js"
          name="framework"
          value="Nuxt Js"
          selected={selected}
          onOptionChange={handleOptionChange}
        />
        <Label htmlFor="Nuxt Js">Nuxt Js</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          checkedIcon={true}
          sizing="lg"
          id="Remix Js"
          name="framework"
          value="Remix Js"
          selected={selected}
          onOptionChange={handleOptionChange}
        />
        <Label htmlFor="Remix Js">Remix Js</Label>
      </div>
    </fieldset>
  );
};

const SizesOfRadioCode = `
"use client";
import { Label,Radio } from "keep-design";
import React, { useState } from "react";

const SizesOfRadio = () => {
  const [selected, setSelected] = useState("");
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };
  return (
    <fieldset className="ml-5 flex flex-col gap-3" id="radio">
      <legend className="mb-3">Choose your favorite Framework</legend>
      <div className="flex items-center gap-2">
        <Radio
          checkedIcon={true}
          sizing="sm"
          id="NextJs"
          name="framework"
          value="NextJs"
          selected={selected}
          onOptionChange={handleOptionChange}
        />
        <Label htmlFor="NextJs">NextJs</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          checkedIcon={true}
          sizing="md"
          id="Nuxt Js"
          name="framework"
          value="Nuxt Js"
          selected={selected}
          onOptionChange={handleOptionChange}
        />
        <Label htmlFor="Nuxt Js">Nuxt Js</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          checkedIcon={true}
          sizing="lg"
          id="Remix Js"
          name="framework"
          value="Remix Js"
          selected={selected}
          onOptionChange={handleOptionChange}
        />
        <Label htmlFor="Remix Js">Remix Js</Label>
      </div>
    </fieldset>
  );
};

export default SizesOfRadio;
`;
export { SizesOfRadio, SizesOfRadioCode };