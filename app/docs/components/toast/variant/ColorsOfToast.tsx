"use client";
import { Toast } from "~/src";
import { Check, Warning, X } from "phosphor-react";

const ColorsOfToast = () => {
  return (
    <div className="flex flex-col items-start gap-5">
      <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-success-50 text-success-500">
          <Check size={20} weight="bold" />
        </div>
        <div className="flex flex-col">
          <div className="ml-3 text-base text-slate-700">
            Success Toast heading
          </div>
        </div>
        <Toast.Toggle />
      </Toast>
      <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-500">
          <X size={20} weight="bold" />
        </div>
        <div className="flex flex-col">
          <div className="ml-3 text-base text-slate-700">
            Error Toast heading
          </div>
        </div>
        <Toast.Toggle />
      </Toast>
      <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
          <Warning size={20} weight="bold" />
        </div>
        <div className="flex flex-col">
          <div className="ml-3 text-base text-slate-700">
            Warning Toast heading
          </div>
        </div>
        <Toast.Toggle />
      </Toast>
    </div>
  );
};

const ColorsOfToastCode = `
"use client";
import { Toast } from "keep-react";
import { Check, Warning, X } from "phosphor-react";

const ColorsOfToast = () => {
  return (
    <div className="flex flex-col items-start gap-5">
      <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-success-50 text-success-500">
          <Check size={20} weight="bold" />
        </div>
        <div className="flex flex-col">
          <div className="ml-3 text-base text-slate-700">
            Success Toast heading
          </div>
        </div>
        <Toast.Toggle />
      </Toast>
      <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-500">
          <X size={20} weight="bold" />
        </div>
        <div className="flex flex-col">
          <div className="ml-3 text-base text-slate-700">
            Error Toast heading
          </div>
        </div>
        <Toast.Toggle />
      </Toast>
      <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
          <Warning size={20} weight="bold" />
        </div>
        <div className="flex flex-col">
          <div className="ml-3 text-base text-slate-700">
            Warning Toast heading
          </div>
        </div>
        <Toast.Toggle />
      </Toast>
    </div>
  );
};

export default ColorsOfToast;
`;

export { ColorsOfToast, ColorsOfToastCode };
