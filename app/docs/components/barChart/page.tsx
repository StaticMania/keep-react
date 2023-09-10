import type { Metadata, NextPage } from "next";
import { DocsContentLayout } from "~/components/DocsContentLayout";
import BarChartDocs from ".";

export const metadata: Metadata = {
  description:
    "The Bar Chart component provides a visual representation of data through bars of varying lengths. It's a graphical representation commonly used to display and compare the values of different categories or groups. The Bar Chart component is highly customizable and can be tailored to fit various data visualization needs.",
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
