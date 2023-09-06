"use client";
import { useState } from "react";
import { Label, Radio } from "@/src/components";

const RadioVariant = () => {
  const [selected, setSelected] = useState("");
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };

  return (
    <fieldset className="flex flex-col gap-3">
      <legend className="mb-3">Choose your favorite country</legend>
      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="united-state-1"
          name="countries"
          selected={selected}
          onOptionChange={handleOptionChange}
          radioShape="square"
          value="USA"
        />
        <Label htmlFor="united-state-1">United States</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="germany-1"
          name="countries"
          selected={selected}
          onOptionChange={handleOptionChange}
          radioShape="square"
          value="Germany"
        />
        <Label htmlFor="germany-1">Germany</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="spain-1"
          name="countries"
          selected={selected}
          onOptionChange={handleOptionChange}
          radioShape="square"
          value="Spain"
        />
        <Label htmlFor="spain-1">Spain</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="uk-1"
          name="countries"
          selected={selected}
          onOptionChange={handleOptionChange}
          radioShape="square"
          value="United Kingdom"
        />
        <Label htmlFor="uk-1">United Kingdom</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="china-1"
          name="countries"
          selected={selected}
          onOptionChange={handleOptionChange}
          radioShape="square"
          value="China"
          disabled={true}
        />
        <Label htmlFor="china-1" disabled={true}>
          China (disabled)
        </Label>
      </div>
    </fieldset>
  );
};

const RadioVariantCode = `
"use client";
import { useState } from "react";
import { Label,Radio } from "keep-react";

const RadioVariant = () => {
  const [selected, setSelected] = useState("");
  const handleOptionChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <fieldset className="flex flex-col gap-3">
      <legend className="mb-3">Choose your favorite country</legend>
      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="united-state-1"
          name="countries"
          selected={selected}
          onOptionChange={handleOptionChange}
          radioShape="square"
          value="USA"
        />
        <Label htmlFor="united-state-1">United States</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="germany-1"
          name="countries"
          selected={selected}
          onOptionChange={handleOptionChange}
          radioShape="square"
          value="Germany"
        />
        <Label htmlFor="germany-1">Germany</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="spain-1"
          name="countries"
          selected={selected}
          onOptionChange={handleOptionChange}
          radioShape="square"
          value="Spain"
        />
        <Label htmlFor="spain-1">Spain</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="uk-1"
          name="countries"
          selected={selected}
          onOptionChange={handleOptionChange}
          radioShape="square"
          value="United Kingdom"
        />
        <Label htmlFor="uk-1">United Kingdom</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="china-1"
          name="countries"
          selected={selected}
          onOptionChange={handleOptionChange}
          radioShape="square"
          value="China"
          disabled={true}
        />
        <Label htmlFor="china-1" disabled={true}>
          China (disabled)
        </Label>
      </div>
    </fieldset>
  );
};

export default RadioVariant;

`;

export { RadioVariant, RadioVariantCode };
