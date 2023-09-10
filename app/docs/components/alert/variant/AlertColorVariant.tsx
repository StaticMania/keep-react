"use client";
import { Alert } from "~/src";
import Link from "next/link";
import { CheckCircle, Info, WarningCircle, XCircle } from "phosphor-react";

const AlertWithColorVariant = () => {
  const onDissmiss = () => {
    console.log("onDissmiss icon clicked");
  };
  return (
    <div className="flex flex-col gap-5">
      <Alert
        color="info"
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
        color="gray"
        rounded={true}
        withBorder={true}
        withBorderAccent
        withBorderAccentPosition="left"
        onDismiss={onDissmiss}
        additionalContent={
          <div className="mt-1 text-sm text-slate-500">
            Default message - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry
            <Link href="/" className="ml-2 text-primary-500 underline">
              Link style
            </Link>
          </div>
        }
        icon={<Info size={24} color="gray" />}
      >
        <p className="md:text-lg text-base font-semibold text-slate-900">
          Default message - make it short
        </p>
      </Alert>
      <Alert
        color="success"
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
        icon={<CheckCircle size={24} color="#0A9952" />}
      >
        <p className="md:text-lg text-base font-semibold text-green-600">
          Default message - make it short
        </p>
      </Alert>
      <Alert
        color="warning"
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
        icon={<WarningCircle size={24} color="#D8A800" />}
      >
        <p className="md:text-lg text-base font-semibold text-yellow-600">
          Default message - make it short
        </p>
      </Alert>
      <Alert
        color="error"
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
        icon={<XCircle size={24} color="#E92215" />}
      >
        <p className="md:text-lg text-base font-semibold text-error-500">
          Default message - make it short
        </p>
      </Alert>
    </div>
  );
};

const AlertWithColorVariantCode = `
"use client";
import { Alert } from "keep-react";
import Link from "next/link";
import { Info } from "phosphor-react";

const AlertWithColorVariant = () => {
   const onDissmiss = () => {
    console.log("onDissmiss icon clicked");
  };
  return (
    <Alert
      color="gray"
      rounded={true}
      withBorder={true}
      withBorderAccent
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
      icon={<Info size={24} color="gray" />}
    >
      <p className="md:text-lg text-base font-semibold text-slate-900">
        Default message - make it short
      </p>
    </Alert>
  );
};
`;

export { AlertWithColorVariant, AlertWithColorVariantCode };
