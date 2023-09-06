"use client";
import { Alert } from "@/src/components";
import { WarningCircle } from "phosphor-react";
import Link from "next/link";

const AlertWithDismissIcon = () => {
  const onDissMiss = () => {
    console.log("Dissmiss icon clicked");
  };
  return (
    <Alert
      onDismiss={onDissMiss}
      additionalContent={
        <div className="mt-1 text-sm text-slate-500">
          Default message - Lorem Ipsum is simply dummy text of the printing and
          typesetting industry
          <Link href="/" className="ml-2 text-blue-600 underline">
            Link style
          </Link>
        </div>
      }
      icon={<WarningCircle size={24} color="#0F3CD9" />}
    >
      <p className="md:text-lg text-base font-semibold text-blue-600">
        Default message - make it short
      </p>
    </Alert>
  );
};

const AlertWithDismissIconCode = `
"use client";
import { Alert } from "keep-react";
import { WarningCircle } from "phosphor-react";
import Link from "next/link";

const AlertWithDismissIcon = () => {
  const onDissMiss = () => {
    console.log("Dissmiss icon clicked");
  };
  return (
    <Alert
      onDismiss={onDissMiss}
      additionalContent={
        <div className="mt-1 text-sm text-slate-500">
          Default message - Lorem Ipsum is simply dummy text of the printing and
          typesetting industry
          <Link href="/" className="ml-2 text-blue-600 underline">
            Link style
          </Link>
        </div>
      }
      icon={<WarningCircle size={24} color="#0F3CD9" />}
    >
      <p className="md:text-lg text-base font-semibold text-blue-600">
        Default message - make it short
      </p>
    </Alert>
  );
}`;

export { AlertWithDismissIcon, AlertWithDismissIconCode };
