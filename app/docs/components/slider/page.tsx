import type { Metadata, NextPage } from "next";
import { DocsContentLayout } from "~/components/DocsContentLayout";
import SliderDocs from ".";

export const metadata: Metadata = {
  description:
    "The slider component in the Keep React allows users to select a value within a specified range. With customizable options for the control handle type, scale display, label, and tooltip, you can create versatile sliders that fit your design needs.",
  title: "Slider - Keep React",
};

const page: NextPage = () => {
  return (
    <DocsContentLayout
      description={`${metadata.description}`}
      title={`${metadata.title}`}
    >
      <SliderDocs />
    </DocsContentLayout>
  );
};

export default page;
