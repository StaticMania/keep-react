"use client";
import Link from "next/link";
import { Alert } from "~/src";
import { useState } from "react";
import { CheckCircle, Info, WarningCircle, XCircle } from "phosphor-react";

const AlertWithColorVariant = () => {
  const [showAlert, setShowAlert] = useState(false);
  const onDissmiss = () => {
    setShowAlert(!showAlert);
  };
  return (
    <div className="space-y-5">
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
        title="Default message - make it short"
      ></Alert>
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
        title="Default message - make it short"
        icon={<Info size={24} color="gray" />}
      ></Alert>
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
        title="Default message - make it short"
        icon={<CheckCircle size={24} color="#0A9952" />}
      />
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
        title="Default message - make it short"
      />
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
        title="Default message - make it short"
      />
    </div>
  );
};

const AlertWithColorVariantCode = `
"use client";
import Link from "next/link";
import { useState } from "react";
import { Alert } from "keep-react";
import { CheckCircle, Info, WarningCircle, XCircle } from "phosphor-react";

export const AlertComponent = () => {
  const [showAlert, setShowAlert] = useState(false);
  const onDissmiss = () => {
    setShowAlert(!showAlert);
  };
  return (
    <div className="space-y-5">
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
        title="Default message - make it short"
      ></Alert>
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
        title="Default message - make it short"
        icon={<Info size={24} color="gray" />}
      ></Alert>
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
        title="Default message - make it short"
        icon={<CheckCircle size={24} color="#0A9952" />}
      />
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
        title="Default message - make it short"
      />
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
        title="Default message - make it short"
      />
    </div>
  );
}
`;

export { AlertWithColorVariant, AlertWithColorVariantCode };
