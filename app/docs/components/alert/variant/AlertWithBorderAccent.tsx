"use client";
import { Alert } from "@/src/components";
import Link from "next/link";
import { Info } from "phosphor-react";

const AlertWithBorderAccent = () => {
  const onDissmiss = () => {
    console.log("onDissmiss icon clicked");
  };
  return (
    <div className="flex flex-col gap-5">
      <Alert
        rounded={true}
        withBorder={true}
        withBorderAccent
        onDismiss={onDissmiss}
        withBorderAccentPosition="left"
        additionalContent={
          <div className="mt-1 text-sm text-slate-500">
            Default message - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry
            <Link href="/" className="ml-2 text-primary-500 underline">
              Link style
            </Link>
          </div>
        }
        icon={<Info size={24} color="#0F3CD9" />}
      >
        <p className="md:text-lg text-base font-semibold text-blue-600">
          Default message - make it short
        </p>
      </Alert>
      <Alert
        rounded={true}
        withBorder={true}
        withBorderAccent
        onDismiss={onDissmiss}
        withBorderAccentPosition="right"
        additionalContent={
          <div className="mt-1 text-sm text-slate-500">
            Default message - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry
            <Link href="/" className="ml-2 text-primary-500 underline">
              Link style
            </Link>
          </div>
        }
        icon={<Info size={24} color="#0F3CD9" />}
      >
        <p className="md:text-lg text-base font-semibold text-blue-600">
          Default message - make it short
        </p>
      </Alert>
      <Alert
        rounded={true}
        withBorder={true}
        withBorderAccent
        onDismiss={onDissmiss}
        withBorderAccentPosition="top"
        additionalContent={
          <div className="mt-1 text-sm text-slate-500">
            Default message - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry
            <Link href="/" className="ml-2 text-primary-500 underline">
              Link style
            </Link>
          </div>
        }
        icon={<Info size={24} color="#0F3CD9" />}
      >
        <p className="md:text-lg text-base font-semibold text-blue-600">
          Default message - make it short
        </p>
      </Alert>
      <Alert
        rounded={true}
        withBorder={true}
        withBorderAccent
        onDismiss={onDissmiss}
        withBorderAccentPosition="bottom"
        additionalContent={
          <div className="mt-1 text-sm text-slate-500">
            Default message - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry
            <Link href="/" className="ml-2 text-primary-500 underline">
              Link style
            </Link>
          </div>
        }
        icon={<Info size={24} color="#0F3CD9" />}
      >
        <p className="md:text-lg text-base font-semibold text-blue-600">
          Default message - make it short
        </p>
      </Alert>
    </div>
  );
};

const AlertWithBorderAccentCode = `
"use client";
import { Alert } from "keep-react";
import Link from "next/link";
import { Info } from "phosphor-react";

const AlertWithBorderAccent = () => {
  const onDissmiss = () => {
    console.log("onDissmiss icon clicked");
  };
  return (
    <Alert
      rounded={true}
      withBorder={true}
      withBorderAccent
      onDismiss={onDissmiss}
      withBorderAccentPosition="left"
      additionalContent={
        <div className="mt-1 text-sm text-slate-500">
          Default message - Lorem Ipsum is simply dummy text of the printing and
          typesetting industry
          <Link href="/" className="ml-2 text-primary-500 underline">
            Link style
          </Link>
        </div>
      }
      icon={<Info size={24} color="#0F3CD9" />}
    >
      <p className="md:text-lg text-base font-semibold text-blue-600">
        Default message - make it short
      </p>
    </Alert>
  );
};
`;

export { AlertWithBorderAccent, AlertWithBorderAccentCode };
