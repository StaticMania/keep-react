"use client";
import { Label } from "@/src/components/FormControls/Label";
import { Radio } from "@/src/components/FormControls/Radio";
import React, { useState } from "react";

const DefaultRadio = () => {
  const [selected, setSelected] = useState("");
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };

  return (
    <fieldset className="ml-5 flex flex-col gap-3" id="radio">
      <legend className="mb-3">Choose your favorite country</legend>
      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="united-state"
          name="countries"
          selected={selected}
          onOptionChange={handleOptionChange}
          value="USA"
        />
        <Label htmlFor="united-state">United States</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="germany"
          name="countries"
          selected={selected}
          onOptionChange={handleOptionChange}
          value="Germany"
        />
        <Label htmlFor="germany">Germany</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="spain"
          name="countries"
          selected={selected}
          onOptionChange={handleOptionChange}
          value="Spain"
        />
        <Label htmlFor="spain">Spain</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="uk"
          name="countries"
          selected={selected}
          onOptionChange={handleOptionChange}
          value="United Kingdom"
        />
        <Label htmlFor="uk">United Kingdom</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="china"
          name="countries"
          selected={selected}
          onOptionChange={handleOptionChange}
          value="China"
          disabled={true}
        />
        <Label htmlFor="china" disabled={true}>
          China (disabled)
        </Label>
      </div>
    </fieldset>
  );
};

const DefaultRadioCode = `
"use client";
import { Label,Radio } from "keep-design";
import React, { useState } from "react";

const DefaultRadio = () => {
  const [selected, setSelected] = useState("");
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };
  return (
    <fieldset className="ml-5 flex flex-col gap-3" id="radio">
      <legend className="mb-3">Choose your favorite country</legend>
      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="united-state"
          name="countries"
          selected={selected}
          onOptionChange={handleOptionChange}
          value="USA"
        />
        <Label htmlFor="united-state">United States</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="germany"
          name="countries"
          selected={selected}
          onOptionChange={handleOptionChange}
          value="Germany"
        />
        <Label htmlFor="germany">Germany</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="spain"
          name="countries"
          selected={selected}
          onOptionChange={handleOptionChange}
          value="Spain"
        />
        <Label htmlFor="spain">Spain</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="uk"
          name="countries"
          selected={selected}
          onOptionChange={handleOptionChange}
          value="United Kingdom"
        />
        <Label htmlFor="uk">United Kingdom</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="china"
          name="countries"
          selected={selected}
          onOptionChange={handleOptionChange}
          value="China"
          disabled={true}
        />
        <Label htmlFor="china" disabled={true}>
          China (disabled)
        </Label>
      </div>
    </fieldset>
  );
};

export default DefaultRadio;

`;

export { DefaultRadio, DefaultRadioCode };
