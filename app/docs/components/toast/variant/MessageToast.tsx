"use client";
import { Toast } from "~/src";
import { TelegramLogo } from "phosphor-react";

const MessageToast = () => {
  return (
    <Toast>
      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg  text-blue-500">
        <TelegramLogo size={24} weight="fill" />
      </div>
      <div className="flex flex-col">
        <div className="ml-3 text-base text-slate-700">
          Message sent successfully.
        </div>
      </div>
    </Toast>
  );
};

const MessageToastCode = `
"use client";
import { Toast } from "keep-react";
import { TelegramLogo } from "phosphor-react";

const MessageToast = () => {
  return (
    <Toast>
      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg  text-blue-500">
        <TelegramLogo size={24} weight="fill" />
      </div>
      <div className="flex flex-col">
        <div className="ml-3 text-base text-slate-700">
          Message sent successfully.
        </div>
      </div>
    </Toast>
  );
};

export default MessageToast;
`;

export { MessageToast, MessageToastCode };
