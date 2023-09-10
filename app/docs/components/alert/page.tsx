import type { Metadata, NextPage } from "next";
import { DocsContentLayout } from "~/components/DocsContentLayout";
import React from "react";
import AlertDocs from ".";

export const metadata: Metadata = {
  description:
    "The Alert component in the Keep Design System allows you to display important messages, notifications, or warnings to users. With customizable options for style, close icon, border, and state, you can create visually appealing and informative alerts that align with your design requirements.",
  title: "Alert - Keep Design System",
};

const page: NextPage = () => {
  return (
    <DocsContentLayout
      description={`${metadata.description}`}
      title={`${metadata.title}`}
    >
      <AlertDocs />
    </DocsContentLayout>
  );
};

export default page;
