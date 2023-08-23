import type { Metadata, NextPage } from "next";
import { DocsContentLayout } from "@/components/DocsContentLayout";
import BarChartDocs from ".";

export const metadata: Metadata = {
  description:
    "The Bar Chart component in the Keep Design System provides a navigation aid that allows users to understand their current location within a website or application. With customizable options for type, icon, divider, line, and style, you can create breadcrumbs that align with your design and enhance the navigation experience.",
  title: "Bar Chart - Keep Design System",
};

const page: NextPage = () => {
  return (
    <DocsContentLayout
      description={`${metadata.description}`}
      title={`${metadata.title}`}
    >
      <BarChartDocs />
    </DocsContentLayout>
  );
};

export default page;
