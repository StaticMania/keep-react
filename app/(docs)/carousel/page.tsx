import type { Metadata, NextPage } from "next";
import { DocsContentLayout } from "@/components/DocsContentLayout";
import CarouselDocs from ".";

export const metadata: Metadata = {
  description:
    "A Carousel component is a user interface element commonly found in web and mobile applications that allows you to display a series of images, content, or media items in a rotating manner. It is often used to showcase multiple items in a limited space, allowing users to view different items by sliding or swiping through them.",
  title: "Carousel - Keep Design System",
};

const page: NextPage = () => {
  return (
    <DocsContentLayout
      description={`${metadata.description}`}
      title={`${metadata.title}`}
    >
      <CarouselDocs />
    </DocsContentLayout>
  );
};

export default page;
