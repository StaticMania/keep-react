import type { Metadata, NextPage } from "next";
import { DocsContentLayout } from "@/components/DocsContentLayout";
import PieChartDocs from ".";

export const metadata: Metadata = {
  description:
    "The Pie Chart - Rounded component in the Keep Design System allows you to incorporate a rounded Pie Chart into your user interface. It provides a visually appealing and intuitive way to indicate playback or media-related actions. With customizable options for type and size, you can create Pie Charts that align with your design style.",
  title: "Pie Chart - Keep Design System",
};

const page: NextPage = () => {
  return (
    <DocsContentLayout
      description={`${metadata.description}`}
      title={`${metadata.title}`}
    >
      <PieChartDocs />
    </DocsContentLayout>
  );
};

export default page;
