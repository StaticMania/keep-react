import type { Metadata, NextPage } from "next";
import { DocsContentLayout } from "@/components/DocsContentLayout";
import AreaChartDocs from ".";

export const metadata: Metadata = {
  description:
    "Area Chart component in the Keep Design System allows you to display user avatars or profile images in a consistent and visually appealing manner. With customizable options for placeholders, shapes, status icons, and sizes, you can create versatile avatars to suit your design needs.",
  title: "Area Chart - Keep Design System",
};

const page: NextPage = () => {
  return (
    <DocsContentLayout
      description={`${metadata.description}`}
      title={`${metadata.title}`}
    >
      <AreaChartDocs />
    </DocsContentLayout>
  );
};

export default page;
