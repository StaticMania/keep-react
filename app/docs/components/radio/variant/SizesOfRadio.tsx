"use client";
import { useState } from "react";
import { Label, Radio } from "~/src";

const SizesOfRadio = () => {
  const [selected, setSelected] = useState("");
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };
  return (
    <div className="p-5">
      <fieldset className="flex flex-col gap-3" id="radio">
        <legend className="mb-3">Choose your favorite Framework</legend>
        <div className="flex items-center gap-2">
          <Radio
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
            sizing="md"
            id="NuxtJs"
            name="framework"
            value="NuxtJs"
            selected={selected}
            onOptionChange={handleOptionChange}
          />
          <Label htmlFor="NuxtJs">Nuxt Js</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio
            sizing="lg"
            id="remix"
            name="framework"
            value="RemixJs"
            selected={selected}
            onOptionChange={handleOptionChange}
          />
          <Label htmlFor="remix">Remix Js</Label>
        </div>
      </fieldset>
    </div>
  );
};

const SizesOfRadioCode = `
"use client";
import { useState } from "react";
import { Label, Radio } from "keep-react";

const SizesOfRadio = () => {
  const [selected, setSelected] = useState("");
  const handleOptionChange = (e) => {
    setSelected(e.target.value);
  };
  return (
    <fieldset className="ml-5 flex flex-col gap-3" id="radio">
      <legend className="mb-3">Choose your favorite Framework</legend>
      <div className="flex items-center gap-2">
        <Radio
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
          sizing="md"
          id="NuxtJs"
          name="framework"
          value="NuxtJs"
          selected={selected}
          onOptionChange={handleOptionChange}
        />
        <Label htmlFor="NuxtJs">Nuxt Js</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="RemixJs"
          name="framework"
          value="RemixJs"
          selected={selected}
          onOptionChange={handleOptionChange}
        />
        <Label htmlFor="RemixJs">Remix Js</Label>
      </div>
    </fieldset>
  );
};

export default SizesOfRadio;
`;
export { SizesOfRadio, SizesOfRadioCode };
