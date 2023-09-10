"use client";
import { Fire } from "phosphor-react";
import { Toast } from "~/src";

const DefaultToast = () => {
  return (
    <Toast>
      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-success-50 text-success-500">
        <Fire size={20} weight="bold" />
      </div>
      <div className="flex flex-col">
        <div className="ml-3 text-base text-slate-700">
          Default Toast heading
        </div>
      </div>
      <Toast.Toggle />
    </Toast>
  );
};

const DefaultToastCode = `
"use client";
import { Toast } from "keep-react";
import { Fire } from "phosphor-react";

const DefaultToast = () => {
  return (
    <Toast>
      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-success-50 text-success-500">
        <Fire size={20} weight="bold" />
      </div>
      <div className="flex flex-col">
        <div className="ml-3 text-base text-slate-700">
          Default Toast heading
        </div>
      </div>
      <Toast.Toggle />
    </Toast>
  );
};

export default DefaultToast;
`;

export { DefaultToast, DefaultToastCode };
