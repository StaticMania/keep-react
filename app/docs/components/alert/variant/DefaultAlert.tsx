"use client";
import { Alert } from "~/src";
import Link from "next/link";
import { Info } from "phosphor-react";

const DefaultAlert = () => {
  return (
    <Alert
      additionalContent={
        <div className="mt-1 text-sm text-slate-500">
          Default message - Lorem Ipsum is simply dummy text of the printing and
          typesetting industry
          <Link href="/" className="ml-2 text-blue-600 underline">
            Link style
          </Link>
        </div>
      }
      icon={<Info size={24} color="#0F3CD9" />}
      title="Default message - make it short"
    />
  );
};

const DefaultAlertCode = `
"use client";
import Link from "next/link";
import { Alert } from "keep-react";
import { Info } from "phosphor-react";

export const AlertComponent = () => {
  return (
   <Alert
      additionalContent={
        <div className="mt-1 text-sm text-slate-500">
          Default message - Lorem Ipsum is simply dummy text of the printing and
          typesetting industry
          <Link href="/" className="ml-2 text-blue-600 underline">
            Link style
          </Link>
        </div>
      }
      icon={<Info size={24} color="#0F3CD9" />}
      title="Default message - make it short"
    />
  );
};
`;

export { DefaultAlert, DefaultAlertCode };
