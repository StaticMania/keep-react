"use client";
import { Empty } from "@/src/components/Empty";

const PageNotAvailable = () => {
  return (
    <Empty
      title="This page isn't available right now"
      content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
      redirectUrl="/"
      iconType="empty_result_2"
    />
  );
};

const PageNotAvailableCode = `
"use client";
import { Empty } from "keep-design";

const PageNotAvailable = () => {
  return (
    <Empty
      title="This page isn't available right now"
      content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
      redirectUrl="/"
      iconType="empty_result_2"
    />
  );
};

export default PageNotAvailable;
`;

export { PageNotAvailable, PageNotAvailableCode };
