import type { Metadata, NextPage } from "next";
import { DocsContentLayout } from "~/components/DocsContentLayout";
import SpinnerDocs from ".";

export const metadata: Metadata = {
  description:
    "A Spinner Component is a visual user interface element commonly found in web and mobile applications. It is used to indicate ongoing processes or loading states, providing users with a visual cue that something is happening in the background.",
  title: "Spinner - Keep Design System",
};

const page: NextPage = () => {
  return (
    <DocsContentLayout
      description={`${metadata.description}`}
      title={`${metadata.title}`}
    >
      <SpinnerDocs />
    </DocsContentLayout>
  );
};

export default page;
