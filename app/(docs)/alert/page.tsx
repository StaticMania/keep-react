import type { Metadata, NextPage } from "next";
import { DocsContentLayout } from "@/components/DocsContentLayout";
import React from "react";
import AlertDocs from ".";

export const metadata: Metadata = {
  description:
    "Get started with the alert component to show contextual information to the user such as when validating forms or showing errors based on React and Tailwind CSS",
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
