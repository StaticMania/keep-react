import type { Metadata, NextPage } from "next";
import { DocsContentLayout } from "@/components/DocsContentLayout";
import RatingDocs from ".";

export const metadata: Metadata = {
  description:
    "The Rating Component in the Keep Design System allows users to provide ratings for various items or content. It provides a visual representation of the rating using a set of stars or other symbols. With customizable options for the rating status, you can create rating components that accurately reflect user feedback.",
  title: "Rating - Keep Design System",
};

const page: NextPage = () => {
  return (
    <DocsContentLayout
      description={`${metadata.description}`}
      title={`${metadata.title}`}
    >
      <RatingDocs />
    </DocsContentLayout>
  );
};

export default page;
