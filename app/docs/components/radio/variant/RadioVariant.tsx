"use client";
import { useState } from "react";
import { Label, Radio } from "~/src";

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
          id="country-05"
          name="countries"
          selected={selected}
          onOptionChange={handleOptionChange}
          radioShape="circle"
          value="USA"
        />
        <Label htmlFor="country-05">United States</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="country-06"
          name="countries"
          selected={selected}
          onOptionChange={handleOptionChange}
          radioShape="circle"
          value="Germany"
        />
        <Label htmlFor="country-06">Germany</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="country-07"
          name="countries"
          selected={selected}
          onOptionChange={handleOptionChange}
          radioShape="circle"
          value="Spain"
        />
        <Label htmlFor="country-07">Spain</Label>
      </div>

      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="country-08"
          name="countries"
          selected={selected}
          onOptionChange={handleOptionChange}
          radioShape="circle"
          value="China"
          disabled={true}
        />
        <Label htmlFor="country-08" disabled={true}>
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

export const RadioComponent = () => {
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
          id="country-05"
          name="countries"
          selected={selected}
          onOptionChange={handleOptionChange}
          radioShape="circle"
          value="USA"
        />
        <Label htmlFor="country-05">United States</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="country-06"
          name="countries"
          selected={selected}
          onOptionChange={handleOptionChange}
          radioShape="circle"
          value="Germany"
        />
        <Label htmlFor="country-06">Germany</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="country-07"
          name="countries"
          selected={selected}
          onOptionChange={handleOptionChange}
          radioShape="circle"
          value="Spain"
        />
        <Label htmlFor="country-07">Spain</Label>
      </div>

      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="country-08"
          name="countries"
          selected={selected}
          onOptionChange={handleOptionChange}
          radioShape="circle"
          value="China"
          disabled={true}
        />
        <Label htmlFor="country-08" disabled={true}>
          China (disabled)
        </Label>
      </div>
    </fieldset>
  );
}
`;

export { RadioVariant, RadioVariantCode };
