import type { Metadata, NextPage } from "next";
import { DocsContentLayout } from "@/components/DocsContentLayout";
import BreadcrumbDocs from ".";

export const metadata: Metadata = {
  description:
    "The Breadcrumbs component in the Keep Design System provides a navigation aid that allows users to understand their current location within a website or application. With customizable options for type, icon, divider, line, and style, you can create breadcrumbs that align with your design and enhance the navigation experience.",
  title: "Breadcrumb - Keep Design System",
};

const page: NextPage = () => {
  return (
    <DocsContentLayout
      description={`${metadata.description}`}
      title={`${metadata.title}`}
    >
      <BreadcrumbDocs />
    </DocsContentLayout>
  );
};

export default page;
