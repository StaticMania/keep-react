import type { Metadata, NextPage } from "next";
import { DocsContentLayout } from "~/components/DocsContentLayout";
import PlayButtonDocs from ".";

export const metadata: Metadata = {
  description:
    "The Play Button - Rounded component in the Keep React allows you to incorporate a rounded play button into your user interface. It provides a visually appealing and intuitive way to indicate playback or media-related actions. With customizable options for type and size, you can create play buttons that align with your design style.",
  title: "Play Button - Keep React",
};

const page: NextPage = () => {
  return (
    <DocsContentLayout
      description={`${metadata.description}`}
      title={`${metadata.title}`}
    >
      <PlayButtonDocs />
    </DocsContentLayout>
  );
};

export default page;
