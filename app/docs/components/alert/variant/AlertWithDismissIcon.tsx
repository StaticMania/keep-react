"use client";
import Link from "next/link";
import { Alert } from "~/src";
import { useState } from "react";
import { WarningCircle } from "phosphor-react";

const AlertWithDismissIcon = () => {
  const [showAlert, setShowAlert] = useState(false);
  const onDissMiss = () => {
    setShowAlert(!showAlert);
  };
  return (
    <Alert
      onDismiss={onDissMiss}
      dismiss={showAlert}
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
      title="Default message - make it short"
    />
  );
};

const AlertWithDismissIconCode = `
"use client";
import Link from "next/link";
import { useState } from "react";
import { Alert } from "keep-react";
import { WarningCircle } from "phosphor-react";

export const AlertComponent = () => {
  const [showAlert, setShowAlert] = useState(false);
  const onDissMiss = () => {
    setShowAlert(!showAlert);
  };
  return (
    <Alert
      onDismiss={onDissMiss}
      dismiss={showAlert}
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
      title="Default message - make it short"
    />
  );
};
`;

export { AlertWithDismissIcon, AlertWithDismissIconCode };
