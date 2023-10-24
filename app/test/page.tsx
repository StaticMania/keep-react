"use client";

import { useState } from "react";
import { Steps } from "~/src";

const Page = () => {
  const [step, setStep] = useState(0);
  return (
    <div className="py-20 container">
      <Steps>
        <Steps.Item
          completed={step >= 1}
          title="Visit Keep Design Site"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <Steps.Item
          completed={step >= 2}
          active={step === 1}
          title="Visit Keep Design Site"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <Steps.Item
          completed={step >= 3}
          active={step === 2}
          title="Visit Keep Design Site"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
      </Steps>
      <div className="mt-5 flex items-center justify-center max-w-4xl">
        <button
          disabled={step === 3}
          onClick={() => setStep((step) => step + 1)}
          className="bg-primary-500 py-2 px-4 text-white text-sm rounded disabled:bg-slate-600 disabled:text-slate-300 disabled:cursor-not-allowed"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Page;
