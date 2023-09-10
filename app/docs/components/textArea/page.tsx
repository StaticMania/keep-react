import type { Metadata, NextPage } from "next";
import { DocsContentLayout } from "~/components/DocsContentLayout";
import TextAreaDocs from ".";

export const metadata: Metadata = {
  description:
    "Textarea Input Component is a user interface element used to collect and display multiline text input from users. It provides an expandable box where users can enter a larger amount of text, such as comments, descriptions, or messages.",
  title: "Textarea - Keep Design System",
};

const page: NextPage = () => {
  return (
    <DocsContentLayout
      description={`${metadata.description}`}
      title={`${metadata.title}`}
    >
      <TextAreaDocs />
    </DocsContentLayout>
  );
};

export default page;
