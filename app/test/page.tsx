"use client";
import React, { useState } from "react";

import { Minus, Plus } from "phosphor-react";

const Page = () => {
  const [value, setValue] = useState(99);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    setValue(value - 1);
  };

  const handleScroll = (event: { deltaY: number }) => {
    if (event.deltaY > 0) {
      setValue(value - 1);
    } else {
      setValue(value + 1);
    }
  };

  return (
    <div className="container py-20">
      <div className="flex max-w-xs items-center justify-between px-5 border border-slate-300 rounded-md">
        <button
          className="h-6 w-6 flex items-center justify-center bg-slate-50 rounded-md"
          onClick={handleDecrement}
        >
          <Minus color="#5E718D" weight="bold" size={16} />
        </button>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value, 10))}
          onWheel={handleScroll}
          className="flex-auto bg-transparent text-center focus:outline-none text-base font-medium text-slate-400 max-w-[114px] py-2.5 px-10"
        />
        <button
          className="h-6 w-6 flex items-center justify-center bg-slate-50 rounded-md"
          onClick={handleIncrement}
        >
          <Plus color="#5E718D" size={16} weight="bold" />
        </button>
      </div>
    </div>
  );
};

export default Page;
