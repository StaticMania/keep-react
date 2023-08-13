import type { Metadata, NextPage } from "next";
import { DocsContentLayout } from "@/components/DocsContentLayout";
import ProgressDocs from ".";

export const metadata: Metadata = {
  description:
    "The Progress Bar Component in the Keep Design System allows you to visually represent the progress or completion of a task or process. With customizable options for the type, label, and progress, you can create progress bars that align with your design and provide clear indications of progress.",
  title: "Progress Bar - Keep Design System",
};

const page: NextPage = () => {
  return (
    <DocsContentLayout
      description={`${metadata.description}`}
      title={`${metadata.title}`}
    >
      <ProgressDocs />
    </DocsContentLayout>
  );
};

export default page;
