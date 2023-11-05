"use client";
import React from "react";
import Image from "next/image";
const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center fixed h-full w-full bg-white top-0 left-0">
      <Image
        src="https://staticmania.cdn.prismic.io/staticmania/16a2c7da-ede2-49d5-8a62-7ac2bc3a8bc0_Property+1%3DSearch_+Property+2%3DMd.svg"
        alt="loading"
        height="300"
        width="400"
      />
      <div className="flex gap-3 items-center mt-8">
        <div className="h-6 w-6 border-2 border-slate-900 animate-spin rounded border-dashed"></div>
        <h1 className="text-xl font-normal text-slate-900 animate-pulse">
          Please Wait
        </h1>
      </div>
    </div>
  );
};

export default Loading;
