"use client";
import { useState } from "react";
import { Label, Radio } from "@/src/components";

const DefaultRadio = () => {
  const [selected, setSelected] = useState("");
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };

  return (
    <fieldset className="flex flex-col gap-3" id="radio">
      <legend className="mb-3">Choose your favorite country</legend>
      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="united-state"
          name="countries"
          selected={selected}
          onOptionChange={handleOptionChange}
          radioShape="square"
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
          radioShape="square"
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
          radioShape="square"
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
          radioShape="square"
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
          radioShape="square"
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
import  { useState } from "react";
import { Label,Radio } from "keep-react";

const DefaultRadio = () => {
  const [selected, setSelected] = useState("");
  const handleOptionChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <fieldset className="flex flex-col gap-3" id="radio">
      <legend className="mb-3">Choose your favorite country</legend>
      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="united-state"
          name="countries"
          selected={selected}
          onOptionChange={handleOptionChange}
          radioShape="square"
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
          radioShape="square"
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
          radioShape="square"
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
          radioShape="square"
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
          radioShape="square"
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
