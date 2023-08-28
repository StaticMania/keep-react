import type { Metadata, NextPage } from "next";
import { DocsContentLayout } from "@/components/DocsContentLayout";
import Introduction from ".";

export const metadata: Metadata = {
  description:
    "Keep Design System is an open-source UI component library built with React and Tailwind CSS. It offers a comprehensive collection of ready-to-use UI components, carefully designed and crafted to simplify the process of creating modern and consistent user interfaces.",
  title: "Keep Design System - UI Component Library",
};

const page: NextPage = () => {
  return (
    <DocsContentLayout
      description={`${metadata.description}`}
      title={`${metadata.title}`}
    >
      <Introduction />
    </DocsContentLayout>
  );
};

export default page;
