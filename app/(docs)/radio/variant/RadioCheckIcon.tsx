"use client";
import { Label } from "@/src/components/FormControls/Label";
import { Radio } from "@/src/components/FormControls/Radio";
import { useState } from "react";

const RadioCheckIcon = () => {
  const [selected, setSelected] = useState("");
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };
  return (
    <fieldset className="ml-5 flex flex-col gap-3" id="radio">
      <legend className="mb-3">Choose your favorite Technology</legend>
      <div className="flex items-center gap-2">
        <Radio
          checkedIcon={true}
          sizing="lg"
          id="React"
          name="technology"
          value="react"
          selected={selected}
          onOptionChange={handleOptionChange}
        />
        <Label htmlFor="React">React Js</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          checkedIcon={true}
          sizing="lg"
          id="Vue Js"
          name="technology"
          value="Vue Js"
          selected={selected}
          onOptionChange={handleOptionChange}
        />
        <Label htmlFor="Vue Js">Vue Js</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          checkedIcon={true}
          sizing="lg"
          id="Angular Js"
          name="technology"
          value="Angular Js"
          selected={selected}
          onOptionChange={handleOptionChange}
        />
        <Label htmlFor="Angular Js">Angular Js</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          checkedIcon={true}
          sizing="lg"
          id="sv"
          name="technology"
          value="Sveltkit"
          selected={selected}
          onOptionChange={handleOptionChange}
        />
        <Label htmlFor="sv">Sveltkit</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          checkedIcon={true}
          sizing="lg"
          id="Solid Js"
          name="technology"
          value="Solid Js"
          disabled={true}
          selected={selected}
          onOptionChange={handleOptionChange}
        />
        <Label htmlFor="Solid Js" disabled={true}>
          Solid Js (disabled)
        </Label>
      </div>
    </fieldset>
  );
};

const RadioCheckIconCode = `
"use client";
import { useState } from "react";
import { Label,Radio } from "keep-design";

const RadioCheckIcon = () => {
  const [selected, setSelected] = useState("");
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };
  return (
    <fieldset className="ml-5 flex flex-col gap-3" id="radio">
      <legend className="mb-3">Choose your favorite Technology</legend>
      <div className="flex items-center gap-2">
        <Radio
          checkedIcon={true}
          sizing="lg"
          id="React"
          name="technology"
          value="react"
          selected={selected}
          onOptionChange={handleOptionChange}
        />
        <Label htmlFor="React">React Js</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          checkedIcon={true}
          sizing="lg"
          id="Vue Js"
          name="technology"
          value="Vue Js"
          selected={selected}
          onOptionChange={handleOptionChange}
        />
        <Label htmlFor="Vue Js">Vue Js</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          checkedIcon={true}
          sizing="lg"
          id="Angular Js"
          name="technology"
          value="Angular Js"
          selected={selected}
          onOptionChange={handleOptionChange}
        />
        <Label htmlFor="Angular Js">Angular Js</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          checkedIcon={true}
          sizing="lg"
          id="sv"
          name="technology"
          value="Sveltkit"
          selected={selected}
          onOptionChange={handleOptionChange}
        />
        <Label htmlFor="sv">Sveltkit</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          checkedIcon={true}
          sizing="lg"
          id="Solid Js"
          name="technology"
          value="Solid Js"
          disabled={true}
          selected={selected}
          onOptionChange={handleOptionChange}
        />
        <Label htmlFor="Solid Js" disabled={true}>
          Solid Js (disabled)
        </Label>
      </div>
    </fieldset>
  );
};

export default RadioCheckIcon;
`;

export { RadioCheckIcon, RadioCheckIconCode };
