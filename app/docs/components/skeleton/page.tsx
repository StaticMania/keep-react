import type { Metadata, NextPage } from "next";
import { DocsContentLayout } from "~/components/DocsContentLayout";
import SkeletonDocs from ".";

export const metadata: Metadata = {
  description:
    "The Preloader component in the Keep React provides a visual indication of an ongoing process or loading state. With various options for type and device, you can choose the appropriate preloader style to enhance the user experience on both web and mobile platforms.",
  title: "Skeleton - Keep React",
};

const page: NextPage = () => {
  return (
    <DocsContentLayout
      description={`${metadata.description}`}
      title={`${metadata.title}`}
    >
      <SkeletonDocs />
    </DocsContentLayout>
  );
};

export default page;
