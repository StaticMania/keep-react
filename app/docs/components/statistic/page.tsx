import type { Metadata, NextPage } from "next";
import { DocsContentLayout } from "@/components/DocsContentLayout";
import StatisticDocs from ".";

export const metadata: Metadata = {
  description:
    "The Statistic component in the Keep Design System allows you to display statistical information in a visually appealing and informative manner. With customizable options for type, number format, and additional features, you can present data in a way that best suits your design requirements.",
  title: "Statistic - Keep Design System",
};

const page: NextPage = () => {
  return (
    <DocsContentLayout
      description={`${metadata.description}`}
      title={`${metadata.title}`}
    >
      <StatisticDocs />
    </DocsContentLayout>
  );
};

export default page;
