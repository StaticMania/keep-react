"use client";
import { Alert } from "@/src/components/Alert";
import Link from "next/link";
import { Info } from "phosphor-react";

const AlertWithBorder = () => {
  return (
    <Alert
      color="gray"
      rounded={true}
      withBorder={true}
      additionalContent={
        <div className="mt-1 text-sm text-slate-500">
          Default message - Lorem Ipsum is simply dummy text of the printing and
          typesetting industry
          <Link href="/" className="ml-2 text-primary-500 underline">
            Link style
          </Link>
        </div>
      }
      icon={<Info size={24} color="gray" />}
    >
      <p className="text-lg font-semibold text-slate-900">
        Default message - make it short
      </p>
    </Alert>
  );
};

const AlertWithBorderCode = `
"use client";
import { Alert } from "keep-design";
import Link from "next/link";
import { Info } from "phosphor-react";

const AlertWithBorder = () => {
  return (
    <Alert
      color="gray"
      rounded={true}
      withBorder={true}
      additionalContent={
        <div className="mt-1 text-sm text-slate-500">
          Default message - Lorem Ipsum is simply dummy text of the printing and
          typesetting industry
          <Link href="/" className="ml-2 text-primary-500 underline">
            Link style
          </Link>
        </div>
      }
      icon={<Info size={24} color="gray" />}
    >
      <p className="text-lg font-semibold text-slate-900">
        Default message - make it short
      </p>
    </Alert>
  );
};
`;

export { AlertWithBorder, AlertWithBorderCode };
